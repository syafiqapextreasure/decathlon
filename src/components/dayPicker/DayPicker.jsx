import React, { useState, useRef, useContext , useEffect} from 'react';
import Calendar from 'react-calendar';
import './dayPicker.css';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { ArrowRightOutlined } from '@mui/icons-material';
import { MyContext } from '../../MyContext';

const DayPicker = () => {
  const [selectDay, setSelectDay] = useState(moment());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef(null);

  const {data, setData} = useContext(MyContext);

  const handleWeekChange = (date) => {
    setSelectDay(moment(date));
    setIsCalendarOpen(false);
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const formatSelectedWeek = () => {
    const date = selectDay.format('dddd MMM DD YYYY');
    return date;
  };

  
  return (
    <div className="week-picker button">
      <button onClick={toggleCalendar}>{formatSelectedWeek()} </button>
      {isCalendarOpen && (
        <div ref={calendarRef} className="calendar-container">
        <Calendar
          calendarType='ISO 8601'
          value={moment(selectDay)}
          onChange={handleWeekChange}
        />
      </div>)}
      <ArrowRightOutlined className='icon' />
    </div>
  );
};

export default DayPicker;