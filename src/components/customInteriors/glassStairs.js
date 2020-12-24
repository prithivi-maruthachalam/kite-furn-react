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
                        <div className = "subcol2">
                            <div className = "subtext1">
                            blah blah blah b blah blah sbs subtext line
                            </div>
                            <div className = "subtext2">
                            A bunch of text here blah blah blah. 
                            Oi lala lal blahA bunch of text here 
                            blah blah blah. Oi lala lal blahA
                            bunch of text here blah blah blah. Oi
                            lala lal blahA bunch of text here blah 
                            blah blah. Oi lala lal blah
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default GlassStairs;