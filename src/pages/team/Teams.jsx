import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Teams.scss";
import SelectBox from '../../components/selectBox/SelectBox';
import Pagination from '../../components/pagination/Pagination';
import { Row, Col, Button} from 'react-bootstrap';
import CachedIcon from "@mui/icons-material/Cached";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {ArrowUpward, ExpandMore} from '@mui/icons-material';
import SortIcon from '@mui/icons-material/Sort';

const Teams = () => {
    const team_data = [
        {
            no:1,
            employee_id:300010,
            name:"Jane Cooper",
            gender:'Male',
            start_date : '19/04/2023',
            employee_class:'Permanent',
            designation:'Payroll Leader',
            blacklist: 0,
            status:0,
        },
        {
            no:2,
            employee_id:300011,
            name:"Cody Fisher",
            gender:'Male',
            start_date : '19/04/2023',
            employee_class:'Permanent',
            designation:'Payroll Leader',
            blacklist: 1,
            status:1,
        },
        {
            no:3,
            employee_id:300010,
            name:"Jenny Wilson",
            gender:'Male',
            start_date : '19/04/2023',
            employee_class:'Permanent',
            designation:'Payroll Leader',
            blacklist: 0,
            status:0,
        },
        {
            no:4,
            employee_id:300011,
            name:"Christ Watson",
            gender:'Male',
            start_date : '19/04/2023',
            employee_class:'Permanent',
            designation:'Payroll Leader',
            blacklist: 1,
            status:1,
        },
        {
            no:5,
            employee_id:300010,
            name:"Cameroon",
            gender:'Male',
            start_date : '19/04/2023',
            employee_class:'Permanent',
            designation:'Payroll Leader',
            blacklist: 0,
            status:0,
        },
        {
            no:6,
            employee_id:300011,
            name:"William Smith",
            gender:'Male',
            start_date : '19/04/2023',
            employee_class:'Permanent',
            designation:'Payroll Leader',
            blacklist: 1,
            status:1,
        },
        {
            no:6,
            employee_id:300011,
            name:"Junaida",
            gender:'Male',
            start_date : '19/04/2023',
            employee_class:'Permanent',
            designation:'Payroll Leader',
            blacklist: 1,
            status:1,
        },
        {
            no:6,
            employee_id:300011,
            name:"Camelia",
            gender:'Male',
            start_date : '19/04/2023',
            employee_class:'Permanent',
            designation:'Payroll Leader',
            blacklist: 1,
            status:1,
        },
        {
            no:6,
            employee_id:300011,
            name:"Catrina",
            gender:'Male',
            start_date : '19/04/2023',
            employee_class:'Permanent',
            designation:'Payroll Leader',
            blacklist: 1,
            status:1,
        },
        {
            no:6,
            employee_id:300011,
            name:"Jane",
            gender:'Male',
            start_date : '19/04/2023',
            employee_class:'Permanent',
            designation:'Payroll Leader',
            blacklist: 1,
            status:1,
        },
        {
            no:6,
            employee_id:300011,
            name:"Catrina",
            gender:'Male',
            start_date : '19/04/2023',
            employee_class:'Permanent',
            designation:'Payroll Leader',
            blacklist: 1,
            status:1,
        },
        {
            no:6,
            employee_id:300011,
            name:"Cyberjaya",
            gender:'Male',
            start_date : '19/04/2023',
            employee_class:'Permanent',
            designation:'Payroll Leader',
            blacklist: 1,
            status:1,
        },
        {
            no:6,
            employee_id:300011,
            name:"Jane",
            gender:'Male',
            start_date : '19/04/2023',
            employee_class:'Permanent',
            designation:'Payroll Leader',
            blacklist: 1,
            status:1,
        },
        {
            no:6,
            employee_id:300011,
            name:"Cyberjaya",
            gender:'Male',
            start_date : '19/04/2023',
            employee_class:'Permanent',
            designation:'Payroll Leader',
            blacklist: 1,
            status:1,
        },
        {
            no:6,
            employee_id:300011,
            name:"Cyberjaya",
            gender:'Male',
            start_date : '19/04/2023',
            employee_class:'Permanent',
            designation:'Payroll Leader',
            blacklist: 1,
            status:1,
        },
        {
            no:6,
            employee_id:300011,
            name:"Junaida",
            gender:'Male',
            start_date : '19/04/2023',
            employee_class:'Permanent',
            designation:'Payroll Leader',
            blacklist: 1,
            status:1,
        },
        {
            no:6,
            employee_id:300011,
            name:"Cyberjaya",
            gender:'Male',
            start_date : '19/04/2023',
            employee_class:'Permanent',
            designation:'Payroll Leader',
            blacklist: 1,
            status:1,
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
                <Col sm={12} md={4} lg={2}>
                    <Button variant="primary"><CachedIcon />&nbsp;&nbsp;Synchronize EC</Button>
                </Col>
                <Col sm={12} md={8} lg={4}>
                    <div className='d-flex'>
                        <div className='search-input-frame d-flex'>
                            <SearchOutlinedIcon className='icon'/>
                            <input type="text" placeholder="search.."/>
                        </div>
                        <Button variant="" className='sort-button'><SortIcon/><ArrowUpward className='arrow-icon'/>&nbsp;&nbsp;Sort&nbsp;&nbsp;<ExpandMore/></Button>
                    </div>
                </Col>
                <Col sm={12} md={12} lg={5}>
                    <div className='d-flex'>
                        <SelectBox name="Select State" options={['Option 1', 'Option 2', 'Option 3']} />
                        <SelectBox name="Select Store" options={['Option 1', 'Option 2', 'Option 3']} />
                        <SelectBox name="Select Department" options={['Option 1', 'Option 2', 'Option 3']} />
                    </div>
                </Col>
                <Col sm={6} md={4} lg={1}>
                <Button variant="primary">RESET</Button>
                </Col>
            </Row>
            <Row>
                <Col lg={12} md={12} sm={12}>
                <table className='table table-hover border-table table-even-odd'>
                    <thead>
                        <tr>
                            <th className='col-no text-center'>NO.</th>
                            <th>EMPLOYEE ID</th>
                            <th>NAME</th>
                            <th>GENDER</th>
                            <th>START DATE</th>
                            <th>EMPLOYEE CLASS</th>
                            <th>DESIGNATION</th>
                            <th>BLACKLIST</th>
                            <th>STATUS</th>
                            <th className='col-action text-center'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pageOfItems.map(item => {
                            return(
                                <tr>
                                    <td className='col-no-td'>{item.no}</td>
                                    <td>{item.employee_id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.start_date}</td>
                                    <td>{item.employee_class}</td>
                                    <td>{item.designation}</td>
                                    <td>{item.blacklist === 1 ? (<div className='on-off-div off-div'>Yes</div> ) : (<div className='on-off-div on-div'>No</div>)}</td>
                                    <td>{item.status === 1 ?  (<div className='on-off-div on-div'>Active</div> ) : (<div className='on-off-div off-div'>Inactive</div>)}</td>
                                    <td className='text-center' style={{color:'#1482C2'}}><Link to='/Team/Team-Profile' state={ item }> View </Link></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <div>Showing {startindex + 1} to {endindex + 1} of {team_data.length} results</div>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <Pagination
                            items={team_data}
                            onChangePage={(items, obj_data) => {changePage(items, obj_data)}}
                            pageSize = {5}
                        />
                    </Col>
                </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Teams
