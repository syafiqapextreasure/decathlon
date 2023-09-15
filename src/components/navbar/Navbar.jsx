import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NotificationsNoneOutlined, KeyboardArrowDownOutlined, LogoutOutlined} from '@mui/icons-material';
import Mobilemenu from "./Mobilemenu";
import "./navbar.scss";
import ChangePasswordModal from "../modal/ChangePasswordModal";
import notificationbell from "../../asset/Notification.png";
// import avatar_img from "../../asset/replace_img.png";

const Navbar = (props) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isPasswordModal, setIsPasswordModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('General');
  const [brumb, setBrumb] = useState('');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const pageName = path.substring(1);
    let main_page = null;
    let brumb = '';
    if (pageName){
      let pageName_arr = pageName.split('/');
      main_page = pageName_arr[pageName_arr.length - 1].replaceAll('-', ' ');
      if (pageName_arr.length > 1){
        pageName_arr.map((item, index) => {
          if (index === 0){
            brumb += item.replaceAll('-', ' ');
          } else {
            brumb += ' > ' + item.replaceAll('-', ' ');
          }
        })
      }
    }
    setCurrentPage(main_page || 'General');
    setBrumb(brumb);
  }, [location]);

  return (
    <>
    <div className='top-navbar'>
        <div className="wrapper">
          <div className='d-flex'>
            <Mobilemenu/>
            <div>
              <div className="heading">
                {currentPage}
              </div>
              {brumb !== '' && (
                <div className='head-sub'>{brumb}</div>
              )}
            </div>
            
          </div>
          <div className="userInfo">
              {/* <NotificationsNoneOutlined/> */}
              <img src={notificationbell} alt='' style={{width:'1.8rem'}} />
              {/* <div className="image">
              <img src={avatar_img} alt="" className='image' />
              </div> */}
              <div className="role" style={{position:'relative'}} onClick={() => {setIsOpenPopup(!isOpenPopup)}}>Admin | Maryam
                <KeyboardArrowDownOutlined />
                {isOpenPopup && (
                  <div className='nav-drop-down-menu'>
                    <div onClick={() => setIsPasswordModal(true)}>Change Password</div>
                    <div onClick={() => props.onLogout()}>
                        {/* <LogoutOutlined className='' /> */}
                        <span className=''>Sign out</span>
                    </div>
                  </div>
                )}
              </div>
          </div>
        </div>
    </div>
    {isPasswordModal && (
      <ChangePasswordModal closeModal={() => {setIsPasswordModal(false)}}/>
    )}
    </>
  )
}

export default Navbar
