import React, { useState, useRef, useEffect, useContext } from 'react';
import Calendar from 'react-calendar';
import './weekPicker.scss';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { ArrowDropDownOutlined } from '@mui/icons-material';
import { MyContext } from '../../MyContext';

const WeekPicker = () => {
  const [selectedWeek, setSelectedWeek] = useState(moment().week());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const {data, setData} = useContext(MyContext);

  const calendarRef = useRef(null);

  const handleWeekChange = (date) => {
    setSelectedWeek(moment(date).week());
    setIsCalendarOpen(false);
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const isWeekActive = (date) => {
    const weekNumber = moment(date).isoWeek();
    return weekNumber === selectedWeek;
  };


  const formatSelectedWeek = () => {
    const startDate = moment().isoWeek(selectedWeek).startOf('isoWeek').format('MMM DD YYYY');
    const endDate = moment().isoWeek(selectedWeek).endOf('isoWeek').format('MMM DD YYYY');
    return `W${selectedWeek} | ${startDate} - ${endDate}`;
  };

  useEffect(() => {
    setData({...data, currentWeek: selectedWeek, currentDay: moment().isoWeek(selectedWeek).startOf('isoWeek').toDate(), dayIndex: 0});
  }, [selectedWeek]);

  
  return (
    <div className="week-picker select-box">
      <div className='select-button' onClick={toggleCalendar}>{formatSelectedWeek()} </div>
      {isCalendarOpen && (
        <div ref={calendarRef} className="calendar-container">
        <Calendar
          calendarType='ISO 8601'
          value={moment().isoWeek(selectedWeek).startOf('isoWeek')}
          onClickWeekNumber={(weekNumber) => setSelectedWeek(weekNumber)}
          onChange={handleWeekChange}
          tileClassName={({ date }) => (isWeekActive(date) ? 'active' : null)}
        />
      </div>)}
      <ArrowDropDownOutlined className='icon' />
    </div>
  );
};

export default WeekPicker;