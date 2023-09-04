import React from 'react'
import "./calendar.scss";
import CustomCalendar from '../../components/calendar/CustomCalendar';
import SelectBox from '../../components/selectBox/SelectBox';

import { Row, Col, Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';
const AnnualSchedule = () => {
  return (
    <div className='content-body'>
      <Row className='subheader'>
          <Col sm={12} md={4} lg={4}>
            <div className='d-flex'>
              <Link to="/Annual-Schedule/Public-Holidays">
                <Button variant="primary">Public Holidays</Button>
              </Link>
            </div>
          </Col>
          <Col sm={12} md={4} lg={3}>
            <div className='d-flex text-right-spec'>
              <SelectBox name="Select State" options={['Option 1', 'Option 2', 'Option 3']} />
            </div>
          </Col>
      </Row>
      <Row>
          <CustomCalendar />   
      </Row>
    </div>
  )
}

export default AnnualSchedule
