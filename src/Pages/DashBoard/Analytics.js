import React, { PureComponent } from 'react';
import  { useState, useEffect} from "react";
import axios from "axios";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Brush,
    AreaChart,
    Area,
    ResponsiveContainer,
  } from 'recharts';
  import '../../Style/analytics.css';
const Analytics = () => {

  const [dataAnalytics, setData] = useState([])
  const getAnalytics = async () => {
      try {
          const response = await axios.get('/analytics/analytics')
          const { data } = response
          console.log(data)
          setData(data)
      } catch (err) {
          console.log(err)
      }
  }
  useEffect(() => {
    getAnalytics()
}, [])

  //  let list = []
  //  let sum = 0
  //  for(let i = 0 ; i < 12; i++){
  //    for(let j = 0 ; j < dataAnalytics.length ; j++){
  //         if (i === dataAnalytics[j]){
  //            list[i+1] = sum + 1
  //         }      
  //    }
  //    sum = 0
  //  }

  function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

   //console.log(getOccurrence(dataAnalytics , 3))

  

  //  console.log("---------------------------->",list)



    const data = [
        {
          name: 'Jan',
          pv: getOccurrence(dataAnalytics , 1)
          
        },
        {
          name: 'Feb',
          pv: getOccurrence(dataAnalytics , 2)
          
        },
        {
          name: 'March',
          pv: getOccurrence(dataAnalytics , 3)
          
        },
        {
          name: 'April',
          pv: getOccurrence(dataAnalytics , 4)
          
        },
        {
          name: 'May',
          pv: getOccurrence(dataAnalytics , 5)
          
        },
        {
          name: 'June',
          pv: getOccurrence(dataAnalytics , 6)
          
        },
        {
          name: 'July',
          pv: getOccurrence(dataAnalytics , 7)
          
        },
        {
          name: 'Aug',
          pv: getOccurrence(dataAnalytics , 8)
          
        },
        {
          name: 'Sep',
          pv: getOccurrence(dataAnalytics , 9)
          
        },
        {
          name: 'Oct',
          pv: getOccurrence(dataAnalytics , 10)
          
        },
        {
          name: 'Nov',
          pv: getOccurrence(dataAnalytics , 11)
          
        },
        {
          name: 'Des',
          pv: getOccurrence(dataAnalytics , 12)
          
        },
      ];


      const [suOfpatients, setSumPatients] = useState()
      const [patients, setPatients] = useState([])
      const getPatients = async () => {
          try {
              const response = await axios.get('/patient/patient/')
              const { data } = response
              console.log(data)
              setPatients(data)
              let sum = 0
              for(let i = 0; i< data.length; i ++){
                sum = sum + 1
              }
              setSumPatients(sum)
          } catch (err) {
              console.log(err)
          }
      }
      useEffect(() => {
          getPatients()
      }, [])


      // const getNumOfpatient = async () => {
      //   let sum = 0
      //   for(let i = 0; i< patients.length; i ++){
      //     sum = sum + 1
      //   }
      //   console.log(setSumPatients(sum))
      // }
 


        return(
            <>
            <section className='home-section' >
            <div className="container-fluid text-center" style={{ marginTop: '20px' }}>
                <h1>Analytics</h1>
            </div>
                
                <div className='container-fluid formPart' style={{marginBottom:"20px"}}>
                <center><h1 id="h2t">Clinic Analytics</h1></center>
                    <div className='row'>
                    <div className='col-4 analytics'>
                    <div className="card" style={{marginLeft:"auto", marginRight:"auto"}}>
                            <div className="content text-center">
                                {/* <i className="iconstyle"><IoMdAnalytics style={{fontSize: '60px' ,color:"#528298"}}></IoMdAnalytics></i> */}
                                <div className="contentBx">
                                    <h3>Number of Patients</h3>
                                    <div className='badge ' style={{backgroundColor:"#528298", color:"#BCD9E6", borderRadius:"15px", fontSize:"38px"}}>{suOfpatients}</div>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className='col-8'>
                    <ResponsiveContainer width="100%" height={400}>
                        <AreaChart
                            width={500}
                            height={200}
                            data={data}
                            syncId="anyId"
                            margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="pv" stroke="#528298" fill="#70a1b8" />
                        </AreaChart>
                    </ResponsiveContainer>
                    </div>
                    </div>
                </div>
            </section>
            </>
            )
    
  };
  
  export default Analytics;