import React, { Component } from 'react';

import GlassStairs from "./GlassStairs";
import Hotels from "./Hotels"
import Eateries from "./Eateries"
import Halls from "./Halls"

import '../../styles/customInteriors/index.css';

class CustomInteriors extends Component {
  render(){
    return (
        <div className="fluid-container text-center customInteriors-container">
          <GlassStairs />
          <Hotels />
          <Eateries />
          <Halls />
        </div>
    );
  }
}

export default CustomInteriors;
