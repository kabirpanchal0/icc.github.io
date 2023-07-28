import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Ieltsger = () => {
    return (
        <>

            <Header />
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-10 mx-auto ">
                        <NavLink to="/" className="links">Home<span ><FaAngleRight /></span></NavLink><NavLink to="/detailsexam" className="links"> Colleges list  <span><FaAngleRight /></span> </NavLink>Universities in Germany
                    </div>
                </div>
            </div>
            <div className="container d-flex justify-content-center align-items-center mt-5 ">
                <div className="row">
                    <div className="col-10  mx-auto">
                        <h3>Universities in Germany accepting IELTS 5.5 and above
                        </h3>
                        <table class="table mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">University Name</th>
                                    <th scope="col">Required IELTS score (undergraduate courses)</th>
                                    <th scope="col">Required IELTS score (Postgraduate courses)</th>



                                </tr>
                            </thead>
                            <tbody >
                                <tr>
                                    <th scope="row">Technical University of Munich</th>
                                    <td>6.5</td>
                                    <td>6.5 7 above</td>

                                </tr>
                                <tr>
                                    <th scope="row">University of Freiburg</th>
                                    <td>6</td>
                                    <td>6</td>

                                </tr>

                                <tr>
                                    <th scope="row">Heidelberg University</th>
                                    <td>6.5</td>
                                    <td>6.5 & above</td>

                                </tr>
                                <tr>
                                    <th scope="row">Ludwig Maximilian University of Munich</th>
                                    <td>5.5</td>
                                    <td>6.5-7.0</td>

                                </tr>
                                <tr>
                                    <th scope="row">Bielefeld University</th>
                                    <td>6.5</td>
                                    <td>6.5 & above</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Ieltsger
