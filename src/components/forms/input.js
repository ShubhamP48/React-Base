import React from 'react';
import InputProps from '../demo-compenent/TypeBaseForm/input.interface';
function Input({ label, type, name, value, onChange, className, status, error }) {
  let inputClassName = className;
  if (status === 'success') {
    inputClassName += ' success';
  } else if (status === 'error') {
    inputClassName += ' error';
  } else if (status === 'warning') {
    inputClassName += ' warning';
  }
  return (
    <div>      <label htmlFor={name}>{label}</label>      <input type={type} id={name} name={name} value={value} onChange={onChange} className={inputClassName} />      {error && <div className="error-msg">{error}</div>}
    </div>  );
}
export default Input;