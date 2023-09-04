import React from 'react';
import "./Store.scss";
import SelectBox from '../../components/selectBox/SelectBox';
import { Row, Col, Button} from 'react-bootstrap';
import AddIcon from "@mui/icons-material/Add";
const StoreState = () => {
    const store_data = [
        {
            no:1,
            name:"W.P KUALA LUMPUR",
        },
        {
            no:2,
            name:"W.P PUTRAJAYA",
        },
        {
            no:3,
            name:"JOHOR",
        },
        {
            no:4,
            name:"PULAU PINANG",
        },
        {
            no:5,
            name:"SELANGOR",
        }

    ];
    return (
        <div className='content-body'>
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <div className='d-flex'>
                        <Button variant="primary"><AddIcon />&nbsp;&nbsp;Add a New State</Button>
                    
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={12} sm={12}>
                <table className='table table-hover border-table table-even-odd'>
                    <thead>
                        <tr>
                            <th className='col-no text-center'>NO.</th>
                            <th>STATE</th>
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

export default StoreState
