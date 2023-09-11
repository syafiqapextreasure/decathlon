import React from 'react';
import "./select.scss";
import { Form } from 'react-bootstrap';

const Select = (props) => {
  return (
    <div className='custom-form-select'>
      <div className='custom-select-label'>{ props.label }</div>
      <Form.Select className='custom-select-field'>
        {props.items.map(item => {
          return (
            <>
            {props.value === item.value ? (
              <option value={item.value} selected>{item.title}</option>
            ) : (
              <option value={item.value}>{item.title}</option>
            )}
            </>
          )
        })}
      </Form.Select>
    </div>
  );
}

export default Select;
