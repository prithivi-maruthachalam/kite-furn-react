import React, { Component } from 'react';

import Hero from "./hero.js";
import Hero2 from "./hero2.js";
import CustomisedInt from "./customisedInt.js";
import Meet from "./meet.js";
import Process from "./process.js";
import Kitchen from "./kitchen.js";
import DevSection from "../devNDesBy.js";

import '../../styles/home/index.css';
class Home extends Component {
  render(){
    return (
        <div className="fluid-container text-center homeContainer">
          <Hero/>
          <Hero2 />
          <CustomisedInt/>
          <Kitchen />
          <Process />
          <Meet />
          <DevSection/>
        </div>
    );
  }
}

export default Home;

