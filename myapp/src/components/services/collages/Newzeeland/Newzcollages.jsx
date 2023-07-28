import React from 'react'
import Header from "../../../Header"
import Footer from '../../../Footer'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import { useState, useEffect } from 'react';
import axios from "axios";

const Newzcollages = () => {
  const [collages, setCollages] = useState([]);

  useEffect(() => {
      axios.get(`http://localhost:5000/newcolleges`)
          .then(res => {
              if (res.data) {
                  setCollages(res.data);
                  console.log("new zee land colleges");
              }
          })
          .catch(err => console.log(err));
  }, []);
  return (
    <>
      <Header />

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-10 mx-auto ">
            <NavLink to="/" className="links">Home<span ><FaAngleRight /></span></NavLink><NavLink to="/countries/5" className="links"> New Zee Land <span><FaAngleRight /></span> </NavLink>New Zee Land Colleges
          </div>
        </div>
      </div>
      {/* <Coursestable /> */}
      <div className="container-fluid mt-5 ">
        <div className="row">
          <div className="col-12 mx-auto">
            <h1 className="text-center"></h1>
            <h1 className="text-center">New Zee Land Colleges</h1>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-10 mx-auto">    
            {collages.map(collage => (

              <NavLink to={collage.link} className="commoncolleges-link" >
              <div class="card mt-4" key={collage.id}>
                <div class="card-body" >
                  <h5 class="card-title ">{collage.name}</h5>
                  <h6 class="card-text mb-2 mt-4">{collage.location}</h6>
                  <p class="card-text mt-4">{collage.description}</p>

                
                </div>
              </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Newzcollages
