import React, {Component} from 'react';

import A from "../../media/images/customInteriors/halls/A.jpg"
import B from "../../media/images/customInteriors/halls/B.jpg"
import C from "../../media/images/customInteriors/halls/C.jpg"
import D from "../../media/images/customInteriors/halls/D.jpg"
import E from "../../media/images/customInteriors/halls/E.jpg"


import '../../styles/customInteriors/halls.css';

const content = {
    subTitle: 'Make a lasting memory…',
    subtext: 'We increase the appeal of the space with decor style, color, mood, harmony, contrast, comfort, convenience, lighting, paint & wall covering, glass etc.',
    imgA: {
        alt: '',
        front: 'We design and execute multipurpose convention halls such as this one in Yercaud.'
    },
    imgB: {
        alt: '',
        front: 'This highly functional and flexible boardroom has been the space where many business ideas are generated.'
    },
    imgC: {
        alt: '',
        front: 'We also do halls with perfect acoustics such as the one shown here which is a 350 seater.'
    },
    imgD: {
        alt: '',
        front: 'Memorable and cost effective interiors for marriage halls designed and executed by us has proved successful'
    },
    imgE: {
        alt: '',
        front: 'This elegant and stylish banquet hall has been the happy host for many functions and has been a huge attraction for the hotel it is in.'
    }

}

class Hotels extends Component{
    render(){
        return(
            <div className="fluid-container halls-base" id="halls">
                <div className="halls-grid-container">
                    <div id="ha" className="halls-title-container">
                        <div className="halls-title">Mantaps, Halls and Banquets</div>
                        <div className="halls-subtext">
                            <div>{content.subTitle}</div>
                        </div>
                        <div className="halls-content">
                            {content.subtext}
                        </div>
                    </div>
                    <div id="hb">
                        <img alt="" src={ A } />
                        <div className="customInteriors-img-overlay">
                            {content.imgA.front} 
                        </div>
                    </div>
                    <div id="hc">
                        <img alt="" src={ B } />
                        <div className="customInteriors-img-overlay">
                            {content.imgB.front} 
                        </div>
                    </div>
                    <div id="hd">
                        <img alt="" src={ C } />
                        <div className="customInteriors-img-overlay">
                            {content.imgC.front} 
                        </div>
                    </div>
                    <div id="he">
                        <img alt="" src={ D } />
                        <div className="customInteriors-img-overlay">
                            {content.imgD.front} 
                        </div>
                    </div>
                    <div id="hf">
                        <img alt="" src={ E } />
                        <div className="customInteriors-img-overlay">
                            {content.imgE.front} 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Hotels;