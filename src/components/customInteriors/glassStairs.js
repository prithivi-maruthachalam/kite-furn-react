import React, {Component} from 'react';

import glassstairs1 from '../../media/images/custominteriors/glassstairs/glassstairs1.jpg';
import glassstairs2 from '../../media/images/custominteriors/glassstairs/glassstairs2.jpg';

import '../../styles/customInteriors/glassstairs.css';

class GlassStairs extends Component{
    render(){
        return(
            <div className = "maindiv">
                <div className = "col1"></div>
                <div className = "col2">
                    <div className = "headerrow">
                        <div className = "bigboldtext">GLASS STAIRS</div>
                    </div>
                    <div className = "subcolumns">
                        <div className = "subcol1"></div>
                        <div className = "subcol2"></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default GlassStairs;