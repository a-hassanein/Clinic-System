import React , {useState} from "react";
import AddAppointment from "../../Components/AddAppointment";

import ListAppointment from "../../Components/ListAppointment";

const  Appointment = props => {
    const [appointmentsList , setappointmentsList] = useState([])
    
    const addAppointmentHandler = (aPatient , aDate) => {
        setappointmentsList((prevList)=>{
            return [...prevList, {patient: aPatient , date : aDate}   ]
        });
    }
 
    return(
        <section className="home-section">
         <AddAppointment onAddAppointment={addAppointmentHandler} />
         <ListAppointment appointments={appointmentsList} />
        </section>
    ) ;
}

export default Appointment;