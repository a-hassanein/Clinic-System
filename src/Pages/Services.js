import React from 'react'
import '../Style/styleservices.css'

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
                    <img style={{ "height": "60px", "width": "60px" }} src={require("../Images/newmedicalrecord .png")} className="card-img-top" alt="..." />

                    <h3 className="card-title text-center" >CREATE YOUR PRIVATE CLINIC</h3>
                    <hr />
                    <p className="card-text text-center">You can create and manage your own private clinic and use our features for you , you can try our featuers for free by trial package for 60 days</p>
                    {/* <a href="#" className="btn " id="btn_services">show details</a> */}
                  </div>
                </div>
              </div>


              <div className="col-sm-4" id="c1">
                <div className="card text-center" id="cc" style={{ "border": "none", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.10)" }}>
                  <div className="card-body" id="card_services">
                    <img style={{ "height": "60px", "width": "60px" }} src={require("../Images/medicalreport.png")} className="card-img-top" alt="..." />

                    <h3 className="card-title text-center" >ADD AN UNLIMITED NUMBER OF YOUR PATIENTS</h3>
                    <hr />
                    <p className="card-text text-center">You can add unlimited number of patients and manage their appointments and surgeries and show other deatails </p>
                    {/* <a href="#" className="btn " id="btn_services">show details</a> */}
                  </div>
                </div>
              </div>
              <div className="col-sm-4" id="c1">
                <div className="card text-center" id="cc" style={{ "border": "none", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.10)" }}>
                  <div className="card-body" id="card_services">
                    <img style={{ "height": "60px", "width": "60px" }} src={require("../Images/medicalrecord.png")} className="card-img-top" alt="..." />

                    <h3 className="card-title text-center" >SHOW ANALYTICS OF YOUR CLINIC</h3>
                    <hr />

                    <p className="card-text text-center">We provide you with know of the analysis of your clinic to know how to take advantage of it </p>
                    {/* <a href="#" className="btn" id="btn_services">show details</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Services
