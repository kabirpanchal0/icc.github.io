import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaBookOpen } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa'
import { FaGraduationCap } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
import { FaFlag } from 'react-icons/fa'
import { FaEllipsisV } from 'react-icons/fa'
import { FaPeopleArrows } from 'react-icons/fa'
import { FaCheckCircle } from 'react-icons/fa'
import { FaEllipsisH } from 'react-icons/fa'
import { useState } from 'react';
import axios from 'axios';
import "./header.scss"







const Header = () => {
  const [userid, setuserid] = useState(localStorage.getItem("username"));
  const [data, setData] = useState();
  const name = localStorage.getItem('username')
  useEffect(() => {
    if (name !== null || undefined) {
      console.log(name, 'name is there')
    }
  }, [name])

  const nav = useNavigate();


  useEffect(() => {
    if (localStorage.length === 0) {
      document.getElementById("signout").style.display = 'none';
      document.getElementById("signin").style.display = 'block';
      document.getElementById('n1').innerHTML = "guest";
    }
    else {


      document.getElementById("signin").style.display = 'none';
      const id = userid;
      axios.post("http://localhost:5000/fetch", { id })
        .then(res => {
          if (res.data.success === 1) {
            setData(res.data.details[0]);
            const name = data.name
            document.getElementById('n1').innerHTML = name;
          }

        })

    }


  }, [])

  const [loggedIn, setLoggedIn] = useState(localStorage.length !== 0);

  function signin() {
    setLoggedIn(true);
  }



  function signout() {
    localStorage.clear();
    setLoggedIn(false);
    alert("Sign out successfully");
    window.location.reload();
    nav("/");
    
  }




  return (
    <>



      <div className="container-fluid  d-flex justify-content-center align-items-center ">
        <div className="row">
          <div className="col-12  mx-auto">
            <div className="nav">
              <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                  <NavLink className="navbar-brand" to="/">Dream Study</NavLink>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                      </li>
                      <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Countries
                        </NavLink>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><NavLink className="dropdown-item" to="/countries/1">Germany</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/countries/2">France</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/countries/3">Italy</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/countries/4">Australia</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/countries/5">New zee land</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/countries/6">U k</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/countries/7">U S A</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/countries/8">Canada</NavLink></li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Courses
                        </NavLink>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><NavLink className="dropdown-item" to="/c1colleges">Arts, Design,Architecture</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/c2colleges">Business & Management</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/c3colleges">Computer Science & IT</NavLink></li>

                          <li><NavLink className="dropdown-item" to="/c6colleges">Journalism & Media</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/c7colleges">Law</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/c8colleges">Medicine & Health</NavLink></li>

                          <li><NavLink className="dropdown-item" to="/c10colleges">Agriculture & Forestry</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/c11colleges">Social Science</NavLink></li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/detailsexam"> Details </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/contact"> Contact </NavLink>
                      </li>
                      <li className="nav-item dropdown myaccount">
                        <NavLink className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          My account
                        </NavLink>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <h3 className="welcomekabir text-center" > WELCOME </h3>
                          <h3 className="guest text-center" id='n1'> {name} </h3>

                          <li className="myaccount-field">
                            <NavLink to="/logins" id='signin' onClick={signin} className="signin-icon">  Login   <span ><FaUserAlt /></span> </NavLink>

                          </li>
                          <li className="myaccount-field"><button onClick={signout} id='signout' className="signout-icon"> Logout  <span ><FaUserAlt /></span>  </button></li>



                          <li className="myaccount-field">
                            <NavLink to="/adminsignin" className="signin-icon">  Adminsignin </NavLink>

                          </li>

                        </ul>
                      </li>

                    </ul>

                  </div>
                </div>
              </nav>

            </div>
          </div>
        </div>
      </div>




    </>
  )
}

export default Header



{/* <section id="navbar">

<div className="container-fluid">
  <div className="row">
    <div className="col-12 mx-auto">

      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink className="navbar-brand" to="/">DREAM <span className='dream-icon'><FaGraduationCap /></span> STUDY</NavLink>



          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-icon"> <FaEllipsisV /></span>
          </button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


              <li className="item">
                <NavLink className="contact" to="/">  <span className='contact-icon'><FaHome /></span>  <p className='contact-logo'> Home</p> </NavLink>
              </li>

              <div className="dropdown">
                <button className="drop-explore" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className='contact-icon'><FaBookOpen /></span>  <p className='explore-icon'> Explore</p>


                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                  <li><NavLink className="dropdown-item" to="/c1colleges">Arts, Design,Architecture</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/c2colleges">Business & Management</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/c3colleges">Computer Science & IT</NavLink></li>

                  <li><NavLink className="dropdown-item" to="/c6colleges">Journalism & Media</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/c7colleges">Law</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/c8colleges">Medicine & Health</NavLink></li>

                  <li><NavLink className="dropdown-item" to="/c10colleges">Agriculture & Forestry</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/c11colleges">Social Science</NavLink></li>


                </ul>
              </div>
              <div className="dropdown">
                <button className="drop-countries" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className='contact-icon'><FaFlag /></span>  <p className='country-icon '> Countries</p>


                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><NavLink className="dropdown-item" to="/countries/1">Germany</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/countries/2">France</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/countries/3">Italy</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/countries/4">Australia</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/countries/5">New zee land</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/countries/6">U k</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/countries/7">U S A</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/countries/8">Canada</NavLink></li>

                </ul>
              </div>



              <li className="item">
                <NavLink className="contact" to="/detailsexam">  <span className='contact-icon'><FaEllipsisH /></span>  <p className='contact-logo'> Details</p> </NavLink>
              </li>


              <li className="item">
                <NavLink className="contact" to="/contact">  <span className='contact-icon'><FaPeopleArrows /></span>  <p className='contact-logo'> Contact</p> </NavLink>
              </li>

              <div className="dropdown">
                <button className="drop-countries" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <p className='my-account'> My Account</p>


                </button>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <h3 className="welcomekabir" > WELCOME </h3>
                  <h3 className="welcomekabir" id='n1'> {name} </h3>

                  <li className="myaccount-field">
                    <NavLink to="/logins" id='signin' onClick={signin} className="signin-icon">  Login   <span ><FaUserAlt /></span> </NavLink>

                  </li>
                  <li className="myaccount-field"><button onClick={signout} id='signout' className="signout-icon"> Logout  <span ><FaUserAlt /></span>  </button></li>



                  <li className="myaccount-field">
                    <NavLink to="/adminsignin" className="signin-icon">  Adminsignin </NavLink>

                  </li>
                </ul>
              </div>





            </ul>

          </div>

        </div>
      </nav>
    </div>
  </div >
</div >
</section > */}

