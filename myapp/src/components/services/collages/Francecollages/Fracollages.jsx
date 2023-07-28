import React from 'react'
import Header from "../../../Header"
import Footer from '../../../Footer'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import Coursestable from '../../courses/coursestable/Coursestable';


const Fracollages = () => {
    const [collages, setCollages] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:5000/fracolleges`)
            .then(res => {
                if (res.data) {
                    setCollages(res.data);
                    console.log("francecolleges");
                }
            })
            .catch(err => console.log(err));
    }, [id]);
    return (
        <div>
            <Header />

            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-10 mx-auto ">
                        <NavLink to="/" className="links">Home<span ><FaAngleRight /></span></NavLink><NavLink to="/countries/2" className="links"> France <span><FaAngleRight /></span> </NavLink>France Colleges
                    </div>
                </div>
            </div>

            
            <div className="container-fluid mt-5 ">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <h1 className="text-center">France Colleges</h1>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        {collages.map(collage => (

                            <NavLink to={collage.link} className="commoncolleges-link" >
                                <div className="card mt-4" key={collage.id}>
                                    <div className="card-body" >
                                        <h5 className="card-title ">{collage.name}</h5>
                                        <h6 className="card-text mb-2 mt-4">{collage.location}</h6>
                                        <p className="card-text mt-4">{collage.description}</p>


                                    </div>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Fracollages
