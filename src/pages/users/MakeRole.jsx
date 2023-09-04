import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Row, Col, Button, FormCheck} from 'react-bootstrap';

const MakeRole = () => {
    const location = useLocation();
    const queryParameters = new URLSearchParams(window.location.search);
    const name = queryParameters.get("name");
    const role_data = [
        {
            name:"Dashboard",
            view:1,
            create:1,
            update:0,
        },
        {
            name:"Weekly Schedule",
            view:0,
            create:1,
            update:1,
        },
        {
            name:"Activity",
            view:0,
            create:1,
            update:1,
        },
        {
            name:"Sub Activity",
            view:0,
            create:1,
            update:1,
        },
        {
            name:"Annual Schedule",
            view:1,
            create:0,
            update:1,
        },
        {
            name:"Calendar",
            view:0,
            create:1,
            update:1,
        },
        {
            name:"Store",
            view:0,
            create:1,
            update:1,
        },
        {
            name:"State",
            view:0,
            create:1,
            update:1,
        },
        {
            name:"Department",
            view:0,
            create:1,
            update:1,
        },
        {
            name:"Teams",
            view:0,
            create:1,
            update:1,
        },
        {
            name:"User",
            view:0,
            create:1,
            update:1,
        },
        {
            name:"Role",
            view:0,
            create:1,
            update:1,
        },
        {
            name:"Report",
            view:0,
            create:1,
            update:1,
        },
        {
            name:"Settings",
            view:0,
            create:1,
            update:1,
        },
    ];
    return (
        <div className='content-body'>
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <div style={{fontSize:'1.2rem', fontWeight:'500'}}>Role Name</div>
                    <input style={{minWidth:'20rem'}} type="text" value={name} placeholder="Head of Operation.."/>
                </Col>
            </Row>
            <div style={{fontWeight:'bold', marginTop:'1rem', fontSize:'1.4rem'}}>Permission</div>
            <div style={{marginBottom:'1rem'}}>Please identify important module and its tasks for this particular role.</div>
            <Row>
                <Col lg={6} md={12} sm={12}>
                <table className='table table-hover border-table table-even-odd'>
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-center'>View</th>
                            <th className='text-center'>Create</th>
                            <th className='text-center'>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {role_data.map(item => {
                            return(
                                <tr>
                                    <td>{item.name}</td>
                                    <td className='text-center'>
                                        <FormCheck
                                            checked={item.view}
                                            disabled = {false}
                                        />
                                    </td>
                                    <td className='text-center'>
                                        <FormCheck
                                            checked={item.create}
                                            disabled = {false}
                                        />
                                    </td>
                                    <td className='text-center'>
                                        <FormCheck
                                            checked={item.update}
                                            disabled = {false}
                                        />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </Col>
            </Row>
            <div className='footer-buttons d-flex'>
                <Link to="/User/Role"><Button variant="" style={{border:'1px solid #C4C4C4'}}>CANCEL</Button></Link>
                <Button variant="primary">
                    {location.pathname === '/User/Role/Edit-Role' ? 'UPDATE ROLE': 'CREATE NEW ROLE'}
                </Button>
            </div>
        </div>
    )
}

export default MakeRole
