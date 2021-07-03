import React, { Component } from 'react';

import imgA from '../../media/images/customInteriors/retails/A.jpg';
import imgB from '../../media/images/customInteriors/retails/B.jpg';
import imgC from '../../media/images/customInteriors/retails/C.jpg';
import imgD from '../../media/images/customInteriors/retails/D.jpg';

import '../../styles/customInteriors/retails.css';

class Retails extends Component{
    render(){
        return(
            <div className="fluid-container retails-base">
                <div className="retailsA">
                    <div>
                        <img src={imgA} alt="" />
                        <div className="hotels-img-overlay">
                            testing fdg  dfjkhg  dklfj h j lk jh kj hd flkgh j
                        </div>
                    </div>
                    <div>
                        <img src={imgB} alt="" />
                        <div className="hotels-img-overlay">
                            testing fdg  dfjkhg  dklfj h j lk jh kj hd flkgh j
                        </div>
                    </div>
                    <div>
                        <img src={imgC} alt="" />
                        <div className="hotels-img-overlay">
                            testing fdg  dfjkhg  dklfj h j lk jh kj hd flkgh j
                        </div>
                    </div>
                    <div>
                        <img src={imgD} alt="" />
                        <div className="hotels-img-overlay">
                            testing fdg  dfjkhg  dklfj h j lk jh kj hd flkgh j
                        </div>
                    </div>
                </div>
                <div className="retailsB">
                    <div className="retails-title">
                        Retail Stores &amp; Departmental Stores
                    </div>
                    <div className="retails-subContainer">
                        <div className="retails-subtitles">
                            <div>something here</div>
                            <div>something else or</div>
                            <div>what what blah</div>
                        </div>
                        <div className="retails-content">
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua. Ut enim ad 
                                minim veniam, quis nostrud exercitation
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Retails;