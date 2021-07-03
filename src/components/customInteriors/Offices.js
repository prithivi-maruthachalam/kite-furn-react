import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import imgA from '../../media/images/customInteriors/offices/A.JPG';
import imgB from '../../media/images/customInteriors/offices/B.JPG';
import imgC from '../../media/images/customInteriors/offices/C.JPG';

import '../../styles/customInteriors/offices.css';

class Offices extends Component{
    render(){
        return(
            <div className="fluid-container offices-base" id="offices">
                <div className="offices-grid-container">
                    <div className="title gridItem">
                        <div className="offices-title">
                            OFFICE SPACES
                        </div>
                    </div>
                    <div className="longImg gridItem">
                        <img src={imgC} alt=""/>
                    </div>
                    <div className="imgA gridItem">
                        <img src={imgA} alt=""/>
                    </div>
                    <div className="imgB gridItem">
                        <img src={imgB} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Offices;