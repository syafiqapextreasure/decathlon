import React, { useEffect, useState } from 'react';
import "./mobilemenu.scss";
import { Link, useLocation } from 'react-router-dom';
import {ExpandLess, ExpandMore, AssignmentOutlined, CalendarMonthOutlined, DescriptionOutlined, GridViewOutlined, LogoutOutlined, PeopleAltOutlined, PersonOutlined, SettingsOutlined, TextSnippet } from '@mui/icons-material';
import {List, Collapse, ListItemText} from "@mui/material";
import dashboardicon from '../../asset/dashboard.png';
import teamicon from '../../asset/team.png';
import settingicon from '../../asset/uil_setting.png';
import calendaricon from '../../asset/Calendar.png';
import groupicon from '../../asset/Group.png';
import reporticon from '../../asset/carbon_report.png';
import unionicon from '../../asset/Union.png';
import emergenceicon from '../../asset/Emergence.png';

const Mobilemenu = () => {
    const [openTeamSub, setOpenTeamSub] = useState(false);
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [openStoreSub, setOpenStoreSub] = useState(false);
    const [openUserSub, setOpenUserSub] = useState(false);
    const [openWeekSub, setOpenWeekSub] = useState(false);
    const [openAnnualSub, setOpenAnnualSub] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const isActive = (linkUrl) => {
        return location.pathname === linkUrl;
    };

    useEffect(() => {
        setIsOpen(false);
      }, [location]);
    return (
      <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
        <div className="hamburger-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="menu-items">
            <List component="ul">
            <Link to='/' style={{ textDecoration: 'none' }}>
                <li className={isActive('/') ? 'active' : ''}>
                {/* <GridViewOutlined className='icon' /> */}
                <img src={dashboardicon} className='icon' alt=""/>
                <ListItemText primary="Dashboard" />
                </li>
            </Link>
            
            <li onClick={ () => {setOpenWeekSub(!openWeekSub)}}>
                {/* <DescriptionOutlined className='icon' /> */}
                <img src={groupicon} className='icon' alt=""/>
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
                {/* <TextSnippet className='icon'/> */}
                <img src={unionicon} className='icon' alt=""/>
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
                {/* <CalendarMonthOutlined className='icon' /> */}
                <img src={calendaricon} className='icon' alt=""/>
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
            <li onClick={() => setOpenTeamSub(!openTeamSub)}>
                {/* <PeopleAltOutlined className='icon' /> */}
                <img src={teamicon} className='icon' alt=""/>
                <span>Team</span>
                {openTeamSub ? <ExpandLess /> : <ExpandMore />}
            </li>
            <Collapse in={openTeamSub} timeout="auto" unmountOnExit className='collapse-menu'>
                <List component="ul">
                <Link to='/Team' style={{ textDecoration: 'none' }}>
                    <li className={isActive('/Team') ? 'active' : ''}>
                    <span>Team</span>
                    </li>
                </Link>
                <Link to='/Team/Schedule' style={{ textDecoration: 'none' }}>
                    <li className={isActive('/Team/Schedule') ? 'active' : ''}>
                    <span>Schedule</span>
                    </li>
                </Link>
                </List>
            </Collapse>
            <li onClick={ () => {setOpenUserSub(!openUserSub)}}>
                {/* <PersonOutlined className='icon' /> */}
                <img src={emergenceicon} className='icon' alt=""/>
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
                {/* <AssignmentOutlined className='icon' /> */}
                <img src={reporticon} className='icon' alt=""/>
                <span>Report</span>
                </li>
            </Link>
            <Link to='/Settings' style={{ textDecoration: 'none' }}>
                <li className={isActive('/Settings') ? 'active' : ''}>
                {/* <SettingsOutlined className='icon' /> */}
                <img src={settingicon} className='icon' alt=""/>
                <span>Settings</span>
                </li>
            </Link>
            </List>
        </div>
      </div>
    );
  }
  
  export default Mobilemenu;