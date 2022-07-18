import React, { Component } from 'react';

import imgA from '../../media/images/residenceInteriors/glassStairs/A.jpg';
import imgB from '../../media/images/residenceInteriors/glassStairs/B.jpg';

import '../../styles/residenceInteriors/glassStairs.css'

class GlassStairs extends Component{
    render(){
        return(
            <div className="fluid-container res-glassStairs-base" id="glass-stairs">
                <div className="show-1300 res-gs-content-container">
                    <div>
                        <div className="res-gs-title">
                            Glass Stairs
                        </div>
                        <div className="res-gs-content"> 
                            Lorem Ipsum is simply dummy text of the 
                            printing and typesetting industry. Lorem 
                            Ipsum has been the industry's standard dummy 
                            text ever since the 1500s, when an unknown 
                            printer took a galley of type and
                        </div>
                    </div>
                </div>
                <div className="bootstrap-row row">
                    {/* first image container */}
                    <div className="res-gs-element col-sm">
                        <div className="res-gs-img-container">
                            <img src={ imgA } alt="" className="res-gs-img" />
                        </div>
                    </div>
                    {/* content container*/}
                    <div className="res-gs-element col-sm-4 res-gs-content-container hide-1300">
                        <div>
                            <div className="res-gs-title">
                                Glass Stairs
                            </div>
                            <div className="res-gs-content"> 
                                Lorem Ipsum is simply dummy text of the 
                                printing and typesetting industry. Lorem 
                                Ipsum has been the industry's standard dummy 
                                text ever since the 1500s, when an unknown 
                                printer took a galley of type and
                            </div>
                        </div>
                    </div>
                    {/* second image container */}
                    <div className="res-gs-element col-sm">
                        <div className="res-gs-img-container .img-fluid">
                            <img src={ imgB } alt="" className="res-gs-img"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default GlassStairs;