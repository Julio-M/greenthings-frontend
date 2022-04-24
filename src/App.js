import React from "react";
import './App.css';
import { Outlet } from "react-router-dom";
import NavBar from './Components/NavBar';
// import Footer from './Components/Footer';

function App() {
  // TO DO: Make sure to rename these in the conventions of the database so we can easiy make fetch requests
  // useEffect(()=>{
  //   fetch("https://data.cityofnewyork.us/resource/if26-z6xq.json?$query=SELECT food_scrap_drop_off_site AS name, latitude, longitude, open_months, operation_day_hours AS schedule, notes, location")
  //   .then(res => res.json())
  //   //Here we want to iterate over each object in the array of data and create OUTPOST instances
  //   //Do this once just to populate the database

  //   //Once this is done, add a conditional to the code where we check:
  //   //If data.length changes, this means data has been added or removed in the API data. 
  //   //In this case, remove data from the Outpost table, re-run the fetch and re-populate the table

  //   //Make sure the column names match in the database and in the outpost data. 
  //   .then(outpostData => {
      
  //     console.log("First fetch:", outpostData)
  //     outpostData.forEach((outpost) => {
  //       const newObj = {...outpost, default_image:"./images/park.png"}
  //       console.log("NewObj", newObj)
  //       const configObj = {
  //         method: "POST",
  //         headers: {
  //           "Content-Type" : "application/json",
  //           "Accepts" : "application/json"
  //         },
  //         body: JSON.stringify(newObj)
  //       }
  //       fetch("http://localhost:9292/outposts", configObj)
  //       .then(res => res.json())
  //       .then(postedOutpost => console.log(postedOutpost))
  //     })
  //   })
  // }, [])
  return (
    <>
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default App;
