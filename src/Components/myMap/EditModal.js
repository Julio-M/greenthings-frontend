import React, { useState,useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function EditModal ({handleEditShow,handleEditClose, editShow, card, patchData}) {

  const patchOutpostUrl = `http://localhost:9292/outpost-activity/`


  const [editField, setEditField] = useState({})

  const handlePatch = (e) => {
    console.log(e.target.value)
    const name = e.target.name
    let value = e.target.value
    setEditField({...editField,[name]:value})
  }


  // useEffect( () => {
  //   for (const property in editField) {
  //     console.log(`${property}: ${editField[property]}`);
  //     if(editField[property]){
  //       {setObj(...obj,obj.property=editField[property])}
  //     }
  //   }
  // },[editField])

  const handleSubmit= (e) => {
    e.preventDefault()
    // editField===null?console.log("submit"):alert('Form empty')
    Object.keys(editField).length !== 0? patchData(patchOutpostUrl,card.id,editField):alert("Can't submit an empty form")
  }


  console.log(editField,"id",card.id)

    return (
        <>
      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
          <Form.Group>
              <Form.Label>Avatar</Form.Label>
              <Form.Select name="avatar" onChange={handlePatch}>
                  <option>Deer</option>
                  <option>Squirrel</option>
                  <option>Falcon</option>
                  <option>Pigeon</option>
                  <option>Rat</option>
                  <option>Coyote</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Activity</Form.Label>
              <Form.Select name="activity_type" onChange={handlePatch}>
                    <option>Recycling</option>
                    <option>Composting</option>
                    <option>Gardening</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload Image</Form.Label>
                        <Form.Control type="file" name="image" onChange={handlePatch} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Activity Description</Form.Label>
                    <Form.Control name="description" onChange={handlePatch} type="text" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Save Changes
                </Button>
                </Form>
              </Modal.Body>
            </Modal>
        </>
    );
}

export default EditModal;