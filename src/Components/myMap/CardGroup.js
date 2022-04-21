import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/Col';
import Item from "./Item";
import LeisureItem from "./LeisureItem";

import React, { useState } from "react";
import Filters from "./Filters";

function CardGroup ({outpost, leisure}) {

  const patchOutpostUrl = `http://localhost:9292/outpost-activity/`
  const patchLeisureUrl = `http://localhost:9292/leisure-activity/`

  const patchData= (url,id,body)=> {
    fetch(`${url}+${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            body
        })
    })
    .then( res => res.json())
    .then( data => console.log(data))
    .catch( error => console.log(error.message));
  }

  const displayOutpostCards = outpost.map(card => <Col><Item card={card}/></Col>)
  const displayLeisureCards = leisure.map(card => <Col><LeisureItem card={card}/></Col>)

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