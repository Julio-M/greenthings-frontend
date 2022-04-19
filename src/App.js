import React from "react";
import './App.css';
import { Outlet } from "react-router-dom";
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  // TO DO: Make sure to rename these in the conventions of the database so we can easiy make fetch requests

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
