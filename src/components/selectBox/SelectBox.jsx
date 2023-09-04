import React, { useState, useRef, useEffect } from 'react';
import './selectBox.scss';
import { ArrowDropDownOutlined } from '@mui/icons-material';

const SelectBox = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const options = props.options || [];
  const selectBoxRef = useRef(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if(props.changeOption !== undefined){
      props.changeOption(option);
    }
    setIsOpen(false);
  };

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };


  const handleOutsideClick = (event) => {
    if (selectBoxRef.current && !selectBoxRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="select-box" onClick={toggleOptions}  ref={selectBoxRef}>
      <div className='select-button'>
        {selectedOption || props.name}
      </div>
      <ArrowDropDownOutlined className='icon' />

      {isOpen && (
        <ul className="options">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectBox;