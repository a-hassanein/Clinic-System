import {BsFillTelephoneFill} from "react-icons/bs";
import {TiLocation} from "react-icons/ti"
import {HiMail} from "react-icons/hi"
import '../Style/ContactUs.css'
import {  useState , useEffect} from "react";
import axios from 'axios';
// import Sendmsg from './sendmsg';
import {Link} from "react-router-dom";

function Contact() {
const initialValues ={'username': "",'email': "",'msg': ""};
const [formValues, setformValues] = useState(initialValues);
const [formErrors, setformErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);
const [success,setSuccess] = useState({})


    const [clientData, setclientData] = useState({
        'client_name': "",
        'client_email': "",
        'client_msg': "",
	'status':"success"
    });
    //change element value
    const handelChange=(event)=>{
	 const name = event.target.getAttribute("name");
      const value = event.target.value;
        setclientData({
            ...clientData,
            [event.target.name]:event.target.value
        });
	//const (name,value) = event.target;
	setformValues({...formValues, [name]:value})
	setIsSubmit(true);
    };

useEffect(() => {
console.log(formErrors);
if(Object.keys(formErrors).length === 0 && isSubmit){
console.log(formValues);
}

},[formErrors])
const errors = {}


    //send form
    const sendForm=(event)=>{
        // event.preventDefault();
               const clientFormData= new FormData();
       clientFormData.append("client_name",clientData.username)
       clientFormData.append("client_email",clientData.email)
       clientFormData.append("client_msg",clientData.msg)

       try{
        axios.post('/contactus/contactus/', clientFormData).then((response)=>{
          console.log(response.data)
            // setclientData({
            // 'client_name': "",
            // 'client_email': "",
            // 'client_msg': "",
            // 'status':true})
        })
    }catch(error){
        console.log(error);
            //  setclientData({
            // 'status':false})
    }
	setformErrors(validate(formValues));
    };
const validate = (values) =>{
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if (!values.username){
errors.username ="your name is requierd"
}
if (!values.email){
errors.email ="your email is requierd"
}
if (!values.msg){
errors.msg ="your msg is requierd"
return errors;
}

}
const redirect = (e)=>{
    e.preventDefault()
    if(errors === {}){
        setSuccess({
            msg:'Your Message has been sent '
        })    }
  
    console.log(errors)

}


return(
    <>
        <div style={{marginTop:"50px"}}  >
                <div className="col-lg-12 text-center">
                    <h1 >Contact</h1>
                </div>
        </div>
{/* {clientData.status && <p class="text-success">thanks for send msg</p>} */}
{/* {!clientData.status && <p class="text-danger"> somthing wrong</p>}  */}
        <div className="container-fluid contactContainer " id='contact'>
            <div className="row text-center contactinfo2" >
                    <div className="col-lg-4 contactinfodiv">
                        <span className="icon" ><HiMail/></span>
                        <p className="contactway">eadty.clinic@gmail.com</p>
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
                    
                    <form onSubmit={sendForm}>
                        <div className="mb-3">
                            <label  className="form-label inputLabel">Name</label>
                            <input onChange={handelChange} type="text" placeholder="Enter Your Name" name="username" className="form-control input" value={formValues.username} required/>
<p> {formErrors.username}</p>
                            
                        </div>
                        <div className="mb-3">
			
                            <label  className="form-label inputLabel">Email</label>
                            <input onChange={handelChange}  type="email" placeholder="Enter Your Mail" name="email"  className="form-control input" value={formValues.email}/>
                           <p> {formErrors.email}</p>
                        </div>
                        <div className="mb-3 ">
			
                            <label className="form-label inputLabel" >Message</label>
                            <br/>
                            <textarea onChange={handelChange} className="form-control input" placeholder="Enter Your Message" name="msg" value={formValues.msg}>

                            </textarea>
<p> {formErrors.msg}</p>
                        </div>
                        <div className="mb-3 text-center">
                      <Link to={"/sendmsg"} onClick={(e)=>{redirect(e)}}> <button onClick={sendForm}  type="submit" className="btn btn-lg  button">Send</button> </Link>
                        </div>
                        <h2>{success.msg}</h2>
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