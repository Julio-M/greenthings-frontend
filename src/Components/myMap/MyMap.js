import React,{useState} from "react"
import { Map, Marker, Overlay } from "pigeon-maps"

export default function MyMap({outpost}) {

  // console.log(outpost.ntaname)

  const [overlay,setOverlay] =useState(false)
  const [overCoordinates, setOverCoordinates] = useState([40.74253751019931, -73.99234182490424])
  const [image,setImage] = useState('https://i.pinimg.com/564x/42/7d/74/427d74978d39aa990dafa5fdffe8598d--monsters-inc-go-green.jpg')

  const handleClick = (e) => {
    let coor = e.anchor
    setOverlay(true)
    console.log(e)
    setImage(`${coor}`)
    setOverCoordinates(coor)
  }

  const handleTooltip = (e) => {
    setOverlay(false)
  }

  const displayOverlay = (
    <Overlay anchor={overCoordinates} offset={[120, 79]}>
      <img src={image} width={240} height={158} alt={image} />
    </Overlay>
  )

  const displayMarker = outpost.map(out => <Marker key={out.id} onClick={handleClick} width={50} anchor={[parseFloat(out.latitude),parseFloat(out.longitude)]} />)

  return (
    <Map onClick={handleTooltip} height={1000} defaultCenter={overCoordinates} defaultZoom={14}>
    {displayMarker}
    {overlay?displayOverlay:null}
  </Map>
  )
}