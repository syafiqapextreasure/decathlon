import React from 'react';
import "./select.scss";
import { Form } from 'react-bootstrap';

const Select = ({ label, items }) => {
  return (
    <div className='custom-form-select'>
      <div className='custom-select-label'>{ label }</div>
      <Form.Select className='custom-select-field'>
        {items.map(item => {
          return (
            <option value={item.value}>{item.title}</option>
          )
        })}
      </Form.Select>
    </div>
  );
}

export default Select;
