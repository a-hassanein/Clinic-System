import React, { useState, useEffect} from "react";
import axios from "axios";



const Assistant = () => {


    const [data, setData] = useState([])
    const getAssistant = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/assistant/assistant/')
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



    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     axios.get("http://127.0.0.1:8000/assistant/assistant/")
    //     .then((res) => {
    //         setData(res);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // }, []);

    //console.log(data.data)




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



      const handleEditFormSubmit = (event) => {
        event.preventDefault();
    
        const editedContact = {
          assistant_name: editFormData.name,
          assistant_email: editFormData.email,
          assistant_pass: editFormData.pass,
          assistant_number: editFormData.mobile,
          assistant_gender: editFormData.gender,
          assistant_address: editFormData.address,
          assistant_age: editFormData.age, 
          doctor: 1, 
        };
    
        const newContacts = [...data];
    
        const index = data.findIndex((contact) => contact.id === editDataId);
    
        newContacts[index] = editedContact;
    
        setData(newContacts);
        setEditDataId(null);
      };


      const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditDataId(contact.id);
    
        const formValues = {
            name: data.data.assistant_name,
            mobile: data.data.assistant_number,
            gender: data.data.assistant_gender,
            address: data.data.assistant_address,
            email: data.data.assistant_email,
            pass: data.data.assistant_pass,
            age: data.data.assistant_age,
        };
    
        setEditFormData(formValues);
      };
    
      const handleCancelClick = () => {
        setEditDataId(null);
      };





      const deleteAssistant = (id) =>{

        try{
            axios.delete(`http://127.0.0.1:8000/assistant/assistant/${id}`).then((response)=>{
                getAssistant()
                console.log(response.data)
            })

        }catch(error){
            console.log(error)
        }

      }












      


      const handleAddFormSubmit = (event) => {
        event.preventDefault();
    
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
            axios.post('http://127.0.0.1:8000/assistant/assistant/', newData).then((response)=>{
                getAssistant()
                console.log(response.data)
            })

        }catch(error){
            console.log(error)
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
               
                
                    <form onSubmit={handleAddFormSubmit}>
                    <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label">Name</label>
                                <input type='text' className='form-control'
                                 name="name" placeholder={"assisatant name ..."}
                                 onChange={handleAddFormChange}
                                 />
                            </div>
                            <div className="col-lg-6">
                                <label className="form-label">Mobile No.</label>
                                <input type='text' className='form-control' name="mobile" placeholder={"assistant number"}
                                 onChange={handleAddFormChange}
                                />
                            </div>
                        </div>
                          
                    <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label">Gender</label>
                                <select class="custom-select" id="inputGroupSelect01" name="gender"  onChange={handleAddFormChange} >
                                    <option value="0">choose your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="col-lg-6">
                                <label className="form-label">Age</label>
                                <input type='text' className='form-control' name="age" placeholder={"assistant age"}  onChange={handleAddFormChange} />
                            </div>
                        </div>
                     
                        <div className="row">
                            <div className="col-lg-12">
                                <label className="form-label">Address</label>
                                <input type='text' className='form-control' name="address" placeholder={"assistant address"}  onChange={handleAddFormChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <label className="form-label">Email</label>
                                <input type='email' className='form-control' name="email" placeholder={"assistant email"}  onChange={handleAddFormChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <label className="form-label">Password</label>
                                <input type='password' className="form-control" name="pass" placeholder={"assistant password"}  onChange={handleAddFormChange} />
                            </div>
                        </div>
                
                       
                  
                    <div className="row text-center">
                            <div className="col-lg-12" style={{marginTop:"30px"}}>
                                <button type="submit" className="btn prescriptionButton">ADD</button>
                            </div>
                        </div>

                        </form>

              
                </div>


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

                        {
                              data.map((resdata, index) => {
                                //  console.log(resdata.title);
                                 return (
                                    <tr key={index}>
                                    <th scope="row">{resdata.assistant_id}</th>
                                    <td>{resdata.assistant_name}</td>
                                    <td>{resdata.assistant_email}</td>
                                    <td>{resdata.assistant_pass}</td>
                                    <td>{resdata.assistant_number}</td>
                                    <td>{resdata.assistant_gender}</td>
                                    <td>{resdata.assistant_age}</td>
                                    <td>{resdata.assistant_address}</td>
                                    <td><button  className="btn " id="btn_material" onClick={() => deleteAssistant(resdata.assistant_id)}>Delete</button></td>
                                    <td><button  className="btn " id="btn_material">Update</button> </td>
        
                                </tr>
                                 
                                 );
                               })
                            
                        }
                     
                    </tbody>
                </table>

                </form>
            
                    
        </section>
        </>
    )


} 


export default Assistant;