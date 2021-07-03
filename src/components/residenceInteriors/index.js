import React, { Component } from 'react';

import '../../styles/residenceInteriors/index.css';

import GlassStairs from './GlassStairs';

class ResidenceInteriors extends Component {
  render(){
    return (
        <div className="fluid-container text-center customInteriors-container">
          <GlassStairs/>
        </div>
    );
  }
}

export default ResidenceInteriors;