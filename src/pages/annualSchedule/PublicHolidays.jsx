import React, {useState} from 'react';
import { Row, Col, Button} from 'react-bootstrap';
import AddIcon from "@mui/icons-material/Add";
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import SelectBox from '../../components/selectBox/SelectBox';
import { Link } from 'react-router-dom';
const PublicHolidays = () => {
    const [selectedOption, setSelectedOption] = useState('Country');
    const handleOptionChange = (event, option) => {
        setSelectedOption(event.target.value);
    };

    const holiday_data = [
        {
            no:1,
            name:"New Year",
            date:'1 January 2023',
            color:'red',
        },
        {
            no:2,
            name:"Chinese's New Year",
            date:'22 January 2023',
            color:'pink',
        },
        {
            no:3,
            name:"Worker's Day",
            date:'1 May 2023',
            color:'green',
        },
        {
            no:4,
            name:"New Year",
            date:'1 January 2023',
            color:'red',
        },
        {
            no:5,
            name:"Chinese's New Year",
            date:'22 January 2023',
            color:'pink',
        },
        {
            no:6,
            name:"Worker's Day",
            date:'1 May 2023',
            color:'green',
        },

    ];
    return (
        <div className='content-body'>
            <Row>
                <Col sm={12} md={12} lg={6}>
                    <div className='d-flex'>
                        <Link to='/Annual-Schedule/Public-Holidays/Add-Public-Holiday'>
                            <Button variant="primary"><AddIcon />&nbsp;&nbsp;Add a Public Holiday</Button>
                        </Link>
                    </div>
                </Col>
                <Col sm={0} md={0} lg={1}></Col>
                <Col sm={12} md={12} lg={5}>
                    <div className='d-flex text-right-spec'>
                        <ToggleButtonGroup
                            type="radio"
                            name="options"
                            value={selectedOption}
                            onChange={handleOptionChange}
                            className='toggle-btn-group'
                        >
                            <ToggleButton className={selectedOption==='Country' ? 'selected' : ''} value="Country" disabled={selectedOption==='Country'}>Country</ToggleButton>
                            <ToggleButton className={selectedOption==='State' ? 'selected' : ''} value="State" disabled={selectedOption==='State'}>State</ToggleButton>
                        </ToggleButtonGroup>
                        <SelectBox name="Select State" options={['Option 1', 'Option 2', 'Option 3']} />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={9} md={12} sm={12}>
                <table className='table table-hover border-table table-even-odd'>
                    <thead>
                        <tr>
                            <th className='col-no text-center'>NO.</th>
                            <th>EVENT</th>
                            <th>DATE</th>
                            <th className='color-td'>COLOUR</th>
                            <th className='col-action text-center'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {holiday_data.map(item => {
                            return(
                                <tr>
                                    <td className='col-no-td'>{item.no}</td>
                                    <td>{item.name}</td>
                                    <td>{item.date}</td>
                                    <td><div style={{height:'1.3rem', background:item.color}}></div></td>
                                    <td className='text-center' style={{color:'#FF8500'}}>Edit</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </Col>
            </Row>
        </div>
    )
}

export default PublicHolidays
