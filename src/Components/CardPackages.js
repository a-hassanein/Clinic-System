import React from "react";
import {Card} from "react-bootstrap"
import './CardPackages.css'
import Packages from "./Packages";

function CardPackages(props) {
  return (
    <div>
      <Card style={{ width: "20rem" , height: "25rem"}} className="Card__bg ">
        <Card.Body>
          <Card.Title className="Card__Title">{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 Card__Subtitle">
           <span>{props.Subtitle}</span><span className="span__Egy">{props.coin}</span> <span className="span__Per">{props.per}</span>
          </Card.Subtitle>
          
            <ul className="Card__list">
                <li>{props.list0} </li>
                <li>{props.list1} </li>
                <li>{props.list2}</li>
            </ul>
          
         <button className="Card__Button">Select</button>
          
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardPackages;
