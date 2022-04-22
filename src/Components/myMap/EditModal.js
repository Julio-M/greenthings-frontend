import React, { useState,useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function EditModal ({handleEditShow,handleEditClose, editShow, card, patchData}) {

  const patchOutpostUrl = `http://localhost:9292/outpost-activity/`
  const [location,setLocation]= useState([])


  const locationFetch = () => {
    fetch(`http://localhost:9292/outposts`)
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
                    <option>Recycling</option>
                    <option>Composting</option>
                    <option>Gardening</option>
              </Form.Select>
              <Form.Label>Location</Form.Label>
              <Form.Select name="outpost_id" onChange={handlePatch}>
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

export default EditModal;