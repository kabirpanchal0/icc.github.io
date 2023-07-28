import React from 'react'
import Header from '../../../Header'
import Footer from '../../../Footer'
import "../countries.css"
import CommonCountry from '../CommonCountry'
import uk from "../../../image/uk.jpg"
import Disciplinary from '../../../home/Disciplinary'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import Coursestable from '../../courses/coursestable/Coursestable'
import { useEffect } from 'react'



const Uk = () => {
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
                    <NavLink to="/" className="links">Home<span ><FaAngleRight/></span></NavLink><NavLink to="/allcon" className="links"> Countries <span><FaAngleRight/></span> </NavLink>U K
                    </div>
                </div>
            </div>
      <CommonCountry
      img={uk} countrytitle="U K"
        countrydisc="The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain,[k][16] is a country in Europe, off the north-western coast of the continental mainland.[17] It comprises England, Scotland, Wales and Northern Ireland.[18] The United Kingdom includes the island of Great Britain, the north-eastern part of the island of Ireland, and many smaller islands within the British Isles.[19] Northern Ireland shares a land border with the Republic of Ireland; otherwise, the United Kingdom is surrounded by the Atlantic Ocean, the North Sea, the English Channel, the Celtic Sea and the Irish Sea. The total area of the United Kingdom is 242,495 square kilometres (93,628 sq mi), with an estimated 2023 population of over 68 million people."
        link="https://en.wikipedia.org/wiki/United_Kingdom"
      />
    
     
      <div className='text-center mt-4'>
        <NavLink to="/ukcolleges" id='btn1' className="btn-go"> Go</NavLink>
        <NavLink to="/logins" id='btn' className="btn-go"> LOGIN TO GO</NavLink>
      </div>
      <Footer />
    </div>
  )
}

export default Uk
