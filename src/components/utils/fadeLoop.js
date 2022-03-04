import React, {Component} from 'react';


const imgBaseStyle = {
    height: "100%",
    width: "auto",

    position:"absolute",
    top:"0",
    right: "0"
}

class CrossfadeLoop extends Component{
    constructor(props){
        super(props);
        this.state = {
            op1: "1",
            op2: "0"
        }
    }

    componentDidMount(){
        setInterval(
            () => {
                this.setState({
                    op1: (this.state.op2 === "0") ? "0" : "1",
                    op2: (this.state.op2 === "0") ? "1" : "0"
                });
            } 
        ,this.props.interval)
    }

    render(){
        return(
            <div className={this.props.ClassValue} style={{
                position:"relative"
            }}>
                <img src={this.props.src[0]} style={{
                    ...imgBaseStyle,
                    ...{transition: `all ${this.props.anim_duration/1000}s`, opacity:this.state.op1}
                }} alt={this.props.alt[0]}/>
                
                <img src={this.props.src[1]} style={{
                    ...imgBaseStyle,
                    ...{transition: `all ${this.props.anim_duration/1000}s`, opacity:this.state.op2}
                }} alt={this.props.alt[1]}/>
            </div>
        );
    }
}

CrossfadeLoop.defaultProps = {
    anim_duration: 1000,
    anim_fuction: "ease",
    interval: 1000
}

export default CrossfadeLoop;