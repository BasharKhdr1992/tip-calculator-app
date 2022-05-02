import React, { useContext } from 'react';
import './TipCalculator.css';
import Input from './Input/Input';
import dollar from '../images/icon-dollar.svg';
import person from '../images/icon-person.svg';
import TipSelector from './TipSelector/TipSelector';
import Screen from './screen/Screen';
import { TipContext } from './../context/TipContext';

const TipCalculator = () => {
  const { bill, setBill, persons, setPersons } = useContext(TipContext);

  const updateBill = (e) => {
    setBill(e.target.value);
  };

  const updatePersons = (e) => {
    setPersons(Math.max(0, +e.target.value));
  };

  return (
    <div className="tip-calculator">
      <div className="tip-calc-form">
        <Input
          icon={dollar}
          label={'Bill'}
          className={'bill'}
          value={bill}
          onInputChange={updateBill}
          type={'text'}
          name={'bill'}
        />
        <TipSelector />
        <Input
          icon={person}
          label={'Number of People'}
          className={'persons'}
          value={persons}
          name={'persons'}
          onInputChange={updatePersons}
          invalid={persons === 0}
          labelClassName={'mt-1'}
          type={'number'}
        />
      </div>
      <Screen />
    </div>
  );
};

export default TipCalculator;
