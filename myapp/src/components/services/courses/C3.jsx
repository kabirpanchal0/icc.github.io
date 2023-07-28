import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer';
import CommonCourses from './CommonCourses';
import { NavLink } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { useEffect } from 'react';
import "../service.css"



const C3 = () => {
    useEffect(()=>{
        if(localStorage.length == 0){
          document.getElementById("btn").innerHTML="LOGIN TO GO"
          document.getElementById("btn1").style.display ='none';
        } 
        else{
          document.getElementById("btn1").innerHTML="Apply this course"
          document.getElementById("btn").style.display ='none';
        }
      })
    return (
        <>
            <Header />
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <NavLink to="/" className="links">Home<span ><FaAngleRight /></span></NavLink><NavLink to="/disc2" className="links"> Courses <span><FaAngleRight /></span> </NavLink> Computer Science & IT
                    </div>
                </div>
            </div>
            <div className="c1-icon text-center mt-4 mb-4"  >
                <FaCode />
            </div>
            <CommonCourses
                coursetitle="Details about Master in Computer Science & IT"
                coursedetails=" Computer Science and IT is a group of disciplines that focus on everything related to computers and networks — from hardware and software to data collection and analysis, and all the way to virtual reality (VR) headsets and always-on devices.

              "
            />




            <div className="container-fluid  mt-5">
                <div className="row">
                    <div className="col-10  mx-auto">
                        <h4>Best Universities for  Computer Science & IT</h4>
                        <table class="table mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">Universities</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Ranking</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>Durham University</td>
                                    <td>Durham, United Kingdom</td>
                                    <td>51</td>
                                </tr>
                                <tr>

                                    <td>University of Bristol</td>
                                    <td>Bristol, United Kingdom</td>
                                    <td>79</td>
                                </tr>
                                <tr>
                                    <td>Boston University</td>
                                    <td>Boston, United States</td>
                                    <td>101</td>
                                </tr>
                                <tr>
                                    <td>University of Birmingham</td>
                                    <td>Birmingham, United Kingdom</td>
                                    <td>176</td>
                                </tr>
                                <tr>
                                    <td>Cornell University</td>
                                    <td>Ithaca, United States</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>University of California, Davis</td>
                                    <td>Davis, United States</td>
                                    <td>2</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
            <div className='text-center mt-5 mb-5'>

                <NavLink to='/applyform' id="btn1" className="apply-btn"> Apply this course</NavLink>
                <NavLink to="/logins" id='btn' className="btn-go"> LOGIN TO GO</NavLink>
            </div>
            <Footer />

        </>
    )
}

export default C3
