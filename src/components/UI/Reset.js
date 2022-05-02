import React from 'react';
import './Reset.css';

const Reset = ({ onClick }) => {
  return (
    <button className="btn-reset" onClick={onClick}>
      Reset
    </button>
  );
};

export default Reset;
