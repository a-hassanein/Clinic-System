import React from "react";
import "../../Style/scan_lab.css";
import { Link , Switch ,Route,Router} from "react-router-dom";
import { useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import {
    AiFillStar
} from "react-icons/ai";
import axios from "axios";
import "../../Style/assistant.css"

function ScanFav() {


    const [errorMessage, setErrorMessage] = useState('');

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
    

        let favlab_name = document.getElementById('favlab_name').value;
        let err = document.getElementById('error')
        //var mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
        if(favlab_name === null || favlab_name === ""){
            setErrorMessage("surgery is required")
            err.style.visibility = "visible"
        }
        else {

        const newData = {
            Lab_name: favlabs.favlab_name,
        };
        const newDatas = [...favlabspost,newData];
    
        console.log('newdatas',newDatas)
        setFavlabspost(newDatas);
        
    
        try{
            axios.post('/favlabs/favlabs/', newData).then((response)=>{
                err.style.visibility = "hidden"
                console.log(response.data)
                setFavlabspost(newDatas);
            })
    
        }catch(error){
            console.log(error)
        } 
        
    }
      };

      const handleScansubmit = (e) => {
        e.preventDefault()

        let favscan_name = document.getElementById('favscan_name').value;
        let err = document.getElementById('error')
        //var mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
        if(favscan_name === null || favscan_name === ""){
            setErrorMessage("surgery is required")
            err.style.visibility = "visible"
        }
        else {
    
        const newData = {
            Scan_name: favscans.favscan_name,
        };
        const newDatas = [...favscanspost,newData];
    
        console.log('newdatas',newDatas)
        setFavscanspost(newDatas);
        
    
        try{
            axios.post('/favlabs/favscans/', newData).then((response)=>{
                err.style.visibility = "hidden"
                console.log(response.data)
                setFavscanspost(newDatas);
            })
    
        }catch(error){
            console.log(error)
        }  
    }  
      };

    return (

        <>
            <section className='home-section' style={{ marginTop: '20px' }} >
                <div className="container-fluid text-center" style={{ marginTop: '20px' }}>
                        <h1>Add Favourite</h1>
            </div>
                <div className='container-fluid  formcontainer' >
                <div align="center" className="col-12 text-center" id="error" >
                  <span>{errorMessage}</span>
                  <br/>
                  </div>
                            <form onSubmit={(e) => {handlesubmit(e)}}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <label className="form-label">Add Lab</label>
                                        <input type='text' className='form-control' name="favlab_name" id="favlab_name" required onChange={handleFavlabsChange}   />
                                    </div>
                                </div>
                                    
                                    <div className="align-items-center text-center">
                                <button type="submit" id="submitbtn" style={{ marginTop: "20px", width: "200px" }} className="btn align-items-center">Add</button>
                                </div>
                            </form>
                        </div>
                        <div className='container-fluid  formcontainer' >
                        <div align="center" className="col-12 text-center" id="error" >
                  <span>{errorMessage}</span>
                  <br/>
                  </div>
                            <form onSubmit={(e) => {handleScansubmit(e)}}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <label className="form-label">Add Scan</label>
                                        <input type='text' className='form-control' name="favscan_name" required id="favscan_name" onChange={handleFavscansChange}/>
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