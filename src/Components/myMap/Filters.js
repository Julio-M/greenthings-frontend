import React, { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import './filters.css'

function Filters () {
    return (
      <div className="filters">
    <ListGroup horizontal>
      <ListGroup.Item className="filterbtn">Leisure activities</ListGroup.Item>
      <ListGroup.Item className="filterbtn">Outpost activities</ListGroup.Item>
      <ListGroup.Item className="filterbtn">All activities</ListGroup.Item>
    </ListGroup>
      </div>
    );
}

export default Filters;