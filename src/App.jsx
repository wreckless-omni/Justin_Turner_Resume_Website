import React, {Component} from 'react';
import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import "./site.css";
import {Home} from './Home';
import {Contact} from './Contact';
import {Projects} from './Projects';
import {About} from './About';

class App extends Component {
    render(){
    return (
        <Router>
            
            <Routes>
                <Route path="/" element={<Home />} />
               
                <Route
                    path="/contact" element={<Contact />}
                />

<Route
                    path="/Projects" element={<Projects />}
                />

<Route
                    path="/About" element={<About />}
                />
              
                
            </Routes>
        </Router>
    );
}}

export default App;
