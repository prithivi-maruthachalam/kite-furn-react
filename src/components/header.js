import React, {Component, createRef} from 'react';
import { CSSTransition } from "react-transition-group";
import {Link, withRouter} from 'react-router-dom';

import dropArrow from '../media/icons/icons8-triangle-arrow-96.png';
import homeIcon from '../media/icons/home-icon.png';
import mapIcon from '../media/icons/map_fat_orange.png';

import PhoneButton from './utils/phoneNumber';

import '../styles/animations.css';
import '../styles/header.css';

class Header extends Component{
    render(){
      return(
        <div className="header-container">
        <div className="site-header">
              <div className="row header-padding">
                <div className="col-md-5 text-left header-left">
                  <WrappedNav/>
                  <CustomMenu className="mx-2-5 header-button-base hover-flip">
                    Customized Interiors<img className="top-btn-arrow" src={dropArrow} alt=""/> 
                  </CustomMenu>
                </div>

                  <div className="col-md-7 text-right header-right">
                    <a href="https://goo.gl/maps/u4nzcxS5XatMFXyA7" target="_blank">
                      <button className="header-button-base map-button">
                        <img src={mapIcon} alt="Interior showroom design 303-1, Trichy Road Singanallur Coimbatore" className="map-icon hover-shake"/>
                      </button>
                    </a>
                    <PhoneButton employeeName="Sajeesh" employeeNumber="8940401792" className="mx-2-5"/>
                    <PhoneButton employeeName="Prabhu" employeeNumber="8940401793" className="mx-2-5"/>
                    <Link exact to="/"><button className="btn btn-logo mx-2-5"/></Link>
                  </div>
              
              </div>
              <div className="hr-line mx-5-ish" />
          </div>
        </div>
      );
    }
}


class NavMenu extends Component{
  constructor(props){
    super(props);
    this.classNameList = [
      "mx-2-5 btn-nav header-button-base",
      "mx-2-5 btn-nav header-button-base",
      "mx-2-5 btn-nav header-button-base"
    ]
    this.state = {
      baseClassList:"mx-2-5 btn-nav header-button-base",
      classnameslist: this.classNameList,
    }

    this.pathsList = [
      "/",
      "/residenceInteriors",
      "/modularkitchens"
    ]

  }

  navSwitch = (index) => {
    var i=0;
    this.classNameList[index] += " btn-nav-target";
    for(;i<this.classNameList.length;i++){
      if(i !== index){
        this.classNameList[i] = this.state.baseClassList;
      }
    }
    this.setState({classnameslist: this.classNameList});
  }

  componentDidUpdate(){
    let index = this.pathsList.indexOf(this.props.location.pathname);
    if(index === this.currentIndex)
      return

    this.currentIndex = index;
    this.navSwitch(index);
  }

  componentWillMount(){
    let index = this.pathsList.indexOf(this.props.location.pathname);
    if(index === this.currentIndex)
      return

    this.currentIndex = index;
    this.navSwitch(index);
  }

  render(){
    return(
      <span onLoad={console.log(this.props.location.pathname)}>
        <Link to="/">
          <button className={this.state.classnameslist[0]} onClick={() => this.navSwitch(0)}>
            <img className="top-btn-img-home" src={homeIcon} alt="space saving furniture for small homes"/>
          </button>
        </Link>  

        <Link to="/residenceInteriors">
          <button className={this.state.classnameslist[1]} onClick={() => this.navSwitch(1)}>
            Residence Interiors
          </button>
        </Link>

        <Link to="/modularkitchens">
          <button className={this.state.classnameslist[2]} onClick={() => this.navSwitch(2)}>
            Modular Kitchens
          </button>
        </Link>
      </span>
    );
  }
}

const WrappedNav = withRouter(NavMenu);

class CustomMenu extends Component{
  constructor(props){
    super(props);
    this.state = {
      inProp: false,
      classNames: this.props.className + " btn-nav-inactive"
    }

    this.wrapperRef = createRef(null);
  }


  componentDidMount() {
    window.addEventListener("click", (event)=>{
      if (this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
        this.setState({
          inProp: false,
          classNames: (this.props.className+" btn-nav-inactive")
        });
      }
    });
  }

  switchIn = ()=>{
    this.setState({
      inProp: !this.state.inProp,
      classNames: (this.state.inProp ? this.props.className+" btn-nav-inactive" : this.props.className+" btn-nav-active")
    });
  }

  render(){
    return(
      <span className="dropdown-container" ref={this.wrapperRef}>
        <button className={this.state.classNames} onClick={this.switchIn}>
          {this.props.children}
        </button>

        <CSSTransition
          in = {this.state.inProp}
          timeout={500}
          unmountOnExit
          classNames="menu-drop"
        >

          <div className="menu-drop-internal text-center">
            <div className="menu-drop-buttons-container">
              <Link to="customInteriors">
                <button className="btn btn-light btn-sub-nav">Hotel Interiors</button>
              </Link>
              <Link to="customInteriors">
                <button className="btn btn-light btn-sub-nav">Bakeries</button>
              </Link>
                <button className="btn btn-light btn-sub-nav">Departmentals Stores</button>
              <Link to="customInteriors">  
                <button className="btn btn-light btn-sub-nav">Banquet &#38; Meeting Halls</button>
              </Link>
                <button className="btn btn-light btn-sub-nav">Offices</button>
              <Link to="customInteriors">  
                <button className="btn btn-light btn-sub-nav">View More</button>
              </Link>
            </div>
          </div>

        </CSSTransition>
      </span>
    );
  }
}

export default Header;