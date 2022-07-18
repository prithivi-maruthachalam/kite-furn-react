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
        alt: 'Wooden wall displays and graphic showcases in bakeries and coffee shops.',
        front: 'This unique wall display in this bakery merchandises products through backdrop graphics and its unique display.'
    },
    imgB: {
        alt: 'Coffee shop interiors in wooden shelves.',
        front: 'This classic, rich and traditional interior makes the outlet posh and position itself high up.'
    },
    imgC: {
        alt: 'Fine dining restaurants with good ambient lighting designs.',
        front: 'Good decor and rich interiors makes this restaurant more effective in marketing your food.'
    },
    imgD: {
        alt: 'Cake display showcases with attractive graphics in black and white scheme.',
        front: 'This coffee shop pulls crowd from the highway with bold and overstated graphics'
    },
    imgE: {
        alt: 'We also do bars, PDR’s or private dining restaurants.',
        front: 'Creative and colorful lights combined with dimly lit areas sets the right ambiance and mood along with privacy for those who need it.'
    },
}

class GlassStairs extends Component{
    render(){
        return(
            <div className="fluid-container eateries-base" id="eateries">
                <div className="eat-grid-container">
                    <div id="e1">
                        <img src={A} alt={content.imgA.alt} />
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
                        <img src={B} alt={content.imgB.alt} />
                        <div className="customInteriors-img-overlay">
                            {content.imgB.front}
                        </div>
                    </div>
                    <div id="e4">
                        <img src={D} alt={content.imgC.alt} />
                        <div className="customInteriors-img-overlay">
                            {content.imgC.front}
                        </div>
                    </div>
                    <div id="e5">
                        <img src={C} alt={content.imgD.alt} />
                        <div className="customInteriors-img-overlay">
                            {content.imgD.front} 
                        </div>
                    </div>
                    <div id="e6">
                        <img src={E} alt={content.imgE.alt} />
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