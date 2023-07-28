import React from 'react'
import { NavLink } from 'react-router-dom'
import "../coursecollages/coursecolleges.scss"


const Commoncolleges = (props) => {
    return (
        <>
            <NavLink to={props.navlink} className="commoncolleges-link">
            <div className="card mt-5" >

                <div className="card-body">
                    <h5 className="card-title"><strong>{props.collegetitle}</strong> </h5>
                    <p className="card-text mt-4">
                        {props.collegetext}</p>
                    <p className='det'>{props.det}<span className="card-description">{props.collegedescription}</span></p>
                    {/* <div className='text-center'>
        <NavLink to='/applyform' className="apply-btn"> Apply this course</NavLink>
    </div> */}
                </div>
            </div>
            </NavLink>

        </>
    )
}

export default Commoncolleges
