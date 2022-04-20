import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./NewLeisureActivityForm.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Typeahead } from 'react-bootstrap-typeahead';

function OutpostActivityForm(){
    const [outpostActivityForm, setOutpostActivityFormState] = useState({
        avatar: "Deer",
        activity_type: "Picnic at the Park",
        activity_location: "",
        activity_description,
        activity_date: Date.now(),
        rating: 0,
        comment: ""
      })

      const {avatar, 
             activity_type, 
             activity_location, 
             activity_description,
             activity_date, 
             rating,
             comment} = outpostActivityForm

      let outpostsArray = []
      useEffect(()=>{
        //Populate the outposts Array to be used for autopopulate in the Location input
        
        fetch("http://localhost:9292/outposts")
          .then(res => res.json())
          .then(outposts => {
              outposts.forEach(outpost => outpostsArray.push(outpost.name))
          })
          .then(console.log(outpostsArray))
      },[])

      function handleOutpostActivityFormChange(e){
        const new_value = e.target.value;
        console.log(e.target.name)
        setOutpostActivityFormState({...outpostActivityForm, [e.target.name]: new_value })
      }

      function handleOutpostAutoComplete(){
      //Make a fetch request to the api to retrieve outpost names
      //Store the names in an array
          
      }

    return(
        <>
        <h2 style={{textAlign: "center"}}>New Outpost Activity</h2>
        
        <Form autoComplete="off" className="new-leasure-form">
            <Container fluid>
                <Form.Group>
                    <Form.Label>Avatar</Form.Label>
                    <Form.Select name="avatar" value={avatar} onChange={handleOutpostActivityFormChange}>
                        <option>Deer</option>
                        <option>Squirrel</option>
                        <option>Falcon</option>
                        <option>Pigeon</option>
                        <option>Rat</option>
                        <option>Coyote</option>
                    </Form.Select>
                </Form.Group>
                <Row>
                    <Col xs={12} md={4}>
                        <Form.Group>
                            <Form.Label>Outpost Type</Form.Label>
                            <Form.Select name="activity_type" value={activity_type} size="text" onChange={handleOutpostActivityFormChange}>
                                <option>Recycling</option>
                                <option>Composting</option>
                                <option>Gardening</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={4}>
                        <Form.Group>
                            <Form.Label>Outpost Location</Form.Label>
                            <Typeahead multiple id="activity-location-input" name="activity_location" value={activity_location} onChange={handleOutpostAutoComplete} options={outpostsArray}/>
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={4}>
                        <Form.Group>
                            <Form.Label>Activity Date &amp; Time</Form.Label>
                            <Form.Control name="activity_date" value={activity_date} onChange={handleOutpostActivityFormChange} type="datetime-local"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group>
                    <Form.Label>Activity Description</Form.Label>
                    <Form.Control name="activity_description" value={activity_description} onChange={handleOutpostActivityFormChange} type="text"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Outpost rating</Form.Label>
                    <Form.Control id="outpost-comment-box" name="rating" value={rating} onChange={handleOutpostActivityFormChange} type="number"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Comment</Form.Label>
                    <Form.Control id="outpost-comment-box" name="comment" value={comment} onChange={handleOutpostActivityFormChange} type="text"/>
                </Form.Group>
                {/* TO DO: Handle on Submit to make a fetch request */}
                <Container style={{textAlign: "center"}}>
                    <Button style={{margin: "20px 0px", backgroundColor: "#A35709", border:"none"}} type="submit">Add New Outpost Activity</Button>
                </Container>
            </Container>
        </Form>
        </>
        
    )
}

export default OutpostActivityForm;