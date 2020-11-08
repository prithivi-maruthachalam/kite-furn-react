import React, {Component} from 'react';

import '../../styles/residenceInteriors/residenceHome.css';
import wipImage from '../../media/images/WIP/wip.png';

class ResidenceHome extends Component{
    render(){
        return(
            <div className="fluid-container residence-base">    
                <div>
                <div className="wip-text">
                    Aw, sorry. We're still working on this.
                </div>
                <img className="wip-image" src={wipImage} alt="" />
                </div>
            </div>
        );
    }
}

export default ResidenceHome;