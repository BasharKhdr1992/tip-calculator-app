import React from 'react';
import logo from './images/logo.svg';
import './App.css';
import TipCalculator from './components/TipCalculator';

const App = () => {
  return (
    <div className="wrapper">
      <img src={logo} className="logo" alt="splitter" />
      <TipCalculator />
    </div>
  );
};

export default App;
