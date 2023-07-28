import React from 'react'
import { FaPiggyBank } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const CommonCourses = (props) => {
    return (
        <>
            <section id="c1">

               
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-10  mx-auto">

                            <div className="text-center">
                                
                                <h1>{props.coursetitle}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-10  mx-auto">
                            <div className="background">
                                <p>{props.coursedetails}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div className='course-btn text-center'>
                <NavLink to="/allcon"> Select countries</NavLink>
            </div> */}


        </>
    )
}

export default CommonCourses
