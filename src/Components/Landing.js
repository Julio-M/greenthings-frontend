import React from "react";
import "./Landing.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Landing(){
    return(
        // Probably replace this with a Jumbotron
        <>
            <div style={{margin: "15px 50px"}}>
                <h1 style={{textAlign: "center"}}>Welcome to GreenThings</h1>
                <h2 style={{textAlign: "center"}}>View and participate in sustainable activities around New York City!</h2>
                <p>GreenThings is an app that encourages you to anonyously view and post about your green activities around New York City so that you can encourage others to do the same! Going to play frisbee at Prospect Park? Did you deposit your compostable food waste at a composting outpost in Astoria? Choose and avatar and inspire others to spend time outside or engage in sustainably conscious activites.</p>
                <p>To see a live map of all activities going on in NYC, click on the <strong>Live Map</strong> button.</p>
                <p>To add your activities, click on the <strong>New Activity</strong> button.</p>
            </div>
            

            {/* Small jumbotron for 1. View "Live" Map 2. Add Activity */}
            <Container>
                <Row>
                    <Col md={6}>
                        <div id="map-nav-card" className="nav-card">
                            <h3 className="rel-text">View Live Map</h3>
                            <p className="rel-text">View what activities others around you are engaging in as we speak.</p>
                            <Button className="rel-text" style={{backgroundColor: "#F4A442", border: "none"}} href="/map">Map</Button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div id="activity-nav-card" className="nav-card">
                            <h3 className="rel-text">Input your own activity</h3>
                            <p className="rel-text">Put yourself on the map and let others know what you're up to!</p>
                            <Button className="rel-text" style={{backgroundColor: "#125C13", color: "white", border: "none"}} href="/new-activity">New Activity</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Landing;