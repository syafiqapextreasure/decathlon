import React, {useState} from 'react';
import "./Store.scss";
import SelectBox from '../../components/selectBox/SelectBox';
import { Row, Col, Button} from 'react-bootstrap';
import AddIcon from "@mui/icons-material/Add";
import { Link } from 'react-router-dom';
import ConfirmModal from '../../components/modal/ConfirmModal';

const Store = () => {
    const [isDeleteModal, setIsDeleteModal] = useState(false);
    const store_data = [
        {
            no:1,
            name:"Cyberjaya",
        },
        {
            no:2,
            name:"Old Kang Road",
        },
        {
            no:3,
            name:"Petaling Jaya",
        },
        {
            no:4,
            name:"Shah alam",
        },
        {
            no:5,
            name:"Sri Damansara",
        },
        {
            no:6,
            name:"USJ",
        },

    ];
    return (
        <div className='content-body'>
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <div className='d-flex'>
                        <Link to='/Store/Add-a-New-Store'>
                            <Button variant="primary"><AddIcon />&nbsp;&nbsp;Add a New Store</Button>
                        </Link>
                    </div>
                </Col>
                <Col sm={0} md={0} lg={5}></Col>
                <Col sm={6} md={4} lg={3}>
                    <div className='d-flex text-right-spec'>
                    <SelectBox name="Select State" options={['Option 1', 'Option 2', 'Option 3']} />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={12} sm={12}>
                <table className='table table-hover border-table table-even-odd'>
                    <thead>
                        <tr>
                            <th className='col-no text-center'>NO.</th>
                            <th>STORE</th>
                            <th className='col-action text-center'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {store_data.map(item => {
                            return(
                                <tr>
                                    <td className='col-no-td'>{item.no}</td>
                                    <td>{item.name}</td>
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

export default Store
