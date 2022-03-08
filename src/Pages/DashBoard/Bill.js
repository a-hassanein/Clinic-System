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

    const newData = {
      appointment_id: appointment_idField.appointment_id,
      activity_name: inputFields.activity,
      activity_price: inputFields.price,
    };


    const newDatas = [newData];

    console.log('ay7aga',typeof(newDatas))

    console.log('newdatas',newDatas)
    setInputfields(newDatas);
    

    try{
        axios.post('http://localhost:8000/bill/bill/', newData).then((response)=>{
            console.log(response.data)
            setInputfields(newDatas);
        })

    }catch(error){
        console.log(error)
    }   
  };


//   const [billDatas, setBillData] = useState([])
//   const getBillData = async (bill_id) => {
//     try {
//         const response = await axios.get(`http://127.0.0.1:8000/bill/bill/${bill_id}/`)
//         const { data } = response
//         console.log(data)
//         setBillData(data)
//     } catch (err) {
//         console.log(err)
//     }
// }
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
          <form method="post" onSubmit={(e) => {handlesubmit(e)}}>
          <div className="row">
                  <div className="col-lg-12">
                      <label className="form-label">Appointment ID</label>
                      <input type='text' className='form-control' name="appointment_id" value={appointment_idField.appointment_id}  onChange={handleAppointmentChange} />
                  </div>
          </div>
          
            <div className="row">
              <div className="col-lg-6">
                  <label className="form-label">Activity</label>
                  <input type='text' className='form-control' name="activity" value={inputFields.activity} onChange={event => handleChangeInput(event)}/>
              </div>
              <div className="col-lg-6">
                  <label className="form-label">Price</label>
                  <input type='text' className='form-control' name="price" value={inputFields.price} onChange={event => handleChangeInput(event)}/>
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
                <h7 className="clinic-info">Clinic name</h7>
            </div>
            <div className="col-lg-6 ">
                <h2 className="clinic-info">Appointment ID</h2>
            </div>
          </div>
        </div>

        {/* <div className="row text-center" style={{fontSize:"24px", textTransform:"capitalize"}}>

                  <div className="row">
                      <div className="col-lg-6">
                          <p className="drugs">{billDatas[0].activity}</p>
                      </div>
                      <div className="col-lg-6">
                          <p className="drugs">{billDatas[0].price}</p>
                      </div>
                  </div>
        </div> */}
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