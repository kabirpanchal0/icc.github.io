import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios"
const Coursestable = () => {
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

    const [courseselected, setcourseselected] = useState([]);

    function handleSelection(event) {
        const courseId = parseInt(event.target.value);
        if (event.target.checked) {
            setcourseselected([...courseselected, courseId]);
            console.log(courseId);

        } else {
            setcourseselected(courseselected.filter(id => id !== courseId));
        }

    }


    return (
        <>

            <div className="container mt-5 mb-4">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <h3 className='text-center'>Select your course</h3>
                        <div className="row mt-5">
                            {courses.map(courses => (<div className="col-lg-3 col-md-12 mx-auto" key={courses.name}>
                                <div class="form-check mt-2">
                                    <input class="form-check-input" type="checkbox" value={courses.name}
                                        onChange={handleSelection}
                                    />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        {courses.name}
                                    </label>
                                </div>

                            </div>
                            ))}

                        </div>
                        {/* {courseselected.length > 0 && (
                            <h1>You have selected {courseselected.length} course(s).</h1>
                        )} */}
                        {courseselected.length > 0 && (
                            <h1>
                                You have selected {courseselected.length}:{' '}
                                {courseselected.map(id => courses.find(course => courses.id === id)).join(', ')}
                            </h1>
                        )}

                    </div>
                </div>
            </div>

        </>
    )
}

export default Coursestable
