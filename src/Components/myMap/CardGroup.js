import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/Col';
import Item from "./Item";
import LeisureItem from "./LeisureItem";

import React, { useState } from "react";
import Filters from "./Filters";

function CardGroup ({outpost, leisure, patchData, deleteDataOutpost,patchLeisureData}) {
  
  const displayOutpostCards = outpost.map(card => <Col><Item card={card} patchData={patchData} deleteDataOutpost={deleteDataOutpost}/></Col>)
  const displayLeisureCards = leisure.map(card => <Col><LeisureItem card={card} patchLeisureData={patchLeisureData}/></Col>)

    return (
      <>
      <div><Filters/></div>
      <Row xs={1} md={2} className="g-6">
      {displayOutpostCards}
      {displayLeisureCards}
    </Row>
    </>
    );
}

export default CardGroup;