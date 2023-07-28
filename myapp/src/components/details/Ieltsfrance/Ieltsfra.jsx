import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Ieltsfra = () => {
  return (
    <>
             <Header/>
             <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-10 mx-auto ">
                        <NavLink to="/" className="links">Home<span ><FaAngleRight /></span></NavLink><NavLink to="/detailsexam" className="links"> Colleges list  <span><FaAngleRight /></span> </NavLink>Universities in France 
                    </div>
                </div>
            </div>
      <div className="container d-flex justify-content-center align-items-center mt-5 ">
        <div className="row">
          <div className="col-10  mx-auto">
            <h3>Universities in France accepting IELTS 5.5 and above
            </h3>
            <table class="table mt-5">
              <thead>
                <tr>
                  <th scope="col">University Name</th>
                  <th scope="col">Minimum IELTS scores</th>
         
             


                </tr>
              </thead>
              <tbody >
                <tr>
                  <th scope="row"> University of Sorbonne, Paris</th>
                  <td>6.0</td>
                 
                
                </tr>
                <tr>
                  <th scope="row">Pierre and Marie Curie University, Paris</th>
                  <td>6</td>
            
                  
                </tr>
              
                <tr>
                  <th scope="row"> University of Strasbourg, Strasbourg</th>
                  <td>6.5</td>
                  
                 
                </tr>
                <tr>
                  <th scope="row">Jean Moulin Lyon University, Lyon</th>
                  <td>6.5</td>
                
                 
                </tr>
                <tr>
                  <th scope="row">University of Montpellier, Montpellier</th>
                  <td>6.0</td>
                
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Ieltsfra
