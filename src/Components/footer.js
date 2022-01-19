import Logo from "../Images/logo.png"
import React from 'react'
function Footer() {
    return (

        <div>

            <footer className="footer">
                <div  style={{background:'#BCD9E6'}}>
                    <div className="row justify-content-center text-center">
                        <p className="copyright-text" style={{fontSize:30 , color:'#528298', fontWeight:700}}>&copy;  <img style={{width:'50px', height:'50px'}} id ="loginlogoID" src={Logo} />Copyright</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer