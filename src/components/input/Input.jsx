import React from 'react';
import "./input.scss";

const Input = (props) => {
  return (
    <div className='form-input'>
      <div className='input-label'>{props.label }</div>
      <input type={props.type ? props.type: 'text'} placeholder={props.placeholder?props.placeholder:''}
        className={'input-field ' + (props.className ? props.className : '')} value={props.value} onChange={(e) =>props.onChange(e)} />
    </div>
  );
}

export default Input;
