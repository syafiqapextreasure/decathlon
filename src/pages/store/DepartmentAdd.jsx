import React from 'react';
import { Row, Col, Button} from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom';
import InputwithLabel from '../../components/input/InputwithLabel'
import SelectwithLabel from '../../components/select/SelectwithLabel'

const DepartmentAdd = () => {
    const navigate = useNavigate();
    const category_options = [
        {title: 'Store1', value: 'store1'},
        {title: 'Store2', value: 'store2'},
    ];
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
                    <SelectwithLabel label={'Store'} items={category_options}/>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={10} lg={6}>
                    <InputwithLabel label={'Department Name'} type="textarea"/>
                </Col>
            </Row>
            <Link to="/Store/Department"><Button variant="" style={{border:'1px solid #C4C4C4'}}>CANCEL</Button></Link>
            <Button className='button' variant="primary" onClick={() => navigate('/Store/Department')}>SAVE</Button>
        </div>
    )
}

export default DepartmentAdd
