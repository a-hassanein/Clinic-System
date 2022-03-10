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
        frequency:"",
        noofdays:"",
        duration:"",
        foodrelation:"",
        instructions:"",
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
            favdose:favdrugs.dose,
            favdosageform:favdrugs.dosageform,
            favfrequency:favdrugs.frequency,
            favnoofdays:favdrugs.noofdays,
            favduration:favdrugs.duration,
            favinstructions:favdrugs.instructions,

        };
        const newDatas = [...favdrugspost,newData];
    
        console.log('newdatas',newDatas)
        setFavdrugspost(newDatas);
        
    
        try{
            axios.post('http://localhost:8000/favdrugs/favdrugs/', newData).then((response)=>{
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
                                <label className="form-label">Drug Name</label>
                                <input type='text' className='form-control' name="drugname" onChange={(event)=>{handleFavdrugsChange(event)}} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <label className="form-label">Doses</label>
                                <input type='text' className="form-control" name="dose" onChange={(event)=>{handleFavdrugsChange(event)}}/>
                            </div>
                            <div className="col-lg-4">
                            <label className="form-label">Dosage Form</label>
                                <select className="form-select" name="dosageform" onChange={(event)=>{handleFavdrugsChange(event)}} >
                                    <option value="شراب">شراب</option>
                                    <option value="اقراض">اقراص</option>
                                    <option value="كبسول">كبسول</option>
                                    <option value="حقن">حقن</option>
                                    <option value="لبوس">لبوس</option>
                                    <option value="مرهم">مرهم</option>
                                    <option value="كريم">كريم</option>
                                    <option value="ملحلول">محلول</option>
                                    <option value="قطره">قطره</option>
                                    <option value="غسول فم">غسول فم</option>
                                </select>
                            </div>
                            <div className="col-lg-4">
                                <label className="form-label">Frequency</label>
                                <input type='text' className="form-control" name="frequency" onChange={(event)=>{handleFavdrugsChange(event)}}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <label className="form-label">No of Days</label>
                                <input type="number" className="form-control" name="noofdays" onChange={(event)=>{handleFavdrugsChange(event)}}/>
                            </div>
                            <div className="col-lg-3">
                                <label className="form-label">Duration</label>
                                <select className="form-select" name="duration" onChange={(event)=>{handleFavdrugsChange(event)}}>
                                    <option value="يوم">يوم</option>
                                    <option value="ايام">ايام</option>
                                    <option value="اسبوع">اسبوع</option>
                                    <option value="اسابيع">اسابيع</option>
                                    <option value="شهر">شهر</option>
                                    <option value="اشهر">اشهر</option>
                                </select>
                            </div>
                            <div className="col-lg-6">
                                <label className="form-label">Food Relation</label>
                                <select className="form-select" name="foodrelation" onChange={(event)=>{handleFavdrugsChange(event)}} >
                                    <option value="قبل الاكل">قبل الاكل</option>
                                    <option value="بعدالاكل">يعد الاكل</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label">Instructions</label>
                                <input type="text" className="form-control" name="instructions" onChange={(event)=>{handleFavdrugsChange(event)}}/>
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