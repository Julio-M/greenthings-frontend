import React, { useState } from "react";
import Card from 'react-bootstrap/Card'
import './item.css'
import Button from 'react-bootstrap/Button'

function LeisureItem ({card}) {

  const {avatar, activity_type, description, comment, leisure_location} = card

    return (
        <>
           <Card className="mycard" id="leisureCard">
            <Card.Img variant="top" src="https://76crb34usu-flywheel.netdna-ssl.com/wp-content/uploads/2017/12/iStock-902227708.jpg" />
            <Card.Body>
              <Card.Title>🐀</Card.Title>
              <Card.Text>{avatar}</Card.Text>
              <Card.Text>{activity_type}</Card.Text>
              <Card.Text>{description}</Card.Text>
              <Card.Text>{comment}</Card.Text>
              <Card.Text>{leisure_location.name}</Card.Text>
              <Button variant="primary">Edit</Button>
            </Card.Body>
          </Card> 
        </>
    );
}

export default LeisureItem;