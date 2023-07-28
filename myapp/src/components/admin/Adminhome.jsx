import React from 'react'
import Adminnavbar from './navbar/Adminnavbar'
import Adminsidebar from './sidebar/Adminsidebar'
import "../admin/adminhome.scss"
import { NavLink } from 'react-router-dom'
const Adminhome = () => {
  return (
    <div className='home'>
      <Adminsidebar />
      <div className='homecontainer'>
        <Adminnavbar />


        <div className="container-fluid  mt-5">
          <div className="row">
            <div className="col-12  mx-auto">
              <div className="row">
                <div className='col-6 mx-auto'>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <NavLink to="/manageuser" className="dashnavlink">
                      <div className="box">
                        <h2>Users</h2>
                      </div>
                      </NavLink>
                    </div>
                    <div className="col-3 mx-auto">
                      <div className="box">
                      <h2>Country</h2>
                      </div>

                    </div>

                  </div>
                  <div className="row mt-4">
                    <div className="col-3 mx-auto">
                      <div className="box">
                        <h2>Courses</h2>
                      </div>

                    </div>
                    <div className="col-3 mx-auto">

                      <div className="box">
                      <h2>Colleges</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">

                  hello
                </div>
              </div>


            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Adminhome
