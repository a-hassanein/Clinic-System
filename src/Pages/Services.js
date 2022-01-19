import React from 'react'
import '../Style/styleservices.css'

function Services() {
    return (
      
        <div>
      
  
    <div className="container">
        <div className="row">
            <div className='s'> SERVICES </div>
            <div className='d'> design your own CLINIC SYSTEM with us</div>
<br/>
<br/>
<div className='services_all'>
        <div className="row">
    <div className="col-sm-4" id="c1">
      <div className="card text-center" id="cc" style={{"border" : "none" , boxShadow: "0 15px 35px rgba(0, 0, 0, 0.10)"}}>
        <div className="card-body" id="card_services">
        <div>
  </div>
  <img style={{"height" : "60px", "width" : "60px"}} src={require("../Images/newmedicalrecord .png")} class="card-img-top" alt="..." /> 

          <h3 className="card-title text-center" >CREATE YOUR PRIVATE CLINIC</h3>
          <hr/>
          <p className="card-text text-center">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged but also the leap into electronic typesetting, remaining essentially unchanged</p>
          {/* <a href="#" className="btn " id="btn_services">show details</a> */}
        </div>
      </div>
    </div>


    <div className="col-sm-4" id="c1">
      <div className="card text-center" id="cc" style={{"border" : "none" , boxShadow: "0 15px 35px rgba(0, 0, 0, 0.10)"}}>
        <div className="card-body" id="card_services">
        <img style={{"height" : "60px", "width" : "60px"}} src={require("../Images/medicalreport.png")} class="card-img-top" alt="..." />

          <h3 className="card-title text-center" >CREATE YOUR PRIVATE CLINIC</h3>
          <hr/>
          <p className="card-text text-center">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged but also the leap into electronic typesetting, remaining essentially unchanged</p>
          {/* <a href="#" className="btn " id="btn_services">show details</a> */}
        </div>
      </div>
    </div>
    <div className="col-sm-4" id="c1">
      <div className="card text-center" id="cc" style={{"border" : "none" , boxShadow: "0 15px 35px rgba(0, 0, 0, 0.10)"}}>
        <div className="card-body" id="card_services">
        <img style={{"height" : "60px", "width" : "60px"}} src={require("../Images/medicalrecord.png")} class="card-img-top" alt="..." />

          <h3 className="card-title text-center" >CREATE YOUR PRIVATE CLINIC</h3>
          <hr/>
         
          <p className="card-text text-center">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged but also the leap into electronic typesetting, remaining essentially unchanged</p>
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
