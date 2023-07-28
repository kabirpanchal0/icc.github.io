import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import { NavLink } from 'react-router-dom'
import "./../coursecollages/coursecolleges.scss"
import Commoncolleges from './Commoncolleges'
import C7collegesdata from './C7collegesdata'

const C7colleges = () => {
    return (
        <>
            <Header />
            <div className="container-fluid mt-5 ">
                <div className="col-10 mx-auto">

                    <NavLink to="/" className="links">Home </NavLink>
                </div>

            </div>
            <div className='heading'>

            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <h1 className='mb-5'>Master's degrees in Law</h1>
                        {
                            C7collegesdata.map((val, ind) => {
                                return <Commoncolleges key={ind}
                                    collegetitle={val.collegetitle}
                                    collegetext={val.collegetext}
                                    det={val.det}
                                    collegedescription={val.collegedescription}

                                />
                            })
                        }

                    </div>
                </div>

            </div>
            </div>
            <Footer />

        </>
    )
}

export default C7colleges
