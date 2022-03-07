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
      const response = await axios.get("/appointment/appointment/");
      const { data } = response;
      console.log(data);
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
  console.log(appointmentsList, "list");

  const addAppointment = async (newAppointment) => {
    try {
      await axios.post("/appointment/appointment/", newAppointment);
      console.log(newAppointment, "new");
      getAppointments();
      //  console.log(newAppointment , 'new')
    } catch (error) {
      console.log(error);
    }
  };
  const completedAppointment = async (appointment_id) => {
    try {
      //  console.log(appointmentsList , 'list from checkbox')
      console.log(appointment_id, "id from checkbox");

      const appointment = appointmentsList.filter(
        (thisappointment) => thisappointment.appointment_id === appointment_id
      )[0];
      console.log(appointment, "app");
      appointment.completed = true;

      await axios.put(
        `/appointment/appointment/${appointment_id}/`,
        appointment
      );

      getAppointments();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteAppointment = async (appointment_id) => {
    try {
      await axios.delete(`/appointment/appointment/${appointment_id}/`);
      getAppointments();
    } catch (error) {
      console.log(error); 
    }
  };

  return (
    <section className="home-section">
      <div className="container-fluid text-center">
        <h1 style={{ marginTop: "20px" }}>Appointments</h1>
      </div>
      <AddAppointment addAppointment={addAppointment} />
      <ListAppointment
        appointments={appointmentsList}
        completedAppointment={completedAppointment}
        deleteAppointment={deleteAppointment}
       />
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
