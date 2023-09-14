import React, { useState } from 'react';
import Pagination from '../../components/pagination/Pagination';
import { Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {ArrowUpward, ExpandMore} from '@mui/icons-material';
import SortIcon from '@mui/icons-material/Sort';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

const Settings = () => {
    const user_data = [
        {
            no:1,
            name:"Jane Cooper",
            email:'you@eample.com',
            activity:'Adjust the weekly schedule hours for teammate 1',
            activity_module : 'Weekly Schedule',
            date:'20/08/23',
            role : 'Admin',
            time_stamp:'1500 GMT+8',
        },
        {
            no:1,
            name:"Cody Fisher",
            email:'you@eample.com',
            activity:'Adjust the weekly schedule hours for teammate 1',
            activity_module : 'Weekly Schedule',
            date:'20/08/23',
            role : 'Admin',
            time_stamp:'1500 GMT+8',
        },
        {
            no:1,
            name:"Jenny Wilson",
            email:'you@eample.com',
            activity:'Adjust the weekly schedule hours for teammate 1',
            activity_module : 'Weekly Schedule',
            date:'20/08/23',
            role : 'Admin',
            time_stamp:'1500 GMT+8',
        },
        {
            no:1,
            name:"Christ Watson",
            email:'you@eample.com',
            activity:'Adjust the weekly schedule hours for teammate 1',
            activity_module : 'Weekly Schedule',
            date:'20/08/23',
            role : 'Admin',
            time_stamp:'1500 GMT+8',
        },
        {
            no:1,
            name:"Cameroon",
            email:'you@eample.com',
            activity:'Adjust the weekly schedule hours for teammate 1',
            activity_module : 'Weekly Schedule',
            date:'20/08/23',
            role : 'Admin',
            time_stamp:'1500 GMT+8',
        },{
            no:1,
            name:"William Smith",
            email:'you@eample.com',
            activity:'Adjust the weekly schedule hours for teammate 1',
            activity_module : 'Weekly Schedule',
            date:'20/08/23',
            role : 'Admin',
            time_stamp:'1500 GMT+8',
        }
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
                <Col sm={12} md={12} lg={2}>
                    <Link to='/User/New-User'>
                        <Button variant="primary">
                            <FileUploadOutlinedIcon />&nbsp;&nbsp;Export Report
                        </Button>
                    </Link>
                </Col>
                <Col sm={12} md={12} lg={9}>
                    <div className='d-flex'>
                        <div className='search-input-frame d-flex'>
                            <SearchOutlinedIcon className='icon'/>
                            <input type="text" placeholder="search.."/>
                        </div>
                        <Button variant='' className='sort-button'><SortIcon/><ArrowUpward className='arrow-icon'/>&nbsp;&nbsp;Sort&nbsp;&nbsp;<ExpandMore/></Button>
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
                            <th>ACTIVITY</th>
                            <th>DATE</th>
                            <th>TIME STAMP</th>
                            <th className=''>ROLE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pageOfItems.map(item => {
                            return(
                                <tr>
                                    <td className='col-no-td'>{item.no}</td>
                                    <td>{item.name}<div style={{fontSize:'0.8rem', color:'#6B7280'}}>{item.email}</div></td>
                                    <td>{item.activity}<div style={{fontSize:'0.8rem', color:'#6B7280'}}>Module: {item.activity_module}</div></td>
                                    <td>{item.date}</td>
                                    <td>{item.time_stamp}</td>
                                    <td>{item.role}</td>
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
                            pageSize = {6}
                        />
                    </Col>
                </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Settings
