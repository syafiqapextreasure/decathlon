import React from 'react'
import "./annualSchedule.scss";
import IndicatorGrid from '../../components/dataGrid/IndicatorGrid';
import SelectBox from '../../components/selectBox/SelectBox';
import { Row, Col, Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';
const AnnualSchedule = () => {
  return (
    <div className='content-body'>
      <Row>
          <Col sm={12} md={4} lg={4}>
            <div className='d-flex'>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <Button variant="" style={{background:'#F59C1A', color:'white'}}>EDIT</Button>
              </Link>
              <Button variant="" style={{background:'#00ACAC', color:'white'}}>SAVE</Button>
            </div>
          </Col>
          <Col sm={12} md={8} lg={7}>
            <div className='d-flex text-right-spec'>
              <SelectBox name="Select State" options={['Option 1', 'Option 2', 'Option 3']} />
              <SelectBox name="Select Store" options={['Option 1', 'Option 2', 'Option 3']} />
              <SelectBox name="All" options={['Option 1', 'Option 2', 'Option 3']} />
            </div>
          </Col>
          <Col sm={12} md={1} lg={1}>
          <Button variant="primary">Apply</Button>
          </Col>
      </Row>
      <Row>
          <IndicatorGrid />         
      </Row>
    </div>
  )
}

export default AnnualSchedule
