import React from 'react'
import { NavLink } from 'react-router-dom';
import Header from '../../Header'
import Footer from '../../Footer'
import CommonCourses from './CommonCourses';
import { FaAngleRight } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { useEffect } from 'react';





const C2 = () => {
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
                        <NavLink to="/" className="links">Home<span ><FaAngleRight /></span></NavLink><NavLink to="/disc2" className="links"> Courses <span><FaAngleRight /></span> </NavLink> Business & Management
                    </div>
                </div>
            </div>
            <div className="c1-icon text-center mt-4 mb-4"  >
                <FaSuitcase />
            </div>
            <CommonCourses
                coursetitle="Details about Master in Business & Management"
                coursedetails=" Business and Management is one of the most popular fields of study in the world, teaching you everything there is to know about running a successful business. Think in terms of developing the business sustainably, managing the resources and reducing unnecessary expenses, keeping your employees motivated and engaged, and communicating a clear vision for the company — one that can bring all departments and staff members together and give them a sense of purpose and fulfilment."
            />


            <div className="container-fluid  mt-5">
                <div className="row">
                    <div className="col-10  mx-auto">
                        <h4>Best Universities for  Business & Management</h4>
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

export default C2
