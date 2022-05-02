import React from 'react';
import './TipLabel.css';

const TipLabel = ({ title, amount }) => {
  return (
    <div className="tip-label">
      <div>
        <p className="title">{title}</p>
        <p className="per">/ person</p>
      </div>
      <h1 className="amount">{`$${parseFloat(amount)}`}</h1>
    </div>
  );
};

export default TipLabel;
