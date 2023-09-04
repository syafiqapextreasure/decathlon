import React from 'react';
import "./checkbox.scss";

const Checkbox = ({ label, description }) => {
  return (
    <div className='form-checkbox'>
      <div className='checkbox-label'>{ label }</div>
      <div className='checkbox-container'>
        <input type="checkbox" id={label} style={{ verticalAlign: 'middle'}} />
        <label for={label} className='description'>{description}</label>
      </div>
    </div>
  );
}

export default Checkbox;
