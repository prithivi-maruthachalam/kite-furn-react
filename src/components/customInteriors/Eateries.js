import React, {Component} from 'react';

import A from "../../media/images/customInteriors/eateries_bakeries/A.JPG"
import B from "../../media/images/customInteriors/eateries_bakeries/B.JPG"
import C from "../../media/images/customInteriors/eateries_bakeries/C.JPG"
import D from "../../media/images/customInteriors/eateries_bakeries/D.JPG"
import E from "../../media/images/customInteriors/eateries_bakeries/E.JPG"

import '../../styles/customInteriors/eateries.css';

const content = {
    subTitle: 'Bakeries, coffee shops, bars, Restaurants including Fine dining, Casual Dining, Family & Quick Service Restaurants.',
    subtext: 'We can make coffee shops and bakeries into memorable spaces through design. We make the most of the space you have, especially with a small one.' + 
            '\nRevamp Your Restaurant\'s Interior Design On a Budget',
    imgA: {
        alt: '',
        front: 'This unique wall display in this bakery merchandises products through backdrop graphics and its unique display.'
    },
    imgB: {
        alt: '',
        front: 'This classic, rich and traditional interior makes the outlet posh and position itself high up.'
    },
    imgC: {
        alt: '',
        front: 'Good decor and rich interiors makes this restaurant more effective in marketing your food.'
    },
    imgD: {
        alt: '',
        front: 'This coffee shop pulls crowd from the highway with bold and overstated graphics'
    },
    imgE: {
        alt: '',
        front: 'Creative and colorful lights combined with dimly lit areas sets the right ambiance and mood along with privacy for those who need it.'
    },
}

class GlassStairs extends Component{
    render(){
        return(
            <div className="fluid-container eateries-base" id="eateries">
                <div className="eat-grid-container">
                    <div id="e1">
                        <img src={A} alt="" />
                        <div className="customInteriors-img-overlay">
                            {content.imgA.front}
                        </div>
                    </div>
                    <div id="e2" className="eat-title-container">
                        <div className="eateries-title">
                            Restaurants Bakeries &amp; more
                        </div>
                        <div className="eateries-subtext">
                            <div>{content.subTitle}</div>
                        </div>
                        <div className="eateries-content">
                            {content.subtext}
                        </div>
                    </div>
                    <div id="e3">
                        <img src={B} alt="" />
                        <div className="customInteriors-img-overlay">
                            {content.imgB.front}
                        </div>
                    </div>
                    <div id="e4">
                        <img src={D} alt="" />
                        <div className="customInteriors-img-overlay">
                            {content.imgC.front}
                        </div>
                    </div>
                    <div id="e5">
                        <img src={C} alt="" />
                        <div className="customInteriors-img-overlay">
                            {content.imgD.front} 
                        </div>
                    </div>
                    <div id="e6">
                        <img src={E} alt="" />
                        <div className="customInteriors-img-overlay">
                            {content.imgE.front}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default GlassStairs;