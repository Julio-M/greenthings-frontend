import React, { useState } from "react";
import Card from 'react-bootstrap/Card'
import './item.css'

function Item ({card}) {

  const {avatar, activity_type, description, comment, outpost} = card

    return (
        <>
           <Card className="mycard">
            <Card.Img variant="top" src="https://76crb34usu-flywheel.netdna-ssl.com/wp-content/uploads/2017/12/iStock-902227708.jpg" />
            <Card.Body>
              <Card.Title>🐀</Card.Title>
              <Card.Text>{avatar}</Card.Text>
              <Card.Text>{activity_type}</Card.Text>
              <Card.Text>{description}</Card.Text>
              <Card.Text>{comment}</Card.Text>
              <Card.Text>{outpost.name}</Card.Text>
            </Card.Body>
          </Card> 
        </>
    );
}

export default Item;