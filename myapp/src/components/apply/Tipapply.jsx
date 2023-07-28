import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import map from "../image/map.jpg"
import "../apply/apply.css"
import { NavLink } from 'react-router-dom'

const Tipapply = () => {
    return (
        <>
            <Header />
            <section id='applyimg'>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-6">

                                    <div className='backwhite'>
                                        <h1 className='h1'>Tips for <br /> how to apply</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </section>

            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-8 bg mx-auto">
                        <div className="row">
                            <div className="col-8 col-md-12 mx-auto">
                                <h2 className='mt-5'>1. Keep your options open</h2>
                                <p className='mt-4'>Even if you have set a clear goal that you want to be a student at a certain university, it is always best and wise to apply to at least three universities, even if they are in different locations abroad.</p>
                                <h2 className='mt-4'>2. Be realistic and informed</h2>
                                <p className='mt-4'>Check and read the academic requirements carefully to figure out the probability of being accepted by the university. If you don’t have a clear idea about the requirements, you can contact the department of international students or an adviser from the university.</p>

                                <h2 className='mt-4'>3. Discover how you can apply</h2>
                                <p className='mt-4'>Usually, you can apply through the website of the university directly and submit all the required documents or send them by post. In some countries, you can apply through a specific online platform that is easier to use and also gives you the possibility to apply to more universities at once.</p>
                                <h2 className='mt-4'>4. Be careful with the paperwork</h2>
                                <p className='mt-4'>All documents have to be translated into the official language of the respective country and legally authenticated by a competent authority. This means an official stamp could stand between you and your degree.</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='text-center mt-5 mb-5'>
                    <NavLink to='/applycourses'className="apply-btn"> Show and Apply courses</NavLink>
            </div>



            <Footer />
        </>
    )
}

export default Tipapply
