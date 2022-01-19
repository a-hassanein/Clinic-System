import React from "react";
import {Card , Button} from "react-bootstrap"
import './CardPackages.css'
import Packages from "./Packages";

function CardPackages(props) {
  return (
    <div>
      <div  style={{ width: "20rem" , height: "25rem"}} className="card Card__body">
        
          <div className="Card__Title">{props.title} <br/> </div> 
         
          <div className="Card__Subtitle">
           <span>{props.Subtitle}</span><span className="span__Egy">{props.coin}</span> <span className="span__Per">{props.per}</span>
          </div>
         
         
            <ul className="Card__list">
                <li>{props.list0} </li>
                <li>{props.list1} </li>
                <li>{props.list2}</li>
               
            </ul>
         
         <Button className="Card__Button">Select</Button>
        
          
       
      </div>
    </div>
  );
}

export default CardPackages;
