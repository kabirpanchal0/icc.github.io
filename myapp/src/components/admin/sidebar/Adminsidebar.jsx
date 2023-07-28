import React, { useEffect, useState } from 'react'
import "./sidebar.scss"
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ClassIcon from '@mui/icons-material/Class';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PublicIcon from '@mui/icons-material/Public';
import FlagIcon from '@mui/icons-material/Flag';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import axios from 'axios';
const Adminsidebar = () => {


  const nav = useNavigate();
  function handleLogout() {
    localStorage.clear();
    alert("Sign out successfully");

    nav("/adminsignin");
    window.location.reload();

  }

  const [adminid, setAdminid] = useState(localStorage.getItem("username"));
  const [data, setData] = useState([]);
  const name = localStorage.getItem('username')

  useEffect(()=>{
      if(localStorage.length === 0){
        document.getElementById('adminid').style.display = "ADMIN";
      }
      else{
       
      const id = adminid;
      axios.post("http://localhost:5000/fetchadmin", { id })
        .then(res => {
          if (res.data.success === 1) {
            setData(res.data.details[0]);
            const name = data.name
            document.getElementById('adminid').innerHTML = name;
          }

        })

    
      }
  },[])
  // useEffect(() => {
  //   if (localStorage.length === 0) {
  //     document.getElementById("signout").style.display = 'none';
  //     document.getElementById("signin").style.display = 'block';
  //     document.getElementById('n1').innerHTML = "guest";
  //   }

  return (
    <div className='sidebar'>
      <div className='top'>

        <span className='logo'> <h1>Welcome <span>{name} </span></h1> </span>
      </div>

      <div className='center'>
        <ul>

          <p className="title">MAIN</p>
          <NavLink to="/adminhome" className="link" >
            <li>

              <SpaceDashboardIcon className='icon' />
              <span> Dashboard</span>

            </li>
          </NavLink>

          <p className="title">LIST</p>
          <NavLink to="/manageuser" className="link" >
            <li>
              <SupervisedUserCircleIcon className='icon' />
              <span> User </span>
            </li>
          </NavLink>
          <NavLink to="/collagesdata" className="link" >
            <li>
              <ClassIcon className='icon' />
              <span> Colleges </span>
            </li>
          </NavLink>
          <NavLink to="/coursesdata" className="link" >
            <li>
              <LibraryBooksIcon className='icon' />
              <span> Courses </span>
            </li>
          </NavLink>
          <NavLink to="/countriesdata" className="link" >
            <li>
              <FlagIcon className='icon' />
              <span> Countries </span>
            </li>
          </NavLink>

          <p className="title">SERVICES</p>
          <NavLink to="/" className="link" >
            <li>

              <SettingsIcon className='icon' />
              <span> Settings </span>
            </li>
          </NavLink>
          <NavLink to="/" className="link" >
            <li>
              <AccountCircleIcon className='icon' />
              <span> Profile </span>
            </li>
          </NavLink >
         
            <li>
              <LogoutIcon className='logout-icon' />
              <span> <button onClick={handleLogout}> Logout</button>  </span>
            </li>
     

        </ul>
      </div>
      <div className='bottom'>
        <div className="colorOption"></div>
        <div className="colorOption"></div>

      </div>

    </div>
  )
}

export default Adminsidebar
