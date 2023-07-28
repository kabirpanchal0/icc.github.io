import React from 'react'
import Header from "../../../Header"
import Footer from '../../../Footer'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

const Gercollages = () => {
  // const { id } = useParams();

  // const [collages, setCollages] = useState([]);
  // useEffect(() => {
  //   axios.post('http://localhost:5000/collages/:id')
  //     .then(res => {
  //       setCollages(res.data);

  //       console.log("addedd");
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, [id]);
  // const [collages, setCollages] = useState([]);
  // const { id } = useParams();
  // useEffect(() => {
  //   axios.post(`http://localhost:5000/collages/${id}`)
  //     .then(res => res.json()) 
  //     .then(data => {
  //       if (data.success) {
  //         setCollages(data.details);
  //       }
  //     });
  // }, [id]);


  // const [country, setCountry] = useState([]);

  // useEffect(()=>{
  //         axios.get('http://localhost:5000/countries')
  //         .then(res =>{
  //             setCountry(res.data);

  //         })
  //         .catch(error => {
  //             console.log(error);
  //         });
  // }, []);
  // console.log(country.name , 'errr')


  const [collages, setCollages] = useState([]);

  useEffect(() => {
      axios.get(`http://localhost:5000/gercolleges`)
          .then(res => {
              if (res.data) {
                  setCollages(res.data);
                  console.log("Gercolleges");
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
            <NavLink to="/" className="links">Home<span ><FaAngleRight /></span></NavLink><NavLink to="/countries/1" className="links"> Germany <span><FaAngleRight /></span> </NavLink>Germany Colleges
          </div>
        </div>
      </div>
      {/* <Coursestable /> */}
      <div className="container-fluid mt-5 ">
        <div className="row">
          <div className="col-12 mx-auto">
            <h1 className="text-center"></h1>
            <h1 className="text-center">Germany Colleges</h1>
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

export default Gercollages
