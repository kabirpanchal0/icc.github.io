import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import "../signup/register.css"
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

import axios from "axios"


const Signup = () => {
    const [ress,setRes] = useState()
    const history = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        phoneno: "",
        age:"",
        gender:"",
        dob:"",
        city:"",
        state:"",
        country:"",
        nationality:"",
        password: "",
        c_password: ""
    });
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
            const pass = document.getElementsByName("password").value;
            
                axios.post('http://localhost:5000/signup', values)
                .then(res => {

                    console.log(res,'ress')
                    if(res !== null || undefined){
                        setRes(res)
                        navigate("/logins")
                       
                      
                    }
                   
                })
           
       
    }

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }


    return (
        <>
        <Modal isOpen
      size='lg' >
        <ModalHeader
        toggle={() => history("/")}>
            Signup
        </ModalHeader>
        <ModalBody>
            
        <div className="container-fluid d-flex justify-content-center align-items-center ">
                <div className="row">
                    <div className="col-12 mx-auto mt-3 ">

                        <form action="" onSubmit={handleSubmit}>
                            <h1 className='text-center mb-4'>SignUp</h1>
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
                                <input type="number" onChange={handleInput} name='age' placeholder='Enter your age'   className='input'    required />
                            </div>   
                            <div className='input-field '>
                                <input type="text" onChange={handleInput} name='gender' placeholder='gender'   className='input'    required />
                            </div>   
                            <div className='input-field '>
                                <input type="date" onChange={handleInput} name='dob' placeholder=''   className='input'    required />
                            </div>
                            <div className='input-field '>
                                <input type="text" onChange={handleInput} name='city' placeholder='city'   className='input'    required />
                            </div>   
                             <div className='input-field '>
                                <input type="text" onChange={handleInput} name='state' placeholder='state'   className='input'    required />
                            </div>   
                             <div className='input-field '>
                                <input type="text" onChange={handleInput} name='country' placeholder='country'   className='input'    required />
                            </div>   
                            <div className='input-field '>
                                <input type="text" onChange={handleInput} name='nationality' placeholder='nationality'   className='input'    required />
                            </div>   
                            <div className='input-field '>
                                <input type="password" onChange={handleInput} name='password' placeholder='password must be 8-16 character long'  className='input'  required/>
                            </div>
                              
                            <div className='input-field '>
                                <input type="password" onChange={handleInput} name='confirmpassword' placeholder="Confirm Password"  className='input'  required/>
                            </div>
                            <div className='input-field text-center'>
                                <button type='submit' className='submit text-center'> Sign Up</button>
                            </div>
                            <div>
                                <p className='mb-3 mt-3 text-center'> Already have account?<NavLink to="/logins">Login</NavLink></p>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
            </ModalBody>
        </Modal>
        </>
    )
}

export default Signup


    // const [inputvalue, setInputvalue] = useState(
    //     {
    //         username: "",
    //         email: "",
    //         dob: "",
    //         phoneno: "",
    //         password: "",

    //     }
    // )

    // const [data, setData] = useState([]);
    // console.log(inputvalue);
    // const getdata = (e) => {
    //     // console.log(e.target.value);
    //     //object destructuring 
    //     const { value, name } = e.target;
    //     // console.log(value, name);
    //     setInputvalue(() => {
    //         return {
    //             ...inputvalue,
    //             [name]: value
    //         }
    //     })
    // }

    // const addData = (e) => {
    //     e.preventDefault();
    //     const { username, email, dob, phoneno, password } = inputvalue;
    //     if (username === "") {
    //         alert("Username required ");

    //     }
    //     else if (email === "") {
    //         alert("email required ");

    //     }
    //     else if (dob === "") {
    //         alert("Date of Birth required ");

    //     }
    //     else if (phoneno === "") {
    //         alert("phone no required ");

    //     }
    //     else if (password === "") {
    //         alert("password required");

    //     } else if (!email.includes("@")) {
    //         alert("please enter valid email address");
    //     }
    //     else {
    //         console.log("Data is added successfully");
    //         localStorage.setItem("Userfind", JSON.stringify([...data, inputvalue]));
    //     }
    // }