import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import { NavLink } from 'react-router-dom'
import "../courses/applycourses.css"

const Applycourses = () => {
  return (
    <>
      <Header />


      
      <section id='applycourses'>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-6">

                                    <div className='backwhite'>
                                        <h1 className='h1'>Select Courses <br /> and Apply</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



            </section>
            
 <div className="container-fluid">
                <div className="row">
                    <div className="col-12  mx-auto">
                    <div className="row">
                                <div className="col-6 col-md-12 mx-auto">
                                
                   
                    </div>   
                    </div>   
                   
                    </div>
                </div>
            </div>





      <NavLink to="/applyform"> Apply</NavLink>
      <Footer />

    </>
  )
}

export default Applycourses
