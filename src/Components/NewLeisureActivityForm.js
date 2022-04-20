import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./NewLeisureActivityForm.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import ProgressBar from 'react-bootstrap/ProgressBar'

function NewLeisureActivityForm(){
    const [isLoading,setIsLoading] = useState(0)

    const [myImage, setMyImage] = useState("")

    const [leisureForm, setLeisureForm] = useState({
        avatar: "Deer",
        activity_type: "Picnic at the Park",
        activity_location: "",
        activity_description: "",
        activity_date: Date.now(),
        image:"",
        rating: 0,
        comment: ""
      })

      const {avatar, 
             activity_type, 
             activity_location, 
             activity_description, 
             activity_date,
             image,
             rating, 
             comment} = leisureForm

      function handleLeisureFormChange(e){
        const new_value = e.target.value;
        console.log(e.target.name)
        setLeisureForm({...leisureForm, [e.target.name]: new_value })
      }

      const handleImageSubmit = (e) =>{
        e.preventDefault()
        console.log(isLoading)
        const formData = new FormData()
        formData.append("file", myImage)
        formData.append("upload_preset", "dyza3ykz")

        axios.post("https://api.cloudinary.com/v1_1/dimfaeuml/image/upload",formData,{
            onUploadProgress: progress => {
                setIsLoading(Math.round(progress.loaded/progress.total*100))
            }
        })
        .then(res=>setLeisureForm({...leisureForm, image:res.data.secure_url}))
        // .then(()=>setIsLoading(0))

      }

      const handleUpload = (e) =>{
          setIsLoading(0)
          const file = e.target.files[0]
          setMyImage(file)
      }

      console.log("IMAGE",myImage)

      const now = isLoading;

    const progressInstance = <ProgressBar now={now} label={`${now}%`} />;

    return(
        <>
        <h2 style={{textAlign: "center"}}>New Leisure Activity</h2>
        <Form className="new-leasure-form">
            <Container fluid>
                <Form.Group>
                    <Form.Label>Avatar</Form.Label>
                    <Form.Select name="avatar" value={avatar} onChange={handleLeisureFormChange}>
                        <option>Deer</option>
                        <option>Squirrel</option>
                        <option>Falcon</option>
                        <option>Pigeon</option>
                        <option>Rat</option>
                        <option>Coyote</option>
                        <option>Raccoon</option>
                    </Form.Select>
                </Form.Group>
                <Row>
                    <Col xs={12} md={4}>
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
                    </Col>
                    <Col xs={12} md={4}>
                    <Form.Group>
                        <Form.Label>Activity Location</Form.Label>
                        <Form.Control name="activity_location" value={activity_location} onChange={handleLeisureFormChange} type="text"/>
                    </Form.Group>
                    </Col>
                    <Col xs={12} md={4}>
                        <Form.Group>
                            <Form.Label>Activity Date &amp; Time</Form.Label>
                            <Form.Control name="activity_date" value={activity_date} onChange={handleLeisureFormChange} type="datetime-local"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group>
                    <Form.Label>Activity Description</Form.Label>
                    <Form.Control name="activity_description" value={activity_description} onChange={handleLeisureFormChange} type="text"/>
                    <Form.Text>Please limit text to no more than N characters.</Form.Text>
                </Form.Group>
                <Row>
                <Col xs={12} md={6}>
                <Form.Group>
                    <Form.Label>Location Rating</Form.Label>
                    <Form.Control name="rating" value={rating} onChange={handleLeisureFormChange} type="number"></Form.Control>
                </Form.Group>
                </Col>
                <Col xs={12} md={6}>    
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload Image</Form.Label>
                        <Form.Control type="file" onChange={handleUpload}/>
                        <Row>
                            <Col xs={12} md={3}>
                            <Button variant="outline-primary" type="submit" onClick={handleImageSubmit}>Submit Image</Button>
                            </Col>
                            <Col xs={12} md={8}>
                            {progressInstance}
                            </Col>
                        </Row>
                    </Form.Group>
                </Col>
                </Row>
                <Form.Group>
                    <Form.Label>Comment</Form.Label>
                    <Form.Control id="comment-box" name="comment" value={comment} onChange={handleLeisureFormChange} type="text"/>
                </Form.Group>

                {/* TO DO: Handle on Submit to make a fetch request */}
                <Container style={{textAlign: "center"}}>
                    <Button style={{margin: "20px 0px", backgroundColor: "#FFCC29", border:"none"}} type="submit">Add New Leisure Activity</Button>
                </Container>
            </Container>
        </Form>
        </>
        
    )
}

export default NewLeisureActivityForm;