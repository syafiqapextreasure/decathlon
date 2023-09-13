import React, { useEffect, useState } from 'react';
import { Row, Col, Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import Input from "../components/input/Input";
import companyLogo from '../asset/logo.png';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = (props) => {
    const [visiblePassword, setVisiblePassword] = useState(false);
    return (
        <div className='login-body'>
            <Row>
                <Col sm={0} md={2} lg={4}></Col>
                <Col sm={12} md={8} lg={4} style={{padding:'1rem'}}>
                    <div className=''><img style={{width:'80%', height:'5rem'}} src={companyLogo} alt=""/></div>
                    <div className='login-title'>User Login</div>
                    <Input label={'E-MAIL'} type="email" />
                    <div style={{position:'relative'}}>
                        <Input label={'PASSWORD'} type={visiblePassword ? 'text' : 'password'} />
                        <VisibilityOffIcon onClick={() => setVisiblePassword(!visiblePassword)} className='password-vis-icon'/>
                    </div>
                    <div className='d-flex' style={{justifyContent:'space-around', marginTop:'1rem', marginBottom:'1rem'}}>
                        <div className=''>
                            <input type="checkbox" id={'remember'} style={{ lineHeight:'2rem'}} />
                            <label for={'remember'} className='description' style={{lineHeight:'2rem', marginLeft:'0.5rem'}}>{'Remember Me'}</label>
                        </div>
                        <Link><label style={{lineHeight:'2rem'}}>Forgot Password?</label></Link>
                    </div>
                    
                    <Button variant="primary" onClick={() => props.onLogin()} style={{width:'80%'}}>SIGN IN</Button>
                </Col>
                <Col sm={0} md={2} lg={4}></Col>
            </Row>
        </div>
    )
}

export default Login
