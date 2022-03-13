import React from 'react'
import '../Style/styleservices.css'
import '../Style/moreservices.css'
import {Link} from "react-router-dom";
import NavBar from '../Components/NavBar';


function Moreservices() {
  return (

    <div id='services' className="banner2" >
<NavBar />


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

                    <h3 className="card-title text-center" >CREATE YOUR PRIVATE CLINIC</h3>
                    <hr />
                    <p className="card-text text-center">You can create and manage your own private clinic and use our features for you also you can try our featuers we provide for free by trial package for 30 days , and discover more of our featuers , after 30 days you can subscribe with us by premium. </p>
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
                    <img style={{ "height": "60px", "width": "60px" }} src={require("../Images/medical.png")} className="card-img-top" alt="..." />

                    <h3 className="card-title text-center" >ADD AN UNLIMITED NUMBER OF YOUR PATIENTS</h3>
                    <hr />
                    <p className="card-text text-center">You can add unlimited number of patients and manage their appointments and surgeries and show other deatails also you can edit his information and save it in patient and delete at eny time. </p>
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


              <div className="col-sm-4" id="c1">
                <div className="card text-center" id="cc" style={{ "border": "none", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.10)" }}>
                  <div className="card-body" id="card_services">
                    <img style={{ "height": "60px", "width": "60px" }} src={require("../Images/box.png")} className="card-img-top" alt="..." />

                    <h3 className="card-title text-center" >CREATE YOUR MATERIALS STOCK</h3>
                    <hr />

                    <p className="card-text text-center">You can use Materials section to store your materials you use in it such as material name , usage and price also you can add more of your materials and edit its information or delete any time. </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4" id="c1">
                <div className="card text-center" id="cc" style={{ "border": "none", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.10)" }}>
                  <div className="card-body" id="card_services">
                    <img style={{ "height": "60px", "width": "60px" }} src={require("../Images/pills.png")} className="card-img-top" alt="..." />

                    <h3 className="card-title text-center" >ADD YOUR FAVOURITE DRUGS AND LABS</h3>
                    <hr />
                    <p className="card-text text-center">You can use Labs and Drugs section to store labs and scans you deal with in it and you can add more and edit it or delete any time and make some of them in favorite icon to use then faster , also you can print it. </p>
                  </div>
                </div>
              </div>


              <div className="col-sm-4" id="c1">
                <div className="card text-center" id="cc" style={{ "border": "none", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.10)" }}>
                  <div className="card-body" id="card_services">
                    <img style={{ "height": "60px", "width": "60px" }} src={require("../Images/medical-team.png")} className="card-img-top" alt="..." />

                    <h3 className="card-title text-center" > ADD YOUR ASSISTANT IN CLINIC</h3>
                    <hr />
                    <p className="card-text text-center">If you have assistants in your real clinic we provide to you to add any number of yours assistants in your clinic and access it to help you in your tasks. </p>
                  </div>
                </div>
              </div>



              <div className="col-sm-4" id="c1">
                <div className="card text-center" id="cc" style={{ "border": "none", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.10)" }}>
                  <div className="card-body" id="card_services">
                    <img style={{ "height": "60px", "width": "60px" }} src={require("../Images/medical-appointment.png")} className="card-img-top" alt="..." />

                    <h3 className="card-title text-center" > BOOK AND HANDLE APPOINTMANT</h3>
                    <hr />
                    <p className="card-text text-center">You can book an appointment for your patient and when it finish you mark on it in Done mark and it saved in patient history and you can delete it if it canceld. </p>
                  </div>
                </div>
              </div>


              <div className="col-sm-4" id="c1">
                <div className="card text-center" id="cc" style={{ "border": "none", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.10)" }}>
                  <div className="card-body" id="card_services">
                    <img style={{ "height": "60px", "width": "60px" }} src={require("../Images/prescription.png")} className="card-img-top" alt="..." />

                    <h3 className="card-title text-center" > MAKE YOUR PRESCRIPTION </h3>
                    <hr />
                    <p className="card-text text-center">You can customize your prescription with your clinic details and fill it with drugs from favorite drugs section or new type of drugs and you can print it after finish and delete it any time. </p>
                  </div>
                </div>
              </div>


              <div className="col-sm-4" id="c1">
                <div className="card text-center" id="cc" style={{ "border": "none", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.10)" }}>
                  <div className="card-body" id="card_services">
                    <img style={{ "height": "60px", "width": "60px" }} src={require("../Images/bill.png")} className="card-img-top" alt="..." />

                    <h3 className="card-title text-center" > EXTRACT BILL FOR EVERY PATIENT</h3>
                    <hr />
                    <p className="card-text text-center"> After every operation for patient we provide to you to sum and extarct the Bill for every usage for patient also you can print it. </p>
                  </div>
                </div>
              </div>


              <div className="col-sm-4" id="c1">
                <div className="card text-center" id="cc" style={{ "border": "none", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.10)" }}>
                  <div className="card-body" id="card_services">
                    <img style={{ "height": "60px", "width": "60px" }} src={require("../Images/surgery-room.png")} className="card-img-top" alt="..." />

                    <h3 className="card-title text-center" > CREATE YOUR SURGERIES STOCK</h3>
                    <hr />
                    <p className="card-text text-center">You can use Surgery section to store your surgeries you do in it such as surgery name , price and description also you can add more and edit it or delete any time. </p>
                  </div>
                </div>
              </div>


              <div className="col-sm-4" id="c1">
                <div className="card text-center" id="cc" style={{ "border": "none", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.10)" }}>
                  <div className="card-body" id="card_services">
                    <img style={{ "height": "60px", "width": "60px" }} src={require("../Images/user-profile.png")} className="card-img-top" alt="..." />

                    <h3 className="card-title text-center" > CUSTOMIZE YOUR PROFILE SETTING</h3>
                    <hr />
                    <p className="card-text text-center">You can edit your profile by edit setting section , you can edit your name ,your email, your phone and change your password. </p>
                  </div>
                </div>
              </div>

<center> <Link to={"/"}> <button  type="submit" className="btn btn-lg  button">Back To Home</button> </Link> </center>


            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Moreservices
