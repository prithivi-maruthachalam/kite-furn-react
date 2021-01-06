import React, {Component} from 'react';

import imgA from '../../media/images/customInteriors/glassStairs/A.jpg';
import imgB from '../../media/images/customInteriors/glassStairs/B.jpg';

import '../../styles/customInteriors/glassStairs.css';

class GlassStairs extends Component{
    render(){
        return(
            <div className="fluid-container glassStairs-base">
                <div className="glassStairsA">
                    <div>
                        <img className="glassStairs-img" src={imgA} alt="" />
                        <img className="glassStairs-img-top" src={imgA} alt=""/>
                    </div>
                    <div>
                        <div className="imgB-container">
                            <img className="glassStairs-img" src={imgB} alt="" />
                            <img className="glassStairs-img-top" src={imgB} alt="" />
                        </div>
                    </div>
                </div>
                
                <div className="glassStairsB">
                    <div className="glassStairs-title">
                        GLASS STAIRS
                    </div>

                    <div className="glassStairs-subContainer">
                        <div className="glassStairs-subtitle">
                            <div>Fully customisable</div>
                            <div>Glass, wood and metal</div>
                            <div>Starting from 20k</div>
                        </div>

                        <div className="glassStairs-content">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad 
                            minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default GlassStairs;