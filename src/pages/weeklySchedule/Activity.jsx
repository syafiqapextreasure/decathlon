import React, {useState} from 'react';
import { Row, Col, Button} from 'react-bootstrap';
import AddIcon from "@mui/icons-material/Add";
import { ArrowDropDownOutlined, ArrowDropUpOutlined} from '@mui/icons-material';

const Activity = () => {
    const activity_data = [
        {
            no:1,
            name:"Floor",
            code:'NA',
            order:0,
            plot_hour:'Hourly',
            type_hour:'Commercial',
            color:'red',
        },
        {
            no:2,
            name:"Off Days",
            code:'NA',
            order:1,
            plot_hour:'Hourly',
            type_hour:'Commercial',
            color:'blue',
        },
        {
            no:3,
            name:"AL/RPH",
            code:'NA',
            order:1,
            plot_hour:'All Day',
            type_hour:'Non Commercial',
            color:'green',
        },
        {
            no:4,
            name:"Duty",
            code:'NA',
            order:0,
            plot_hour:'All Day',
            type_hour:'Non Commercial',
            color:'yellow',
        },
        {
            no:5,
            name:"Nightwork",
            code:'Yes',
            order:0,
            plot_hour:'Hourly',
            type_hour:'Non Commercial',
            color:'black',
        },
        {
            no:6,
            name:"Leave",
            code:'Yes',
            order:0,
            plot_hour:'Hourly',
            type_hour:'Non Commercial',
            color:'black',
        },

    ];
    return (
        <div className='content-body'>
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <div className='d-flex'>
                        <Button variant="primary"><AddIcon />&nbsp;&nbsp;Add an Activity</Button>
                    
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={9} md={12} sm={12}>
                <table className='table table-hover border-table table-even-odd'>
                    <thead>
                        <tr>
                            <th className='col-no text-center'>NO.</th>
                            <th>ACTIVITY</th>
                            <th className='text-center'>CODE</th>
                            <th>TYPE OF HOUR</th>
                            <th>PLOT HOUR</th>
                            <th className='color-td'>COLOUR</th>
                            <th className='text-center'>ORDER</th>
                            <th>NOTE</th>
                            <th className='col-action text-center'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activity_data.map(item => {
                            return(
                                <tr>
                                    <td className='col-no-td'>{item.no}</td>
                                    <td>{item.name}</td>
                                    <td className='text-center'>{item.code}</td>
                                    <td>{item.type_hour}</td>
                                    <td>{item.plot_hour}</td>
                                    <td><div style={{height:'1.3rem', background:item.color}}></div></td>
                                    <td className='text-center'>
                                        {item.order === 0 && (<ArrowDropDownOutlined/>)}
                                        {item.order === 1 && (<ArrowDropUpOutlined/>)}
                                    </td>
                                    <td>{'Note'}</td>
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

export default Activity
