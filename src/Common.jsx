import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/img2.svg';


const Common = (props)=>{ 
    return(
        <>
    <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
            <div className="col-10 mx-auto"> 
            <div className="row">
              <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2 className="my-5">{props.name} <br></br><strong className="brand-name">The Code</strong></h2>
                 <p className="my-8">We are the team of talented developer making websites</p>
              <div className="mt-3">
        
                  <NavLink to={props.visit} className="btn btn-outline-primary">{props.btname}</NavLink>
              </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 ">
                  <img src={props.imgsrc}  className="img-fluid object mt-4 my-6" alt="Common-img"/>
              </div>
              </div>
       </div>
    </div>
</div>
        </section>
        </>
    )
}

export default Common;