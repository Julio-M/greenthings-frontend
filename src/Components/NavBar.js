import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import "./NavBar.css"

function NavBar(){
    return(
        <Navbar id="global-nav">
            <Container style={{margin: "0px"}}>
                <Navbar.Brand style={{color: "white"}} href="/">GreenThings</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="map">Live Map</Nav.Link>
                    <Nav.Link href="new-activity">Add New Activity</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;