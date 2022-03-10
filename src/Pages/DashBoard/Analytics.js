import React, { PureComponent } from 'react';
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
    const data = [
        {
          name: 'Page A',
          pv: 1500
          
        },
        {
          name: 'Page B',
          pv: 4500
          
        },
        {
          name: 'Page C',
          pv: 500
          
        },
        {
          name: 'Page D',
          pv: 6000
          
        },
        {
          name: 'Page E',
          pv: 1961
          
        },
        {
          name: 'Page F',
          pv: 350
          
        },
        {
          name: 'Page G',
          pv: 1500
          
        },
      ];
        return(
            <>
            <section className='home-section' >
            <div className="container-fluid text-center" style={{ marginTop: '20px' }}>
                <h1>Analytics</h1>
            </div>
                <div className='container-fluid text-center formPart' >
                <center><h1 id="h2t">Clinic Analytics</h1></center>
                    <div className='row partItem '>
                        
                            <div className="card" style={{marginLeft:"auto", marginRight:"auto"}}>
                            <div className="content">
                                {/* <i className="iconstyle"><IoMdAnalytics style={{fontSize: '60px' ,color:"#528298"}}></IoMdAnalytics></i> */}
                                <div className="contentBx">
                                    <h3>Analytics</h3>
                                </div>
                            </div>
                            </div>

                            <div className="card" style={{marginLeft:"auto", marginRight:"auto"}}>
                            <div className="content">
                                {/* <i className="iconstyle"><IoMdAnalytics style={{fontSize: '60px' ,color:"#528298"}}></IoMdAnalytics></i> */}
                                <div className="contentBx">
                                    <h3>Analytics</h3>
                                </div>
                            </div>
                            </div>

                            <div className="card" style={{marginLeft:"auto", marginRight:"auto"}}>
                            <div className="content">
                                {/* <i className="iconstyle"><IoMdAnalytics style={{fontSize: '60px' ,color:"#528298"}}></IoMdAnalytics></i> */}
                                <div className="contentBx">
                                    <h3>Analytics</h3>
                                </div>
                            </div>
                            </div>

                            <div className="card" style={{marginLeft:"auto", marginRight:"auto"}}>
                            <div className="content">
                                {/* <i className="iconstyle"><IoMdAnalytics style={{fontSize: '60px' ,color:"#528298"}}></IoMdAnalytics></i> */}
                                <div className="contentBx">
                                    <h3>Analytics</h3>
                                </div>
                            </div>
                            </div>
                            
                    </div>
                </div>
                <div className='container-fluid formPart' style={{marginBottom:"20px"}}>
                    <center><h1 id="h2t">Clinic Analytics</h1></center>
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
            </section>
            </>
            )
    
  };
  
  export default Analytics;