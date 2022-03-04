import React, { useState} from "react";


const Assistant = () => {

    // const [contacts, setContacts] = useState(data);
    // const [addFormData, setAddFormData] = useState({
    //     name: "",
    //     mobile: "",
    //     gender: "",
    //     address: "",
    //     email: "",
    //     pass: "",
    // });


    // const handleAddFormChange = (event) => {
    //     event.preventDefault();
    
    //     const name = event.target.getAttribute("name");
    //     const value = event.target.value;
    
    //     const newFormData = { ...addFormData };
    //     newFormData[name] = value;
    
    //     setAddFormData(newFormData);
    //   };


    //   const handleAddFormSubmit = (event) => {
    //     event.preventDefault();
    
    //     const newContact = {
    //       name: addFormData.name,
    //       address: addFormData.address,
    //       mobile: addFormData.mobile,
    //       email: addFormData.email,
    //       password: addFormData.pass
    //     };
    
       
    //   };



    return (
        <>

      <section className="home-section">
          
      <div className="container-fluid text-center" style={{ marginTop: '20px' }}>
                    <h1>Assistant</h1>
                </div>
               <div className='container-fluid formPart' >
               
                
                    <form method="post">
                    <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label">Name</label>
                                <input type='text' className='form-control'
                                 name="name" placeholder={"assisatant name ..."}
                                 
                                 />
                            </div>
                            <div className="col-lg-6">
                                <label className="form-label">Mobile No.</label>
                                <input type='text' className='form-control' name="mobile" value={"assistant number"}
                                />
                            </div>
                        </div>
                          
                    <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label">Gender</label>
                                <select class="custom-select" id="inputGroupSelect01" name="gender" >
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                </select>
                            </div>
                            <div className="col-lg-6">
                                <label className="form-label">Address</label>
                                <input type='text' className='form-control' name="address" placeholder={"assistant address"} />
                            </div>
                        </div>
                     
                        
                        <div className="row">
                            <div className="col-lg-12">
                                <label className="form-label">Email</label>
                                <input type='text' className='form-control' name="email" placeholder={"assistant email"}  />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <label className="form-label">Password</label>
                                <input type='password' className="form-control" name="pass" placeholder={"assistant password"}  />
                            </div>
                        </div>
                
                       
                  
                    <div className="row text-center">
                            <div className="col-lg-12" style={{marginTop:"30px"}}>
                                <button  className="btn prescriptionButton">ADD</button>
                            </div>
                        </div>

                        </form>

                        <table class="table" id="table_container">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">NAME </th>
                            <th scope="col">EMAIL </th>
                            <th scope="col">PASSWORD</th>
                            <th scope="col">NUMBER</th>
                            <th scope="col">GENDER</th>
                            <th scope="col">ADDRESS</th>
                         
                        </tr>
                    </thead>
                    <tbody>
                     
                    </tbody>
                </table>
                </div>

                


            
                    
        </section>
        </>
    )


} 


export default Assistant;