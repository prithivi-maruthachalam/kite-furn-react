import React, {Component} from 'react';

import roomNumber from '../../media/images/customInteriors/hotels/roomNumber.jpg';
import A from '../../media/images/customInteriors/hotels/A.jpg'
import B from '../../media/images/customInteriors/hotels/B.jpg'
import C from '../../media/images/customInteriors/hotels/C.jpg'
import D from '../../media/images/customInteriors/hotels/D.jpg'

import '../../styles/customInteriors/hotels.css';

const content = {
    subtext: 'Make a great first impression.' + 
            '\nThe design details we do in hotels helps make them stand out. Hotel interior design is crucial to make any guest feel welcome.' + 
            '\nWe do spaces which are functional, attractive and beneficial to visitors.',
        imgA: {
            alt: 'Reception and reception table with wall paneling in glass.',
            front: 'This stunning and beautiful lobby makes the hotel memorable and a guest would be delighted to go through it.'
        },
        imgB: {
            alt: 'Cozy guest room interiors with walnut and teakwood cot.',
            front: 'Guest room should be functional, attractive, luxurious and comforting as in this room.'
        },
        imgC: {
            alt: 'Reception with custom built wooden light fixture.',
            front: 'This business class hotel’s lobby also doubles as a place for casual meetings.'
        },
        imgD: {
            alt: 'Guest bedroom with twin cot, which can be converted to double bed.',
            front: 'This spacious guestroom is exotically cozy for its guests.'
        },
        roomNumber: {
            alt: 'We have best interior and furniture products for hotels'
        }
}

class Hotels extends Component{
    render(){
        return(
            <div className="fluid-container hotels-base" id="hotels">
                <div className="hotels-container">
                    <div className="hotels-grid-container">
                        <div className="itemA">
                            <div className="hotels-title">Hotel Interiors</div>
                            <div className="hotels-content">
                                {content.subtext}
                            </div>
                        </div>
                        <div className="itemB gridItem">
                            <img src={A} alt={content.imgA.alt} />
                            <div className="customInteriors-img-overlay">
                                {content.imgA.front}
                            </div>
                        </div>
                        <div className="itemC gridItem">
                            <img src={B} alt={content.imgB.alt} />
                            <div className="customInteriors-img-overlay">
                                {content.imgB.front}
                            </div>
                        </div>
                        <div className="itemD gridItem">
                            <img src={C} alt={content.imgC.alt} />
                            <div className="customInteriors-img-overlay">
                                {content.imgC.front}
                            </div>
                        </div>
                        <div className="itemE gridItem">
                            <img src={D} alt={content.imgD.alt} />
                            <div className="customInteriors-img-overlay">
                                {content.imgD.front}
                            </div>
                        </div>
                    </div>

                    <img src={roomNumber} className="img-roomNumber" alt={content.roomNumber.alt} />
                </div>
            </div>
        );
    }
}
export default Hotels;