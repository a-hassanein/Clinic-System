import React from 'react'
import '../Style/styleservices.css'
import '../Style/ContactUs.css'

import {Link} from "react-router-dom";

function Sendmsg() {

  return (
    <div id='services'>
      <div className="banner2">
      <div className="container">
        <div className="row">
          <div className='s'> Thanks for send message </div>
          
 <center> <Link to={"/"}> <button  type="submit" className="btn btn-lg  button">Back To Home</button> </Link> </center>


        </div>
      </div>
      </div>
    </div>
  )
}

export default Sendmsg

