import React, { useState, useEffect} from "react";
import jwt from 'jwt-decode'
import axios from "axios";
import "../../Style/assistant.css";

const Setting = () => {


     const [saveFormData, setSaveFormData] = useState({
        name: '',
        phone: '',
        gender: '',
        email: '',
        pass: "",
        age: "",
    });

 const [data, setData] = useState([])
    const getUser = async () => {
        try {
            const response = await axios.get('/auth/users/2/')
            const { data } = response
            console.log(data)
            setData(data)
            setSaveFormData({
                name: data.name,
                phone: data.phone,
                gender: data.gender,
                email: data.email,
                pass: "",
                age: "",
            })
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getUser()
  }, [])

    // let token=localStorage.getItem("access");
    // var decode1 = jwt(token);
    // console.log("---------------------------->>>>>>>>>>>>>>>>>>>>>>>>>> ",decode1)
    // console.log("---------------------------->>>>>>>>>>>>>>>>>>>>>>>>>> ", token)



    // function savaData(){
    //     document.getElementById('pet').disabled = true;
    // }

     const [errorMessage, setErrorMessage] = useState('');






    console.log(saveFormData.email)

    function disabledFieldset(){
        document.getElementById('pet').disabled = !document.getElementById('pet').disabled;
        // document.getElementById('name').value = ''
        // document.getElementById('phone').value = ''
        // document.getElementById('email').value = ''
        // document.getElementById('pass').value = ''
    }

     const handleSaveFormChange = (event) => {
        event.preventDefault();

        const name = event.target.getAttribute("name");
        const value = event.target.value;

        const newFormData = { ...saveFormData };
        newFormData[name] = value;

        setSaveFormData(newFormData);
      };


    const handleSaveFormSubmit = () => {

        let mobile = document.getElementById('phone').value;
        let email = document.getElementById('email').value;
        let pass = document.getElementById('pass').value;
        let name = document.getElementById('name').value;
        //let flag = 0;
        let err = document.getElementById('error')
        var mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(name === null || name === ""){
            setErrorMessage("name is required")
            err.style.visibility = "visible"
        }else if(mobile === null || mobile === ""){
            setErrorMessage("mobile is required")
            err.style.visibility = "visible"
        }else if(isNaN(mobile)){
            setErrorMessage("mobile should be a number not text")
            err.style.visibility = "visible"
        }else if(mobile.length < 11 || mobile.length > 11 ){
            setErrorMessage("mobile digits should be 11")
            err.style.visibility = "visible"
        }else if(email === null || email === ""){
            setErrorMessage("email is required")
            err.style.visibility = "visible"
        }else if(!email.match(mailformat)){
            setErrorMessage("email should be example@exam.com")
            err.style.visibility = "visible"
        }else if(pass === null || pass === ""){
            setErrorMessage("password is required")
            err.style.visibility = "visible"
        }
        else {


            try {
                axios.put(`/auth/users/${3}/`, {
                    name: saveFormData.name,
                    phone: saveFormData.phone,
                    email: saveFormData.email,
                    age: data.age,
                    username: data.name,
                    password: saveFormData.pass,
                    gender: data.gender,

                }).then((response) => {
                    getUser()
                    document.getElementById('pet').disabled = true;
                    err.style.visibility = "hidden"
                    console.log(response.data)
                })

            } catch (error) {
                console.log(error)
            }

        }

        //setData(newDatas);
        // setEditDataId(null);
      };


    return (
        <>
               <section className="home-section">
          
               <div className="container-fluid text-center" style={{ marginTop: '20px' }}>
                    <h1>Settings</h1>
                </div>

               <div className='container-fluid formPart' >
                     <div align="center" className="col-12 text-center" id="error" style={{marginLeft:"auto" ,marginRight:"auto"}}>
                  <span>{errorMessage}</span>
                  <br/>
                  </div>
                    <fieldset disabled id="pet"> 
                    <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label">Name</label>
                                <input type='text' className='form-control' id={'name'} name="name" defaultValue={data.name} onChange={handleSaveFormChange} />
                            </div>
                            <div className="col-lg-6">
                                <label className="form-label">Mobile No.</label>
                                <input type='text' className='form-control' id={'phone'} name="phone" defaultValue={data.phone} onChange={handleSaveFormChange}  />
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12">
                                <label className="form-label">Email</label>
                                <input type='text' className='form-control' id={'email'} name="email" defaultValue={data.email}  onChange={handleSaveFormChange}  />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <label className="form-label">Password</label>
                                <input type='password' className="form-control" id={'pass'} name="pass" onChange={handleSaveFormChange}    />
                            </div>
                        </div>
                        {/*<div className="row">*/}

                        {/*    <div className="col-lg-12">*/}
                        {/*            <label className="form-label">Visita</label>*/}
                        {/*            <input type='text' className="form-control" name="visita"  value={"100$"}/>*/}
                        {/*        </div>*/}
                        {/*   */}
                        {/*</div>*/}
                        </fieldset>
                       

                    <div className="row text-center">
                            <div className="col-lg-12" style={{marginTop:"30px"}}>
                                <button  className="btn prescriptionButton"  onClick={disabledFieldset}>Edit</button>
                                <span> </span>
                                <button  className="btn prescriptionButton" onClick={handleSaveFormSubmit} >Save</button>
                            </div>
                        </div>
                   
                </div>
         
               </section>
       </>
   
    );
}


export default Setting;