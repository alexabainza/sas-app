import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Archives from "./pages/Archives"
import Events from "./pages/Events"
import Login from "./pages/Login";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />

    <Routes>
      
      <Route path="/home" element={<Home/>}/>
      <Route path="/aboutSAS" element={<About/>}/>
      <Route path="/archives" element={<Archives/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/login" element={<Login/>}/>


    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
