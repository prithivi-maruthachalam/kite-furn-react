import React, {Component} from 'react';
import phoneIcon from '../../media/icons/phone-icon.png';

const imgClass = {
    height: "15px",
    width: "auto",
    marginLeft: "10px",
    marginTop: "-2px",
    opacity: "0.7"
}

const btnClass = {
    borderRadius: "5px",
    fontWeight: "500",
    border: "none",
    outline: "none",

    color: "#ffffff",

    background: "linear-gradient(135deg, #7fc4e4, #6bb5e0)",
    boxShadow:  "2px 2px 10px #338ac9,  -2px -2px 10px #89b8df",
}

class PhoneNumber extends Component{
    constructor(props){
        super(props);
        this.state = {
            buttonClassName : "hover-shake " + this.props.className
        }
        this.numberLink = "tel:" + this.props.employeeNumber;
    }
    render(){
        return(
            <a href={this.numberLink}>
                <button className={this.state.buttonClassName} style={{...btnClass}}>
                Call {this.props.employeeName} @ {this.props.employeeNumber} 
                <img src={phoneIcon} alt={this.props.alt} style={{...imgClass}}/>
                </button>
            </a>
        );
    }
}

export default PhoneNumber;