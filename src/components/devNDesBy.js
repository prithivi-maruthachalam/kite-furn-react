import React, {Component} from 'react';
import '../styles/devNDes.css';

class DevSection extends Component{
    render(){
        return(
            <div className="fluid-container dev-base text-center" style={{...this.props.styling}}>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/prithivi-maruthachalam-3b8196179/" className="dev-text">
                    a <span>Prithivi Maruthachalam</span> production
                </a>
            </div>
        );
    }
}

export default DevSection;

DevSection.defaultProps = {
    styling : {
        backgroundColor: "#998f8f",
        fontSize: "20px",
        padding: "10px 0"
    }    
}