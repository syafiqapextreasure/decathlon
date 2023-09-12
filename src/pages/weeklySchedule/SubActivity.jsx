import React, {useState} from 'react';
import SelectBox from '../../components/selectBox/SelectBox';
import { Row, Col, Button} from 'react-bootstrap';
import AddIcon from "@mui/icons-material/Add";
import { ArrowDropDownOutlined, ArrowDropUpOutlined} from '@mui/icons-material';
import ConfirmModal from '../../components/modal/ConfirmModal';

const SubActivity = () => {
    const [selectedOption, setSelectedOption] = useState('FLOOR');
    const [isDeleteModal, setIsDeleteModal] = useState(false);
    const activity_data = [
        {
            no:1,
            name:"Floor",
            code:1501,
            order:0,
            rate:1.0,
        },
        {
            no:2,
            name:"Floor - Overtime",
            code:1502,
            order:1,
            rate:2.0,
        },
        {
            no:3,
            name:"Floor - ST overtime",
            code:1503,
            order:1,
            rate:3.0,
        },
        {
            no:4,
            name:"Floor - Public Holiday",
            code:1504,
            order:0,
            rate:1.0,
        },
        {
            no:5,
            name:"Floor - sub category",
            code:1505,
            order:0,
            rate:1.0,
        },
        {
            no:6,
            name:"Floor - sub",
            code:1506,
            order:0,
            rate:1.0,
        },

    ];
    return (
        <div className='content-body'>
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <div className='d-flex'>
                        <Button variant="primary"><AddIcon />&nbsp;&nbsp;Add a Sub Activity</Button>
                    
                    </div>
                </Col>
                <Col sm={0} md={0} lg={5}></Col>
                <Col sm={6} md={4} lg={3}>
                    <div className='d-flex text-right-spec'>
                        <SelectBox name="FLOOR" options={['FLOOR', 'OVERTIME']} changeOption={(option) => {setSelectedOption(option)} } />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={9} md={12} sm={12}>
                <table className='table table-hover border-table table-even-odd'>
                    <thead>
                        <tr>
                            <th className='col-no text-center'>NO.</th>
                            {selectedOption === 'OVERTIME' && (
                                <th>OT CODE</th>
                            )}
                            <th>SUB ACTIVITY</th>
                            <th className='text-center'>ORDER</th>
                            <th>FEATURED</th>
                            <th>NOTE</th>
                            <th className='col-action text-center'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activity_data.map(item => {
                            return(
                                <tr>
                                    <td className='col-no-td'>{item.no}</td>
                                    {selectedOption === 'OVERTIME' && (
                                        <td>{item.code}</td>
                                    )}
                                    <td>{item.name}</td>
                                    <td className='text-center'>
                                        {item.order === 0 && (<ArrowDropDownOutlined/>)}
                                        {item.order === 1 && (<ArrowDropUpOutlined/>)}
                                    </td>
                                    <td>{'Yes'}</td>
                                    <td>{'Note'}</td>
                                    <td className='text-center'>
                                        <span className='td-action-btn' style={{color:'#1482C2'}}>View</span>
                                        <span className='td-action-btn' style={{color:'#FF8500'}}>Edit</span>
                                        <span onClick={() => setIsDeleteModal(true)} className='td-action-btn' style={{color:'#FC5855'}}>Delete</span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </Col>
            </Row>
            {isDeleteModal && (
                <ConfirmModal
                    closeModal = {() => setIsDeleteModal(false)}
                    description = {'Are you sure you want to delete?<br/>This process cannot be undone'}
                />
            )}
        </div>
    )
}

export default SubActivity
