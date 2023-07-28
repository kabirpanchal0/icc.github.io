import React from 'react'
import { NavLink } from 'react-router-dom'




const CommonCountry = (props) => {
  return (
    <>
      <section id="australia">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <NavLink to={props.link} className="country-link" >
                <div className="card mt-5">
                  <img src={props.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h1 className="card-title">{props.countrytitle}</h1>
                    <p className="card-text">{props.countrydisc}</p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default CommonCountry
