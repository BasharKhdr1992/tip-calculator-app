import React from 'react';
import './Tip.css';

const Tip = ({ value, onClick, className }) => {
  return (
    <button
      className={`tip ${className}`}
      onClick={onClick}
    >{`${value}%`}</button>
  );
};

export default Tip;
