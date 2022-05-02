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

  let perPerson = persons > 0 ? tipAmount / persons : 0;

  return (
    <div className="screen">
      <div className="tip-labels">
        <TipLabel title={'Tip Amount'} amount={tipAmount.toFixed(2)} />
        <TipLabel title={'Total'} amount={perPerson.toFixed(2)} />
      </div>
      <Reset onClick={reset} />
    </div>
  );
};

export default Screen;
