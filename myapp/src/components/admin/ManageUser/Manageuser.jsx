import React from 'react'
import Adminnavbar from '../navbar/Adminnavbar'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Adminsidebar from '../sidebar/Adminsidebar';
import "./manageuser.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { NavLink } from 'react-router-dom';
const Manageuser = () => {
    const [userdata, setUserdata] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/manageuser')
            .then(res => {
                setUserdata(res.data);
                console.log("user addded");

            })
            .catch(error => {
                console.log(error);

            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/delete/${id}`)
            .then(() => {
                setUserdata(userdata.filter(login => login.id !== id));
                console.log("deleted");
                alert("user deleted successfully")
                window.location.reload()


            })
            .catch(error => console.log(error));
    };
    return (
        <>
            <div className="manageuser">
                <Adminsidebar />
                <div className='usercontainer'>
                    <Adminnavbar />
                    <TableContainer component={Paper} className='mt-5'>
                        <h1 className='text-center'>User data</h1>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                            <TableHead>
                                <TableRow>
                                    <TableCell>User Id</TableCell>
                                    <TableCell align="left">NAME</TableCell>
                                    <TableCell align="left">EMAIL&nbsp;(@)</TableCell>
                                    <TableCell align="left">PHONE-NO</TableCell>
                                    <TableCell align="left">AGE</TableCell>
                                    <TableCell align="left">GENDER</TableCell>
                                    <TableCell align="left">DATE OF BIRTH</TableCell>
                                    <TableCell align="left">CITY</TableCell>
                                    <TableCell align="left">STATE</TableCell>
                                    <TableCell align="left">COUNTRY</TableCell>
                                    <TableCell align="left">NATIONALITY</TableCell>
                                    <TableCell align="left">EDIT</TableCell>
                                    <TableCell align="left">DELETE</TableCell>



                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {userdata.map((login) => (
                                    <TableRow
                                        key={login.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {login.id}
                                        </TableCell>
                                        <TableCell align="leftleft">{login.name}</TableCell>
                                        <TableCell align="leftleft">{login.email}</TableCell>
                                        <TableCell align="left">{login.phoneno}</TableCell>
                                        <TableCell align="left">{login.age}</TableCell>
                                        <TableCell align="left">{login.gender}</TableCell>
                                        <TableCell align="left">{login.dob}</TableCell>
                                        <TableCell align="left">{login.city}</TableCell>
                                        <TableCell align="left">{login.state}</TableCell>
                                        <TableCell align="left">{login.country}</TableCell>
                                        <TableCell align="left">{login.nationality}</TableCell>
                                        <TableCell align="center">
                                            <NavLink to={`/manageuser/edit/${login.id}`}>
                                                <div className='edit' ><EditIcon /></div> 
                                                </NavLink></TableCell>

                                        <TableCell align="center"><button onClick={() => handleDelete(login.id)}><DeleteForeverIcon /></button></TableCell>




                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            {/* <div className="manageuser">
                <Adminsidebar />
                <div className='usercontainer'>
                    <Adminnavbar />

                    <div className="container-fluid mt-5">
                        <h1 className='text-center'> User Data</h1>
                        <div className="row mt-5">
                            <div className="col-12 mx-auto">

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">no</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phoneno</th>
                                            <th scope="col">age</th>
                                            <th scope="col">gender</th>
                                            <th >date of birth</th>
                                            <th >city</th>
                                            <th scope="col">state</th>
                                            <th scope="col">country</th>
                                            <th scope="col">nationality</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userdata.map(login => (
                                            <tr key={login.id}>


                                                <th >{login.id}</th>
                                                <td>{login.name}</td>
                                                <td>{login.email}</td>
                                                <td>{login.phoneno}</td>
                                                <td>{login.password}</td>
                                                <td>{login.age}</td>
                                                <td>{login.gender}</td>
                                                <td>{login.dob}</td>
                                                <td>{login.city}</td>
                                                <td>{login.state}</td>
                                                <td>{login.country}</td>
                                                <td>{login.nationality}</td>
                                                

                                                <td> <button onClick={() => handleDelete(login.id)} className='edit' >Edit</button>
                                                </td>
                                                <td><button onClick={() => handleDelete(login.id)}>Delete</button>
                                                </td>



                                            </tr>
                                        ))}




                                    </tbody>
                                </table>

                            </div>
                        </div>

                    </div>
                </div>


            </div>






 */}

        </>
    )
}

export default Manageuser
