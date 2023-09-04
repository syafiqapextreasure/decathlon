import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom'
import "./UserProfile.scss";
import { Row, Col, Button } from 'react-bootstrap';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Input from '../../components/input/Input'
import Select from '../../components/select/Select'
import Checkbox from '../../components/checkbox/Checkbox';

const UserProfile = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isNew = location?.state?.no === undefined;

    const roles = [
        {title: 'Select Role', value: '0'},
    ];

    const status = [
        {title: 'Active', value: 'active'},
    ]

    const states = [
        {title: 'Selangor', value: 'selangor'},
    ];

    const stores = [
        {title: 'Cyberjaya', value: 'cyberjaya'},
    ];

    const departments = [
        {title: 'Running', value: 'running'},
    ];

    return (
        <div className='content-body'>
            <Col sm={12} md={12} lg={8}>
                <Row style={{ marginBottom: '0px' }}>
                    <p className='subtitle'>Personal Information</p>
                    <Col md={6} lg={6}>
                        <Input label={'Name'} value={location.state?.name ?? ""} />
                    </Col>
                    <Col md={6} lg={6}>
                        <Input label={'Employee ID'} value={location.state?.employee_id ?? ""} />
                    </Col>
                    <Col md={6} lg={6}>
                        <Select label={'Role'} items={roles} />
                    </Col>
                    <Col md={6} lg={6}>
                        <Input label={'Email'} value={location.state?.email ?? ""} />
                    </Col>
                </Row>
                <Col md={6} lg={6}>
                    <Select label={'Status'} items={status} />
                </Col>
                <Col md={6} lg={6}>
                    <Select label={'Assign State'} items={states} />
                </Col>
                <Col md={6} lg={6}>
                    <Select label={'Assign Store'} items={stores} />
                </Col>
                <Col md={6} lg={6}>
                    <Select label={'Assign Department'} items={departments} />
                </Col>
                <Col md={6} lg={6}>
                    <div className='pwd-label'>Password</div>
                    <Button className='pwd-button' style={{ backgroundColor: '#F6F7F7', border:'1px solid #374151', color: '#374151' }}>
                        {isNew ? 'Generate Password' : 'Set New Password'}
                    </Button>
                </Col>
                {isNew && (
                    <Col md={6} lg={6} style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <div className='pwd-container'>
                            <input type='text' className='pwd-input' />
                            <div className='pwd-strength'>Strong</div>
                        </div>
                        <div className='pwd-hide'><VisibilityOffIcon/> Hide</div>
                    </Col>
                )}
                {isNew && (
                    <Checkbox label={'Send User Notification'} description={'Send the new user an email about their account'} />
                )}
                <hr className='mt-5' />
                
                <Link to="/User">
                    <Button className='button'  variant="" style={{border:'1px solid #C4C4C4'}} >CANCEL</Button>
                </Link>
                <Button className='button' variant="primary" onClick={() => navigate('/User')}>UPDATE PROFILE</Button>
                
            </Col>
        </div>
    )
}

export default UserProfile
