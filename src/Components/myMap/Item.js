import React, { useState } from "react";
import Card from 'react-bootstrap/Card'
import './item.css'

function Item ({card}) {

  const {borough, ntaname, location, operation_day_hours} = card

    return (
        <>
           <Card className="mycard">
            <Card.Img variant="top" src="https://76crb34usu-flywheel.netdna-ssl.com/wp-content/uploads/2017/12/iStock-902227708.jpg" />
            <Card.Body>
              <Card.Title>🐀</Card.Title>
              <Card.Text>{borough}</Card.Text>
              <Card.Text>{ntaname}</Card.Text>
              <Card.Text>{location}</Card.Text>
              <Card.Text>{operation_day_hours}</Card.Text>
            </Card.Body>
          </Card> 
        </>
    );
}

export default Item;