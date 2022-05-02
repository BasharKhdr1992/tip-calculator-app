import React, { useContext, useEffect } from 'react';
import './Screen.css';
import Reset from '../UI/Reset';
import TipLabel from '../UI/TipLabel';
import { TipContext } from '../../context/TipContext';

const Screen = () => {
  const {
    tipAmount,
    persons,
    updateTipAmount,
    customTip,
    bill,
    selectedTip,
    reset,
  } = useContext(TipContext);

  useEffect(() => {
    updateTipAmount();
  }, [persons, customTip, selectedTip, bill, updateTipAmount]);

  let tipPerPerson = persons > 0 ? tipAmount / persons : 0.0;

  let amountPerPerson = persons > 0 ? bill / persons : 0.0;

  return (
    <div className="screen">
      <div className="tip-labels">
        <TipLabel title={'Tip Amount'} amount={tipPerPerson} />
        <TipLabel title={'Total'} amount={amountPerPerson + tipPerPerson} />
      </div>
      <Reset onClick={reset} />
    </div>
  );
};

export default Screen;
