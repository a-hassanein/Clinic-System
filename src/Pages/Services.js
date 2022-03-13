import React from 'react'
import '../Style/styleservices.css'
import {Link} from "react-router-dom";
import Moreservices from './Moreservices';



function Services() {
  return (

    <div id='services'>


      <div className="container">
        <div className="row">
          <div className='s'> SERVICES </div>
          <div className='d'> design your own CLINIC SYSTEM with us</div>
          <br />
          <br />
          <div className='services_all'>
            <div className="row">


              <div className="col-sm-4" id="c1">
                <div className="card text-center" id="cc" style={{ border: "none", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.10)" }}>
                  <div className="card-body" id="card_services">
                    <div>
                    </div>
                    <img style={{ "height": "60px", "width": "60px" }} src={require("../Images/hospital.png")} className="card-img-top" alt="..." />

                    <h3 className="card-title text-center" >CREATE YOUR PRIVATE CUSTOMIZED CLINIC</h3>
                    <hr />
                    <p className="card-text text-center">You can create and manage your own private clinic and use our features for you also you can try our featuers we provide for free by trial package for 30 days , and discover more of our featuers.</p>
                  </div>
                </div>
              </div>


              <div className="col-sm-4" id="c1">
                <div className="card text-center" id="cc" style={{ border: "none", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.10)" }}>
                  <div className="card-body" id="card_services">
                    <div>
                    </div>
                    <img style={{ "height": "60px", "width": "60px" }} src={require("../Images/remote-access.png")} className="card-img-top" alt="..." />

                    <h3 className="card-title text-center" >MANAGE YOUR CLINIC FROM ANYWHERE</h3>
                    <hr />
                    <p className="card-text text-center">To avoid any types of technology accidents or If you change your personal computer , Don't worry about it You can already access and manage your clinic from anywhere you are in.</p>
                  </div>
                </div>
              </div>


               <div className="col-sm-4" id="c1">
                <div className="card text-center" id="cc" style={{ "border": "none", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.10)" }}>
                  <div className="card-body" id="card_services">
                    <img style={{ "height": "60px", "width": "60px" }} src={require("../Images/analysis.png")} className="card-img-top" alt="..." />

                    <h3 className="card-title text-center" >SHOW ANALYTICS OF YOUR CLINIC</h3>
                    <hr />

                    <p className="card-text text-center">To improve profits and opportunities in your business We provide you with know of the analysis of your clinic activity such as number of appointments and patients every month to know how to take advantage of it. </p>
                  </div>
                </div>
              </div>
              {/* </br> */}
              <center> <Link to={"/moreservices"}> <button  type="submit" className="btn btn-lg  button">Show More Services</button> </Link> </center>




            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Services
