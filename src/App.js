import { Route, Routes } from "react-router-dom";
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
        <Routes>
          <Route path="/residenceInteriors" element={<ResidenceInteriors/>}>
          </Route>

          <Route path="/modularKitchens" element={<ModularKitchens/>}>
          </Route>

          <Route path="/customInteriors" element={<CustomInteriors/>}>
          </Route>

          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
