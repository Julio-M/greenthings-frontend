import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";


function Landing(){
    return(
        // Probably replace this with a Jumbotron
        <>
            <h1 style={{textAlign: "center"}}>Welcome to GreenThings</h1>
            <h2 style={{textAlign: "center"}}>View and participate in sustainable activities around New York City!</h2>

            {/* Small jumbotron for 1. View "Live" Map 2. Add Activity */}
            <Container>
                <Row>
                    <Col md={6}>
                        <div style={{textAlign: "center"}}>
                            <h3>View Live Map</h3>
                            <Link to="map">O</Link>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{textAlign: "center"}}>
                            <h3>Input your own activity</h3>
                            <Link to="new-activity">0</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Landing;