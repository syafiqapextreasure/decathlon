import React from 'react';
import "./select.scss";
import { Form } from 'react-bootstrap';

const SelectwithLabel = (props) => {
  const changeOption = (event) => {
    if (props.onChange){
      props.onChange(event.target.value);
    }
  }

  return (
    <div className='custom-form-select d-flex'>
      <div className='label-select'>{ props.label }</div>
      <Form.Select className='custom-select-field label-select-field' onChange={changeOption}>
        {props.items.map(item => {
          return (
            <option value={item.value}>{item.title}</option>
          )
        })}
      </Form.Select>
    </div>
  );
}

export default SelectwithLabel;
