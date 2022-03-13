// import "../../Style/dashpage.css"; 
import "../../Style/sidebar.css";
import { useState,useRef,useEffect } from "react";
import { useReactToPrint } from 'react-to-print';
import {Link} from "react-router-dom";
import {
  HiPlusCircle,
  HiMinusCircle
} from "react-icons/hi";
import axios from "axios";



const Bill = () => {

  let sum=0



  const [errorMessage, setErrorMessage] = useState('');

  const[data, setData] =  useState([])
  const[inputFields, setInputfields] =  useState(
    { activity:'',price:''},
  )

  const[appointment_idField, setAppointment_idField] =  useState({
    appointment_id:'' },
  )

const componentRef = useRef()
const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  const handleAppointmentChange = (event) => {
    event.preventDefault();

    const name = event.target.getAttribute("name");
    const value = event.target.value;

    const newAppointmentData = { ...appointment_idField };
    newAppointmentData[name] = value;

    setAppointment_idField(newAppointmentData);
  };

  const handleChangeInput = (event) => {

    event.preventDefault();

    const name = event.target.getAttribute("name");
    const value = event.target.value;

    const values = { ...inputFields };
    values[name] = value;

    setInputfields(values);
    console.log('beforeaddddd',values)

    // const values = [...inputFields];
    // values[event.target.name] = event.target.value;
    // setInputfields(values); 
    // console.log('input',inputFields)
  }

  // const handleAddFields = () =>{
  //   setInputfields([...inputFields, { activity:'',price:'' }])
  //   Setvarible(varible+1)
  //   console.log('addddd',varible)
  // }

  
  // const handleRemoveFields = (index) => {
  //   const values = [...inputFields];
  //   values.splice(index, 1);
  //   setInputfields(values);
  // }

const handlesubmit = (e) => {
    e.preventDefault()


    let appointment_id = document.getElementById('appointment_id').value;
    let price = document.getElementById('price').value;
    let activity = document.getElementById('activity').value;
    //let flag = 0;
    let err = document.getElementById('error')
    //var mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(appointment_id === null || appointment_id === ""){
        setErrorMessage("appointment_id is required")
        err.style.visibility = "visible"
    }else if(price === null || price === ""){
        setErrorMessage("price is required")
        err.style.visibility = "visible"
    }else if(isNaN(price)){
        setErrorMessage("price should be a number not text")
        err.style.visibility = "visible"
    }else if(activity === null || activity === ""){
        setErrorMessage("activity is required")
        err.style.visibility = "visible"
    }
    else {


    const newData = {
      appointment_id: appointment_idField.appointment_id,
      activity_name: inputFields.activity,
      activity_price: inputFields.price,
    };


    const newDatas = [...data,newData];

    console.log('ay7aga',typeof(newDatas))

    console.log('newdatas',newDatas)
    setData(newDatas);
    

    try{
        axios.post('/bill/billpost', newData).then((response)=>{
            console.log(response.data)
            err.style.visibility = "hidden"
            setData(newDatas);
            getBillData()
        })

    }catch(error){
       console.log(error)
    } 
  }  
  };


  const [billDatas, setBillData] = useState([])
  const getBillData = async () => {
    try {
        const response = await axios.get(`/bill/bill/${appointment_idField.appointment_id}`)
        const { data } = response
        console.log(data)
        setData(data)
    } catch (err) {
        console.log(err)
    }
}
// useEffect(() => {
//   getBillData()
// }, [])

    return (
      <>
        <section className="home-section">  

        <div className="container-fluid text-center" style={{ marginTop: '20px' }}>
                    <h1>Bill</h1>
        </div>

        <div className='container-fluid formPart' >
        <div align="center" className="col-12 text-center" id="error" >
                  <span>{errorMessage}</span>
                  <br/>
        </div>
          <form method="post" onSubmit={(e) => {handlesubmit(e)}}>
          <div className="row">
                  <div className="col-lg-12">
                      <label className="form-label">Appointment ID</label>
                      <input type='text' className='form-control' name="appointment_id" id="appointment_id" value={appointment_idField.appointment_id}  onChange={handleAppointmentChange} />
                  </div>
          </div>
          
            <div className="row">
              <div className="col-lg-6">
                  <label className="form-label">Activity</label>
                  <input type='text' className='form-control' name="activity" id="activity" value={inputFields.activity} onChange={event => handleChangeInput(event)}/>
              </div>
              <div className="col-lg-6">
                  <label className="form-label">Price</label>
                  <input type='text' className='form-control' name="price" id="price" value={inputFields.price} onChange={event => handleChangeInput(event)}/>
              </div>
              {/* <div className="col-lg-1" style={{top:"37px"}}>
                  
                  <a style={{border:"none", backgroundColor:"none",color:'var(--first_color)',fontSize:"28px",marginLeft:'5px'}} onClick={() => handleRemoveFields(index)}><HiMinusCircle></HiMinusCircle></a>
                  <a style={{border:"none", backgroundColor:"none",color:'var(--first_color)',fontSize:"28px",marginLeft:'5px'}} onClick={() => handleAddFields()}><HiPlusCircle></HiPlusCircle></a>
                  
              </div> */}
            </div>


          <div className="row text-center">
              <div className="col-lg-12" style={{marginTop:"30px"}}>
                  <input type="submit" className="btn prescriptionButton" value="submit"/>
              </div>
          </div>
          </form>
        </div>

        <div className="container prescriptionPart"  ref={componentRef}>

        <div className="doctor-presc-info">
          <div className="row">
            <div className="col-lg-12 ">
              <h1 className="clinic-info"><b>BILL</b></h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 ">
                <h6 className="clinic-info">Clinic name</h6>
            </div>
            <div className="col-lg-6 ">
                <h2 className="clinic-info">Appointment ID</h2>
            </div>
          </div>
        </div>

        <div className="row text-center" style={{fontSize:"24px", textTransform:"capitalize"}}>
                {data.map((resdata,index)=>(
                  <div className="row" key={index}>
                  <div className="col-lg-6" style={{float:"left" ,left:"0px",display:"inline-block"}}>
                      <p className="drugs">{resdata.activity_name}</p>
                  </div>
                  <div className="col-lg-6">
                      <p className="drugs" style={{float:"right" ,right:"0px",display:"inline-block"}}>{resdata.activity_price}</p>
                      <p style={{ visibility: "hidden" }}> {sum = sum + resdata.activity_price} </p>
                  </div>
              </div>
                ))}
                <div className="row" >
                  <div className="col-lg-12">
                    <hr/>
                    <p className="drugs"><b>Total Price</b> {sum}</p>
                  </div>
                </div>

        </div>
        
        </div>
        <div className="container-fluid presc-button-container" >
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <button className="btn printButton" onClick={handlePrint}>Print Bill</button>
                        </div>
                    </div>
        </div>
        </section>
      </>
    );
  };
  
  export default Bill;