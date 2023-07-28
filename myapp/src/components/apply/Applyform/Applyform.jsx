import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Applyform = () => {
   

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [courseId, setCourseId] = useState('');
    const [collegeId, setCollegeId] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate input data length
        if (name.length === 0 || email.length === 0 || dob.length === 0 || courseId.length === 0 || collegeId.length === 0) {
            alert("enter data")
            setError('Please provide all the required form data');

            return;
        }

        const data = {
            name,
            email,
            dob,
            course_id: courseId,
            college_id: collegeId
        };

        axios.post('http://localhost:5000/formdata', data)
            .then((res) => {
                console.log(res.data.message);
                // Reset form fields after successful submission
                setName('');
                setEmail('');
                setDob('');
                setCourseId('');
                setCollegeId('');
                setError('');
            })
            .catch((error) => {
                console.error(error);
                // Handle error, display an error message or perform any error-related actions
            });
    };
    useEffect(() => {
        // Code to execute after the form submission
        // This effect will run whenever the component re-renders

        // Example: Reset form fields after successful submission
        setName('');
        setEmail('');
        setDob('');
        setCourseId('');
        setCollegeId('');
    }, []);

    const history = useNavigate();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/courses')
            .then(res => {
                setCourses(res.data);

                console.log("addedd");
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    // const [courseclg, setCourseclg] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:5000/coursecollages/:id')
    //         .then(res => {
    //             setCourseclg(res.data);
    //         })
    // })


    return (
        <>
            <Modal isOpen
                size='lg'>
                <ModalHeader
                    toggle={() => history("/")}>
                    Apply Form
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={name} onChange={(e) => setName(e.target.value)} />

                        </div>
                        <div className="mb-2">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-2">
                            <label for="exampleInputEmail1" className="form-label">Date of birth</label>
                            <input type="date" className="form-control" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} aria-describedby="emailHelp" />

                        </div>
                        <label for="exampleInputEmail1" className="form-label mt-2">Select Course</label>

                        <select className="form-select mb-2" name="course" value={courseId} onChange={(e) => setCourseId(e.target.value)}>
                            <option disabled selected>Select courses</option>
                            {courses.map(course => (
                                <option value={course.id} key={course.id}>
                                    {course.name}
                                </option>
                            ))}
                        </select>

                        {/* <label for="exampleInputEmail1" className="form-label  mt-2">Select Course</label>

                        <select className="form-select mb-4" name="college" value={collegeId} onChange={(e) => setCollegeId(e.target.value)}>
                            <option selected>Select collages</option>
                            {courseclg.map(courseclg => {
                                <option value={courseclg.id} key={courseclg.id}>
                                    {courseclg.name}
                                </option>
                            })}
                        </select> */}

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </ModalBody>
            </Modal>
        </>
    )
}

export default Applyform
