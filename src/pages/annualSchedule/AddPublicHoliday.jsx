import React, {useState} from 'react';
import { Row, Col, Button} from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom';
import InputwithLabel from '../../components/input/InputwithLabel'
import SelectwithLabel from '../../components/select/SelectwithLabel'

const AddPublicHoliday = () => {
    const [selectedCategory, setSelectedCategory] = useState('country');
    const navigate = useNavigate();
    const category_options = [
        {title: 'Country', value: 'country'},
        {title: 'State', value: 'state'},
    ];
    const state_options = [
        {title: 'SC', value: 'sc'},
        {title: 'NY', value: 'ny'},
    ];

    return (
        <div className='content-body'>
            <Row>
                <Col sm={12} md={10} lg={6}>
                    <SelectwithLabel label={'Category'} items={category_options} onChange={(option) => {setSelectedCategory(option)}}/>
                </Col>
            </Row>
            {selectedCategory === 'state' && (
            <Row>
                <Col sm={12} md={10} lg={6}>
                    <SelectwithLabel label={'State'} items={state_options}/>
                </Col>
            </Row>
            )}
            <Row>
                <Col sm={12} md={10} lg={6}>
                    <InputwithLabel label={'Title'} type="textarea"/>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={10} lg={6}>
                    <InputwithLabel label={'Date'} type="date"/>
                </Col>
            </Row>
            <Row>
            <Row>
                <Col sm={12} md={10} lg={6}>
                    <InputwithLabel label={'Colour'} type="color"/>
                </Col>
            </Row>
            </Row>
            <Button className='button' variant="primary" onClick={() => navigate('/Annual-Schedule/Public-Holidays')}>SAVE</Button>
        </div>
    )
}

export default AddPublicHoliday
