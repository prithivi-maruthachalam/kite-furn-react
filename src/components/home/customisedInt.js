import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import bedroomA from '../../media/images/home/custom/bedroomA.jpg';
import bedroomB from '../../media/images/home/custom/bedroomB.jpg';
import homeA from '../../media/images/home/custom/homeA.jpg';
import hotelA from '../../media/images/home/custom/hotelA.jpg';
import hotelB from '../../media/images/home/custom/hotelB.jpg';
import hall from '../../media/images/home/custom/hall.jpg';

import '../../styles/home/customisedInt.css';

const customImages = [bedroomA,homeA,hotelA,hall,bedroomB,hotelB];

const content = {
    imgA: {
        alt: ''
    },
    imgB: {
        alt: ''
    },
    imgC: {
        alt: ''
    },
    imgD: {
        alt: ''
    },
    imgE: {
        alt: ''
    },
    imgF: {
        alt: ''
    }
}

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
                        <Link to="/customInteriors">
                            <button className="btn-custom-types">Living spaces</button>
                        </Link>
                        <Link to="/customInteriors">
                            <button className="btn-custom-types">Hotels</button>
                        </Link>
                        <Link to="/customInteriors">
                            <button className="btn-custom-types">Bedrooms</button>
                        </Link>
                        <Link to="/customInteriors">
                            <button className="btn-custom-types">Kitchens</button>
                        </Link>
                        <Link to="/customInteriors">
                            <button className="btn-custom-types">Dining spaces</button>
                        </Link>
                        <Link to="/customInteriors">
                            <button className="btn-custom-types">Retail spaces</button>
                        </Link>
                        <Link to="/customInteriors">
                            <button className="btn-custom-types">Eateries</button>
                        </Link>
                    </div>

                    <div className="custom-text">
                        With over 22 years of experience creating inspired designs, we turn your
                        requirements into incredibly aesthetic and functional designs.
                    </div>

                    <Link to="/customInteriors">
                        <button className="btn btn-light btn-custom-main">View More</button>
                    </Link>
                </div>

                <div className="custom-grid">
                    <div className="grid-item">
                        <img src={customImages[0]} alt={content.imgA.alt} className="custom-img" />
                        <div className="custom-img-over text-center">Bedrooms</div>
                    </div>
                    <div className="grid-item">
                        <img src={customImages[1]} alt={content.imgB.alt} className="custom-img" />
                        <div className="custom-img-over text-center">Living Spaces</div>
                    </div>  
                    <div className="grid-item">
                        <img src={customImages[2]} alt={content.imgC.alt} className="custom-img" />
                        <div className="custom-img-over text-center">Hotels</div>
                    </div>
                    <div className="grid-item">
                        <img src={customImages[3]} alt={content.imgD.alt} className="custom-img" />
                        <div className="custom-img-over text-center">Banquet Halls</div>
                    </div>
                    <div className="grid-item">
                        <img src={customImages[4]} alt={content.imgE.alt} className="custom-img" />
                        <div className="custom-img-over text-center">Custom Furniture</div>
                    </div>
                    <div className="grid-item"> 
                        <img src={customImages[5]} alt={content.imgF.alt} className="custom-img" />
                        <div className="custom-img-over text-center">Restaurants</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomisedInt;