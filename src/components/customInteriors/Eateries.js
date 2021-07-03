import React, {Component} from 'react';

import B1 from "../../media/images/customInteriors/eateries_bakeries/B1.JPG"
import B2 from "../../media/images/customInteriors/eateries_bakeries/B2.JPG"
import B3 from "../../media/images/customInteriors/eateries_bakeries/B3.JPG"
import H1 from "../../media/images/customInteriors/eateries_bakeries/H1.JPG"
import Bar1 from "../../media/images/customInteriors/eateries_bakeries/Bar1.JPG"


import '../../styles/customInteriors/eateries.css';

class GlassStairs extends Component{
    render(){
        return(
            <div className="fluid-container eateries-base" id="eateries">
                <div className="eat-grid-container">
                    <div id="e1">
                        <img src={B1} alt="" />
                        <div className="hotels-img-overlay">
                            fdgjdfk  kfd jfh  kjfgdh  hgd khdfs kjg k k 
                        </div>
                    </div>
                    <div id="e2" className="eat-title-container">
                        <div className="eateries-title">
                            Restaurants Bakeries &amp; more
                        </div>
                        <div className="eateries-subtext">
                            <div>Syubted dsfjhg</div>
                            <div>am Symaf</div>
                            <div>garrent moi</div>
                        </div>
                        <div className="eateries-content">
                            Lorem Ipsum is simply dummy text of the 
                            printing and typesetting industry. Lorem 
                            Ipsum has been the industry's standard dummy 
                            text ever since the 1500s, when an unknown 
                            printer took a galley of type and
                        </div>
                    </div>
                    <div id="e3">
                        <img src={B2} alt="" />
                        <div className="hotels-img-overlay">
                            fdgjdfk  kfd jfh  kjfgdh  hgd khdfs kjg k k 
                        </div>
                    </div>
                    <div id="e4">
                        <img src={H1} alt="" />
                        <div className="hotels-img-overlay">
                            fdgjdfk  kfd jfh  kjfgdh  hgd khdfs kjg k k 
                        </div>
                    </div>
                    <div id="e5">
                        <img src={B3} alt="" />
                        <div className="hotels-img-overlay">
                            fdgjdfk  kfd jfh  kjfgdh  hgd khdfs kjg k k 
                        </div>
                    </div>
                    <div id="e6">
                        <img src={Bar1} alt="" />
                        <div className="hotels-img-overlay">
                            fdgjdfk  kfd jfh  kjfgdh  hgd khdfs kjg k k 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default GlassStairs;