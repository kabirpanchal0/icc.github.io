import React from 'react'
import Header from '../../../Header'
import Footer from '../../../Footer'
import  { useEffect } from 'react'
import "../countries.css"
import "../Disciplinary/disc.css"
import CommonCountry from '../CommonCountry'
import australia from "../../../image/australia.jpg"
import Disciplinary from '../../../home/Disciplinary'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import Coursestable from '../../courses/coursestable/Coursestable'



const Australia = () => {
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
    <>
      <Header />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-10 mx-auto ">
          <NavLink to="/" className="links">Home<span ><FaAngleRight/></span></NavLink><NavLink to="/allcon" className="links"> Countries <span><FaAngleRight /></span> </NavLink>Australia
          </div>
        </div>
      </div>
      <CommonCountry
        img={australia}
        countrytitle="Australia"
        countrydisc="Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands.[13] Australia is the largest country by area in Oceania and the world's sixth-largest country. Australia is the oldest,[14] flattest,[15] and driest inhabited continent,[16][17] with the least fertile soils.[18][19] It is a megadiverse country, and its size gives it a wide variety of landscapes and climates, with deserts in the centre, tropical rainforests in the north-east, tropical savannas in the north, and mountain ranges in the south-east."
        link="https://en.wikipedia.org/wiki/Australia"

      />
      
      <div className='text-center mt-4'>
        <NavLink to="/auscolleges" id='btn1' className="btn-go"> Go</NavLink>
        <NavLink to="/logins" id='btn' className="btn-go"> LOGIN TO GO</NavLink>
      </div>
      <Footer />

    </>
  )
}

export default Australia
