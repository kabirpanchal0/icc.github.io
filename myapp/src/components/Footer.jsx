import React from 'react'
// import "../components/home/home.css" 
import { NavLink } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
const Footer = () => {
  return (
    <div>
         <section id="footer" className='mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mx-auto">
                            <div className='row mt-5 mb-5'>
                                <div className='col-md-4 col-12 mx-auto'>
                                    <div className='aboutportal-title'>
                                     <NavLink to="/about" className='about-portal'> About Portal</NavLink>
                                        <h5> Created by Kabir Panchal</h5>
                                    </div>
                                </div>
                                <div className='col-md-4 col-12 mx-auto'>
                                    <NavLink to="/contact" className="contact-link"> Contact Us</NavLink>
                                    <br />
                                    our websites
                                    visit our websites
                                    
                                </div>
                                <div className='col-md-4 col-12 mx-auto'>
                                    <h3>  Social links </h3>
                                    <div className= 'social-icons d-flex text-center '>
                                       
                                            <NavLink className="facebook"> <FaFacebook /></NavLink>
                                        
                                    
                                            <NavLink className="instagram"> <FaInstagram /></NavLink>
                                        
                                      
                                            <NavLink className="twitter"> <FaTwitter /></NavLink>
                                        
                                       
                                            <NavLink className="google"> <FaGoogle /></NavLink>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Footer
