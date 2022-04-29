import React, { useState,useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function EditModalLeisure ({handleEditShow,handleEditClose, editShow, card, patchLeisureData}) {

  const patchLeisureUrl = `https://secret-lowlands-44368.herokuapp.com/leisure-activity/`

  const [location,setLocation]= useState([])


  const locationFetch = () => {
    fetch(`https://secret-lowlands-44368.herokuapp.com/leisure-locations`)
    .then( res => res.json())
    .then( data => setLocation(data))
    .catch( error => console.log(error.message));
  }

  useEffect( () => {
    locationFetch()
  },[])


  const [editField, setEditField] = useState({})

  const handlePatch = (e) => {
    let mykey;
    if(e.target.options){
      let selectedIndex =e.target.options.selectedIndex
      mykey = e.target.options[selectedIndex].getAttribute('data-key')
    }
    const name = e.target.name
    let value = e.target.value
    if(value && !mykey){
      setEditField({...editField,[name]:value})
    }else if(value&&mykey){
      setEditField({...editField,[name]:mykey})
    }
    
  }

  const locationDisplay = location.map(loc => <option data-key={loc.id} key={loc.id}>{loc.name}</option>)


  const handleSubmit= (e) => {
    e.preventDefault()
    // editField===null?console.log("submit"):alert('Form empty')
    Object.keys(editField).length !== 0? patchLeisureData(patchLeisureUrl,card.id,editField):alert("Can't submit an empty form")
  }


  console.log(location)

  console.log(editField,"id",card.id)

    return (
        <>
      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
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
                      <option>Picnic at the Park</option>
                      <option>Picnic at the Beach</option>
                      <option>Frisbee</option>
                      <option>Pickup Soccer</option>
                      <option>Other Outdoor Sports</option>
              </Form.Select>
              <Form.Label>Location</Form.Label>
              <Form.Select name="leisure_location_id" onChange={handlePatch}>
                    {locationDisplay}
              </Form.Select>
            </Form.Group>
                  <Form.Group>
                    <Form.Label>Activity Description</Form.Label>
                    <Form.Control data-key='0' name="description" onChange={handlePatch} type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Comments</Form.Label>
                    <Form.Control data-key='0' name="comment" onChange={handlePatch} type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rating</Form.Label>
                    <Form.Control name="rating" onChange={handlePatch} type="number"/>
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

export default EditModalLeisure;