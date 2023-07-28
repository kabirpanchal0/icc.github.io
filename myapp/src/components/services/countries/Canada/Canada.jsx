import React from 'react'
import Header from '../../../Header'
import Footer from '../../../Footer'
import "../countries.css"
import CommonCountry from '../CommonCountry'
import canada from "../../../image/canada.jpg"
import Disciplinary from '../../../home/Disciplinary'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import { useEffect } from 'react'
import Coursestable from '../../courses/coursestable/Coursestable'





const Canada = () => {
  useEffect(()=>{
    if(localStorage.length == 0){
      document.getElementById("btn").innerHTML="LOGIN TO GO"
      document.getElementById("btn1").style.display ='none';
    } 
    else{
      document.getElementById("btn1").innerHTML="VISIT"
      document.getElementById("btn").style.display ='none';
    }
  })
  return (
    <div>
      <Header />
      <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-10 mx-auto ">
                    <NavLink to="/" className="links">Home<span ><FaAngleRight/></span></NavLink><NavLink to="/allcon" className="links"> Countries <span><FaAngleRight /></span> </NavLink>Canada
                    </div>
                </div>
            </div>
      <CommonCountry 
      img={canada}
      countrytitle="Canada"
        countrydisc="Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic Ocean to the Pacific Ocean and northward into the Arctic Ocean, making it the world's second-largest country by total area, with the world's longest coastline. It is characterized by a wide range of both meteorologic and geological regions. The country is sparsely inhabited, with the vast majority residing south of the 55th parallel in urban areas. Canada's capital is Ottawa and its three largest metropolitan areas are Toronto, Montreal, and Vancouver."
        link="https://en.wikipedia.org/wiki/Canada"
      />
     
   
      <div className='text-center mt-5'>
        <NavLink to="/cancolleges" id='btn1' className="btn-go"> Go</NavLink>
        <NavLink to="/logins" id='btn' className="btn-go"> LOGIN TO GO</NavLink>
      </div>
      <Footer />

    </div>
  )
}

export default Canada
