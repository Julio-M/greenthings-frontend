import React, { useState } from "react";
import NewLeisureActivityForm from "./NewLeisureActivityForm";
import OutpostActivityForm from "./OutpostActivityForm";
import Button from 'react-bootstrap/Button';
import "./FormPage.css";
import Container from 'react-bootstrap/Container';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { avatarOptions } from "./data/Avatars";

function FormPage(){
    // const [formIsVisible, setFormIsVisible] = useState(false)
    const [formType, setFormType] = useState("")

    function handleFormAppear(e){
        console.log(e.target.name)
        setFormType(e.target.name)
    }
    const mappedRadioButtons = avatarOptions.map((avatar)=> {
        return(
            <ToggleButton
                key={avatar.id}
                id={avatar.name}
                className="avatar-radio"
                type="checkbox"
                name={avatar.name}
                value={avatar.name}>
                <img className="form-logo-img" src={require(`${avatar.src}`)} alt={avatar.name}/>
            </ToggleButton>
        )

        });
    return(
        <>
            <h1 id="form-header-text" style={{textAlign: "center", padding: "30px 40px"}}>C'mon now don't be shy! Post an activity.</h1>

            <Container className="form-choice-btn">
                <p>Toggle between outpost and leisure activities.</p>
                <Button  className="choice-btn" name="outpost" onClick={handleFormAppear}>Outpost Form</Button>
                <Button  className="choice-btn" name="leisure" onClick={handleFormAppear}>Leisure Form</Button>
            </Container>
            

            { formType === "outpost" ? <OutpostActivityForm mappedRadioButtons={mappedRadioButtons}/> : <NewLeisureActivityForm mappedRadioButtons={mappedRadioButtons}/>}
        </>
    )
}

export default FormPage;