import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import "../detailsexam/detailsexam.scss"
import { NavLink } from 'react-router-dom'

const Detailsexam = () => {
  return (
    <>
      <Header />

      <section id='detailsexam'>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-md-6">

                  <div className='backwhite'>
                    <h1 className='h1'>Universities List for IELTS scores of 5.5 and above, select countries and show band details with specific countries</h1>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


      </section>


      <div className="container-fluid  d-flex justify-content-center align-items-center mt-5">
        <div className="row">
          <div className="col-12 mx-auto">

            <table class="table ">
              <thead>
                <tr>
                  <th scope="col" ><h1>Countries List</h1></th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th> <NavLink to="/ieltsger" className="det-country">Germany</NavLink> </th>

                </tr>
                <tr>
                  <th> <NavLink to="/ieltsfra" className="det-country">France</NavLink> </th>

                </tr>
                <tr>
                  <th scope="row"> <NavLink to="/ieltsita" className="det-country">Italy</NavLink> </th>

                </tr>
                <tr>
                  <th scope="row"> <NavLink to="/ieltsaus" className="det-country">Australia</NavLink> </th>

                </tr>
                <tr>
                  <th scope="row"> <NavLink to="/ieltsnew" className="det-country">New Zee Land</NavLink> </th>

                </tr>

                <tr>
                  <th scope="row"> <NavLink to="/ieltsuk" className="det-country">U K</NavLink> </th>

                </tr>
                <tr>
                  <th scope="row"> <NavLink to="/ieltsusa" className="det-country">U S A</NavLink> </th>

                </tr>
                <tr>
                  <th scope="row"> <NavLink to="/ieltscan" className="det-country">Canada</NavLink> </th>

                </tr>




              </tbody>
            </table>


          </div>
        </div>
      </div>



      <Footer />
    </>
  )
}

export default Detailsexam



{/* <div className="container  d-flex justify-content-center align-items-center mt-5 ">
<div className="row">
  <div className="col-10 mx-auto">



    <h1>Universities List for IELTS scores of 5.5 and above, select countries and show band details with specific countries</h1>
  </div>
</div>

</div> */}