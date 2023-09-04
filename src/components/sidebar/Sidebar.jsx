import React, { useState } from 'react';
import './sidebar.scss';
import { Link, useLocation } from 'react-router-dom';
import { ExpandLess, ExpandMore, AssignmentOutlined, CalendarMonthOutlined, DescriptionOutlined, GridViewOutlined, LogoutOutlined, PeopleAltOutlined, PersonOutlined, SettingsOutlined, TextSnippet } from '@mui/icons-material';
import {List, Collapse, ListItemText} from "@mui/material";
import companyLogo from '../../asset/logo.png';

const Sidebar = () => {
  const [openStoreSub, setOpenStoreSub] = useState(false);
  const [openUserSub, setOpenUserSub] = useState(false);
  const [openWeekSub, setOpenWeekSub] = useState(false);
  const [openAnnualSub, setOpenAnnualSub] = useState(false);
  const location = useLocation();

  const isActive = (linkUrl) => {
    return location.pathname === linkUrl;
  };

  return (
    <div className='sidebar'>
      <div className='logo'><img src={companyLogo} alt=""/></div>
      <div className='items'>
        <List component="ul">
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li className={isActive('/') ? 'active' : ''}>
              <GridViewOutlined className='icon' />
              <ListItemText primary="Dashboard" />
            </li>
          </Link>
          
          <li onClick={ () => {setOpenWeekSub(!openWeekSub)}}>
            <DescriptionOutlined className='icon' />
            <ListItemText primary="Weekly Schedule" />
            {openWeekSub ? <ExpandLess /> : <ExpandMore />}
          </li>
          <Collapse in={openWeekSub} timeout="auto" unmountOnExit className='collapse-menu'>
            <List component="ul">
              <Link to='/Weekly-Schedule' style={{ textDecoration: 'none' }}>
                <li className={isActive('/Weekly-Schedule') ? 'active' : ''}>
                  <span>Weekly Schedule</span>
                </li>
              </Link>
              <Link to='/Weekly-Schedule/Activity' style={{ textDecoration: 'none' }}>
                <li className={isActive('/Weekly-Schedule/Activity') ? 'active' : ''}>
                  <span>Activity</span>
                </li>
              </Link>
              <Link to='/Weekly-Schedule/Sub-Activity' style={{ textDecoration: 'none' }}>
                <li className={isActive('/Weekly-Schedule/Sub-Activity') ? 'active' : ''}>
                  <span>Sub Activity</span>
                </li>
              </Link>
            </List>
          </Collapse>

          <li onClick={ () => {setOpenAnnualSub(!openAnnualSub)}}>
            <TextSnippet className='icon'/>
            <ListItemText primary="Annual Schedule" />
            {openAnnualSub ? <ExpandLess /> : <ExpandMore />}
          </li>
          <Collapse in={openAnnualSub} timeout="auto" unmountOnExit className='collapse-menu'>
            <List component="ul">
              <Link to='/Annual-Schedule' style={{ textDecoration: 'none' }}>
                <li className={isActive('/Annual-Schedule') ? 'active' : ''}>
                  <span>Annual Schedule</span>
                </li>
              </Link>
              <Link to='/Annual-Schedule/Calendar' style={{ textDecoration: 'none' }}>
                <li className={isActive('/Annual-Schedule/Calendar') ? 'active' : ''}>
                  <span>Calendar</span>
                </li>
              </Link>
            </List>
          </Collapse>
          
          <li onClick={ () => {setOpenStoreSub(!openStoreSub)}}>
            <CalendarMonthOutlined className='icon' />
            <span>Store</span>
            {openStoreSub ? <ExpandLess /> : <ExpandMore />}
          </li>
          <Collapse in={openStoreSub} timeout="auto" unmountOnExit className='collapse-menu'>
            <List component="ul">
              <Link to='/Store' style={{ textDecoration: 'none' }}>
                <li className={isActive('/Store') ? 'active' : ''}>
                  <span>Store</span>
                </li>
              </Link>
              <Link to='/Store/State' style={{ textDecoration: 'none' }}>
                <li className={isActive('/Store/State') ? 'active' : ''}>
                  <span>State</span>
                </li>
              </Link>
              <Link to='/Store/Department' style={{ textDecoration: 'none' }}>
                <li className={isActive('/Store/Department') ? 'active' : ''}>
                  <span>Department</span>
                </li>
              </Link>
            </List>
          </Collapse>
          <Link to='/Team' style={{ textDecoration: 'none' }}>
            <li className={isActive('/Team') ? 'active' : ''}>
              <PeopleAltOutlined className='icon' />
              <span>Team</span>
            </li>
          </Link>
          <li onClick={ () => {setOpenUserSub(!openUserSub)}}>
            <PersonOutlined className='icon' />
            <span>User</span>
            {openUserSub ? <ExpandLess /> : <ExpandMore />}
          </li>
          <Collapse in={openUserSub} timeout="auto" unmountOnExit className='collapse-menu'>
            <List component="ul">
              <Link to='/User' style={{ textDecoration: 'none' }}>
                <li className={isActive('/User') ? 'active' : ''}>
                  <span>User</span>
                </li>
              </Link>
              <Link to='/User/Role' style={{ textDecoration: 'none' }}>
                <li className={isActive('/User/Role') ? 'active' : ''}>
                  <span>Role</span>
                </li>
              </Link>
            </List>
          </Collapse>
          <Link to='/Report' style={{ textDecoration: 'none' }}>
            <li className={isActive('/Report') ? 'active' : ''}>
              <AssignmentOutlined className='icon' />
              <span>Report</span>
            </li>
          </Link>
          <Link to='/Settings' style={{ textDecoration: 'none' }}>
            <li className={isActive('/Settings') ? 'active' : ''}>
              <SettingsOutlined className='icon' />
              <span>Settings</span>
            </li>
          </Link>
          <Link to='/Sign-Out' style={{ textDecoration: 'none' }}>
            <li className={isActive('/Sign-Out') ? 'active' : ''}>
              <LogoutOutlined className='logout' />
              <span className='logout'>Sign out</span>
            </li>
          </Link>
        </List>
      </div>
    </div>
  );
};

export default Sidebar;