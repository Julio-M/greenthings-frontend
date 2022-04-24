import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./NewLeisureActivityForm.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Typeahead, withAsync } from 'react-bootstrap-typeahead';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


const AsyncTypeahead = withAsync(Typeahead); 

function NewLeisureActivityForm({ mappedRadioButtons }){

    let navigate = useNavigate()

    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [failModalIsVisible, setFailModalIsVisible] = useState(false)

    const [barLoading,setBarLoading] = useState(0)

    const [myImage, setMyImage] = useState("")

    const [checkboxValue, setCheckboxValue] = useState('');

    const [leisureForm, setLeisureForm] = useState({
        avatar: "Deer",
        activity_type: "Picnic at the Park",
        leisure_location_id: "",
        description: "",
        datetime: Date.now(),
        image:"",
        rating: 0,
        comment: ""
      })
      function handleCheckBoxChange(arr){
        setCheckboxValue(arr[1])
        setLeisureForm({...leisureForm, avatar: arr[1]})
    }

      const {
             activity_type, 
             description, 
             datetime,
             rating, 
             comment} = leisureForm

      function handleLeisureFormChange(e){
        const new_value = e.target.value;
        console.log(e.target.name)
        setLeisureForm({...leisureForm, [e.target.name]: new_value })
      }

      const handleImageSubmit = (e) =>{
        e.preventDefault()
        console.log(barLoading)
        const formData = new FormData()
        formData.append("file", myImage)
        formData.append("upload_preset", "dyza3ykz")

        axios.post("https://api.cloudinary.com/v1_1/dimfaeuml/image/upload",formData,{
            onUploadProgress: progress => {
                setBarLoading(Math.round(progress.loaded/progress.total*100))
            }
        })
        .then(res=>setLeisureForm({...leisureForm, image:res.data.secure_url}))
        // .then(()=>setIsLoading(0))

      }

      const handleUpload = (e) =>{
          setBarLoading(0)
          const file = e.target.files[0]
          setMyImage(file)
      }

        console.log("IMAGE",myImage)

        const now = barLoading;

        const progressInstance = <ProgressBar now={now} label={`${now}%`} />;

         //  const [outpostsArray, setOutpostsArrayState] = useState([])
        const [typeahead, setTypeaheadState] = useState({
            isLoading: false,
            options: [],
            value: ""
        })


        const postData = () => {
            //Make a POST request to create a new Outpost Activity
            const configObj={
                method: "POST", 
                headers: {
                    "Content-Type" : "application/json",
                    "Accepts" : "application/json"
                },
                body: JSON.stringify(leisureForm)
            }
            fetch("http://localhost:9292/leisure-acivities", configObj)
            .then(res => {
                if(res.status === 200){
                setModalIsVisible(true);
            }else{
                setFailModalIsVisible(true);
            }
        })
        }

        function handleModalRedirect(e){
            const buttonType = e.target.name
            if(buttonType === "new-activity" || buttonType === "try-again"){
                navigate('/new-activity');
            }else{
                navigate('/map');
            }
        }
        console.log(leisureForm)

        const handleOnSubmit = (e) => {
            console.log('clicked')
            e.preventDefault()
            postData()
        }


    return(
        <>
        <h2 id="leisure-title" style={{textAlign: "center"}}>New <span style={{color: "lightblue"}}>Leisure</span> Activity</h2>

        <Form onSubmit={handleOnSubmit} className="new-leasure-form">
            <Container fluid>
                <Container className="avatar-wrap">
                    <h4 style={{fontWeight: "bold"}}>--Choose an Avatar--</h4>
                    <ToggleButtonGroup className="avatar-group" type="checkbox" value = {checkboxValue} onChange={handleCheckBoxChange}>
                        {mappedRadioButtons}
                    </ToggleButtonGroup>
                </Container>
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
                        <AsyncTypeahead
                                id="activity-location-input" 
                                onSearch={()=>{
                                    setTypeaheadState({...typeahead, isLoading: true});
                                    fetch("http://localhost:9292/leisure-locations")
                                    .then(res => res.json())
                                    .then(outposts => {
                                        const nameArray = outposts.map(leisure => {
                                            const outpostObj = {id: leisure.id, name: leisure.name}
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
                                        setLeisureForm({...leisureForm, leisure_location_id: selected[0].id})
                                    }else{
                                        setTypeaheadState({...typeahead, value: ""})
                                        setLeisureForm({...leisureForm, leisure_location_id: ""})
                                    }
                                    console.log(selected)
                                    
                                }}
                                
                                options={typeahead.options}/>
                    </Form.Group>
                    </Col>
                    <Col xs={12} md={4}>
                        <Form.Group>
                            <Form.Label>Activity Date &amp; Time</Form.Label>
                            <Form.Control name="datetime" value={datetime} onChange={handleLeisureFormChange} type="datetime-local"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group>
                            <Form.Label>Activity Description</Form.Label>
                            <Form.Control id="description-box" name="description" value={description} onChange={handleLeisureFormChange} type="text"/>
                            <Form.Text>Please limit text to no more than N characters.</Form.Text>
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
                <Row>
                <hr></hr>
                <Col>
                <Form.Group>
                    <Form.Label>Location Rating</Form.Label>
                    <Form.Control name="rating" value={rating} onChange={handleLeisureFormChange} type="number"></Form.Control>
                </Form.Group>
                </Col>
                
                </Row>
                <Form.Group>
                    <Form.Label>Leave a Comment About the Location!</Form.Label>
                    <Form.Control id="comment-box" name="comment" value={comment} onChange={handleLeisureFormChange} type="text"/>
                </Form.Group>

                {/* TO DO: Handle on Submit to make a fetch request */}
                <Container style={{textAlign: "center"}}>
                    <Button style={{margin: "20px 0px", backgroundColor: "#FFCC29", border:"none"}} type="submit">Add New Leisure Activity</Button>
                </Container>
            </Container>
        </Form>
        <Modal
        size="sm"
        show={modalIsVisible}
        onHide={()=>setModalIsVisible(false)}>
            <Modal.Header closeButton>
                <Modal.Title>You Successfully Posted Your Activity!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Add a new activity or check out the map?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button name="new-activity" onClick={handleModalRedirect}>New Activity</Button>
                <Button name="map" onClick={handleModalRedirect}>Live Map</Button>
            </Modal.Footer>
        </Modal>
        <Modal
        size="sm"
        show={failModalIsVisible}
        onHide={()=>setFailModalIsVisible(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Oops! Something went wrong</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Try again or go to live map?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button name="try-again" onClick={handleModalRedirect}>Try again</Button>
                <Button name="map" onClick={handleModalRedirect}>Live Map</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default NewLeisureActivityForm;