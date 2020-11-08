import { Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import Header from "./components/header.js";
import Home from "./components/home";
import WorkInProgress from "./components/workInProgress";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/fonts.css';
import "./App.css";
import Favicon from "react-favicon";

import favIconImage from "./media/branding/logoIcon.png";

const App = () => {
  return (
    <div className="fluid-container text-center">
      <Favicon url={favIconImage}/>
      <Header/>
      <Switch>
        <Route path="/residenceInteriors">
          <WorkInProgress/>
        </Route>

        <Route path="/modularKitchens">
          <WorkInProgress/>
        </Route>

        <Route path="/customInteriors">
          <WorkInProgress/>
        </Route>

        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
