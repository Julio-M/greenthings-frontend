import React,{useState} from "react"
import { Map, Marker, Overlay } from "pigeon-maps"
import './mymap.css'
import Card from 'react-bootstrap/Card'

export default function MyMap({outpost,leisure}) {


  // console.log(outpost.ntaname)
  const [overlay,setOverlay] =useState(false)
  const [overCoordinates, setOverCoordinates] = useState([40.74253751019931, -73.99234182490424])
  const [tooltip,setToolTip] = useState({
      image:"",
      title:"",
      comment:"",
      avatar:""
  })
 

  const handleClick = (e) => {
    const theImage = e.payload.image
    const theTitle = e.payload.activity_type
    const theComment = e.payload.comment
    const theAvatar = e.payload.avatar
    console.log('The payload',e.payload)
    let coor = e.anchor
    setOverlay(true)
    theImage?setToolTip({...tooltip,image:theImage,title:theTitle,comment:theComment, avatar:theAvatar}):setToolTip({...tooltip,image:"https://throughkelseyslens.com/wp-content/uploads/2019/09/The-Mall-2-819x1024.jpg",title:theTitle,comment:theComment,avatar:theAvatar})
    setOverCoordinates(coor)
  }

  const handleTooltip = (e) => {
    setOverlay(false)
  }

  console.log('Tooltip',tooltip)


  const displayOverlay = (
    <Overlay anchor={overCoordinates} offset={[0, 0]}>
      <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header style={{color:"black"}}>{tooltip.title}</Card.Header>
            <Card.Body>
            <Card.Img variant="top" src={tooltip.image} />
              <Card.Text style={{color:"black"}}>
                  A {tooltip.avatar.toLowerCase()} says {tooltip.comment}
              </Card.Text>
            </Card.Body>
      </Card>
    </Overlay>
  )

  const displayOutpostMarker = outpost.map(out => <Marker key={out.id} onClick={handleClick} width={50} anchor={[parseFloat(out.outpost.latitude),parseFloat(out.outpost.longitude)]} color={'#168513'} payload={out}/>)

  const displayLeisureMarker = leisure.map(le => <Marker key={le.id} onClick={handleClick} width={50} anchor={[parseFloat(le.leisure_location.latitude),parseFloat(le.leisure_location.longitude)]} color={'#7393B3'} payload={le}/> )

  return (
    <Map onClick={handleTooltip} height={1000} defaultCenter={overCoordinates} defaultZoom={14}>
    {displayOutpostMarker}
    {displayLeisureMarker}
    {overlay?displayOverlay:null}
  </Map>
  )
}