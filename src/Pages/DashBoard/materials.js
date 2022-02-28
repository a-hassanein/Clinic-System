import React from 'react'
import Addmaterial from '../DashBoard/addmaterial';
import Updatematerial from '../DashBoard/updatematerial';
import "../../Style/materials.css";

function Materials() {
  return (
    <section className="home-section">
    {/* <div id='materials'> */}
      <center><h1 style={{ marginTop: '20px' }}>Your Materials</h1></center>

      <div className='container-fluid formPart' >
                    <form method="post" >
                        
                        <div className="row">
                            <div className="col-lg-12">
                                <label className="form-label">Material Name</label>
                                <input type='text' className='form-control' name="materialname"  />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label">Useage</label>
                                <input type='text' className="form-control" name="useage"  />
                            </div>
                            
                            <div className="col-lg-6">
                                <label className="form-label">Price</label>
                                <input type='text' className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <label className="form-label">Summary</label>
                                <input type='text' className='form-control' name="summary"  />
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-lg-12" style={{marginTop:"30px"}}>
                                <input type="submit" className="btn prescriptionButton" value="ADD"/>
                            </div>
                        </div>
                    </form>

                </div>





      <div className="container">
        <div className="row">
          <div className='services_all'>
            <div className="row">
              <div className="col-sm-4" id="c1">
                <div className="card " id="cc" style={{ border: "none", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.10)" }}>
                  <div className="card-body" id="card_services">
                    <div>
                    </div>

                    <h3 className="card-title " >MATERIAL 1</h3>
                    <hr />
                    <p className="card-text ">
                    Useage: for dentel 
                    <br/>
                    Price: 50 EGP 
                    <p>Summary: It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged but also the leap into electronic typesetting, remaining essentially unchanged</p>
                    </p>
                    <a href="#" className="btn " id="btn_services">show details</a> 
                    <a href="#" className="btn " id="btn_services">Delete</a>
                    <a href="/updatematerial" className="btn " id="btn_services">Update</a> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </section>
  )
}

export default Materials