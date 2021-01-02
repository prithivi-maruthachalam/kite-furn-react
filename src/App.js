import { Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import Header from "./components/header.js";
import Home from "./components/home";
import ResidenceInteriors from "./components/residenceInteriors"
import ModularKitchens from "./components/modularKitchens"
import customInteriors from "./components/customInteriors"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/fonts.css';
import "./App.css";
import Favicon from "react-favicon";

import favIconImage from "./media/branding/logoIcon.png";
import CustomInteriors from "./components/customInteriors";

const App = () => {
  return (
    <div className="fluid-container text-center">
      <Favicon url={favIconImage}/>
      <Header/>
      <Switch>
        <Route path="/residenceInteriors">
          <ResidenceInteriors/>
        </Route>

        <Route path="/modularKitchens">
          <ModularKitchens/>
        </Route>

        <Route path="/customInteriors">
          <CustomInteriors/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
