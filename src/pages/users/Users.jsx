import React, { useState } from 'react';
import "./Users.scss";
import SelectBox from '../../components/selectBox/SelectBox';
import Pagination from '../../components/pagination/Pagination';
import { Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {ArrowUpward, ExpandMore} from '@mui/icons-material';
import SortIcon from '@mui/icons-material/Sort';
import AddIcon from "@mui/icons-material/Add";
import ConfirmModal from '../../components/modal/ConfirmModal';

const Users = () => {
    const [isDeleteModal, setIsDeleteModal] = useState(false);
    const user_data = [
        {
            no:1,
            name:"Cyberjaya",
            email:'you@example.com',
            role : 'Admin',
            status:0,
        },
        {
            no:2,
            name:"Cyberjaya",
            email:'you@example.com',
            role : 'Admin',
            status:1,
        },
        {
            no:3,
            name:"Cyberjaya",
            email:'you@example.com',
            role : 'Team Leader',
            status:0,
        },
        {
            no:4,
            name:"Cyberjaya",
            email:'you@example.com',
            role : 'Admin',
            status:0,
        },
        {
            no:5,
            name:"Cyberjaya",
            email:'you@example.com',
            role : 'Admin',
            status:0,
        },{
            no:6,
            name:"Cyberjaya",
            email:'you@example.com',
            role : 'Admin',
            status:0,
        },{
            no:7,
            name:"Cyberjaya",
            email:'you@example.com',
            role : 'Admin',
            status:0,
        },{
            no:1,
            name:"Cyberjaya",
            email:'you@example.com',
            role : 'Admin',
            status:0,
        },{
            no:1,
            name:"Cyberjaya",
            email:'you@example.com',
            role : 'Admin',
            status:0,
        },
    ];
    const [pageOfItems, setPageOfItmes] = useState([]);
    const [startindex, setStartindex] = useState(0);
    const [endindex, setEndindex] = useState(0);

    const changePage = (items, obj_data) => {
        setPageOfItmes(items);
        setStartindex(obj_data.startIndex);
        setEndindex(obj_data.endIndex);
    }

    return (
        <div className='content-body'>
            <Row>
                <Col sm={12} md={3} lg={2}>
                    <Link to='/User/New-User'>
                        <Button variant="primary">
                            <AddIcon />&nbsp;&nbsp;Add a New User
                        </Button>
                    </Link>
                </Col>
                <Col sm={12} md={9} lg={7}>
                    <div className='d-flex'>
                        <div className='search-input-frame d-flex'>
                            <SearchOutlinedIcon className='icon'/>
                            <input type="text" placeholder="search.."/>
                        </div>
                        <Button variant='' className='sort-button'><SortIcon/><ArrowUpward className='arrow-icon'/>&nbsp;&nbsp;Sort&nbsp;&nbsp;<ExpandMore/></Button>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <div className='d-flex text-right-spec'>
                        <SelectBox name="Select Role" options={['Option 1', 'Option 2', 'Option 3']} />
                        <Button variant="primary">RESET</Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={12} md={12} sm={12}>
                <table className='table table-hover border-table table-even-odd'>
                    <thead>
                        <tr>
                            <th className='col-no text-center'>NO.</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>STATUS</th>
                            <th className='col-action text-center'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pageOfItems.map(item => {
                            return(
                                <tr>
                                    <td className='col-no-td'>{item.no}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>{item.status === 1 ?  (<div className='on-off-div on-div'>Active</div> ) : (<div className='on-off-div off-div'>Inactive</div>)}</td>
                                    <td className='text-center'>
                                        <span className='td-action-btn' style={{color:'#1482C2'}}>View</span>
                                        <span className='td-action-btn'><Link to='/User/User-Profile' state={item} style={{color:'#FF8500', textDecoration:'none'}}>Edit</Link></span>
                                        <span onClick={() => setIsDeleteModal(true)} className='td-action-btn' style={{color:'#FC5855'}}>Delete</span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <div>Showing {startindex + 1} to {endindex + 1} of {user_data.length} results</div>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <Pagination
                            items={user_data}
                            onChangePage={(items, obj_data) => {changePage(items, obj_data)}}
                            pageSize = {5}
                        />
                    </Col>
                </Row>
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

export default Users
