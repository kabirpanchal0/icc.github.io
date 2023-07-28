import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Confirmpassword = () => {

    const [values, setValues] = useState({
        password: "",
        new_password: "",
        c_password: ""
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/changepassword', values)
        .then(res => {
            if(res.data.success){
                alert("password changed success")
            }
            else {
                alert("password change failed: " + res.data.message);
            }
        })
    }
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]:  event.target.value }))
    }

    return (
        <>

            <div className="container-fluid  d-flex justify-content-center align-items-center ">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <h1 className='text-center mt-5'> Create new Password</h1>
                        <form onSubmit={handleSubmit} >
                        <div className='input-field mb-3 '>
                                <input type="text" onChange={handleInput} name="password"  placeholder='old password' />
                            </div>
                            <div className='input-field mb-3 '>
                                <input type="text" onChange={handleInput} name="new_password"  placeholder='new password' />
                            </div>
                            <div className='input-field mb-3'>
                                <input type="text"  onChange={handleInput} name="c_password"  placeholder='confirm password' />
                            </div>
                            <div className='btn mb-3'>
                                <button type="submit"> Submit </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Confirmpassword
