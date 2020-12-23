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
                        <div className="col-sm-8 onlyimage">
                            <div className = "bigboldtext">GLASS STAIRCASES</div>
                            <div className="row">
                                <div className="col-sm-4 secondimage">
                                <img className="glassstairsimg2" src={glassstairs2} alt="glassstairs2"/>
                                </div>
                                <div className="col-sm-8 subtext">
                                    <div className = "subtext1">blah blah blah b blah blah sbs subtext line</div>
                                    <div className = "subtext2">A bunch of text here blah blah blah.
                                        Oi lala lal blahA bunch of text hereblah blah blah.
                                        Oi lala lal blahxt here blah blah blah. 
                                        Oi lala lal blahA bunch of text here blahblah blah.
                                        Oi lala lal blah</div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
export default GlassStairs;