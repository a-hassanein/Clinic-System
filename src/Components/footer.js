import Logo from "../Images/logo.png"
import React from 'react'
function Footer() {
    return (


        <div class=" text-secondary px-4 py-5 footer text-center" style={{background:'#528298'}}>
            <div class="py-5">
            <img src={require('../Images/logo4.png')} alt="..logo" style={{width: "100%" , height:"100%" , maxWidth:"300px" ,marginLeft:"25px" }} />
            <div class="col-lg-6 mx-auto" >
                <p class="fs-5 mb-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus necessitatibus corporis ex minima exercitationem labore obcaecati, magni consequuntur perspiciatis quis alias molestiae aliquam, soluta enim provident unde, eveniet voluptate. Error?</p>
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