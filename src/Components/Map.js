import React, {useEffect,useState} from "react";
import MyMap from "./myMap/MyMap"
import Container from 'react-bootstrap/Container';
import CardGroup from "./myMap/CardGroup";
import './map.css'

function Map(){

    const [outpost, setOutpost] = useState([]);
    const [leisure, setLeisure] = useState([])

    const outpostUrl = `http://localhost:9292/outpost-activities`
    const leisureUrl = `http://localhost:9292/leisure-activities`

    const getData = (url,activity) => {
        fetch(url)
        .then( res => res.json())
        .then( data => activity(data))
        .catch( error => console.log(error.message))
    }

    useEffect( () => {
        getData(outpostUrl,setOutpost)
        getData(leisureUrl,setLeisure)
    },[])

    return(
        <>
        <Container fluid >
            <div className="cardCol"><CardGroup className='allcards' outpost={outpost} leisure={leisure}/></div>
            <div className="mapCol"><MyMap outpost={outpost} leisure={leisure}/></div>
        </Container>
        </>
    )
}

export default Map;