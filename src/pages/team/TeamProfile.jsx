import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom'
import "./TeamProfile.scss";
import { Row, Col, Button } from 'react-bootstrap';
import Input from '../../components/input/Input'
import Select from '../../components/select/Select'

const TeamProfile = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const genders = [
        {title: 'Female', value: 'female'},
        {title: 'Male', value: 'male'},
    ];

    const states = [
        {title: 'Selangor', value: 'selangor'},
    ];

    const stores = [
        {title: 'Cyberjaya', value: 'cyberjaya'},
    ];

    const departments = [
        {title: 'Running', value: 'running'},
    ];

    const blacklist = [
        {title: 'No', value: 'no'},
        {title: 'Yes', value: 'yes'},
    ];

    return (
        <div className='content-body'>
            <Col sm={12} md={12} lg={8}>
                <Row>
                    <p className='subtitle'>Personal Information</p>
                    <Col md={6} lg={6}>
                        <Input label={'Name'} value={location.state?.name ?? ""} />
                    </Col>
                    <Col md={6} lg={6}>
                        <Input label={'Designation'} value={location.state?.designation ?? ""} />
                    </Col>
                    <Col md={6} lg={6}>
                        <Input label={'Employee ID'} value={location.state?.employee_id ?? ""} />
                    </Col>
                    <Col md={6} lg={6}>
                        <Input label={'Hire Date'} value={location.state?.hire_date ?? ""} />
                    </Col>
                    <Col md={6} lg={6}>
                        <Select label={'Gender'} items={genders}/>
                    </Col>
                    <Col md={6} lg={6}>
                        <Input label={'Start Date'} value={location.state?.start_date ?? ""} />
                    </Col>
                    <Col md={6} lg={6}>
                        <Input label={'Email'} value={location.state?.email ?? ""} />
                    </Col>
                    <Col md={6} lg={6}>
                        <Input label={'Employee Class'} value={location.state?.employee_class ?? ""} />
                    </Col>
                    <Col md={6} lg={6}>
                        <Select label={'State'} items={states} />
                    </Col>
                    <Col md={6} lg={6}>
                        <Input label={'Employee Type'} value={location.state?.employee_type ?? ""} />
                    </Col>
                    <Col md={6} lg={6}>
                        <Select label={'Store'} items={stores} />
                    </Col>
                    <Col md={6} lg={6}>
                        <Input label={'Cost Centre Code'} value={location.state?.cost_centre_code ?? ""} />
                    </Col>
                    <Col md={6} lg={6}>
                        <Select label={'Department'} items={departments} />
                    </Col>
                    <Col md={6} lg={6}>
                        <Input label={'Department Code'} value={location.state?.department_code ?? ""} />
                    </Col>
                    <Col md={6} lg={6}>
                        <Select label={'Blacklist Status'} items={blacklist} />
                    </Col>
                    <hr className='mt-5'/>
                </Row>
                <Row>
                    <p className='subtitle'>Contract</p>
                    <Col md={6} lg={6}>
                        <Input label={'Annual Leave (Days)'} />
                    </Col>
                    <Col md={6} lg={6}>
                        <Input label={'Weekly Hours'} />
                    </Col>
                    <Col md={6} lg={6}>
                        <Input label={'Medical Leave (Days)'} />
                    </Col>
                    <Col md={6} lg={6}>
                        <Input label={'Annual Contract Hours'} />
                    </Col>
                    <hr className='mt-5'/>
                </Row>
                
                <Link to="/Team">
                    <Button className='button'  variant="" style={{border:'1px solid #C4C4C4'}} >CANCEL</Button>
                </Link>
                <Button className='button' variant="primary" onClick={() => navigate('/Team')}>UPDATE PROFILE</Button>
                
            </Col>
        </div>
    )
}

export default TeamProfile
