import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
  
const IeltsAus = () => {
  return (
    <>
      
        <Header/>
        <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-10 mx-auto ">
                        <NavLink to="/" className="links">Home<span ><FaAngleRight /></span></NavLink><NavLink to="/detailsexam" className="links"> Colleges list  <span><FaAngleRight /></span> </NavLink>Universities in Australia 
                    </div>
                </div>
            </div>
      <div className="container d-flex justify-content-center align-items-center mt-5 ">
        <div className="row">
          <div className="col-10  mx-auto">
            <h3>Universities in Australia accepting IELTS 5.5 and above
            </h3>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Australian University</th>
                  <th scope="col">IELTS Overall</th>
                  <th scope="col">IELTS Writing</th>
                  <th scope="col">IELTS Reading</th>
                  <th scope="col">IELTS Listening</th>
                  <th scope="col">IELTS Speaking</th>


                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><NavLink href="https://www.acu.edu.au/">Australian Catholic University</NavLink></th>
                  <td>6</td>
                  <td>6</td>
                  <td>5.5</td>
                  <td>5.5</td>
                  <td>6</td>

                </tr>
                <tr>
                  <th scope="row"><NavLink to="https://www.cdu.edu.au/"> Charles Darwin University </NavLink></th>
                  <td>6</td>
                  <td>6</td>
                  <td>5.5</td>
                  <td>5.5</td>
                  <td>6</td>

                </tr>
                <tr>
                  <th scope="row"><NavLink to="https://www.cqu.edu.au/"> CQ University </NavLink></th>
                  <td>6</td>
                  <td>6</td>
                  <td>5.5</td>
                  <td>5.5</td>
                  <td>6</td>

                </tr>
                <tr>
                  <th scope="row"><NavLink to="https://deakinuniversity.in/deakinindia/?gclid=CjwKCAjwvJyjBhApEiwAWz2nLXAEQ84f2GLPHJLhW_XDHotGvT29SCjuBdsk2ui81sEaY4Hb-UUESxoC-4gQAvD_BwE"> Deakin University </NavLink></th>
                  <td>6</td>
                  <td>6</td>
                  <td>5.5</td>
                  <td>5.5</td>
                  <td>6</td>

                </tr>
                <tr>
                  <th scope="row"> <NavLink to="https://www.ecu.edu.au/"> Edith Cowan University </NavLink></th>
                  <td>6</td>
                  <td>6</td>
                  <td>5.5</td>
                  <td>5.5</td>
                  <td>6</td>

                </tr>
                <tr>
                  <th scope="row"><NavLink to="https://www.sydney.edu.au/study/international-students.html?campaign=2023_India_Pilot&source=search&area=university&a=p-stud&type=p&pid=d_unis&&s_kwcid=AL!14725!3!652756043732!e!!g!!federation%20university%20australia&gclid=CjwKCAjwvJyjBhApEiwAWz2nLTEi-jQMIx9wfRohnsUkuP9eS2I6NC9elIi-jhfOIQzhAQ6M_PCiKBoC-F8QAvD_BwE&gclsrc=aw.ds">Federation University </NavLink> </th>
                  <td>6</td>
                  <td>6</td>
                  <td>5.5</td>
                  <td>5.5</td>
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

export default IeltsAus
