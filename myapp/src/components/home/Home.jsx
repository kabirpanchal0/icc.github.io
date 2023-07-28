import React from 'react'
import Header from '../Header'
import { NavLink } from 'react-router-dom'
import study from "../image/study.png"
import Footer from '../Footer'

import "../home/home.scss"
import ListCountries from './ListCountries'

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
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import PublicIcon from '@mui/icons-material/Public';
import "animate.css"


const Home = () => {
    return (
        <div>
            <Header />

            <section id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 py-lg-0 order-2 order-lg-1 text-center mb-5 mt-5" >
                                    <h1 className="animate__animated animate__bounceInLeft">Know more about your <strong>DREAM</strong> study...</h1>
                                    <div className="mt-5">
                                        <NavLink to="/disc2" className="btn-home" > Explore Courses </NavLink>
                                    </div>

                                </div>
                                <div className="col-lg-6 order-1 order-lg-2  text-center">
                                    <img src={study} className="animated animate__animated animate__bounceInDown" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='explore'>

                <div className="container-fluid  d-flex justify-content-center align-items-center  mt-5">
                    <div className="row">
                        <div className="col-12  mx-auto">
                            <div className="row">
                                <div className="col-lg-3 col-md-12 mx-auto padding">
                                    <NavLink to="/disc2" className="home-navlink">
                                       
                                            <ExploreOutlinedIcon className='circle-icon' />
                                       
                                    </NavLink>
                                    <div className='add-text mt-3 text-center'>
                                        <h3 >Explore</h3>
                                    </div>
                                    <div className='p-text mt-2 text-center'>
                                        <p >Explore the courses</p>
                                    </div>

                                </div>
                                <div className="col-lg-3 col-md-12 mx-auto padding">

                                <NavLink to="/allcon" className="home-navlink">
                                        <PublicIcon className='circle-icon' />
                                        </NavLink>
                                    
                                    <div className='add-text mt-3 text-center'>
                                        <h3 >Countries</h3>
                                    </div>
                                    <div className='p-text mt-2 text-center'>
                                        <p >Countries Details</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 mx-auto padding">
                                <NavLink to="/disc2" className="home-navlink">
                                        <VerifiedUserOutlinedIcon className='circle-icon' />
                                        </NavLink>
                                 
                                    <div className='add-text mt-3 text-center'>
                                        <h3 >Decide</h3>
                                    </div>

                                    <div className='p-text mt-2 text-center'>
                                        <p >Decide</p>
                                    </div>

                                </div>
                                <div className="col-lg-3 col-md-12 mx-auto padding">
                                <NavLink to="/detailsexam" className="home-navlink">
                                        <BookmarkAddedOutlinedIcon className='circle-icon' />
                                        </NavLink>
                              
                                    <div className='add-text mt-3 text-center'>
                                        <h3 >Ielts</h3>
                                    </div>
                                    <div className='p-text mt-2 text-center'>
                                        <p >Details</p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>



            <ListCountries />


            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22864.11283411948!2d-73.96468908098944!3d40.630720240038435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbg!4v1540447494452"
                width="100%" height="380" frameborder="0" allowfullscreen></iframe>
            <Footer />
            <div className='bottom'></div>
        </div>
    )
}

export default Home
