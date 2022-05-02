import React from 'react';
import './Input.css';
import Label from '../UI/Label';
const Input = ({
  label,
  icon,
  type,
  className,
  labelClassName,
  invalid,
  onInputChange,
  value,
}) => {
  return (
    <div className="form-control">
      <div className="input-labels">
        <Label className={labelClassName}>{label}</Label>
        {invalid && (
          <Label className={`invalid ${labelClassName}`}>Can't be zero</Label>
        )}
      </div>
      <input
        type={type}
        value={value}
        onChange={onInputChange}
        className={invalid ? `${className} invalid` : className}
        style={{
          backgroundImage: `url(${icon})`,
        }}
      />
    </div>
  );
};

export default Input;
