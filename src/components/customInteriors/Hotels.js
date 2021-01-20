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
                        <div className="itemA">
                            <div>
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
                                <div className="hotels-links">
                                    <a href="http://hotelatriumerode.com/">
                                        <button className="btn-hotel-links">Hotel Atrium</button>
                                    </a>
                                    <a href="http://hotelatriumerode.com/">
                                        <button className="btn-hotel-links">Hotel Blah</button>
                                    </a>
                                    <a href="http://hotelatriumerode.com/">
                                        <button className="btn-hotel-links">Hotel 34sare12</button>
                                    </a>
                                    <a href="http://hotelatriumerode.com/">
                                        <button className="btn-hotel-links">Hotel Ablion</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="itemB gridItem">
                            <img src={A} alt=""/>
                        </div>
                        <div className="itemC gridItem">
                            <img src={D} alt=""/>
                        </div>
                        <div className="itemD gridItem">
                            <img src={C} alt=""/>
                        </div>
                        <div className="itemE gridItem">
                            <img src={D} alt=""/>
                        </div>
                    </div>

                    <img src={roomNumber} className="img-roomNumber" alt="" />
                </div>
            </div>
        );
    }
}
export default Hotels;