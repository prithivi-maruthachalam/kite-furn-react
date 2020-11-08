import React, {Component} from 'react';

import kitchenImageA from '../../media/images/kitchen/kitchen1.jpg';
import kitchenImageB from '../../media/images/kitchen/kitchen2.jpg';

import '../../styles/home/kitchen.css';


class CustomisedInt extends Component{
    render(){
        return(
            <div className="fluid-container kitchen-base">
                <div className="kitchen-A">
                    <img className="kitchen-img mr-img" src={kitchenImageA} alt="Modular Kitchens in Coimbatore, Erode, Ooty, Salem, Tamil Nadu Acrylic Kitchen Shutters Coimbatore, Erode, Ooty, Salem, Tamil Nadu"/>
                    <img className="kitchen-img" src={kitchenImageB} alt="Customized Modular kitchens german engineering sleek kitchens Made in India"/>
                </div>

                <div className="kitchen-B text-right">
                    <div className="kitchen-title text-right">MODULAR KITCHENS</div>
                    <div className="kitchen-content">
                        Here's a look at our functional, yet insanely sleek kitchens.
                        They're designed to fit your tastes &amp; crafted to perfection.
                        More than just a kitchen
                    </div>
                    <button className="btn-kitchen">View More</button>
                </div>
            </div>
        );
    }
}

export default CustomisedInt;