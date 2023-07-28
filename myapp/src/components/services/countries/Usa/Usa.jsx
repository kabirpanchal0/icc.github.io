import React, { useEffect } from 'react'
import Header from '../../../Header'
import Footer from '../../../Footer'
import "../countries.css"
import Disciplinary from '../../../home/Disciplinary'
import { Navigate, useNavigate } from 'react-router-dom'
import CommonCountry from '../CommonCountry'
import usa from "../../../image/usa.jpg"
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import Coursestable from '../../courses/coursestable/Coursestable'

const Usa = () => {
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
                    <NavLink to="/" className="links">Home<span ><FaAngleRight/></span></NavLink><NavLink to="/allcon" className="links"> Countries <span><FaAngleRight /></span> </NavLink>U S A
                    </div>
                </div>
            </div>
      <CommonCountry
      img={usa} 
      countrytitle="U S A"
        countrydisc="The United States of America (U.S.A. or USA), commonly known as the United States (U.S. or US) or America, is a country primarily located in North America. It consists of 50 states, a federal district, five major unincorporated territories, nine Minor Outlying Islands,[h] and 326 Indian reservations. The United States is also in free association with three Pacific Island sovereign states: the Federated States of Micronesia, the Marshall Islands, and the Republic of Palau. It is the world's third-largest country by both land and total area.[b] It shares land borders with Canada to its north and with Mexico to its south and has maritime borders with the Bahamas, Cuba, Russia, and other nations.[i] With a population of over 333 million,[j] it is the most populous country in the Americas and the third most populous in the world. The national capital of the United States is Washington, D.C. and its most populous city and principal financial center is New York City."
        link="https://en.wikipedia.org/wiki/United_States"
      />
 
      <div className='text-center mt-4'>
        <NavLink to="/usacolleges" id='btn1' className="btn-go"> Go</NavLink>
        <NavLink to="/logins" id='btn' className="btn-go"> LOGIN TO GO</NavLink>
      </div>
      <Footer />
    </div>
  )
}

export default Usa
