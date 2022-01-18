import {BsFillTelephoneFill} from "react-icons/bs";
import {TiLocation} from "react-icons/ti"
import {HiMail} from "react-icons/hi"
import '../Style/ContactUs.css'
import {  useState } from "react";

const Contact = ()=>{
    const[info,setInfo]=useState({
        name:"",
        mail:"",
    })

    const[error,setError]=useState({
        namev:null,
        mailv:null,
    })

    const nameValidate=(e)=>{
        if(e.target.name === "username"){
            setInfo({
                ...info,
                name:e.target.value
            })
            setError({
                ...error,
                namev:
                e.target.value.length === 0?
                "please enter your name"
                :e.target.value.length < 3?
                "please enter a valid name"
                :null
            })
        }
    }

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const emailValidate = (e) => {
        if(e.target.name === "mail"){
            setInfo({
                ...info,
                mail:e.target.value
            })
            if(!(regex.test(info.mail))){
                
                setError({
                    ...error,
                    mailv:"please enter a valid email"
                        
                })
            }
            else{
                setError({
                    ...error,
                    mailv:null
                })
                
            }
        }

    }
return(
    <>
        <div className="row text-center" style={{marginTop:"50px"}}>
                <div className="col-lg-12">
                    <h1 >Contact</h1>
                </div>
        </div>
        <div className="container contactContainer ">
            <div className="row text-center contactinfo2" >
                    <div className="col-lg-4 contactinfodiv">
                        <span className="icon" ><HiMail/></span>
                        <p className="contactway">abdelrahman@gmail.com</p>
                    </div>
                    <div className="col-lg-4 contactinfodiv">
                        <span className="icon"><BsFillTelephoneFill/></span>
                        <p className=" contactway">01155020460</p>
                    </div>
                    <div className="col-lg-4 contactinfodiv">
                        <span className="icon"><TiLocation/></span>
                        <p className="contactway">Cairo</p>
                    </div>
            </div>
            <div className="row formRow">
                <div className="col-lg-6 col-md-12">
                    <form>
                        <div className="mb-3">
                            <label  className="form-label inputLabel">Name</label>
                            <input type="text" placeholder="Enter Your Name" name="username" className="form-control input" onChange={(e) => nameValidate(e)}/>
                            <small>{error.namev}</small>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label inputLabel">Email</label>
                            <input type="email" placeholder="Enter Your Mail" name="mail"  className="form-control input" onChange={(e) => emailValidate(e)}/>
                            <small>{error.mailv}</small>
                        </div>
                        <div className="mb-3 ">
                            <label className="form-label inputLabel" >Message</label>
                            <br/>
                            <textarea className="form-control input" placeholder="Enter Your Message" >

                            </textarea>
                        </div>
                        <div className="mb-3 text-center">
                        <button type="submit" className="btn btn-lg  button" style={{marginTop:"10px",marginBottom:"10px",width:"100px"}}>Send</button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-6 col-md-12  Contactinfo " >
                    <div className="contactImage">
                        <img src={require('../Images/contact2.png')} alt="" className="img-fluid contactimg"/>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}
export default Contact