import React from 'react';
import './Label.css';

const Label = ({ children, className, labelFor }) => {
  return (
    <label htmlFor={labelFor} className={`form-label ${className}`}>
      {children}
    </label>
  );
};

export default Label;
