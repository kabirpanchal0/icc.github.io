import React from 'react'
import Header from '../../../Header'
import Footer from '../../../Footer'
import "../countries.css"
import CommonCountry from '../CommonCountry'
import Disciplinary from '../../../home/Disciplinary'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import newzeeland from "../../../image/newzeeland.jpg"
import { FaAngleRight } from "react-icons/fa";
import Coursestable from '../../courses/coursestable/Coursestable'

const Newzeeland = () => {
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
          <NavLink to="/" className="links">Home<span ><FaAngleRight/></span></NavLink><NavLink to="/allcon" className="links"> Countries <span><FaAngleRight/></span> </NavLink>New zee land
          </div>
        </div>
      </div>
      
      <CommonCountry
      img={newzeeland} countrytitle="New Zee Land"
        countrydisc="New Zealand (Māori: Aotearoa [aɔˈtɛaɾɔa]) is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island (Te Ika-a-Māui) and the South Island (Te Waipounamu)—and over 700 smaller islands. It is the sixth-largest island country by area, covering 268,021 square kilometres (103,500 sq mi). New Zealand is about 2,000 kilometres (1,200 mi) east of Australia across the Tasman Sea and 1,000 kilometres (600 mi) south of the islands of New Caledonia, Fiji, and Tonga. The country's varied topography and sharp mountain peaks, including the Southern Alps, owe much to tectonic uplift and volcanic eruptions. New Zealand's capital city is Wellington, and its most populous city is Auckland."
        link="https://en.wikipedia.org/wiki/New_Zealand"
      />

      <div className='text-center mt-4'>
        <NavLink to="/newcolleges" id='btn1' className="btn-go"> Go</NavLink>
        <NavLink to="/logins" id='btn' className="btn-go"> LOGIN TO GO</NavLink>
      </div>
      <Footer />
    </div>
  )
}

export default Newzeeland
