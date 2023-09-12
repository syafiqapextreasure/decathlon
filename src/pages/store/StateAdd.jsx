import React, {useState} from 'react';
import { Row, Col, Button} from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom';
import InputwithLabel from '../../components/input/InputwithLabel'

const StateAdd = () => {
    const navigate = useNavigate();
    return (
        <div className='content-body'>
            <Row>
                <Col sm={12} md={10} lg={6}>
                    <InputwithLabel label={'State Name'} type="text"/>
                </Col>
            </Row>
            <Link to="/Store/State"><Button variant="" style={{border:'1px solid #C4C4C4'}}>CANCEL</Button></Link>
            <Button className='button' variant="primary" onClick={() => navigate('/Store/State')}>SAVE</Button>
        </div>
    )
}

export default StateAdd
