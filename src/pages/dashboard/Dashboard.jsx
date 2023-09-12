import React, {useEffect} from 'react'
import { useNavigate} from "react-router-dom";
import "./dashboard.css"
import ToChart from '../../components/toChart/ToChart'
import HourChart from '../../components/hourChart/HourChart'
import DifferenceChart from '../../components/differneceChart/DifferenceChart'
import SelectBox from '../../components/selectBox/SelectBox';
import { Row, Col} from 'react-bootstrap';

const Dashboard = (props) => {
  return (
    <>
    {props.isLoggedIn ? (
      <div className='content-body'>
        <Row>
          <Col sm={12} md={12} lg={6}>
            <div className='d-flex'>
              <SelectBox name="Select State" options={['Option 1', 'Option 2', 'Option 3']} />
              <SelectBox name="Select Store" options={['Option 1', 'Option 2', 'Option 3']} />
              <SelectBox name="Select Department" options={['Option 1', 'Option 2', 'Option 3']} />
            </div>
          </Col>
          <Col sm={0} md={0} lg={2}></Col>
          <Col sm={12} md={12} lg={4}>
            <div className='d-flex text-right-spec'>
              <SelectBox name="2023" options={['Option 1', 'Option 2', 'Option 3']} />
              <SelectBox name="All Week" options={['Option 1', 'Option 2', 'Option 3']} />
            </div>
          </Col>
        </Row>
        <Row>
          <DifferenceChart />
        </Row>
        <Row>
          <ToChart />
        </Row>
        <Row>
          <HourChart />
        </Row>
      </div>
      
    ): (
      <></>
    )}
    </>      
  )
}

export default Dashboard
