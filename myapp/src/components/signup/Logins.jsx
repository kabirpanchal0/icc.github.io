
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import './login.css'
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Logins = () => {


    const history = useNavigate();
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
            axios.post('http://localhost:5000/logins', values)
            .then(res => {
                console.log(res.data)
                if(res.data.success === 1 ){
                    navigate('/');
                    localStorage.setItem("username", res.data.details.name);
                    console.log('Value stored in localStorage');
                }
                else{
                    alert("Invalid Email or password");
                }
            })
            .catch(err => console.log(err))
    
    }    
    
    return (

        <div>
            <Modal isOpen
                size='lg'>
                <ModalHeader
                    toggle={() => history("/")}>
                    Login
                </ModalHeader>
                <ModalBody>

                <div className="container-fluid d-flex justify-content-center align-items-center  ">
                <div className="row">
                    <div className="col-12 mx-auto mt-5">

                        <form action="" onSubmit={handleSubmit}>
                            <h1 className='text-center mb-4'>Login</h1>
                            <div className='input-field'>
                                <input type="text" onChange={handleInput}  name='email' placeholder='email'  className='input' />
                               
                            </div>
                            <div className='input-field'>
                                <input type="password" onChange={handleInput}  name='password' placeholder='*******'  className='input'   />
                            
                               
                            </div>

                            <div className='input-field'>
                                <button type='submit' className='submit'> Login</button>
                            </div>
                            <div className='for mt-3' >
                            <NavLink to="/forgotpass" className="forgotpass"> Forgot password?</NavLink>
                            </div>
                            <div>
                                <p> Dont have account? <NavLink to="/signup" > Signup</NavLink></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
                </ModalBody>

            </Modal>
        </div>
    )
}

export default Logins

  // const [inputvalue, setInputvalue] = useState(
    //     {

    //         email: "",
    //         password: "",

    //     }
    // )
    // const handleSubmit =(event) => {
    //     event.preventDefault();
    // }

    // // const [data, setData] = useState([]);
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

    //     const getuserarr = localStorage.getItem("Userfind");
    //     console.log(getuserarr);

    //     const { email, password } = inputvalue;

    //     if (email === "") {
    //         alert("email required ");

    //     }

    //     else if (password === "") {
    //         alert("password required");

    //     } else if (!email.includes("@")) {
    //         alert("please enter valid email address");
    //     }
    //     else {
    //         if (getuserarr && getuserarr.length) {
    //             const userdata = JSON.parse(getuserarr);
    //             const userlogin = userdata.filter((element, indexnumber) => {
    //                 return element.email === email && element.password === password
    //             });
    //             if (userlogin.length === 0) {
    //                 alert("Enter valid details");
    //             }
    //             else {
    //                 localStorage.setItem("userlogin", JSON.stringify(userlogin));
    //                 console.log("Login Successfully");
    //                 history('/');
    //             }
    //         }
    //     }
    // }