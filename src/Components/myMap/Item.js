import React, { useState } from "react";
import Card from 'react-bootstrap/Card'
import './item.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from "react-router-dom"; // v6
import Form from 'react-bootstrap/Form';

function Item ({card, patchData}) {

  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

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
              <Button onClick={handleEditShow} variant="outline-secondary">Edit</Button>
            </Card.Body>
          </Card> 

          {/* Card Modal */}
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
      {/* Card Modal */}

      {/* Form edit Modal */}
      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group>
              <Form.Label>Avatar</Form.Label>
              <Form.Select name="avatar" value={avatar}>
                  <option>Deer</option>
                  <option>Squirrel</option>
                  <option>Falcon</option>
                  <option>Pigeon</option>
                  <option>Rat</option>
                  <option>Coyote</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Form edit Modal */}
        </>
    );
}

export default Item;