import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import axios from 'axios'

const Forgotpassword = () => {
    const [values, setValues] = useState({
        email: ""
    });

    const handle = (event) => {
        event.preventDefault();
        axios.post("http://localhost:5000/forgot", values)
            .then(res => {
                if (res !== null) {
                    console.log(res.data);
                    alert("Reset password link sent successfully please check your Email");
                }
                else {
                    alert("email not found")
                }
            })
    }
    const input = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: [e.target.value] }))
    }

    const history = useNavigate();
    return (
        <>
            <Modal isOpen
                size='lg' >
                <ModalHeader
                    toggle={() => history("/logins")}>
                    Enter your email here
                </ModalHeader>
                <ModalBody>
                    <div className="container-fluid  d-flex justify-content-center align-items-center ">
                        <div className="row">
                            <div className="col-10 mx-auto mt-5 mb-5">
                                <form onSubmit={handle}>
                                    <div className='mb-3'>
                                        <input type="text" onChange={input} name="email" placeholder='enter email' /> </div>
                                    <div className='text-center'>
                                        <button type='submit'  className='btn btn-success'>  Send </button>
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
export default Forgotpassword
