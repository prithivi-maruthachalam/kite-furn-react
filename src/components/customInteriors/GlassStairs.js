import React, { Component } from 'react';

import imgA from '../../media/images/customInteriors/glassStairs/A.jpg';
import imgB from '../../media/images/customInteriors/glassStairs/B.png';

import '../../styles/customInteriors/glassStairs.css';

const content = {
    imgA: {
        alt: 'Steel and wooden stairs with glass handrails can be done.',
        alt2: 'We do balcony handrails.',
        front: 'Glass and wooden rails along with wood finishes for steps makes this existing staircase look new, modern & spacious.'
    }, 
    imgB: {
        alt: 'Beautiful handrails for existing staircase.',
        alt2: 'Good shower partition in glass can be supplied.',
        front: 'This prefabricated steel steps finished in wood with glass and wooden rails complements a modern home.'
    }, 
    subTitle: {
        line1: 'New and retrofitted handrails',
        line2: '1 Lakh to 5 Lakhs',
        line3: 'Glass, Wood and Metal'
    },
    subtext: 'Glass railing systems have a higher aesthetic appeal, increases visibility, increases light and glass creates the illusion of more space.\n' +
        '\nThese are of low maintenance and are very durable.' + 
        '\nThese rails can also be fitted to existing staircases.'
}

class GlassStairs extends Component{
    render(){
        return(
            <div className="fluid-container glassStairs-base" id="glass-stairs">
                <div className="glassStairsA">
                    <div>
                        <img className="glassStairs-img" src={imgA} alt={content.imgA.alt} />
                        <img className="glassStairs-img-top" src={imgA} alt={content.imgA.alt2} />
                        <div className="glassStairs-img-overlay">
                            {content.imgA.front}
                        </div>
                    </div>
                    <div>
                        <div className="imgB-container">
                            <img className="glassStairs-img" src={imgB} alt={content.imgB.alt} />
                            <img className="glassStairs-img-top" src={imgB} alt={content.imgB.alt2} />
                            <div className="glassStairs-img-overlay">
                                {content.imgB.front}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="glassStairsB">
                    <div className="glassStairs-title-container">
                        <span>Glass STAIRS</span>
                        <div className="glassStairs-residenceBtnContainer gsB">
                            <div className="residenceExtraText">Take a look at more of our designs for <span>Residences</span></div>
                            <a href="/customInteriors/#residence">
                                <button className="glassStairs-btn-toResidence">
                                    Residence Interiors
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="glassStairs-subContainer">
                        <div className="glassStairs-subtitle">
                            <div>{content.subTitle.line1}</div>
                            <div>{content.subTitle.line2}</div>
                            <div>{content.subTitle.line3}</div>
                        </div>

                        <div className="glassStairs-content">
                            {content.subtext}
                        </div>

                        <div className="glassStairs-residenceBtnContainer gsA">
                            <div className="residenceExtraText">Take a look at more of our designs for <span>Residences</span></div>
                            <a href="/customInteriors/#residence">
                                <button className="glassStairs-btn-toResidence">
                                    Residence Interiors
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default GlassStairs;