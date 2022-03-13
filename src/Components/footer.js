import Logo from "../Images/logo.png"
import { Link } from "react-router-dom";
import React from 'react'
import "../Style/footer.css";
function Footer() {
    return (


        <div className=" text-secondary px-4 py-5 footer text-center" style={{background:'#528298'}}>
            <div className="py-5">
            <img src={require('../Images/logo4.png')} alt="..logo" style={{width: "100%" , height:"100%" , maxWidth:"300px" ,marginLeft:"25px" }} />
            <div className="col-lg-6 mx-auto" >
                <p className="fs-5 mb-4 text-white"> 3eadty Clinic System , Using Python And Django Framwork , JavaScript And Reactjs Framwork . This Project Implementation Made By Students From ITI-3 Monthes -Open Source -Full Stack Web Development Using Python Track. Thank you for visiting our site </p>
                {/* <Link to={"/home"} className="btn text-center" id={"dashbordBtn"}>Dashbord</Link> */}
            </div>
            </div>
        </div>

        // <div>

        //     <footer className="footer">
        //         <div  style={{background:'#BCD9E6'}}>
        //             <div className="row justify-content-center text-center">
        //                 <p className="copyright-text" style={{fontSize:30 , color:'#528298', fontWeight:700}}>&copy;  <img style={{width:'50px', height:'50px'}} id ="loginlogoID" src={Logo} />Copyright</p>
        //             </div>
        //         </div>
        //     </footer>
        // </div>
    )
}

export default Footer
