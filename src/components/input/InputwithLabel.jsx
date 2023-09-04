import React from 'react';
import "./input.scss";

const InputwithLabel = (props) => {
  return (
    <div className='form-input d-flex'>
      <div className='input-label label-input'>{ props.label }</div>
      {props.type === 'textarea' ? (
        <textarea className='input-field label-input-field textarea' value={props.value}>{props.value}</textarea>
      ) : (
        <input type={props.type ? props.type : 'text'} className='input-field label-input-field' value={props.value} />
      )}
    </div>
  );
}

export default InputwithLabel;
