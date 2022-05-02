import React, { createContext, useState } from 'react';

const data = [
  {
    id: 1,
    value: 5,
  },
  {
    id: 2,
    value: 10,
  },
  {
    id: 3,
    value: 15,
  },
  {
    id: 4,
    value: 20,
  },
  {
    id: 5,
    value: 25,
  },
];

export const TipContext = createContext();

export const TipProvider = (props) => {
  const [bill, setBill] = useState(0);
  const [persons, setPersons] = useState('');
  const [tips, setTips] = useState(data);
  const [selectedTip, setSelectedTip] = useState(0);
  const [customTip, setCustomTip] = useState('');
  const [tipAmount, setTipAmount] = useState(0.0);

  const updateTipAmount = () => {
    if (persons > 0) {
      if (!isNaN(+bill)) {
        let newTipAmount;

        if (customTip > 0) {
          newTipAmount = (+bill * +customTip) / 100;
        } else {
          newTipAmount = (+bill * +selectedTip) / 100;
        }

        setTipAmount(newTipAmount);
      }
    }
  };

  const reset = () => {
    setTipAmount(0.0);
    setSelectedTip(0);
    setCustomTip('');
    setPersons('');
    setBill('');
  };

  return (
    <TipContext.Provider
      value={{
        bill,
        setBill,
        persons,
        setPersons,
        tips,
        setTips,
        selectedTip,
        setSelectedTip,
        customTip,
        setCustomTip,
        tipAmount,
        updateTipAmount,
        reset,
      }}
    >
      {props.children}
    </TipContext.Provider>
  );
};
