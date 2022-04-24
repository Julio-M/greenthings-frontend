import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import './filters.css'

function Filters ({setDisplayStatus}) {

  const handleClick = (e) =>{
    const value = e.target.textContent
    setDisplayStatus(value)
  }


    return (
      <div className="filters">
    <ListGroup horizontal >
      <ListGroup.Item onClick={handleClick} className="filterbtn">Leisure activities</ListGroup.Item>
      <ListGroup.Item onClick={handleClick} className="filterbtn">Outpost activities</ListGroup.Item>
      <ListGroup.Item onClick={handleClick} className="filterbtn">All activities</ListGroup.Item>
    </ListGroup>
      </div>
    );
}

export default Filters;