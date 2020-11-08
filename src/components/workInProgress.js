import React, {Component} from 'react';

import '../styles/workInProgress.css';
import wipImage from '../media/images/WIP/wip.png';
import DevSection from "./devNDesBy.js";

const devSectionStyling = {
    backgroundImage: "linear-gradient(to left, #247DBE, #71bcf1)",
    fontSize: "20px",
    padding: "25px 0",
}

class WorkInProgress extends Component{
    render(){
        return(
            <div>
            <div className="fluid-container residence-base">    
                <div>
                <div className="wip-text">
                    Aw, sorry. We're still working on this.
                </div>
                <img className="wip-image" src={wipImage} alt="" />
                </div>
            </div>
            <DevSection styling={devSectionStyling}/>
            </div>
        );
    }
}

export default WorkInProgress;