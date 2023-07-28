import React from 'react'

import Adminnavbar from '../navbar/Adminnavbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Adminsidebar from '../sidebar/Adminsidebar';
import "./managecountries.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Countriesdata = () => {
    const [countriesdata, setCountriesdata] = useState([]);
 

    useEffect(() => {
        axios.get('http://localhost:5000/countries')
            .then(res => {
                setCountriesdata(res.data);
                console.log("collages");

            })
            .catch(error => {
                console.log(error);

            });
    }, []);
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/deletecountry/${id}`)
            .then(() => {
                setCountriesdata(countriesdata.filter(country => country.id !== id));
                console.log("deleted");
                alert("country deleted successfully")
              

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
                        <h1 className="text-center">Countries List</h1>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell align="left">Name</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {countriesdata.map((country) => (
                                    <TableRow
                                        key={country.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {country.id}
                                        </TableCell>
                                        <TableCell align="left">{country.name}</TableCell>

                                        <TableCell align="center"><button onClick={() => handleDelete(country.id)}><DeleteForeverIcon /></button></TableCell>



                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className='text-center'>
                                    <NavLink to="/addcountries" className="btn mb-5"> ADD Countries</NavLink>
                                </div>
                    {/* <div className="container-fluid  mt-5">
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
                                        {countriesdata.map(countries => (
                                            <tr key={countries.id}>


                                                <th scope="row">{countries.id}</th>
                                                <td>{countries.name}</td>





                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                                <div className='text-center'>
                                    <NavLink to="/addcountries" className="btn"> ADD Countries</NavLink>
                                </div>

                            </div>
                        </div>

                    </div> */}
                </div>
            </div>


        </>
    )
}

export default Countriesdata
