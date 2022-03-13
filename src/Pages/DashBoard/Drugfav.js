import React from "react";
import "../../Style/prescription.css"
import { Link , Switch ,Route,Router} from "react-router-dom";
import { useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import {
    AiFillStar
} from "react-icons/ai";
import axios from "axios";

function DrugFav() {

    const[favdrugspost, setFavdrugspost] =  useState([])

    const[favdrugs, setFavdrugs] =  useState({
        drugname:"",
        dose:"",
        dosageform:"",
       
    })
    

    

    const handleFavdrugsChange = (event) => {
    event.preventDefault();

    const name = event.target.getAttribute("name");
    const value = event.target.value;

    const newFavdrugsData = { ...favdrugs };
    newFavdrugsData[name] = value;

    setFavdrugs(newFavdrugsData);
    };
    console.log(favdrugs)




    const handlesubmit = (e) => {
        e.preventDefault()
    
        const newData = {
            favname:favdrugs.drugname,
            favdose:500,
            

        };
        const newDatas = [...favdrugspost,newData];
    
        console.log('newdatas',newDatas)
        setFavdrugspost(newDatas);
        
    
        try{
            axios.post('/favdrugs/favdrugs/', newData).then((response)=>{
                console.log(response.data)
                setFavdrugspost(newDatas);
            })
    
        }catch(error){
            console.log(error)
        }   
      };
        
      

    return (

        <>
            <section className='home-section' style={{ marginTop: '20px' }} >
                <div className="container-fluid text-center" style={{ marginTop: '20px' }}>
                        <h1>Add Favourite</h1>
                </div>
                <div className='container-fluid  formPart' >
                    <form onSubmit={(e)=>{handlesubmit(e)}}> 
                        <div className="row">
                            <div className="col-lg-12">
                                <label className="form-label">Drug Name and Dose</label>
                                <input type='text' className='form-control' name="drugname" placeholder="Ex: Xethrone 500mg" onChange={(event)=>{handleFavdrugsChange(event)}} />
                            </div>
                        </div>
                      
                        <div className="row text-center">
                            <div className="col-lg-12" style={{marginTop:"30px"}}>
                                <input type="submit" className="btn prescriptionButton" value="submit" onChange={(event)=>{handleFavdrugsChange(event)}}/>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

        </>


    ) }    




export default DrugFav;