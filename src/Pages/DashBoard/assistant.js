import React, { useState, useEffect, Fragment} from "react";
import axios from "axios";
import ReadOnlyRow from "./component/ReadOnlyRow";
import EditableRow from "./component/EditableRow";

import "../../Style/assistant.css"



const Assistant = () => {

  


    const [data, setData] = useState([])
    const getAssistant = async () => {
        try {
            const response = await axios.get('/assistant/assistant/')
            const { data } = response
            console.log(data)
            setData(data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getAssistant()
  }, [])



    const [errorMessage, setErrorMessage] = useState('');



    const [addFormData, setAddFormData] = useState({
        name: "",
        mobile: "",
        gender: "",
        address: "",
        email: "",
        pass: "",
        age: "",
    });


    const [editFormData, setEditFormData] = useState({
        name: "",
        mobile: "",
        gender: "",
        address: "",
        email: "",
        pass: "",
        age: "",
      });
    
      const [editDataId, setEditDataId] = useState(null);



      const handleEditFormChange = (event) => {
        event.preventDefault();
    
        const name = event.target.getAttribute("name");
        const value = event.target.value;
    
        const newFormData = { ...editFormData };
        newFormData[name] = value;
    
        setEditFormData(newFormData);
      };


    const handleAddFormChange = (event) => {
        event.preventDefault();
    
        const name = event.target.getAttribute("name");
        const value = event.target.value;
    
        const newFormData = { ...addFormData };
        newFormData[name] = value;
    
        setAddFormData(newFormData);
      };




      const handleEditClick = (event , resdata) => {
        event.preventDefault();
        //console.log(typeof(resdata.assistant_id))
        setEditDataId(resdata.assistant_id);
    
        const formValues = {
            name: resdata.assistant_name,
            mobile: resdata.assistant_number,
            gender: resdata.assistant_gender,
            address: resdata.assistant_address,
            email: resdata.assistant_email,
            pass: resdata.assistant_pass,
            age: resdata.assistant_age,
        };

        console.log(formValues)
    
        setEditFormData(formValues);
      };


      const handleEditFormSubmit = (event) => {
        event.preventDefault();

        try{
            axios.put(`/assistant/assistant/${editDataId}/`,  {
                assistant_name: editFormData.name,
                assistant_email: editFormData.email,
                assistant_pass: editFormData.pass,
                assistant_number: editFormData.mobile,
                assistant_gender: editFormData.gender,
                assistant_address: editFormData.address,
                assistant_age: editFormData.age, 
                doctor: 1, 
              }).then((response)=>{
                getAssistant()
                console.log(response.data)
            })

        }catch(error){
            console.log(error)
        }
    
        //setData(newDatas);
        setEditDataId(null);
      };


  
    
      const handleCancelClick = () => {
        setEditDataId(null);
      };





      const deleteAssistant = async (id) =>{

        try{
            await axios.delete(`/assistant/assistant/${id}/`).then((response)=>{
                getAssistant()
                console.log(response.data)
            })

        }catch(error){
            console.log(error)
        }

      }




      const handleAddFormSubmit = (event) => {
        event.preventDefault();

        let name = document.getElementById('name').value;
        let mobile = document.getElementById('mobile').value;
        let address = document.getElementById('address').value;
        let age = document.getElementById('age').value;
        let email = document.getElementById('email').value;
        let pass = document.getElementById('pass').value;
        let gender = document.getElementById('gender').value;
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
        }else if(age === null || age ===""){
            setErrorMessage("age is required")
            err.style.visibility = "visible"
        }else if(isNaN(age)){
            setErrorMessage("age should be a number not text")
        }else if (address === "" || address === null){
            setErrorMessage("address is required")
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
        }else if (gender === null || gender === ""){
            setErrorMessage("gender is required")
            err.style.visibility = "visible"
        }else {


            const newData = {
                assistant_name: addFormData.name,
                assistant_email: addFormData.email,
                assistant_pass: addFormData.pass,
                assistant_number: addFormData.mobile,
                assistant_gender: addFormData.gender,
                assistant_address: addFormData.address,
                assistant_age: addFormData.age, 
                doctor: 1,        
              };
      
              const newDatas = [...data, newData];
              
              setData(newDatas);
      
              try{
                  axios.post('/assistant/assistant/', newData).then((response)=>{
                      setErrorMessage('')
                      err.style.visibility = "hidden"
                      getAssistant()
                      console.log(response.data)
                  })
      
              }catch(error){
                  console.log(error)
              }

               
                    

        }

        
      };


    // console.log(data)
    return (
        <>

      <section className="home-section">
      
     
      <div className="container-fluid text-center" style={{ marginTop: '20px' }}>
                    <h1>Assistant</h1>
                </div>


               <div className='container-fluid formPart' >

                
                  <div align="center" className="col-12 text-center" id="error" >
                  <span>{errorMessage}</span>
                  <br/>
                  </div>
                
                    <form onSubmit={handleAddFormSubmit}>
                    <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label">Name</label>
                                <input type='text' className='form-control'
                                 id="name"
                                 name="name" placeholder={"assisatant name ..."}
                                 onChange={handleAddFormChange}
                                 />
                            </div>
                            <div className="col-lg-6">
                                <label className="form-label">Mobile No.</label>
                                <input type='text' className='form-control' name="mobile" id="mobile" placeholder={"assistant number"}
                                 onChange={handleAddFormChange} 
                                />
                            </div>
                        </div>
                          
                    <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label">Gender</label>
                                <select class="custom-select" name="gender"  onChange={handleAddFormChange} id="gender" >
                                    <option value="">choose your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="col-lg-6">
                                <label className="form-label">Age</label>
                                <input type='number' className='form-control' id="age" name="age" placeholder={"assistant age"}  onChange={handleAddFormChange}  />
                            </div>
                        </div>
                     
                        <div className="row">
                            <div className="col-lg-12">
                                <label className="form-label">Address</label>
                                <input type='text' className='form-control' name="address" id="address" placeholder={"assistant address"}  onChange={handleAddFormChange}  />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <label className="form-label">Email</label>
                                <input type='email' className='form-control' name="email" id="email" placeholder={"assistant email"}  onChange={handleAddFormChange}  />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <label className="form-label">Password</label>
                                <input type='password' className="form-control" name="pass" id="pass" placeholder={"assistant password"}  onChange={handleAddFormChange}  />
                            </div>
                        </div>
                
                       
                  
                    <div className="row text-center">
                            <div className="col-lg-12" style={{marginTop:"30px"}} >
                                <button type="submit" className="btn prescriptionButton">ADD</button>
                            </div>
                        </div>

                        </form>

              
                </div>


                <div className="container-fluid">
                <div className="row">
                <div className="col-12">

                <form onSubmit={handleEditFormSubmit}>

                

                <table class="table" id="table_container">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">NAME </th>
                            <th scope="col">EMAIL </th>
                            <th scope="col">PASSWORD </th>
                            <th scope="col">NUMBER</th>
                            <th scope="col">GENDER</th>
                            <th scope="col">AGE</th>
                            <th scope="col">ADDRESS</th>
                            <th scope="col">DELETE</th>
                            <th scope="col">UPDATE</th>
                         
                        </tr>
                    </thead>
                    <tbody>

                        {/* {
                              data.map((resdata, index) => {
                                //  console.log(resdata.title);
                                 return (

                                    <ReadOnlyRow  index={index} resdata={resdata}
                                    handleEditClick={handleEditClick} deleteAssistant={deleteAssistant}/>
                      
                                 );
                               })
                            
                        } */}

                    {data.map((resdata, index)=> (
                                <Fragment>
                                {editDataId === resdata.assistant_id ? (
                                    <EditableRow
                                    editFormData={editFormData}
                                    handleEditFormChange={handleEditFormChange}
                                    handleCancelClick={handleCancelClick}
                                    resdata={resdata}
                                    handleEditFormSubmit={handleEditFormSubmit}
                                    />
                                ) : (
                                    <ReadOnlyRow  index={index} resdata={resdata}
                                    handleEditClick={handleEditClick} deleteAssistant={deleteAssistant}/>
                                )}
                                </Fragment>
            ))}
                     
                    </tbody>
                </table>
                </form>
                </div>
                    </div>
                    </div>
        </section>
        </>
    )


} 


export default Assistant;