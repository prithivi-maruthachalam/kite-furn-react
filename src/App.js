import { Route, Switch} from "react-router-dom";
import React from 'react';
import Favicon from "react-favicon";

import Header from "./components/header.js";
import Home from "./components/home";
import ResidenceInteriors from "./components/residenceInteriors"
import ModularKitchens from "./components/modularKitchens"
import CustomInteriors from "./components/customInteriors"

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/fonts.css';
import "./App.css";

import favIconImage from "./media/branding/logoIcon.png";

const App = () => {
  return (
    <div className="fluid-container text-center">
      <Favicon url={favIconImage} />
      
      <Header />

      <div className="fluid-container globalContainer">
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

          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
