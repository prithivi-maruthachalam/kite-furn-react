import React, { Component } from 'react';

import kitchenImageA from '../../media/images/home/kitchen/kitchen1.jpg';
import kitchenImageB from '../../media/images/home/kitchen/kitchen2.jpg';

import '../../styles/home/kitchen.css';

const content = {
    imgA: {
        alt: 'Modern, traditional, contemporary modular kitchens including cabinets and shutters.'
    },
    imgB: {
        alt: 'We do modular kitchens and pantry units in Pollachi, Udumalpet, Coimbatore, Erode, Ooty, Salem.'
    }
}

class CustomisedInt extends Component{
    render(){
        return(
            <div className="fluid-container kitchen-base">
                <div className="kitchen-A">
                    <div>
                        <img className="kitchen-img img-fluid" src={kitchenImageA} alt={content.imgA.alt}/>
                    </div>
                    <div>
                        <img className="kitchen-img img-fluid" src={kitchenImageB} alt={content.imgB.alt}/>
                    </div>
                </div>

                <div className="kitchen-B">
                    <div className="kitchen-title">MODULAR KITCHENS</div>
                    <div className="kitchen-content">
                        Here's a look at our functional, yet insanely sleek kitchens.
                        They're designed to fit your tastes &amp; crafted to perfection.
                    </div>
                    <a href="http://www.kitekitchens.com/">
                        <button className="btn-kitchen">View More</button>
                    </a>
                </div>
            </div>
        );
    }
}

export default CustomisedInt;