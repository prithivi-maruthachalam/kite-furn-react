import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import imgA from '../../media/images/customInteriors/residence_interiors/A.jpg';
import imgB from '../../media/images/customInteriors/residence_interiors/B.jpg';
import imgC from '../../media/images/customInteriors/residence_interiors/C.jpg';
import imgD from '../../media/images/customInteriors/residence_interiors/D.jpg';

import '../../styles/customInteriors/residence.css';

class Residence extends Component{
    render(){
        return(
            <div className="fluid-container residences-base">
                <div className="residencesA">
                    <div>
                        <img src={imgA} alt="" />
                        <div className="hotels-img-overlay">
                            testing fdg dfjkhg dklfjh jlk jhkjhd flkgh j
                        </div>
                    </div>
                    <div>
                        <img src={imgB} alt="" />
                        <div className="hotels-img-overlay">
                            testing fdg dfjkhg dklfjh jlk jhkjhd flkgh j
                        </div>
                    </div>
                    <div>
                        <img src={imgC} alt="" />
                        <div className="hotels-img-overlay">
                            testing fdg dfjkhg dklfjh jlk jhkjhd flkgh j
                        </div>
                    </div>
                    <div>
                        <img src={imgD} alt="" />
                        <div className="hotels-img-overlay">
                            testing fdg dfjkhg dklfjh jlk jhkjhd flkgh j
                        </div>
                    </div>
                </div>

                <div className="residencesB">
                    <div>
                        <div className="residences-title">
                            Residence Interiors
                        </div>

                        {/* Button with a link to residence interiors */}
                        <div className="residence-residenceBtnContainer show-1350">
                            <div className="residence-btnExtraText">Take a look at more of our designs for <span>Residences</span></div>
                            <Link to="/residenceInteriors">
                                <button className="residence-btn-toResidence">
                                    Residence Interiors
                                </button>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="residences-subContainer">
                        <div className="residences-subtitles">
                            <div>something here</div>
                            <div>something else or</div>
                            <div>what what blah</div>
                        </div>
                        <div className="residences-content">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad 
                            minim veniam, quis nostrud exercitation
                        </div>                        
                    </div>

                    {/* Button with a link to residence interiors */}
                    <div className="residence-residenceBtnContainer hide-1350">
                        <div className="residence-btnExtraText">Take a look at more of our designs for <span>Residences</span></div>
                        <Link to="/residenceInteriors">
                            <button className="residence-btn-toResidence">
                                Residence Interiors
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Residence;