import React, { useEffect, useState } from "react";
import AddAppointment from "../../Components/AddAppointment";
import ListAppointment from "../../Components/ListAppointment";
import axios from "axios";

//axios.get('/appointment/appointment/')

const Appointment = (props) => {
  const [appointmentsList, setappointmentsList] = useState([]);

//   const addAppointmentHandler = (aPatient, aDate, aPhone, aCheckup) => {
//     setappointmentsList((prevList) => {
//       return [
//         ...prevList,
//         { patient: aPatient, date: aDate, phone: aPhone, checkup: aCheckup },
//       ];
//     });
//   };

  const getAppointments = async () => {
    try {
      const response = await axios.get("/appointment/appointment/" );
      const { data } = response;
      console.log(data)
     // console.log()
      setappointmentsList(data);
    //  console.log(appointmentsList , 'list')
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAppointments();
  }, []);
  console.log(appointmentsList , 'list')
   
  const addAppointment = async (newAppointment) =>{
      try{
        
          await axios.post("/appointment/appointment/" ,newAppointment  , {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT fefege...'
            },
          } )

           
          getAppointments();
          console.log(newAppointment , 'new')

      }catch (error) {
         console.log(error)
      }

  }

  return (
    <section className="home-section">
      <div className="container-fluid text-center">
        <h1 style={{ marginTop: "20px" }}>Appointments</h1>
      </div>
      <AddAppointment addAppointment={addAppointment}/>
      <ListAppointment appointments={appointmentsList}/>
      {/*appointmentsList.map((appointment, index) => {
        <ListAppointment 
        appointment_id={appointment.appointment_id}
        patient_name={appointment.patient_name}
        appointment_date={appointment.appointment_date}
        patient_phone={appointment.patient_phone}
        checkup_type={appointment.checkup_type} />;
      })*/}

    </section>
  );
};

export default Appointment;
//onAddAppointment={addAppointmentHandler} 
