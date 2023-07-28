import React from 'react'
import "../home/home.scss"

import { NavLink } from 'react-router-dom';

import { FaSuitcase } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";

import { FaPiggyBank } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaPlusSquare } from 'react-icons/fa';

import { FaTree } from 'react-icons/fa';
import { FaStream } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';
import { FaUserCheck } from 'react-icons/fa';
import { FaRegHourglass } from 'react-icons/fa';
import { FaThLarge } from 'react-icons/fa';


const Disciplinary = () => {
    return (
        <>
       
            <section id="disciplinary">
                <div className="col-10 mx-auto mt-5">
                    <h1 className="Browse">Choose Your Courses</h1>
                </div>
                <div className="container mb-5 mt-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">


                                <div className="col-md-3 col-10 mx-auto">
                                    <div className="card">
                                        <NavLink  className="disciplinary-title">
                                            <div className="card-body">
                                                <FaPiggyBank className="disciplinary-icon1" />
                                                <h1>Arts, Design, <br /> Architecture</h1>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-md-3 col-10 mx-auto">
                                    <div className="card">
                                        <NavLink className="disciplinary-title">
                                            <div className="card-body">
                                                <FaSuitcase className="disciplinary-icon2" />
                                                <h1>Business & Management</h1>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-md-3 col-10 mx-auto">
                                    <div className="card" >
                                        <NavLink  className="disciplinary-title">
                                            <div className="card-body">
                                                <FaCode className="disciplinary-icon3" />
                                                <h1>Computer Science & IT</h1>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                              


                                <div className="col-md-3 col-10 mx-auto ">
                                    <div className="card">
                                        <NavLink className="disciplinary-title">
                                            <div className="card-body">
                                                <FaCamera className="disciplinary-icon6" />
                                                <h1>Journalism & Media</h1>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-md-3 col-10 mx-auto">
                                    <div className="card">

                                        <NavLink className="disciplinary-title">
                                            <div className="card-body">
                                                <FaRegHourglass className="disciplinary-icon7" />
                                                <h1>Law</h1>
                                            </div>
                                        </NavLink>


                                    </div>
                                </div>
                                <div className="col-md-3 col-10 mx-auto">
                                    <div className="card">
                                        <NavLink className="disciplinary-title">
                                            <div className="card-body">
                                                <FaPlusSquare className="disciplinary-icon8" />
                                                <h1>Medicine & Health</h1>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                              
                                <div className="col-md-3 col-10 mx-auto">
                                    <div className="card">
                                        <NavLink  className="disciplinary-title">
                                            <div className="card-body">
                                                <FaTree className="disciplinary-icon8" />
                                                <h1>Agriculture & Forestry</h1>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-md-3 col-10 mx-auto">
                                    <div className="card">
                                        <NavLink  className="disciplinary-title">
                                            <div className="card-body">
                                                <FaStream className="disciplinary-icon8" />
                                                <h1>Social Science</h1>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                               


                            </div>

                        </div>
                    </div>
                </div>
            </section>
         
        </>
    )
}

export default Disciplinary

