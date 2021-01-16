import React, {Component, createRef} from 'react';
import { CSSTransition } from "react-transition-group";
import {Link, withRouter} from 'react-router-dom';

import dropArrow from '../media/icons/icons8-triangle-arrow-96.png';
import homeIcon from '../media/icons/home-icon.png';
import mapIcon from '../media/icons/map_fat_orange.png';
import menuIcon from '../media/icons/menu.png';

import PhoneButton from './utils/phoneNumber';

import '../styles/animations.css';
import '../styles/header.css';


class Header extends Component{
    render(){
      return(
        <div className="header-container">
          <div className="site-header">
              <div className="col-head-box header-padding">
                <div className="col-head header-left">
                  <WrappedNav/>
                  <CollapsibleCustomMenu className="mx-2-5 header-button-base hover-flip">
                    Customized Interiors<img className="top-btn-arrow" src={dropArrow} alt=""/> 
                  </CollapsibleCustomMenu>
                </div>

                  <div className="col-head header-right">
                    <div className="nav-container">
                      <CollapsibleMenu/>
                      <a href="https://goo.gl/maps/u4nzcxS5XatMFXyA7" target="_blank">
                        <button className="header-button-base map-button">
                          <img src={mapIcon} alt="Interior showroom design 303-1, Trichy Road Singanallur Coimbatore" className="map-icon hover-shake"/>
                        </button>
                      </a>
                    </div>

                    <div className="phn-container">
                      <PhoneButton employeeName="Sajeesh" employeeNumber="8940401792" className="mx-2-5 call-btn-pad call-btn-A"/>
                      <PhoneButton employeeName="Prabhu" employeeNumber="8940401793" className="mx-2-5 call-btn-pad call-btn-B"/>
                    </div>
                    <Link to="/"><button className="btn btn-logo mx-2-5"/></Link>
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
      "/modularKitchens"
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

  componentDidMount(){
    let index = this.pathsList.indexOf(this.props.location.pathname);
    if(index === this.currentIndex)
      return

    this.currentIndex = index;
    this.navSwitch(index);
  }

  render(){
    return(
      <span>
        <Link to="/" className="resp-block">
          <button className={this.state.classnameslist[0]} onClick={() => this.navSwitch(0)}>
            <img className="top-btn-img-home" src={homeIcon} alt="space saving furniture for small homes"/>
          </button>
        </Link>  

        <Link to="/residenceInteriors" className="resp-block">
          <button className={this.state.classnameslist[1]} onClick={() => this.navSwitch(1)}>
            Residence Interiors
          </button>
        </Link>

        <a href="http://www.kitekitchens.com/" className="resp-block">
          <button className={this.state.classnameslist[2]} onClick={() => this.navSwitch(2)}>
            Modular Kitchens
          </button>
        </a>
      </span>
    );
  }
}
const WrappedNav = withRouter(NavMenu);

class CollapsibleMenu extends Component{
  constructor(props){
    super(props);
    this.state = {
      toggleClass: "coll-nav-container",
      inProp: false
    }

    this.toggleCount = 0;
    this.wrapperRef = createRef(null);
  }


  componentDidMount(){
    window.addEventListener("click",(event)=>{
      if(this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)){
        this.setState({inProp: false});
      }
      //alert(this.wrapperRef.current.contains(event.target));
    });
  }

  render(){
    return(
      <span className="coll-nav">
        <button ref={this.wrapperRef} className="header-button-base menu-button" onClick={()=>{this.setState({inProp: !this.state.inProp});}}>
          <img src={menuIcon} alt="Interior showroom design 303-1, Trichy Road Singanallur Coimbatore" className="map-icon hover-shake"/>
        </button>
        <CSSTransition
          in = {this.state.inProp}
          timeout={50}
          unmountOnExit
          classNames="coll-menu-drop"
        >
          <div className={this.state.toggleClass}>
            <div className="menu-top">
              <div className="menu-title">
                Menu
              </div>
              <div className="menu-title menu-close" onClick={()=>{this.setState({inProp: false});}}>X</div>
            </div>
            <WrappedNav/>
            <CustomMenu className="mx-2-5 header-button-base hover-flip resp-block">
              Customized Interiors<img className="top-btn-arrow" src={dropArrow} alt=""/> 
            </CustomMenu>
          </div>
        </CSSTransition>
      </span>
    );
  }
}

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
          classNames: (this.props.location.pathname == "/customInteriors") ? (this.props.className+" btn-nav-active") : (this.props.className+" btn-nav-inactive")
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
                <button className="btn btn-light btn-sub-nav" onClick={()=>{this.setState({inProp: false});}}>Hotel Interiors</button>
              </Link>

              <Link to="customInteriors">
                <button className="btn btn-light btn-sub-nav" onClick={()=>{this.setState({inProp: false});}}>Bakeries</button>
              </Link>
              
              <Link to="customInteriors">
                <button className="btn btn-light btn-sub-nav" onClick={()=>{this.setState({inProp: false});}}>Departmentals Stores</button>
              </Link>
              
              <Link to="customInteriors">  
                <button className="btn btn-light btn-sub-nav" onClick={()=>{this.setState({inProp: false});}}>Banquet &#38; Meeting Halls</button>
              </Link>

              <Link to="customInteriors">
                <button className="btn btn-light btn-sub-nav" onClick={() => { this.setState({ inProp: false }); }}>Offices</button>
              </Link>
              
              <Link to="customInteriors">  
                <button className="btn btn-light btn-sub-nav" onClick={()=>{this.setState({inProp: false});}}>View More</button>
              </Link>
            </div>
          </div>

        </CSSTransition>
      </span>
    );
  }
}

const CollapsibleCustomMenu = withRouter(CustomMenu);

export default Header;