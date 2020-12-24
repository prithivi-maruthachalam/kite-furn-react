import React, {Component} from 'react';

import glassstairs1 from '../../media/images/custominteriors/glassstairs/glassstairs1.jpg';
import glassstairs2 from '../../media/images/custominteriors/glassstairs/glassstairs2.jpg';

import '../../styles/customInteriors/glassstairs.css';

class GlassStairs extends Component{
    render(){
        return(
            <div className = "maindiv">
                <div className = "images">
                    <div className = "img1">
                        <img className="gsimg1 img-fluid" src={glassstairs1} alt="glassstairs image 1" />
                    </div>
                    <div className = "img2">      
                        <img className="gsimg2 img-fluid" src={glassstairs2} alt="glassstairs image 2" />                       
                    </div>
                </div>
            </div>
        );
    }
}
export default GlassStairs;