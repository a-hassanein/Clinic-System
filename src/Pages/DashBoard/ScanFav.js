import React from "react";
import "../../Style/scan_lab.css";
import { Link , Switch ,Route,Router} from "react-router-dom";
import { useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import {
    AiFillStar
} from "react-icons/ai";
import axios from "axios";

function ScanFav() {

    const[favlabspost, setFavlabspost] =  useState([])
    const[favscanspost, setFavscanspost] =  useState([])

    const[favlabs, setFavlabs] =  useState({
        favlab_name:'' },
    )

    const[favscans, setFavscans] =  useState({
        favscan_name:'' },
    )

    const handleFavlabsChange = (event) => {
    event.preventDefault();

    const name = event.target.getAttribute("name");
    const value = event.target.value;

    const newFavlabsData = { ...favlabs };
    newFavlabsData[name] = value;

    setFavlabs(newFavlabsData);
    };

    const handleFavscansChange = (event) => {
        event.preventDefault();
    
        const name = event.target.getAttribute("name");
        const value = event.target.value;
    
        const newFavscansData = { ...favscans };
        newFavscansData[name] = value;
    
        setFavscans(newFavscansData);
        };

    const handlesubmit = (e) => {
        e.preventDefault()
    
        const newData = {
            Lab_name: favlabs.favlab_name,
        };
        const newDatas = [...favlabspost,newData];
    
        console.log('newdatas',newDatas)
        setFavlabspost(newDatas);
        
    
        try{
            axios.post('http://localhost:8000/favlabs/favlabs/', newData).then((response)=>{
                console.log(response.data)
                setFavlabspost(newDatas);
            })
    
        }catch(error){
            console.log(error)
        }   
      };

      const handleScansubmit = (e) => {
        e.preventDefault()
    
        const newData = {
            Scan_name: favscans.favscan_name,
        };
        const newDatas = [...favscanspost,newData];
    
        console.log('newdatas',newDatas)
        setFavscanspost(newDatas);
        
    
        try{
            axios.post('http://127.0.0.1:8000/favlabs/favscans/', newData).then((response)=>{
                console.log(response.data)
                setFavscanspost(newDatas);
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
                <div className='container-fluid  formcontainer' >
                            <form onSubmit={(e) => {handlesubmit(e)}}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <label className="form-label">Add Lab</label>
                                        <input type='text' className='form-control' name="favlab_name" onChange={handleFavlabsChange}  required />
                                    </div>
                                </div>
                                    
                                    <div className="align-items-center text-center">
                                <button type="submit" id="submitbtn" style={{ marginTop: "20px", width: "200px" }} className="btn align-items-center">Add</button>
                                </div>
                            </form>
                        </div>
                        <div className='container-fluid  formcontainer' >
                            <form onSubmit={(e) => {handleScansubmit(e)}}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <label className="form-label">Add Scan</label>
                                        <input type='text' className='form-control' name="favscan_name" required onChange={handleFavscansChange}/>
                                    </div>
                                </div>
                                <div className="align-items-center text-center">
                                <button type="submit" id="submitbtn" style={{ marginTop: "20px", width: "200px" }} className="btn align-items-center">Add</button>
                                </div>
                            </form>
                        </div>

            </section>

        </>


    );



}
export default ScanFav;