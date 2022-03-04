import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import imgA from '../../media/images/customInteriors/offices/A.JPG';
import imgB from '../../media/images/customInteriors/offices/B.JPG';
import imgC from '../../media/images/customInteriors/offices/C.JPG';

import '../../styles/customInteriors/offices.css';

const content = {
    subtext: 'Office interiors have the power to play a major role in influencing the emotions of owners, employees, and customers. We do office interiors which gives an identity to the business.',
    imgA: {
        alt: '',
        front: 'This functional workspace improves productivity with its design efficiency.'
    },
    imgB: {
        alt: '',
        front: 'We also design thematic and color based offices identifying the office with the business.'
    },
    imgC: {
        alt: '',
        front: 'We also design home offices where you work from home such as the one shown here.'
    }
}

class Offices extends Component{
    render(){
        return(
            <div className="fluid-container offices-base" id="offices">
                <div className="offices-grid-container">
                    <div className="title gridItem">
                        <div className="offices-title">
                            OFFICE SPACES
                        </div>
                        <div className="offices-content">
                            {content.subtext}
                        </div>
                    </div>
                    <div className="longImg gridItem">
                        <img src={imgC} alt={content.imgA.alt}/>
                        <div className="customInteriors-img-overlay">
                            {content.imgA.front}
                        </div>
                    </div>
                    <div className="imgA gridItem">
                        <img src={imgA} alt={content.imgB.alt}/>
                        <div className="customInteriors-img-overlay">
                            {content.imgB.front}
                        </div>
                    </div>
                    <div className="imgB gridItem">
                        <img src={imgB} alt={content.imgC.alt}/>
                        <div className="customInteriors-img-overlay">
                            {content.imgC.front}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Offices;