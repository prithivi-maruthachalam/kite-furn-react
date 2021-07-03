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
            <div className="fluid-container hotels-base" id="hotels">
                <div className="hotels-container">
                    <div className="hotels-grid-container">
                        <div className="itemA">
                            <div className="hotels-title">Hotel Interiors</div>
                            <div className="hotels-content">
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit. Fusce 
                                eu augue dolor. Mauris sodales 
                                pretium nisl, sit amet vulputate 
                                elit dictum in. Nam venenatis 
                                enim at cursus lobortis. 
                                Sed ut eros felis. 
                                Cras vulputate lorem 
                            </div>
                        </div>
                        <div className="itemB gridItem">
                            <img src={C} alt="" />
                            <div className="hotels-img-overlay">
                                testing fdg  dfjkhg  dklfj h j lk jh kj hd flkgh j
                            </div>
                        </div>
                        <div className="itemC gridItem">
                            <img src={B} alt="" />
                            <div className="hotels-img-overlay">
                                testing fdg  dfjkhg  dklfj h j lk jh kj hd flkgh j
                            </div>
                        </div>
                        <div className="itemD gridItem">
                            <img src={A} alt="" />
                            <div className="hotels-img-overlay">
                                testing fdg  dfjkhg  dklfj h j lk jh kj hd flkgh j
                            </div>
                        </div>
                        <div className="itemE gridItem">
                            <img src={D} alt="" />
                            <div className="hotels-img-overlay">
                                testing fdg  dfjkhg  dklfj h j lk jh kj hd flkgh j
                            </div>
                        </div>
                    </div>

                    <img src={roomNumber} className="img-roomNumber" alt="" />
                </div>
            </div>
        );
    }
}
export default Hotels;