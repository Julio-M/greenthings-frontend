import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./NewLeisureActivityForm.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function OutpostActivityForm(){
    const [outpostActivityForm, setOutpostActivityFormState] = useState({
        pseudonym: "",
        activity_type: "Picnic at the Park",
        activity_location: "",
        activity_description: "",
        activity_date: Date.now(),
        comment: ""
      })

      const {pseudonym, 
             activity_type, 
             activity_location, 
             activity_description, 
             activity_date, 
             comment} = outpostActivityForm

      function handleOutpostActivityFormChange(e){
        const new_value = e.target.value;
        console.log(e.target.name)
        setOutpostActivityFormState({...outpostActivityForm, [e.target.name]: new_value })
      }
    return(
        <Container fluid>
        <Form className="new-leasure-form">
            <Form.Group>
                <Form.Label>Pseudonym</Form.Label>
                <Form.Control name="pseudonym" type="text" value={pseudonym} onChange={handleOutpostActivityFormChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Activity Type</Form.Label>
                <Form.Select name="activity_type" value={activity_type} size="text" onChange={handleOutpostActivityFormChange}>
                    <option>Recycling</option>
                    <option>Composting</option>
                    <option>Gardening</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Activity Location</Form.Label>
                <Form.Control name="activity_location" value={activity_location} onChange={handleOutpostActivityFormChange} type="text"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Activity Description</Form.Label>
                <Form.Control name="activity_description" value={activity_description} onChange={handleOutpostActivityFormChange} type="text"/>
                <Form.Text>Please limit text to no more than N characters.</Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Activity Date</Form.Label>
                <Form.Control name="activity_date" value={activity_date} onChange={handleOutpostActivityFormChange} type="date"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Comment</Form.Label>
                <Form.Control id="outpost-comment-box" name="comment" value={comment} onChange={handleOutpostActivityFormChange} type="text"/>
            </Form.Group>

            {/* TO DO: Handle on Submit to make a fetch request */}
            <Button style={{margin: "20px 0px", backgroundColor: "#F4A442", border:"none"}} type="submit">Submit</Button>

        </Form>
        </Container>
    )
}

export default OutpostActivityForm;