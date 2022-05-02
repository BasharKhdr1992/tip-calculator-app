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
  const [bill, setBill] = useState('');
  const [persons, setPersons] = useState('');
  const [tips, setTips] = useState(data);
  const [selectedTip, setSelectedTip] = useState(0);
  const [customTip, setCustomTip] = useState('');
  const [tipAmount, setTipAmount] = useState(0);

  const updateTipAmount = () => {
    if (+persons > 0) {
      if (!isNaN(+bill)) {
        if (customTip > 0) {
          setTipAmount((+bill * +customTip) / 100);
        } else {
          setTipAmount((+bill * selectedTip) / 100);
        }
      }
    }
  };

  const reset = () => {
    setTipAmount(0);
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
