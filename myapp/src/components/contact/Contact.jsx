import React, { useState } from "react";
import Header from "../Header";
import "../contact/contact.css"
import Footer from "../Footer";
import axios from "axios";



const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phoneno: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();


    axios.post('http://localhost:5000/contact', values)
      .then(res => {

        console.log(res, 'ress')
        if (res !== null || undefined) {
          setValues(res)
          alert("we succesfully get youre data,  we will contact you soon")
      
        }
      })
  }
  
  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
}

  return (
    <>
      <Header />
      <section id="contact">


        <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contactpage">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" onChange={handleInput} placeholder="Enter Your Name" />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label"> Email </label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" name="email" onChange={handleInput} placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Phone</label>
                  <input type="number" className="form-control" id="exampleFormControlInput1" name="phoneno" onChange={handleInput} placeholder="Phone No" />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" name="message" onChange={handleInput} rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-outline-success">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <div className="bottom"> </div>

    </>
  );
}

export default Contact; 