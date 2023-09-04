import React from 'react';
import "./Store.scss";
import SelectBox from '../../components/selectBox/SelectBox';
import { Row, Col, Button} from 'react-bootstrap';
import AddIcon from "@mui/icons-material/Add";
const Store = () => {
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
                        <Button variant="primary"><AddIcon />&nbsp;&nbsp;Add a New Store</Button>
                    
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

export default Store
