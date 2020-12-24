import React, { Component } from 'react';

import GlassStairs from "./GlassStairs";
import '../../styles/customInteriors/index.css';

class CustomInteriors extends Component {
  render(){
    return (
        <div className="fluid-container text-center indexgs">
            <GlassStairs />
        </div>
    );
  }
}

export default CustomInteriors;
