import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button} from 'react-bootstrap';
import AddIcon from "@mui/icons-material/Add";
import ConfirmModal from '../../components/modal/ConfirmModal';

const Role = () => {
    const [isDeleteModal, setIsDeleteModal] = useState(false);
    const store_data = [
        {
            no:1,
            name:"Super Admin",
        },
        {
            no:2,
            name:"Admin",
        },
        {
            no:3,
            name:"Team Leader",
        },
        {
            no:4,
            name:"Department Manager",
        },
        {
            no:5,
            name:"Operation Leader",
        }

    ];
    return (
        <div className='content-body'>
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <div className='d-flex'>
                        <Link to='/User/Role/New-Role'>
                            <Button variant="primary">
                                <AddIcon />&nbsp;&nbsp;Add a New Role
                            </Button>
                        </Link>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={12} sm={12}>
                <table className='table table-hover border-table table-even-odd'>
                    <thead>
                        <tr>
                            <th className='col-no text-center'>NO.</th>
                            <th>Role</th>
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
                                        <span className='td-action-btn'><Link to={'/User/Role/Edit-Role?name=' + item.name}  style={{color:'#FF8500', textDecoration:'none'}}>Edit</Link></span>
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

export default Role
