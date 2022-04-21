import React, { useState } from "react";
import NewLeisureActivityForm from "./NewLeisureActivityForm";
import OutpostActivityForm from "./OutpostActivityForm";
import Button from 'react-bootstrap/Button';
import "./FormPage.css";
import Container from 'react-bootstrap/Container';

function FormPage(){
    // const [formIsVisible, setFormIsVisible] = useState(false)
    const [formType, setFormType] = useState("")

    function handleFormAppear(e){
        console.log(e.target.name)
        setFormType(e.target.name)
    }
    return(
        <>
            <h1 style={{textAlign: "center", padding: "30px 40px"}}>Are you doing green things? Show it here!</h1>

            <Container className="form-choice-btn">
                <p>Toggle between outpost and leisure activities.</p>
                <Button  className="choice-btn" name="outpost" onClick={handleFormAppear}>Outpost Form</Button>
                <Button  className="choice-btn" name="leisure" onClick={handleFormAppear}>Leisure Form</Button>
            </Container>
            

            { formType === "outpost" ? <OutpostActivityForm/> : <NewLeisureActivityForm/>}
        </>
    )
}

export default FormPage;