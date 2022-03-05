import React, {Component} from 'react';
import { Link } from 'react-router-dom';


import arrow from '../../media/icons/right-arrow.png';

import heroImage from '../../media/images/home/hero1_wardrobe/base.png'
import heroImageDoor from '../../media/images/home/hero1_wardrobe/door.png'
import heroImageDoor2 from '../../media/images/home/hero1_wardrobe/door2.png';

import '../../styles/home/hero.css';

const content = {
    imgA: {
        alt: [
                'We do space saving furniture and sliding wardrobes at Coimbatore, Erode, Tiruppur, Ooty, Salem in TamilNadu',
                'Sliding wardrobes are good option for small apartments.',
                'Aluminium and acrylic or glass shutters look trendy.'
            ]
    },
    button: {
        alt: ''
    }
}

class Hero extends Component{

    render(){
        return(
            <div className="fluid-container">
                
                <div className="fluid-container hero-base">
                
                    <div className="hero-image-bg-left">
                        <img src={heroImage} alt={content.imgA.alt[0]} className="hero-space-image"/>
                        <img src={heroImageDoor} alt={content.imgA.alt[1]} className="hero-space-image-door"/>
                        <img src={heroImageDoor2} alt={content.imgA.alt[2]} className="hero-space-image-door2" />
                    </div>
                
                    <div className="hero-image-bg-right text-right">
                        <div className="hero-text-mobile">SPACE SAVING STORAGE</div>
                        <div className="hero-text">SPACE</div>
                        <div className="hero-text">SAVING</div>
                        <div className="hero-text">STORAGE</div>

                        <div className="mt-4-5">
                            <Link to="/residenceInteriors">
                                <button className="btn btn-light btn-explore">
                                    Explore <img className="btn-img" src={arrow} alt="space saving furniture for small homes"/>
                                </button>
                            </Link>
                        </div>
                    </div>
                
                </div>
                <div className="hero-base-2">
                    <div className="content-container">
                        <h2 className="content-title">
                            More Space, Inside and Out.
                        </h2>
                        <p className="content">
                            Introducing a new line of storage units that slide instead of swinging, 
                            leaving you with more space, inside and outside. From as big as you need to
                            much smaller ones, these wardrobes are for every home. Think sleek, simple and affordable.
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Hero;