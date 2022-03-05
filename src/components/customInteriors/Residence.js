import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import imgA from '../../media/images/customInteriors/residence_interiors/A.jpg';
import imgB from '../../media/images/customInteriors/residence_interiors/B.jpg';
import imgC from '../../media/images/customInteriors/residence_interiors/C.jpg';
import imgD from '../../media/images/customInteriors/residence_interiors/D.jpg';

import '../../styles/customInteriors/residence.css';

const content = {
    subTitle: 'Beauty & Functionality',
    subtext: 'We customize manufacture and supply home interiors. We do Living, dining, bedrooms, kitchens, stairs, storage units and more so that your space meets your every requirement.',
    imgA: {
        alt: 'We do residence interiors in Coimbatore. We do wardrobes with mirrors and home furniture. ',
        front: 'We also create bedrooms as an expression such as this Egyptian themed bedroom with motifs.'
    },
    imgB: {
        alt: 'Partitions and sliding partitions in wood and glass.',
        front: 'We also create lively spaces such as this patio surrounded by living, dining and a corridor.'
    },
    imgC: {
        alt: 'Dining room interiors including customized dining tables.',
        front: 'Even the hand wash unit can become a beautiful accent such as the one in this dining. '
    },
    imgD: {
        alt: 'We also do fixed partitions and wooden handrails and study room furniture.',
        front: 'We also do Indian classical and European classical themed spaces.'
    }
}

class Residence extends Component{
    render(){
        return(
            <div className="fluid-container residences-base" id="residence">
                <div className="residencesA">
                    <div>
                        <img src={imgA} alt={content.imgA.alt} />
                        <div className="customInteriors-img-overlay">
                            {content.imgA.front}
                        </div>
                    </div>
                    <div>
                        <img src={imgB} alt={content.imgB.alt} />
                        <div className="customInteriors-img-overlay">
                            {content.imgB.front}
                        </div>
                    </div>
                    <div>
                        <img src={imgC} alt={content.imgC.alt} />
                        <div className="customInteriors-img-overlay">
                            {content.imgC.front}
                        </div>
                    </div>
                    <div>
                        <img src={imgD} alt={content.imgD.alt} />
                        <div className="customInteriors-img-overlay">
                            {content.imgD.front}
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
                            <div>{content.subTitle}</div>
                        </div>
                        <div className="residences-content">
                            {content.subtext}
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