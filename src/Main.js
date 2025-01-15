import React from "react";
import {Routes, Route, Router} from 'react-router-dom';

import Home from './Pages/Home'
import Contact from "./Pages/Contact";

const Main = () => {
    return (
        <Router>
      <Routes> {/* The Switch decides which component to show based on the current URL.*/}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />      
        </Routes>
      </Router>
    );
  }
  
  export default Main;