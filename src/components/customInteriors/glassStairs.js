import React, {Component} from 'react';

import glassstairs1 from '../../media/images/custominteriors/glassstairs/glassstairs1.jpg';
import glassstairs2 from '../../media/images/custominteriors/glassstairs/glassstairs2.jpg';

import '../../styles/customInteriors/glassstairs.css';

class GlassStairs extends Component{
    render(){
        return(
            <div className = "maindiv container-fluid">
                    <div className="row">
                        <div className="col-sm-4 onlyimage">
                            <img className="glassstairsimg1" src={glassstairs1} alt="glassstairs1"/>
                        </div>
                        <div className="col-sm-4 onlyimage">

                        </div>
                    </div>
            </div>
        );
    }
}
export default GlassStairs;