import React, {Component} from 'react';

import bedroomA from '../../media/images/custom/bedroomA.jpg';
import bedroomB from '../../media/images/custom/bedroomB.jpg';
import homeA from '../../media/images/custom/homeA.jpg';
import hotelA from '../../media/images/custom/hotelA.jpg';
import hotelB from '../../media/images/custom/hotelB.jpg';
import hall from '../../media/images/custom/hall.jpg';

import '../../styles/home/customisedInt.css';

const customImages = [bedroomA,homeA,hotelA,hall,bedroomB,hotelB];

class CustomisedInt extends Component{
    render(){
        return(
            <div className="fluid-container customisedInt-base text-left">
                <div className="custom-head">
                    <div className="custom-title">
                        <div>Designed &#38;</div>
                        <div>Built for <span className="highlight">You</span></div>
                    </div>

                    <div className="custom-subtag">
                        <button className="btn-custom-types">Living spaces</button>
                        <button className="btn-custom-types">Hotels</button>
                        <button className="btn-custom-types">Bedrooms</button>
                        <button className="btn-custom-types">Kitchens</button>
                        <button className="btn-custom-types">Dining spaces</button>    
                        <button className="btn-custom-types">Retail spaces</button>
                        <button className="btn-custom-types">Eateries</button>
                    </div>

                    <div className="custom-text">
                        With over 22 years of experience creating inspired designs, we turn your
                        requirements into incredibly aesthetic and functional designs.
                    </div>

                    <button className="btn btn-light btn-custom-main">View More</button>
                </div>

                <div className="custom-grid">
                    <div className="grid-item">
                        <img src={customImages[0]} alt="study room book shelves shoe rack made in india furniture european designs bedroom furniture bedroom sets" className="custom-img" />
                        <div className="custom-img-over text-center">Bedrooms</div>
                    </div>
                    <div className="grid-item">
                        <img src={customImages[1]} alt="living room furniture TV units dining furniture interior design idea dining room furniture dining furniture" className="custom-img" />
                        <div className="custom-img-over text-center">Living Spaces</div>
                    </div>  
                    <div className="grid-item">
                        <img src={customImages[2]} alt="hotels custom beds and furniture bedroom furniture 2 door wardrobe 3 door wardrobe 4 door wardrobe" className="custom-img" />
                        <div className="custom-img-over text-center">Hotels</div>
                    </div>
                    <div className="grid-item">
                        <img src={customImages[3]} alt="banquest halls dining tables dining furniture meeting halls best interior designer" className="custom-img" />
                        <div className="custom-img-over text-center">Banquet Halls</div>
                    </div>
                    <div className="grid-item">
                        <img src={customImages[4]} alt="bedside tables dressing table custom furniture interior designer european designs best quality custom wardrobe bedroom storage" className="custom-img" />
                        <div className="custom-img-over text-center">Custom Furniture</div>
                    </div>
                    <div className="grid-item"> 
                        <img src={customImages[5]} alt="restaurants interior design Coimbatore ,Erode, Ooty, Salem, Tamil Nadu" className="custom-img" />
                        <div className="custom-img-over text-center">Restaurants</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomisedInt;