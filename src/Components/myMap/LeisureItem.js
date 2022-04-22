import React, { useState } from "react";
import Card from 'react-bootstrap/Card'
import './item.css'
import Button from 'react-bootstrap/Button'

function LeisureItem ({card}) {

  const {avatar, image,activity_type, description, comment, leisure_location} = card

  let logo;
  switch(avatar) {
    case "Deer":
      logo = <img className="form-logo-img" src={require("../images/deer.png")} alt="deer"/>
      break;
    case "Squirrel":
      logo = <img className="form-logo-img" src={require("../images/squirrel.png")} alt="squirrel"/>
      break;
    case "Falcon":
      logo = <img className="form-logo-img" src={require("../images/falcon.png")} alt="falcon"/>
      break;
    case "Pigeon":
      logo = <img className="form-logo-img" src={require("../images/pigeon.png")} alt="pigeon"/>
      break;
    case "Rat":
      logo = <img className="form-logo-img" src={require("../images/rat.png")} alt="rat"/>
      break;
    case "Coyote":
      logo = <img className="form-logo-img" src={require("../images/coyote.png")} alt="coyote"/>
      break;
    case "Raccoon":
      logo = <img className="form-logo-img" src={require("../images/raccoon.png")} alt="racoon"/>
      break;
    default:
      // code block
  }

    return (
        <>
           <Card className="mycard" id="leisureCard">
            <Card.Img variant="top" src={image}/>
            <Card.Body>
              <Card.Title>{logo}</Card.Title>
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