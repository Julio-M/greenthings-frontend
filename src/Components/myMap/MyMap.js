import React from "react"
import { Map, Marker } from "pigeon-maps"

export default function MyMap() {
  return (
    <Map id='mymap' height={1000} defaultCenter={[40.74253751019931, -73.99234182490424]} defaultZoom={11}>
      <Marker width={50} anchor={[40.76414457229327, -73.99170600212592]} />
      <Marker width={50} anchor={[40.72457061367535, -73.99676580215755]} />
    </Map>
  )
}