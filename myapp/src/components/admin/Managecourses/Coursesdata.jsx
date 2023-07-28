import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Adminnavbar from '../navbar/Adminnavbar';
import Adminsidebar from '../sidebar/Adminsidebar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';




const Coursesdata = () => {


    const [coursesdata, setCoursesdata] = useState([]);



    useEffect(() => {
        axios.get('http://localhost:5000/courses')
            .then(res => {
                setCoursesdata(res.data);
                console.log("courses");

            })
            .catch(error => {
                console.log(error);

            });
    }, []);
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/deletecourse/${id}`)
            .then(() => {
                setCoursesdata(coursesdata.filter(courses => courses.id !== id));
                console.log("deleted");
                alert("user deleted successfully")
                window.location.reload()


            })
            .catch(error => console.log(error));
    };
    return (
        <>

            <div className="countries">
                <Adminsidebar />
                <div className="countriescontainer">
                    <Adminnavbar />
                    <TableContainer component={Paper} className='mt-5'>
                        <h1 className="text-center">Courses List</h1>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell align="left">Name</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {coursesdata.map((courses) => (
                                    <TableRow
                                        key={courses.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {courses.id}
                                        </TableCell>
                                        <TableCell align="left">{courses.name}</TableCell>
                                        <TableCell align="center"><button onClick={() => handleDelete(courses.id)}><DeleteForeverIcon /></button></TableCell>



                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <div className='text-center'>
                        <NavLink to="/addcourses" className="btn mb-5"> ADD courses</NavLink>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Coursesdata

/* <div className="container-fluid  mt-5">
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
            {coursesdata.map(courses => (
                <tr key={courses.id}>


                    <th scope="row">{courses.id}</th>
                    <td>{courses.name}</td>





                </tr>
            ))}

        </tbody>
    </table>
    <div className='text-center'>
        <NavLink to="/addcourses" className="btn mb-5"> ADD courses</NavLink>
    </div>

</div>
</div> */
