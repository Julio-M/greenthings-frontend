import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/Col';
import Item from "./Item";
import LeisureItem from "./LeisureItem";

import React, { useState,useEffect } from "react";
import Filters from "./Filters";

function CardGroup ({outpost, leisure, patchData, deleteDataOutpost,patchLeisureData,deleteDataLeisure}) {
  
  const displayOutpostCards = outpost.map(card => <Col><Item card={card} patchData={patchData} deleteDataOutpost={deleteDataOutpost}/></Col>)
  const displayLeisureCards = leisure.map(card => <Col><LeisureItem card={card} patchLeisureData={patchLeisureData} deleteDataLeisure={deleteDataLeisure}/></Col>)

  const [displayStatus,setDisplayStatus]= useState("All activities")
  

    return (
      <>
      <div><Filters setDisplayStatus={setDisplayStatus}/></div>
      <Row xs={1} md={2} className="g-6">
        {displayStatus==="All activities"? displayLeisureCards&&displayOutpostCards:null}
        {displayStatus==="Outpost activities"?displayOutpostCards:displayLeisureCards}
    </Row>
    </>
    );
}

export default CardGroup;