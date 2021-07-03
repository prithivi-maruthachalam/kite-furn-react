import React, {Component} from 'react';

import mb from '../../media/images/home/factory/b.png';
import ma from '../../media/images/home/factory/a.png';

import maruthachalam from "../../media/images/home/team/maruthachalam.jpeg";
import vinoth from "../../media/images/home/team/vinoth.jpeg";
import sajeesh from "../../media/images/home/team/sajeesh.jpeg";
import prabhu from "../../media/images/home/team/prabhu.jpeg";
import harini from "../../media/images/home/team/harini.jpeg";
import phoneIcon from '../../media/icons/phone-icon.png';

import '../../styles/home/meet.css';

const customImages = [maruthachalam, vinoth, sajeesh, prabhu, harini];
const imgClass = {
    height: "15px",
    width: "auto",
    marginLeft: "10px",
    marginTop: "-2px",
    opacity: "0.7"
}

const btnClass = {
    borderRadius: "5px",
    fontWeight: "500",
    border: "none",
    outline: "none",

    padding: "10px 20px",

    color: "#ffffff",
}

class Meet extends Component{
    render(){
        return(
            <div className="fluid-container meet-base">
                <div className="meet-head text-left">
                    WHERE EFFICIENT PRODUCTION
                    MEETS A PASSIONATE TEAM
                </div>
                <div className="flex-container d-flex">
                    <div className="meet-left">
                        <div className="meet-left-images">
                            <div>
                                <img src={mb} className="meet-left-img" id="img-L-A" alt=""/>
                            </div>
                            <div>
                                <img src={ma} className="meet-left-img" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="meet-right">
                    <div className="meet-right-images">
                        <div>
                            <div className="img-container">
                                <img src={customImages[0]} id="mm-img" alt="" />
                            </div>
                            <div className="meet-img-card" id="mm_card">
                                <div className="person-name" id="mm">Maruthachalam</div>
                                <div className="person-desc">
                                    Chief Architect &amp; Interior Designer  
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="img-container">
                                <img src={customImages[1]} id="vinoth" alt="" />
                            </div>
                            <div className="meet-img-card">
                                <div className="person-name">Vinoth</div>
                                <div className="person-desc">
                                    Manager <br /> Production                               
                                </div>
                            </div>
                        </div>  
                        <div>
                            <div className="img-container">
                                <img src={customImages[2]} id="sajeesh" alt="" />
                            </div>
                            <div className="meet-img-card">
                                <div className="person-name">Sajeesh</div>
                                <div className="person-desc">
                                    Manager <br/> Projects
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="img-container">
                                <img src={customImages[3]} id="prabhu" alt="" />
                            </div>
                            <div className="meet-img-card">
                                <div className="person-name">Prabhu</div>
                                <div className="person-desc">
                                    Production <br/> Co-ordinator
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="img-container" id="harini">
                                <img src={customImages[4]} alt="" />
                            </div>
                            <div className="meet-img-card">
                                <div className="person-name">Harini</div>
                                <div className="person-desc">
                                    CAD Designer
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="text-container">
                                <div className="address-title">
                                    Come experience our products in the exclusive showroom at Trichy Road
                                </div>
                                <div className="address-text">
                                    303, Trichy Road, Singanallur, Coimbatore, Tamil Nadu, India - 641 005
                                </div>

                                <div className="footer-buttons-container text-left">
                                    <a href="tel:8940401792" className="d-block">
                                        <button className="footer-phone hover-shake" style={{...btnClass}}>
                                        Call Sajeesh @ 8940401792 
                                        <img src={phoneIcon} alt="" style={{...imgClass}}/>
                                        </button>
                                    </a>
                                    <a href="tel:8940401793" className="d-block mt-4ish">
                                        <button className="footer-phone hover-shake" style={{...btnClass}}>
                                        Call Prabhu @ 8940401793 
                                        <img src={phoneIcon} alt="" style={{...imgClass}}/>
                                        </button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Meet;