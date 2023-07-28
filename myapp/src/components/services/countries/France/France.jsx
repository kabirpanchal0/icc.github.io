import React from 'react'
import Header from '../../../Header'
import Footer from '../../../Footer'
import "../countries.css"
import CommonCountry from '../CommonCountry'
import france from "../../../image/france.jpg"
import Disciplinary from '../../../home/Disciplinary'
import { NavLink,Routes, Route } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import { useEffect } from 'react'
import Coursestable from '../../courses/coursestable/Coursestable'
import Fracollages from '../../collages/Francecollages/Fracollages'



const France = () => {
  useEffect(() => {
    if (localStorage.length == 0) {
      document.getElementById("btn").innerHTML = "LOGIN TO GO"
      document.getElementById("btn1").style.display = 'none';
    }
    else {
      document.getElementById("btn1").innerHTML = "VISIT"
      document.getElementById("btn").style.display = 'none';
    }
  })
  return (
    <div>
      <Header />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-10 mx-auto ">
            <NavLink to="/" className="links">Home<span ><FaAngleRight /></span></NavLink><NavLink to="/allcon" className="links"> Countries <span><FaAngleRight /></span> </NavLink>France
          </div>
        </div>
      </div>
      <CommonCountry
        img={france}
        countrytitle="France"

        countrydisc="France (French: [fʁɑ̃s] Listen), officially the French Republic (French: République française [ʁepyblik fʁɑ̃sɛz]),[14] is a country located primarily in Western Europe. It also includes overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans,[XII] giving it one of the largest discontiguous exclusive economic zones in the world. Its metropolitan area extends from the Rhine to the Atlantic Ocean and from the Mediterranean Sea to the English Channel and the North Sea; overseas territories include French Guiana in South America, Saint Pierre and Miquelon in the North Atlantic, the French West Indies, and many islands in Oceania and the Indian Ocean."
        link="https://en.wikipedia.org/wiki/France"
      />




      <div className='text-center mt-4'>
        <NavLink to="/fracolleges" id='btn1' className="btn-go"> </NavLink>
        <NavLink to="/logins" id='btn' className="btn-go"> LOGIN TO GO</NavLink>
      </div>
      <Routes>
        <Route path="/collages/:id" component={Fracollages} />
      </Routes>
      <Footer />
    </div>
  )
}

export default France
