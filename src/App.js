import React from 'react';
import logo from './images/logo.svg';
import './App.css';
import TipCalculator from './components/TipCalculator';
import Appendix from './components/Appendix/Appendix';

const App = () => {
  return (
    <div className="wrapper">
      <img src={logo} className="logo" alt="splitter" />
      <TipCalculator />
      <Appendix />
    </div>
  );
};

export default App;
