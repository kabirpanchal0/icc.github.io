
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../../admin/signin/adminsignin.css"
import '../../signup/login.css'
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Adminsignin = () => {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState({});
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    
            axios.post('http://localhost:5000/adminsignin', values)
            .then(res => {
                console.log(res.data , 'data')
                console.log(res.email , 'email')
                console.log(res.password ,'password')
                if(res.data.success === 1 ){
                    navigate('/adminhome');
                    localStorage.setItem("username", res.data.details.name);
                }
                else{
                    alert("Invalid Email or password");
                }
            })
            .catch(err => console.log(err))
    
    }    


   
    // const handleInput = (event) => {
    //     setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    // }
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //         axios.post('http://localhost:5000/adminsignin', values)
    //         .then(res => {
    //             console.log(res.data)
                // if(res.data.success === 1 ){
                //     navigate('/');
                //     localStorage.setItem("username", "logged");
                // }
                // else{
                //     alert("Invalid Email or password");
                // }
    //         })
    //         .catch(err => console.log(err))
    
    // }    
    
    return (

        <div>
         
                <div className="container-fluid d-flex justify-content-center align-items-center  ">
                <div className="row">
                    <div className="col-12 mx-auto mt-5">

                        <form action="" onSubmit={handleSubmit}>
                            <h1 className='text-center mb-4'> Admin Login</h1>
                            <div className='input-field '>
                                <input type="text" onChange={handleInput}  name='email' placeholder='email'  className='input' />
                               
                            </div>
                            <div className='input-field'>
                                <input type="password" onChange={handleInput}  name='password' placeholder='*******'  className='input'   />
                            
                               
                            </div>

                            <div className='input-field'>
                                <button type='submit' className='submit'> Login</button>
                            </div>
                            <div className='for mt-4'>
                            <NavLink to="/forgotpass"  className='forgot'> Forgot password?</NavLink>
                            </div>
                            <div>
                                <p> Dont have account? <NavLink to="/adminsignup"> Signup</NavLink></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
                </div>
    )
}

export default Adminsignin
