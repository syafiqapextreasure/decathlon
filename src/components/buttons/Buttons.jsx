import React from 'react';
import "./buttons.css";
import { ArrowRightOutlined, KeyboardArrowDownOutlined } from '@mui/icons-material';
import SelectBox from '../selectBox/SelectBox';
import WeekPicker from '../weekPicker/WeekPicker';
import DayPicker from '../dayPicker/DayPicker';

const Buttons = ({ currentPage }) => {
  const renderButtons = () => {
    if (currentPage === '') {
      return (
        <>
          <div className="button">
            <button>Select State</button>
            <ArrowRightOutlined className='icon' />
          </div>
          <div className="button">
            <button>Select Store</button>
            <ArrowRightOutlined className='icon' />
          </div>
          <div className="button">
            <button>Select Department</button>
            <ArrowRightOutlined className='icon' />
          </div>
        </>
      );
    } else if (currentPage === 'Annual-Schedule') {
      return (
        <>
          <div className="button">
            <button>Select State</button>
            <ArrowRightOutlined className='icon' />
          </div>
          <div className="button">
            <button>Select Store</button>
            <ArrowRightOutlined className='icon' />
          </div>
          <div className="button">
            <button>Select Department</button>
            <ArrowRightOutlined className='icon' />
          </div>
          <div className="button btn">
            <button className='btn'>Apply</button>
          </div>
        </>
      );
    } else if (currentPage === 'Weekly-Schedule') {
      return (
        <>
          <div className="button btn">
            <button className='btn'>Today</button>
          </div>
          <SelectBox name="Select State" options={['Option 1', 'Option 2', 'Option 3']} />
          <SelectBox name="Select Store" options={['Option 1', 'Option 2', 'Option 3']} />
          <SelectBox name="Select Department" options={['Option 1', 'Option 2', 'Option 3']} />
          <WeekPicker/> 
          {/* <DayPicker/>  */}
          <div className="button btn">
            <button className='btn'>Apply</button>
          </div>
        </>
      );
    }
  };

  const renderYearButton = () => {
    if (currentPage === "") {
        return (
            <>
                <div className="yearButton">
                    <button>2023</button>
                    <KeyboardArrowDownOutlined className='icon' />
                </div>
            </>
        )
    }
  }

  return (
    <div className='buttonsContainer'>
      <div className='buttons'>
        {renderButtons()}
      </div>
      <div className="year">
      {renderYearButton()}
      </div>
    </div>
  );
}

export default Buttons;
