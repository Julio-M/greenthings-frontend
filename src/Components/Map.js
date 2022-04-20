import React from "react";
import MyMap from "./myMap/MyMap"
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/Col';

function Map(){
    return(
        <>
        <div>Filters</div>
        <Container fluid >
            <Row>
            <Col><h1>MAP</h1></Col>
            <Col><MyMap/></Col>
            </Row>
        </Container>
        </>
    )
}

export default Map;