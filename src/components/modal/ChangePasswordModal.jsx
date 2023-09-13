import React, { useState } from 'react';
import { Modal, Button} from 'react-bootstrap';
import Input from "../input/Input";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import "./modal.scss";

const ChangePasswordModal = (props) => {
    const [visibleCurrentPassword, setVisibleCurrentPassword] = useState(false);
    const [visibleNewPassword, setVisibleNewPassword] = useState(false);
    const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    let match_flag = 2;

    const savePassword = () => {
        props.closeModal();
    }

    const changePassword = (e, type) => {
        switch(type){
            case 'current':
                setCurrentPassword(e.target.value);
                break;
            case 'new':
                setNewPassword(e.target.value);
                break;
            case 'confirm':
                setConfirmPassword(e.target.value);
                break;
            default:
                setCurrentPassword(e.target.value)
        }
    }

    if (newPassword !== '' && confirmPassword !== ''){
        if (newPassword === confirmPassword){
            match_flag = 1;
        } else {
            match_flag = 0;
        }
    } else {
        match_flag = 2;
    }
    
    return(
        <Modal show={true} onHide={() => props.closeModal()} className='change-password-modal'>
            <Modal.Body>
                <h2>CHANGE PASSWORD</h2>
                <div style={{position:'relative', paddingBottom:'0.7rem', borderBottom:'1px solid #A8AEB5'}}>
                    <Input label={'Current Password'} value={currentPassword} onChange={(e) => changePassword(e, 'current')}
                        type={visibleCurrentPassword ? 'text' : 'password'} />
                    <VisibilityOffIcon style={{bottom:'1rem'}} onClick={() => setVisibleCurrentPassword(!visibleCurrentPassword)} className='password-vis-icon'/>
                </div>
                <div style={{position:'relative'}}>
                    <Input label={'New Password'} value={newPassword} onChange={(e) => changePassword(e, 'new')}
                        type={visibleNewPassword ? 'text' : 'password'} className={match_flag === 1 ? "match-pass" : (match_flag ===0 ? "unmatch-pass" : "")} />
                    <VisibilityOffIcon onClick={() => setVisibleNewPassword(!visibleNewPassword)} className='password-vis-icon'/>
                </div>
                <div style={{position:'relative'}}>
                    <Input label={'Confirm New Password'} value={confirmPassword} onChange={(e) => changePassword(e, 'confirm')}
                        type={visibleConfirmPassword ? 'text' : 'password'} className={match_flag === 1 ? "match-pass" : (match_flag ===0 ? "unmatch-pass" : "")} />
                    <VisibilityOffIcon onClick={() => setVisibleConfirmPassword(!visibleConfirmPassword)} className='password-vis-icon'/>
                </div>
                {match_flag !== 2 && (
                    <>
                    {match_flag === 1 && (
                        <div style={{color:'#0AB130', paddingLeft:'5px'}} className='warning-div'>The password you entered match</div>
                    )}
                    {match_flag === 0 && (
                        <div style={{color:'#FF0000', paddingLeft:'5px'}} className='warning-div'>The password you entered do not match</div>
                    )}
                    </>
                )}
                <div style={{marginTop:'2rem', marginBottom:'1rem', paddingLeft:'5px'}}>
                    <Button onClick={() => savePassword()} className='button' variant="primary">SAVE</Button>
                    <Button onClick={() => props.closeModal()} variant="dark" style={{background:'#92929D', borderColor:'#92929D'}}>CANCEL</Button>
                </div>
                
            </Modal.Body>
        </Modal>
    )
}

export default ChangePasswordModal