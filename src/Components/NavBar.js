import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import "./NavBar.css"
import Image from 'react-bootstrap/Image'

function NavBar(){
    return(
        <Navbar id="global-nav">
            <Container style={{margin: "0px"}}>
                <Navbar.Brand id="nav-brand" style={{color: "white"}} href="/">
                    <img
                        alt="ActiveCritters"
                        src={require("./images/logo.png")}
                        width="40"
                        height="40"/>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link style={{color: "white"}} href="/">Home</Nav.Link>
                    <Nav.Link style={{color: "white"}} href="map">Live Map</Nav.Link>
                    <Nav.Link style={{color: "white"}} href="new-activity">Post Activity</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;