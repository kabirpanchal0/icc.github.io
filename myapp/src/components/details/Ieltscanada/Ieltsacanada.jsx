import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Ieltsacanada = () => {
  return (
    <>
    <Header/>
    <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-10 mx-auto ">
                    <NavLink to="/" className="links">Home<span ><FaAngleRight /></span></NavLink><NavLink to="/detailsexam" className="links"> Colleges list  <span><FaAngleRight /></span> </NavLink>Universities in Canada 
                </div>
            </div>
        </div>
  <div className="container d-flex justify-content-center align-items-center mt-5 ">
    <div className="row">
      <div className="col-10  mx-auto">
        <h3>Universities in Cananda accepting IELTS 5.5 and above
        </h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Canada University</th>
              <th scope="col">IELTS Overall</th>
              <th scope="col">IELTS Minimum Score</th>
             


            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><NavLink to="https://www.utoronto.ca/">University of Toronto</NavLink></th>
              <td>6.5</td>
              <td>6.5 in each module</td>


            </tr>
            <tr>
              <th scope="row"><NavLink to="hhttps://www.ubc.ca/">University of British Columbia</NavLink></th>
              <td>6</td>
              <td>6</td>
              

            </tr>
            <tr>
              <th scope="row"><NavLink to="https://www.centennialcollege.ca/international-education/international-students?gclid=CjwKCAjwpayjBhAnEiwA-7ena6cov27iE7NmolazDv_DebjpcIIe7EXYFWpBYJwcltadNBtUMgi47hoCEeQQAvD_BwE&gclsrc=aw.ds">Centennial College, Toronto</NavLink></th>
              <td>6.5</td>
              <td>6.5</td>
           

            </tr>
            <tr>
              <th scope="row"><NavLink to="sauder.ubc.ca/?utm_campaign=school-always-on&utm_source=google&utm_medium=paid_search&utm_content=text-rsa_generic&&&gclid=CjwKCAjwpayjBhAnEiwA-7ena4jc9I1SFMVPdsBhzEGw_33hM9BTR9kUp1fFO0CSpQYFnmSHtA-eqBoC98cQAvD_BwE&gclsrc=aw.ds">Seneca College, Toronto</NavLink></th>
              <td>6</td>
              <td>6</td>
           

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

export default Ieltsacanada
