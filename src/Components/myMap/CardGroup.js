import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/Col';
import Item from "./Item";

import React, { useState } from "react";
import Filters from "./Filters";

function CardGroup ({outpost}) {

  const displayCards = outpost.map(card => <Col><Item card={card}/></Col>)

    return (
      <>
      <div><Filters/></div>
      <Row xs={1} md={2} className="g-6">
      {displayCards}
    </Row>
    </>
    );
}

export default CardGroup;