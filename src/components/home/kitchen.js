import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import kitchenImageA from '../../media/images/kitchen/kitchen1.jpg';
import kitchenImageB from '../../media/images/kitchen/kitchen2.jpg';

import '../../styles/home/kitchen.css';


class CustomisedInt extends Component{
    render(){
        return(
            <div className="fluid-container kitchen-base">
                <div className="kitchen-A">
                    <div>
                        <img className="kitchen-img img-fluid" src={kitchenImageA} alt="Modular Kitchens in Coimbatore, Erode, Ooty, Salem, Tamil Nadu Acrylic Kitchen Shutters Coimbatore, Erode, Ooty, Salem, Tamil Nadu"/>
                    </div>
                    <div>
                        <img className="kitchen-img img-fluid" src={kitchenImageB} alt="Customized Modular kitchens german engineering sleek kitchens Made in India"/>
                    </div>
                </div>

                <div className="kitchen-B">
                    <div className="kitchen-title">MODULAR KITCHENS</div>
                    <div className="kitchen-content">
                        Here's a look at our functional, yet insanely sleek kitchens.
                        They're designed to fit your tastes &amp; crafted to perfection.
                    </div>
                    <Link to="/modularKitchens">
                        <button className="btn-kitchen">View More</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default CustomisedInt;