import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import "../about/feedback.css"

const Feedback = () => {
    const [model, setModel] = useState(false);
    const [values, setValues] = useState({
        name: "",
        emai: "",
        feedback: "",   
    })
    return (
        <>
            <Header />
            <div className="container-fluid  d-flex justify-content-center align-items-center text-center mt-5">
                <div className="row">

                    <div className="col-10  mx-auto mt-5">
                        <h1>Give your Feedback here!</h1>

                    </div>
                    <div className="col-10  mx-auto mt-3">
                        <button type='submit' onClick={() => setModel((value) => !value)} className='btn btn-primary'> Feedback </button>

                    </div>
                    {model && <form action="">


                        <div className="col-10  mx-auto mt-4">
                            <input type='text' placeholder='name' name='name' />

                        </div>

                        <div className="col-10  mx-auto mt-2">
                            <input type='email' placeholder='email' name='email' />

                        </div>
                        <div className="col-10  mx-auto mt-2">
                            <textarea type='textarea' placeholder='write your experience' name='feedback' />

                        </div>
                        <div className="col-10  mx-auto mt-2 mb-5">
                            <button type='submit' className='btn btn-outline-success mt-2' > Submit</button>

                        </div>
                    </form>}

                </div>
            </div>



        </>
    )
}

export default Feedback
