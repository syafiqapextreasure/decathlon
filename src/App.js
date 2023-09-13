import { Route, Routes, useNavigate} from "react-router-dom";
import AnnualSchedule from "./pages/annualSchedule/AnnualSchedule";
import Calendar from "./pages/annualSchedule/Calendar"
import Dashboard from "./pages/dashboard/Dashboard";
import WeeklySchedule from "./pages/weeklySchedule/WeeklySchedule";
import Store from "./pages/store/Store";
import Teams from "./pages/team/Teams";
import TeamProfile from "./pages/team/TeamProfile";
import Users from "./pages/users/Users";
import Role from "./pages/users/Role";
import MakeRole from "./pages/users/MakeRole";
import StoreState from "./pages/store/StoreState";
import StoreAdd from "./pages/store/StoreAdd";
import DepartmentAdd from "./pages/store/DepartmentAdd";
import StateAdd from "./pages/store/StateAdd";
import UserProfile from "./pages/users/UserProfile";
import StoreDepartment from "./pages/store/StoreDepartment";
import Report from "./pages/report/Report";
import Settings from "./pages/settings/Settings";
import PublicHolidays from "./pages/annualSchedule/PublicHolidays";
import AddPublicHoliday from "./pages/annualSchedule/AddPublicHoliday";
import SubActivity from "./pages/weeklySchedule/SubActivity";
import Activity from "./pages/weeklySchedule/Activity";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Login from "./pages/Login";
import TeamsSchedule from "./pages/team/TeamsSchedule";
import './App.scss';
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/');
  }
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  }

  useEffect(() => {
    if (!isLoggedIn){
      navigate('/login');
    }
  }, [])

  return (
    <div className="App" style={{display:'flex'}}>
        {isLoggedIn && (
          <Sidebar />
        )}
        <div className={isLoggedIn ? "main-body" :'login-container'}>
        {isLoggedIn && (
          <Navbar onLogout={handleLogout}/>
        )}
        <Routes>
          <Route path="/">
          <Route index element={<Dashboard isLoggedIn={isLoggedIn}/>} />
            {!isLoggedIn && (
              <Route path="login" element={<Login onLogin={handleLogin} />} />
            )}
            {isLoggedIn && (
              <>
              <Route path="Weekly-Schedule" element={<WeeklySchedule />} />
              <Route path="Weekly-Schedule/Activity" element={<Activity />} />
              <Route path="Weekly-Schedule/Sub-Activity" element={<SubActivity />} />
              <Route path="Annual-Schedule" element={<AnnualSchedule />} />
              <Route path="Annual-Schedule/Calendar" element={<Calendar />} />
              <Route path="Annual-Schedule/Public-Holidays" element={<PublicHolidays />} />
              <Route path="Annual-Schedule/Public-Holidays/Add-Public-Holiday" element={<AddPublicHoliday />} />
              <Route path="Store/State" element={<StoreState />} />
              <Route path="Store/State/Add-a-New-State" element={<StateAdd />} />
              <Route path="Store/Department" element={<StoreDepartment />} />
              <Route path="Store/Department/Add-a-New-Department" element={<DepartmentAdd />} />
              <Route path="Store" element={<Store />} />
              <Route path="Store/Add-a-New-Store" element={<StoreAdd />} />
              <Route path="Team" element={<Teams />} />
              <Route path="Team/Team-Profile" element={<TeamProfile />} />
              <Route path="Team/Schedule" element={<TeamsSchedule />} />
              <Route path="User" element={<Users />} />
              <Route path="User/Role" element={<Role />} />
              <Route path="User/Role/New-Role" element={<MakeRole />} />
              <Route path="User/Role/Edit-Role" element={<MakeRole />} />
              <Route path="User/New-User" element={<UserProfile />} />
              <Route path="User/User-Profile" element={<UserProfile />} />
              <Route path="Report" element={<Report />} />
              <Route path="Settings" element={<Settings />} />
              </>
            )}
          </Route>
        </Routes>
        </div>
    </div>
  );
}

export default App;
