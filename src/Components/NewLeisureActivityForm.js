import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./NewLeisureActivityForm.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NewLeisureActivityForm(){
    const [leisureForm, setLeisureForm] = useState({
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
             comment} = leisureForm

      function handleLeisureFormChange(e){
        const new_value = e.target.value;
        console.log(e.target.name)
        setLeisureForm({...leisureForm, [e.target.name]: new_value })
      }
    return(
        <Container fluid>
        <Form className="new-leasure-form">
            <Form.Group>
                <Form.Label>Pseudonym</Form.Label>
                <Form.Control name="pseudonym" type="text" value={pseudonym} onChange={handleLeisureFormChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Activity Type</Form.Label>
                <Form.Select name="activity_type" value={activity_type} size="text" onChange={handleLeisureFormChange}>
                    <option>Picnic at the Park</option>
                    <option>Picnic at the Beach</option>
                    <option>Frisbee</option>
                    <option>Pickup Soccer</option>
                    <option>Other Outdoor Sports</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Activity Location</Form.Label>
                <Form.Control name="activity_location" value={activity_location} onChange={handleLeisureFormChange} type="text"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Activity Description</Form.Label>
                <Form.Control name="activity_description" value={activity_description} onChange={handleLeisureFormChange} type="text"/>
                <Form.Text>Please limit text to no more than N characters.</Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Activity Date</Form.Label>
                <Form.Control name="activity_date" value={activity_date} onChange={handleLeisureFormChange} type="date"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Comment</Form.Label>
                <Form.Control id="comment-box" name="comment" value={comment} onChange={handleLeisureFormChange} type="text"/>
            </Form.Group>

            {/* TO DO: Handle on Submit to make a fetch request */}
            <Button style={{margin: "20px 0px", backgroundColor: "#F4A442", border:"none"}} type="submit">Submit</Button>

        </Form>
        </Container>
    )
}

export default NewLeisureActivityForm;