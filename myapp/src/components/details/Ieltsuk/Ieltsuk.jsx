import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";

const Ieltsuk = () => {
  return (
    <>
          <Header/>
     
     <div className="container-fluid mt-5">
             <div className="row">
                 <div className="col-10 mx-auto ">
                     <NavLink to="/" className="links">Home<span ><FaAngleRight /></span></NavLink><NavLink to="/detailsexam" className="links"> Colleges list  <span><FaAngleRight /></span> </NavLink>Universities in U K 
                 </div>
             </div>
         </div>
   <div className="container d-flex justify-content-center align-items-center mt-5 ">
     <div className="row">
       <div className="col-10  mx-auto">
         <h3>Universities in New Zee Land accepting IELTS 5.5 and above
         </h3>
         <table class="table">
           <thead>
             <tr>
               <th scope="col">U K University</th>
               <th scope="col">IELTS Overall</th>
               <th scope="col">IELTS Writing</th>
               <th scope="col">IELTS Reading</th>
               <th scope="col">IELTS Listening</th>
               <th scope="col">IELTS Speaking</th>


             </tr>
           </thead>
           <tbody>
             <tr>
               <th scope="row"><NavLink href="https://www.aut.ac.nz/">Auckland University of Technology</NavLink></th>
               <td>6</td>
               <td>5.5</td>
               <td>5.5</td>
               <td>5.5</td>
               <td>5.5</td>

             </tr>
             <tr>
               <th scope="row"><NavLink to="https://www.lincoln.ac.nz/"> Lincoln University</NavLink></th>
               <td>6</td>
               <td>6</td>
               <td>5.5</td>
               <td>5.5</td>
               <td>6</td>

             </tr>
             <tr>
               <th scope="row"><NavLink to="https://www.massey.ac.nz/">Massey University</NavLink></th>
               <td>6</td>
               <td>6</td>
               <td>5.5</td>
               <td>5.5</td>
               <td>6</td>

             </tr>
             <tr>
               <th scope="row"><NavLink to="https://www.canterbury.ac.nz/">University of Canterbury</NavLink></th>
               <td>6</td>
               <td>6</td>
               <td>5.5</td>
               <td>5.5</td>
               <td>6</td>

             </tr>
             <tr>
               <th scope="row"> <NavLink to="https://www.otago.ac.nz/"> University of Otago </NavLink></th>
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

export default Ieltsuk
