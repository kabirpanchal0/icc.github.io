import React from 'react'
import Header from '../Header'
import { Link, NavLink } from 'react-router-dom'
import study1 from "../image/study1.png"
import "../about/about.css"
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
const About = () => {
    return (
        <div>
            <Header />
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 py-lg-0 order-2 order-lg-1 text-center" >
                                    <h2 className="">
                                       Our Website focuses on developing an Web based Data that helps students research international education options. The primary purpose of this Web site is to give students precise and accurate information that helps them make an informed decision. The Web site also includes a form that enables students to apply to multiple universities/colleges in one go. This Web based application will act as a one-stop solution for any international education related queries
                                    </h2>
                                    <div className="mt-5">
                                        <Link className="btn-about"> Get Started </Link>
                                    </div>
                                    <div className="feedback mt-5">
                                        <h4>Give us Feedback</h4>
                                       
                                        <NavLink to="/feedback"> Give your feedback here</NavLink>

                                    </div>

                                </div>
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <img src={study1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
