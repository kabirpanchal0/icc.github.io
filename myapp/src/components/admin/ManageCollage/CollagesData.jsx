import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import Adminnavbar from '../navbar/Adminnavbar';
import { NavLink } from 'react-router-dom';
import Adminsidebar from '../sidebar/Adminsidebar';
import "./managecolleges.scss"
const CollagesData = () => {
    const [collagedata, setCollagedata] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:5000/collagesdata')
            .then(res => {
                setCollagedata(res.data);
                console.log("collages");

            })
            .catch(error => {
                console.log(error);

            });
    }, []);
    return (
        <>
            <div className="colleges">
                <Adminsidebar />
                <div className='collegecontainer'>
                    <Adminnavbar />

                    <div className="container-fluid  mt-5">
                    <h1 className='text-center'> Countries data</h1>

                        <div className="row">
                            <div className="col-10 mx-auto">

                                <table class="table mx-auto">
                                    <thead>
                                        <tr>
                                            <th scope="col">no</th>
                                            <th scope="col">Name</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {collagedata.map(collages => (
                                            <tr key={collages.id}>


                                                <th scope="row">{collages.id}</th>
                                                <td>{collages.name}</td>





                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                                <div className='text-center mt-5 mb-5'>
                                    <NavLink to="/addcollages" className="btn btn-primary"> ADD collages</NavLink>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>



        </>
    )
}

export default CollagesData

