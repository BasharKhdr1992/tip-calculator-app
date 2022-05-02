import React, { useContext } from 'react';
import './TipSelector.css';
import Label from '../UI/Label';
import Tip from './Tip';
import CustomTip from './CustomTip';
import { TipContext } from './../../context/TipContext';

const TipSelector = () => {
  const { tips, selectedTip, setSelectedTip } = useContext(TipContext);

  const selectTip = (value) => setSelectedTip(value);

  return (
    <div className="tip-selector">
      <Label className={'mt-1'}>Select Tip %</Label>
      <div className="tip-selector-grid">
        {tips.map((tip) => (
          <Tip
            key={tip.id}
            value={tip.value.toString()}
            className={selectedTip === tip.value ? 'selected' : undefined}
            onClick={() => selectTip(tip.value)}
          />
        ))}
        <CustomTip />
      </div>
    </div>
  );
};

export default TipSelector;
