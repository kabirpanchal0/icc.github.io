import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Ieltsusa = () => {
  return (
    <>
    <Header/>
    <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-10 mx-auto ">
                    <NavLink to="/" className="links">Home<span ><FaAngleRight /></span></NavLink><NavLink to="/detailsexam" className="links"> Colleges list  <span><FaAngleRight /></span> </NavLink>Universities in USA 
                </div>
            </div>
        </div>
  <div className="container d-flex justify-content-center align-items-center mt-5 ">
    <div className="row">
      <div className="col-10  mx-auto">
        <h3>Universities in USA accepting IELTS 5.5 and above
        </h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">USA University</th>
              <th scope="col">IELTS Overall</th>
              <th scope="col">IELTS Minimum Score</th>
             


            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><NavLink to="https://www.harvard.edu/">Harvard University</NavLink></th>
              <td>7.0</td>
              <td>7.0 </td>


            </tr>
            <tr>
              <th scope="row"><NavLink to="https://hst.mit.edu/">Massachusetts Institute of Technology (MIT)</NavLink></th>
              <td>7.0</td>
             
              

            </tr> 
            <tr>
              <th scope="row"><NavLink to="https://www.stanford.edu/">Stanford University</NavLink></th>
              <td>Stanford prefers the TOEFL</td>
              <td>7.0</td>
           

            </tr>
            <tr>
              <th scope="row"><NavLink to="https://www.berkeley.edu/">University of California, Berkeley</NavLink></th>
              <td>6.5</td>
              <td>7.0</td>
           
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

export default Ieltsusa
