import React, { Component } from 'react';

import GlassStairs from "./GlassStairs";
import Hotels from "./Hotels"
import Eateries from "./Eateries"
import Halls from "./Halls"
import Offices from "./Offices"
import Retails from "./Retails"
import Residence from './Residence';

import '../../styles/customInteriors/index.css';

class CustomInteriors extends Component {
  render(){
    return (
        <div className="fluid-container text-center customInteriors-container">
          <GlassStairs />
          <Hotels />
          <Eateries />
          <Residence/>
          <Halls />
          <Offices />
          <Retails />
        </div>
    );
  }
}

export default CustomInteriors;
