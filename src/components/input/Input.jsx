import React from 'react';
import "./input.scss";

const Input = ({ label, value }) => {
  return (
    <div className='form-input'>
      <div className='input-label'>{ label }</div>
      <input className='input-field' value={value} />
    </div>
  );
}

export default Input;
