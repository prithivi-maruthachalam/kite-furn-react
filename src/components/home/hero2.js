import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CrossfadeLoop from '../utils/fadeLoop.js';

import stairs from '../../media/images/home/stairs/stairs3.png';
import stairs2 from '../../media/images/home/stairs/stairs4.png';
import bedBase from '../../media/images/home/bed_anim/bedBase.png';
import bedlift from '../../media/images/home/bed_anim/bedLift.png';

import '../../styles/home/hero2.css';

const bedImages = [bedBase, bedlift];

const content = {
    imgA: {
        alt: 'modern stairs custom design beautiful interior design end-to end interior solutions customised staircases'
    },
    imgB: {
        alt: [
            'Made in india Single Bed, Queen Bed, Single Cot, Queen Size cot, King Size Cot, King Size Storage Bed, King Bed, Hydraulic Storage Beds, Hydraulic Storage Cot, Storage Beds in Coimabtore, Erode, Ooty, Salem, Tamil Nadu, Storage Cots in Coimabtore, Erode, Ooty, Salem, Tamil Nadu Beds with storage',
            'other one'
        ]
    }
}

class Hero2 extends Component{
    render(){
        return(
            <div className="fluid-container hero2-base">
                <div className="hero2-A">
                    <img src={stairs} className="img-stairs" alt={content.imgA.alt} />
                    <img src={stairs2} className="img-stairs stairDisp" alt="modern stairs custom design beautiful interior design end-to end interior solutions customised staircases " />

                    <div className="stair-text-container">
                        <div className="content-stair-top">STAIRCASES</div>
                        <div className="content-stair-bottom-container">
                            <div>LOW MAINTENANCE</div>
                            <div className="highlightA">SUPER STYLISH</div>
                            <div>DURABLE</div>
                        </div>
                        
                        <Link to="customInteriors">
                            <button className="btn btn-light btn-stairs">View More</button>
                        </Link>
                    </div>


                    <div className="stair-text-content">
                        Fully customizable staircases for every home.
                        We can even add them to your old staircase.
                        Improved lighting, more space and the glass just looks so lovely!
                    </div>
                    
                </div>

                <div className="hero2-B">
                    <div className="bed-text-container text-left">
                        <div className="bed-text-top">
                            <div>SLEEP <span className="bed-lowlight">&amp;</span></div>
                            <div>STORAGE</div>
                        </div>
                        <div className="bed-text-top resp-show">
                            <div>STORAGE <span className="bed-lowlight">&amp;</span></div>
                            <div>SLEEP</div>
                        </div>
                        <div className="bed-text-top resp-show2">
                            <div>STORAGE <span className="bed-lowlight">&amp;</span> SLEEP</div>
                        </div>
                        <div className="bed-text-subtop">
                            Sleep on and store in
                        </div>
                        
                        <Link to="customInteriors">
                            <button className="btn btn-light btn-bed">Explore</button>
                        </Link>
                    </div>

                    <CrossfadeLoop
                        src={bedImages} 
                        anim_duration={1500}
                        timingFunction={"ease-out"}
                        ClassValue="bedFade"
                        alt={content.imgB.alt}
                        interval= {3000}
                    />

                    <div className="bed-text-content">
                        The hydraulics make it easy to lift even without having
                        to remove the mattress. You can now use the space below the 
                        cot to keep extra pillows, blankets and anything else you want.
                    </div>
                </div> 
            </div>
        );
    }
}

export default Hero2;