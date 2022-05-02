import React, { useContext } from 'react';
import { TipContext } from '../../context/TipContext';
import './CustomTip.css';

const CustomTip = () => {
  const { customTip, setCustomTip } = useContext(TipContext);

  const updateCustomTip = (e) => {
    setCustomTip(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Custom"
      className="custom-tip"
      value={customTip}
      onChange={updateCustomTip}
    />
  );
};

export default CustomTip;
