import React from 'react'
import { NavLink } from 'react-router-dom'
const ListCountries = () => {
  return (
    <div>
              <section id="country">
                <div className="col-10 mx-auto mt-5">
                    <h1 className="text1">Discover Countries</h1>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto mt-5 ">
                            <div className="row">
                                <div className="col-md-3 col-10 mx-auto">
                                    <div className="card">
                                        <NavLink to="/countries/3" className='italy'>  
                                        <div className='content'>
                                            <h3  className='text-center'>ITALY</h3>
                                            <p >Italy  is a country in Southern Europe. It is a member of the European Union. The Italian flag is green, white and red. Italy is a democratic republic</p>
                                        </div> </NavLink>

                                    </div>
                                </div>
                                <div className="col-md-3 col-10 mx-auto">
                                    <div className="card">

                                        <NavLink to="/countries/1" className='germany'>  
                                         <div className='content'>
                                            <h3 className='text-center'>Germany</h3>
                                            <p >Germany officially the Federal Republic of Germany, is a country in Central Europe. It is the second-most populous country in Europe after Russia.</p>
                                        </div>
                                        </NavLink>
                                      
                                    </div>
                                </div>
                                <div className="col-md-3 col-10 mx-auto">
                                    <div className="card">

                                        <NavLink to="/countries/7" className='usa'> <div className='content'>
                                            <h3 className='text-center'>U S A</h3>
                                            <p >The United States of America , commonly known as the United States  or America, is a country primarily located in North America.</p>
                                        </div></NavLink>
                                
                                    </div>
                                </div>
                                <div className="col-md-3 col-10 mx-auto">
                                    <div className="card">

                                        <NavLink to="/countries/6" className='uk'> <div className='content'>
                                            <h3 className='text-center'>U K</h3>
                                            <p >The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain</p>
                                        </div></NavLink>
                              
                                    </div>
                                </div>
                                <div className="col-md-3 col-10 mx-auto">
                                    <div className="card">

                                        <NavLink to="/countries/8" className='canada'> <div className='content'>
                                            <h3 className='text-center'>Canada</h3>
                                            <p >Canada is a country in North America. Canada's capital is Ottawa and its three largest metropolitan areas are Toronto, Montreal, and Vancouver.</p>
                                        </div></NavLink>
                                
                                    </div>
                                </div>
                                <div className="col-md-3 col-10 mx-auto">
                                    <div className="card">

                                        <NavLink to="/countries/4" className='australia'> <div className='content'>
                                            <h3 className='text-center'>Australia</h3>
                                            <p >Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent.</p>
                                        </div></NavLink>
                            
                                    </div>
                                </div>
                                <div className="col-md-3 col-10 mx-auto">
                                    <div className="card">

                                        <NavLink to="/countries/2" className='france'> <div className='content'>
                                            <h3 className='text-center'>France</h3>
                                            <p >Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent.</p>
                                        </div></NavLink>
                            
                                    </div>
                                </div>
                                <div className="col-md-3 col-10 mx-auto">
                                    <div className="card">

                                        <NavLink to="/countries/5" className='newzeeland'> <div className='content'>
                                            <h3 className='text-center'>New Zee Land</h3>
                                            <p >Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent.</p>
                                        </div></NavLink>
                            
                                    </div>
                                </div>
                            </div>
                            <p className='text-center mt-5 mb-5'> <NavLink to="/allcon" className="view-all-countries">  view all countries</NavLink> </p>
                        </div>

                    </div>
                </div>


            </section>
    </div>
  )
}

export default ListCountries
