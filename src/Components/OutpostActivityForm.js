import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./NewLeisureActivityForm.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Typeahead, withAsync } from 'react-bootstrap-typeahead';

const AsyncTypeahead = withAsync(Typeahead);
function OutpostActivityForm(){
    const [outpostActivityForm, setOutpostActivityFormState] = useState({
        avatar: "Deer",
        activity_type: "Recycling",
        outpost_id: 0,
        description: "",
        datetime: "",
        rating: 0,
        comment: ""
      })

      const {avatar, 
             activity_type, 
             outpost_id, 
             description,
             datetime, 
             rating,
             comment} = outpostActivityForm
     
    //  const [outpostsArray, setOutpostsArrayState] = useState([])
     const [typeahead, setTypeaheadState] = useState({
         isLoading: false,
         options: [],
         value: ""
     })

      function handleOutpostActivityFormChange(e){
        const new_value = e.target.value;
        console.log(e.target.name)
        setOutpostActivityFormState({...outpostActivityForm, [e.target.name]: new_value })
      }
    function handleOutpostActivitySubmit(e){
        e.preventDefault()
        //Make a POST request to create a new Outpost Activity
        const configObj={
            method: "POST", 
            headers: {
                "Content-Type" : "application/json",
                "Accepts" : "application/json"
            },
            body: JSON.stringify(outpostActivityForm)
        }
        fetch("http://localhost:9292/outpost-activities", configObj)
        .then(res => console.log(res.json()))
    }

    return(
        <>
        <h2 style={{textAlign: "center"}}>New Outpost Activity</h2>
        
        <Form onSubmit={handleOutpostActivitySubmit} autoComplete="off" className="new-leasure-form">
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
                            <AsyncTypeahead
                                id="activity-location-input" 
                                onSearch={()=>{
                                    setTypeaheadState({...typeahead, isLoading: true});
                                    fetch("http://localhost:9292/outposts")
                                    .then(res => res.json())
                                    .then(outposts => {
                                        const nameArray = outposts.map(outpost => {
                                            const outpostObj = {id: outpost.id, name: outpost.name}
                                            return outpostObj
                                            })
                                        setTypeaheadState({...typeahead, isLoading: false, options: nameArray});
                                    })
                                }}
                                labelKey={option => option.name} 
                                isLoading={typeahead.isLoading}
                                onChange={selected => {

                                    if(selected.length !== 0){
                                        setTypeaheadState({...typeahead, value: selected[0].name})
                                        setOutpostActivityFormState({...outpostActivityForm, outpost_id: selected[0].id})
                                    }else{
                                        setTypeaheadState({...typeahead, value: ""})
                                        setOutpostActivityFormState({...outpostActivityForm, outpost_id: ""})
                                    }
                                    console.log(selected)
                                    
                                }}
                                
                                options={typeahead.options}/>
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={4}>
                        <Form.Group>
                            <Form.Label>Activity Date &amp; Time</Form.Label>
                            <Form.Control name="datetime" value={datetime} onChange={handleOutpostActivityFormChange} type="datetime-local"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group>
                    <Form.Label>Activity Description</Form.Label>
                    <Form.Control name="description" value={description} onChange={handleOutpostActivityFormChange} type="text"/>
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