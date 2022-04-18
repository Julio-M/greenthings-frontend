import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function NavBar(){
    return(
        <Navbar bg="primary" variant="dark">
            <Container style={{margin: "0px"}}>
                <Navbar.Brand href="/">GreenThings</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="map">Map</Nav.Link>
                    <Nav.Link href="about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;