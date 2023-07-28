import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import "../../signup/register.css"
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import axios from "axios"


const Adminsignup = () => {
    const [ress,setRes] = useState()
    const history = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        phoneno: "",
        password: "",
        
    });
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
            const pass = document.getElementsByName("password").value;
            
                axios.post('http://localhost:5000/adminsignup', values)
                .then(res => {

                    console.log(res,'ress')
                    if(res !== null || undefined){
                        setRes(res)
                        navigate("/adminlogin")
                       
                      
                    }
                   
                })
           
       
    }

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }


    return (
        <>
      
            
        <div className="container-fluid d-flex justify-content-center align-items-center ">
                <div className="row">
                    <div className="col-12 mx-auto mt-3 ">

                        <form action="" onSubmit={handleSubmit}>
                            <h1 className='text-center mb-4'> Admin SignUp</h1>
                            <div className='input-field'>
                            
                                <input type="text" onChange={handleInput} name='name' placeholder='Full Name' className='input' required />
                            </div>
                            <div className='input-field '>
                                <input type="text" onChange={handleInput} name='email' placeholder='email'   className='input'  required/>
                            </div>
                            <div className='input-field '>
                                <input type="text" onChange={handleInput} name='phoneno' placeholder='phoneno'   className='input'    required />
                            </div>    
                            <div className='input-field '>
                                <input type="password" onChange={handleInput} name='password' placeholder='password must be 8-16 character long'  className='input'  required/>
                            </div>
                              
                           
                            <div className='input-field text-center'>
                                <button type='submit' className='submit text-center'> Sign Up</button>
                            </div>
                            <div>
                                <p className='mb-3 mt-3 text-center'> Already have account?<NavLink to="/adminsignin">Login</NavLink></p>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
         
        </>
    )
}

export default Adminsignup

