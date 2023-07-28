import React, { useEffect } from 'react'
import Header from '../../../Header'
import Footer from '../../../Footer'
import "../countries.css"
import CommonCountry from '../CommonCountry'
import germany from "../../../image/germany.jpg"
import Disciplinary from '../../../home/Disciplinary'
import { NavLink, Route, Routes } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import axios from 'axios'
import { useState } from 'react'
import Coursestable from '../../courses/coursestable/Coursestable'
import Gercollages from '../../collages/Germany/Gercollages'





const Germany = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:5000/collagesdata')
      .then(res => {
        setColleges(res.data);

      })
      .catch(error => {
        console.log(error);
      });
  }, []);
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
            <NavLink to="/" className="links">Home<span ><FaAngleRight /></span></NavLink><NavLink to="/allcon" className="links"> Countries <span><FaAngleRight /></span> </NavLink>Germany
          </div>
        </div>
      </div>
      <CommonCountry
        img={germany}
        countrytitle="Germany"
        countrydisc="Germany,[e] officially the Federal Republic of Germany,[f] is a country in Central Europe. It is the second-most populous country in Europe after Russia, and the most populous member state of the European Union. Germany is situated between the Baltic and North seas to the north, and the Alps to the south; it covers an area of 357,022 square kilometres (137,847 sq mi), with a population of over 84 million within its 16 constituent states. Germany borders Denmark to the north, Poland and the Czech Republic to the east, Austria and Switzerland to the south, and France, Luxembourg, Belgium, and the Netherlands to the west. The nation's capital and most populous city is Berlin and its main financial centre is Frankfurt; the largest urban area is the Ruhr."
        link="https://en.wikipedia.org/wiki/Germany"
      />

      {/* <div className='text-center mt-5'>

        ` <NavLink  id='btn1'  className="btn-go" to={`/collagesdata/${colleges.id}`}>  </NavLink> 
        <NavLink  className="con-btn" to={`/colleges/${country.id}`}> {country.name}</NavLink>  
      </div> */}


      <div className='text-center mt-4'>

        <NavLink to="/gercolleges" id='btn1' className="btn-go"> </NavLink>
        <NavLink to="/logins" id='btn' className="btn-go"> LOGIN TO GO</NavLink>
      </div>
      <Routes>
        <Route path="/collages/:id" component={Gercollages} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Germany
