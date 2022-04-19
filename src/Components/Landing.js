import React from "react";
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
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            </div>
            

            {/* Small jumbotron for 1. View "Live" Map 2. Add Activity */}
            <Container>
                <Row>
                    <Col md={6}>
                        <div style={{textAlign: "center"}}>
                            <h3>View Live Map</h3>
                            <Button style={{backgroundColor: "#F4A442", border: "none"}} href="/map">Map</Button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{textAlign: "center"}}>
                            <h3>Input your own activity</h3>
                            <Button style={{backgroundColor: "#125C13", color: "white", border: "none"}} href="/new-activity">New Activity</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Landing;