import React from 'react';
import classes from '../Style/CardAppointment.module.css'

const CardAppointment = (props) =>{
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
};

export default CardAppointment;