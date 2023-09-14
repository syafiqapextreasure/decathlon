import React, { useState } from 'react';
import { Row, Col, Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import Input from '../../components/input/Input';
import companyLogo from '../../asset/big-logo.png';

const TeamsSchedule = (props) => {
    return (
        <div className='content-body team-schedule'>
            <Row>
                <Col sm={0} md={2} lg={4}></Col>
                <Col sm={12} md={8} lg={4} style={{padding:'1rem'}}>
                    <div className=''><img style={{width:'80%', height:'6rem'}} src={companyLogo} alt=""/></div>
                    <div className='team-title'>Team Schedule</div>
                    <Input label={'EMPLOYEE ID'} type="text" placeholder={'Please enter your employee ID'} />
                    <div className='d-flex' style={{marginTop:'1rem', marginBottom:'1rem', paddingLeft:'10%'}}>
                        <div className=''>
                            <input type="checkbox" id={'remember'} style={{ lineHeight:'2rem'}} />
                            <label for={'remember'} className='description' style={{lineHeight:'2rem', marginLeft:'0.5rem'}}>{'Remember Me'}</label>
                        </div>
                    </div>
                    
                    <Button variant="primary" onClick={() => props.onLogin()} style={{width:'80%'}}>VIEW SCHEDULE</Button>
                </Col>
                <Col sm={0} md={2} lg={4}></Col>
            </Row>
        </div>
    )
}

export default TeamsSchedule
