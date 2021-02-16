import React, { Component } from 'react';

import GlassStairs from "./GlassStairs";
import Hotels from "./Hotels"
import Eateries from "./Eateries"

import '../../styles/customInteriors/index.css';

class CustomInteriors extends Component {
  render(){
    return (
        <div className="fluid-container text-center customInteriors-container">
          <GlassStairs />
          <Hotels />
          <Eateries/>
        </div>
    );
  }
}

export default CustomInteriors;
