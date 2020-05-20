import React, { Component } from "react";
import Linker from "./linker/linker.js";
import Navbar from "./navbar/navbar.js";
import Aboutblock from "./about/aboutblock.js";
import Mainblock from './mainblock/mainblock.js'
import Coffee from './coffe/coffe.js'
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="main">
            <Navbar/>
            <Mainblock/>
            <Aboutblock/>
            <Coffee />
            </div>
        );
    }
}

export default App;