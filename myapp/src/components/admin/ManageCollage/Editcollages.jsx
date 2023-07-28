import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Adminnavbar from '../navbar/Adminnavbar'

const Addcollages = () => {
    
    
    const [values, setValues] = useState({
        name: "",
        countries_id:"",
      
    });
  


    const handleSubmit = (event) => {
        event.preventDefault();
             axios.post('http://localhost:5000/addcollages', values)
                .then(res => {

                    console.log(res,'ress')
                    if(res !== null || undefined){
                        setValues(res)
                       
                    
                    }
                   
                })
                .catch(error => {
                    console.log(error);
                });
           
       
    }

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
  return (
    <>
        <Adminnavbar />
            <section id="manageuser">


                <div className="my-5">
                    <h1 className="text-center">Add Collages</h1>
                </div>
                <div className="container contactpage">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form  onClick={handleSubmit}>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label"> Id </label>
                                    <input type="number" className="form-control" id="exampleFormControlInput1" name="countries_id"placeholder="collage id" onChange={handleInput} />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label"> Name </label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" name="name"placeholder="collage name" onChange={handleInput} />
                                </div>
                             
                               
                                <button type="submit" className="btn btn-outline-success">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Addcollages
