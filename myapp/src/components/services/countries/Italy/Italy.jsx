import React from 'react'
import Header from '../../../Header'
import Footer from '../../../Footer'
import "../countries.css"
import CommonCountry from '../CommonCountry'
import Disciplinary from '../../../home/Disciplinary'
import { NavLink } from 'react-router-dom'
import italy from "../../../image/italy.jpg"
import { FaAngleRight } from "react-icons/fa";
import { useEffect } from 'react'
import Coursestable from '../../courses/coursestable/Coursestable'

const Italy = () => {
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
    <>
      <Header />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-10 mx-auto ">
            <NavLink to="/" className="links">Home<span ><FaAngleRight /></span></NavLink><NavLink to="/allcon" className="links"> Countries <span><FaAngleRight /></span> </NavLink>Italy
          </div>
        </div>
      </div>
      <CommonCountry
        img={italy}
        countrytitle="Italy"
        countrydisc="Italy (Italian: Italia [iˈtaːlja] (listen)), officially the Italian Republic[a] or the Republic of Italy,[13][14] is a country in Southern[15][16][17] and Western[18][note 1] Europe. Located in the middle of the Mediterranean Sea, it consists of a peninsula delimited by the Alps and surrounded by several islands; its territory largely coincides with the homonymous geographical region.[19] Italy shares land borders with France, Switzerland, Austria, Slovenia and the enclaved microstates of Vatican City and San Marino. It has a territorial exclave in Switzerland, Campione, and some islands in the African Plate. Italy covers an area of 301,230 km2 (116,310 sq mi), with a population of about 60 million.[20] It is the third-most populous member state of the European Union, the sixth-most populous country in Europe, and the tenth-largest country in the continent by land area. Italy's capital and largest city is Rome."
        link="https://en.wikipedia.org/wiki/Italy"
      />
   
      <div className='text-center mt-4'>
        <NavLink to="/itacolleges" id='btn1' className="btn-go"> Go</NavLink>
        <NavLink to="/logins" id='btn' className="btn-go"> LOGIN TO GO</NavLink>
      </div>
      <Footer />
    </>
  )
}

export default Italy
