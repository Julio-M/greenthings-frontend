import React, { useState } from "react";
import Card from 'react-bootstrap/Card'
import './item.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function Item ({card}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(card)
  const {avatar,image, activity_type, description, comment, outpost,rating} = card

    return (
        <>
           <Card className="mycard" id="outpostCard">
            <Card.Img onClick={handleShow} variant="top" src={image?image:outpost.default_image} />
            <Card.Body>
              <Card.Title>{avatar}</Card.Title>
              <Card.Text>Activity: {activity_type}</Card.Text>
              <Card.Text>Rating: {rating}/10</Card.Text>
              <Card.Text>{outpost.name}</Card.Text>
              <Button variant="outline-secondary">Edit</Button>
            </Card.Body>
          </Card> 

          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{activity_type}</Modal.Title>
        </Modal.Header>
        <img src="https://76crb34usu-flywheel.netdna-ssl.com/wp-content/uploads/2017/12/iStock-902227708.jpg"/>
        <Modal.Body>
          <small>{avatar} * {rating}/10</small> 
          <h5>Description</h5>
          <p>{description}</p>
          <h5>Comments</h5>
          <p>{comment}</p>
          <h5>Location</h5>
          <p>{outpost.name}</p>
        </Modal.Body>
      </Modal>
        </>
    );
}

export default Item;