import React, {useState} from 'react';
import { Row, Col, Button} from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom';
import InputwithLabel from '../../components/input/InputwithLabel'
import SelectwithLabel from '../../components/select/SelectwithLabel'

const StoreAdd = () => {
    const navigate = useNavigate();
    const state_options = [
        {title: 'SC', value: 'sc'},
        {title: 'NY', value: 'ny'},
    ];

    return (
        <div className='content-body'>
            <Row>
                <Col sm={12} md={10} lg={6}>
                    <SelectwithLabel label={'State'} items={state_options}/>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={10} lg={6}>
                    <InputwithLabel label={'Store Name'} type="textarea"/>
                </Col>
            </Row>
            <Link to="/Store"><Button variant="" style={{border:'1px solid #C4C4C4'}}>CANCEL</Button></Link>
            <Button className='button' variant="primary" onClick={() => navigate('/Store')}>SAVE</Button>
        </div>
    )
}

export default StoreAdd
