import React, {useEffect,useState} from "react";
import MyMap from "./myMap/MyMap"
import Container from 'react-bootstrap/Container';
import CardGroup from "./myMap/CardGroup";
import './map.css'

function Map(){

const [outpost, setOutpost] = useState([]);

const getData = () => {
    fetch(`https://data.cityofnewyork.us/resource/if26-z6xq.json`)
    .then( res => res.json())
    .then( data => setOutpost(data))
    .catch( error => console.log(error.message))
}

useEffect( () => {
    getData()
},[])


    return(
        <>
        <Container fluid >
            <div className="cardCol"><CardGroup outpost={outpost}/></div>
            <div className="mapCol"><MyMap outpost={outpost}/></div>
        </Container>
        </>
    )
}

export default Map;