import React, { useEffect, useState } from 'react'
import Header from '../../../Header'
import Footer from '../../../Footer'
import "../Allcountries/allcon.css"
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const Allcountries = () => {
    const [country, setCountry] = useState([]);

    useEffect(()=>{
            axios.get('http://localhost:5000/countries')
            .then(res =>{
                setCountry(res.data);

            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <Header />
            <section id='allcon' className='mt-5'>

                <div className="container-fluid ">
                    <div className="col-10 mx-auto">

                        <NavLink to="/" className="links">Home </NavLink>
                    </div>

                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-10 mx-auto">

                        {country.map(country => (
                             <NavLink  className="con-btn" to={`/countries/${country.id}`}>
                                     <div class="card"  key={country.id}>
                                 
                                      
                                        <div className="card-text">{country.name}</div>   
                                  
                                 </div>
                                 </NavLink>
                        ))}
                           
                            {/* 
                            <h1>Germany</h1>
                            <div class="card mt-4">
                                <NavLink className="germany" to="/germany">

                                    <div class="content">
                                        <h3 >Study in Germany</h3>
                                        <p >
                                            We owe a lot to Germany when it comes to the history of education and universities. Germany is the birthplace of what we call ‘research universities’ – big places with ivory towers and libraries where new knowledge is produced every day.
                                            <br />
                                            This university model has since covered the entire planet, and is basically what most universities are set up for today: to produce knowledge and make new discoveries. Don’t you want to study in Germany, the place where it all began?</p>
                                    </div>

                                </NavLink>
                            </div>
                            <h1 className='mt-5'>U. K</h1>
                            <div class="card mt-4">
                                <NavLink className="uk" to="/uk">

                                    <div class="content">
                                        <h3 >Study in U K</h3>
                                        <p >
                                            We owe a lot to Germany when it comes to the history of education and universities. Germany is the birthplace of what we call ‘research universities’ – big places with ivory towers and libraries where new knowledge is produced every day.
                                            <br />
                                            This university model has since covered the entire planet, and is basically what most universities are set up for today: to produce knowledge and make new discoveries. Don’t you want to study in Germany, the place where it all began?</p>
                                    </div>

                                </NavLink>
                            </div>
                            <h1 className='mt-5'>Canada</h1>
                            <div class="card mt-4">
                                <NavLink className="canada" to="/canada">

                                    <div class="content">
                                        <h3 >Study in Canada</h3>
                                        <p >
                                            We owe a lot to Germany when it comes to the history of education and universities. Germany is the birthplace of what we call ‘research universities’ – big places with ivory towers and libraries where new knowledge is produced every day.
                                            <br />
                                            This university model has since covered the entire planet, and is basically what most universities are set up for today: to produce knowledge and make new discoveries. Don’t you want to study in Germany, the place where it all began?</p>
                                    </div>

                                </NavLink>
                            </div>
                            <h1 className='mt-5'>U S A</h1>
                            <div class="card mt-4">
                                <NavLink className="usa" to="/usa">

                                    <div class="content">
                                        <h3 >Study in USA</h3>
                                        <p >
                                            We owe a lot to Germany when it comes to the history of education and universities. Germany is the birthplace of what we call ‘research universities’ – big places with ivory towers and libraries where new knowledge is produced every day.
                                            <br />
                                            This university model has since covered the entire planet, and is basically what most universities are set up for today: to produce knowledge and make new discoveries. Don’t you want to study in Germany, the place where it all began?</p>
                                    </div>

                                </NavLink>
                            </div>
                            <h1 className='mt-5'>Australia</h1>
                            <div class="card mt-4">
                                <NavLink className="australia" to="/australia">

                                    <div class="content">
                                        <h3 >Study in Australia</h3>
                                        <p >
                                            We owe a lot to Germany when it comes to the history of education and universities. Germany is the birthplace of what we call ‘research universities’ – big places with ivory towers and libraries where new knowledge is produced every day.
                                            <br />
                                            This university model has since covered the entire planet, and is basically what most universities are set up for today: to produce knowledge and make new discoveries. Don’t you want to study in Germany, the place where it all began?</p>
                                    </div>

                                </NavLink>
                            </div>
                            <h1 className='mt-5'>Italy</h1>
                            <div class="card mt-4">
                                <NavLink className="italy" to="/italy">

                                    <div class="content">
                                        <h3 >Study in Italy</h3>
                                        <p >
                                            We owe a lot to Germany when it comes to the history of education and universities. Germany is the birthplace of what we call ‘research universities’ – big places with ivory towers and libraries where new knowledge is produced every day.
                                            <br />
                                            This university model has since covered the entire planet, and is basically what most universities are set up for today: to produce knowledge and make new discoveries. Don’t you want to study in Germany, the place where it all began?</p>
                                    </div>

                                </NavLink>
                            </div>
                            <h1 className='mt-5'>France</h1>
                            <div class="card mt-4">
                                <NavLink className="france" to="/france">

                                    <div class="content">
                                        <h3 >Study in France</h3>
                                        <p >
                                            We owe a lot to Germany when it comes to the history of education and universities. Germany is the birthplace of what we call ‘research universities’ – big places with ivory towers and libraries where new knowledge is produced every day.
                                            <br />
                                            This university model has since covered the entire planet, and is basically what most universities are set up for today: to produce knowledge and make new discoveries. Don’t you want to study in Germany, the place where it all began?</p>
                                    </div>

                                </NavLink>
                            </div>
                            <h1 className='mt-5'>New Zee Land</h1>
                            <div class="card mt-4">
                                <NavLink className="newzeeland" to="/newzeeland">

                                    <div class="content">
                                        <h3 >Study in France</h3>
                                        <p >
                                            We owe a lot to Germany when it comes to the history of education and universities. Germany is the birthplace of what we call ‘research universities’ – big places with ivory towers and libraries where new knowledge is produced every day.
                                            <br />
                                            This university model has since covered the entire planet, and is basically what most universities are set up for today: to produce knowledge and make new discoveries. Don’t you want to study in Germany, the place where it all began?</p>
                                    </div>

                                </NavLink>
                            </div> */}

                        </div>
                    </div>
                </div>
            </section >
            <Footer />


        </>
    )
}

export default Allcountries
