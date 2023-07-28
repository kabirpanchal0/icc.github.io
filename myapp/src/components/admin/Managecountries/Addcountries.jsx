import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Adminnavbar from '../navbar/Adminnavbar';
import Adminsidebar from '../sidebar/Adminsidebar';
import { useNavigate } from 'react-router-dom';

const Addcountries = () => {
    const [values, setValues] = useState({
        name: "",
    });


    const Navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:5000/addcountry', values)
            .then(res => {

                console.log(res, 'ress')
                if (res.success !== null || undefined) {
                    setValues(res)
                    console.log("added")
                    alert("added")
                    Navigate("/countriesdata")

                }

            })
            .catch(error => {
                console.log(error);
            });


    }

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value]}))
    }
    return (
    <>
            <div className="countries">
                <Adminsidebar />
                <div className="countriescontainer">
                    <Adminnavbar />
                    <section id="manageuser">


                        <div className="my-5">
                            <h1 className="text-center">Add Countries</h1>
                        </div>
                        <div className="container contactpage">
                            <div className="row">
                                <div className="col-md-6 col-10 mx-auto">
                                    <form onSubmit={handleSubmit}>

                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label"> Add country </label>
                                            <input type="text" className="form-control"  name="name"  placeholder="Country name" onChange={handleInput} requi />
                                    
                                        </div>


                                        <button type="submit" className="btn btn-outline-success">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    </div>
                    </div>
                </>
                )
}

                export default Addcountries
