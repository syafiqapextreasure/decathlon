import React from 'react';
import "./calendar.scss";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Button } from 'react-bootstrap';

const CustomToolbar = ({ label, onView, onNavigate }) => {
  const handleNavigate = (action) => {
    onNavigate(action);
  };

  return (
    <div style={{
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      fontSize: '1.125rem',
      marginBottom: '35px'
      }}>
      <Button style={{ border: 'none', backgroundColor: 'inherit', color: '#A3A3A3', fontSize: '1.125rem', marginBottom: '0px' }} onClick={() => handleNavigate('PREV')}> {'<'} </Button>
      <span style={{width: '100px'}}>
        {label.substring(0, label.lastIndexOf(' '))}
      </span>
      <Button style={{ border: 'none', backgroundColor: 'inherit', color: '#A3A3A3', fontSize: '1.125rem', marginBottom: '0px' }} onClick={() => handleNavigate('NEXT')}> {'>'} </Button>
    </div>
  );
};

const CustomCalendar = () => {
  const localizer = momentLocalizer(moment);

  const handleSelectEvent = (event, e) => {
    e.preventDefault(); // Prevent the default behavior
  };

  const calendarStyle = (date) => {
    if (date.getDay() === 0) {
      return {
        style: {
          backgroundColor: '#FFADAD', // Change this to your preferred color
        },
      };
    }
    return {};
  }

  const formats = {
    dateFormat: 'D',
  }

  return (
    <Calendar
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      defaultView='month'
      view='month'
      components={{
        toolbar: CustomToolbar,
      }}
      onSelectEvent={handleSelectEvent}
      dayPropGetter={calendarStyle}
      formats={formats}
      style={{ height: 500 }} />
  );
}

export default CustomCalendar;
