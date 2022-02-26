import React from "react";
import classes from "../Style/ButtonAppiontment.module.css";

const ButtonAppiontment = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
        {props.children}
    </button>
  );
};

export default ButtonAppiontment;
