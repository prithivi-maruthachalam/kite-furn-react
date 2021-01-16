import React, {Component} from 'react';

import roomNumber from '../../media/images/customInteriors/hotels/roomNumber.png';
import A from '../../media/images/customInteriors/hotels/A.jpg'
import B from '../../media/images/customInteriors/hotels/B.jpg'
import C from '../../media/images/customInteriors/hotels/C.jpg'
import D from '../../media/images/customInteriors/hotels/D.jpg'

import '../../styles/customInteriors/hotels.css';

class Hotels extends Component{
    render(){
        return(
            <div className="fluid-container hotels-base">
                <div className="hotels-container">
                    <div className="hotels-grid-container">
                        <div className="itemA">Header</div>
                        <div className="itemB">imgA</div>
                        <div className="itemC">imgB</div>
                        <div className="itemD">imgC</div>
                        <div className="itemE">imgD</div>
                    </div>

                    <img src={roomNumber} className="img-roomNumber" alt="" />
                </div>
            </div>
        );
    }
}
export default Hotels;