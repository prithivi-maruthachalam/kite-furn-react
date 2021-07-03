import React, {Component} from 'react';

import A from "../../media/images/customInteriors/halls/1.jpg"
import B from "../../media/images/customInteriors/halls/2.jpg"
import C from "../../media/images/customInteriors/halls/3.jpg"
import D from "../../media/images/customInteriors/halls/4.jpg"
import pan from "../../media/images/customInteriors/halls/pan.jpg"

import '../../styles/customInteriors/halls.css';

class Hotels extends Component{
    render(){
        return(
            <div className="fluid-container halls-base" id="halls">
                <div className="halls-grid-container">
                    <div id="ha" className="halls-title-container">
                        <div className="halls-title">Mantaps, Halls and Banquets</div>
                        <div className="halls-subtext">
                            <div>Syubted dsfjhg</div>
                            <div>am Symaf</div>
                            <div>garrent moi</div>
                        </div>
                        <div className="halls-content">
                            Lorem Ipsum is simply dummy text of the 
                            printing and typesetting industry. Lorem 
                            Ipsum has been the industry's standard dummy 
                            text ever since the 1500s, when an unknown 
                            printer took a galley of type and
                        </div>
                    </div>
                    <div id="hb">
                        <img alt="" src={pan} />
                        <div className="customInteriors-img-overlay">
                            fdgjdfk  kfd jfh  kjfgdh  hgd khdfs kjg k k 
                        </div>
                    </div>
                    <div id="hc">
                        <img alt="" src={ A } />
                        <div className="customInteriors-img-overlay">
                            fdgjdfk  kfd jfh  kjfgdh  hgd khdfs kjg k k 
                        </div>
                    </div>
                    <div id="hd">
                        <img alt="" src={ B } />
                        <div className="customInteriors-img-overlay">
                            fdgjdfk  kfd jfh  kjfgdh  hgd khdfs kjg k k 
                        </div>
                    </div>
                    <div id="he">
                        <img alt="" src={ C } />
                        <div className="customInteriors-img-overlay">
                            fdgjdfk  kfd jfh  kjfgdh  hgd khdfs kjg k k 
                        </div>
                    </div>
                    <div id="hf">
                        <img alt="" src={ D } />
                        <div className="customInteriors-img-overlay">
                            fdgjdfk  kfd jfh  kjfgdh  hgd khdfs kjg k k 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Hotels;