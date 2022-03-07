import React from 'react'
// import Addmaterial from '../DashBoard/addmaterial';
import "../../Style/materials.css";

function Updatematerial() {
  return (

    <div id='updatematerial'>
        <center><h1 id="hhh">update your material</h1></center>
    <div className='container-fluid formPart' >
                    <form method="post" >
                        
                        <div className="row">
                            <div className="col-lg-12">
					<center><h2 id="h2t">Update Material</h2></center>
                                <label className="form-label">Material Name</label>
                                <input type='text' className='form-control' name="materialname"  />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label">Usage</label>
                                <input type='text' className="form-control" name="usage"  />
                            </div>
                            
                            <div className="col-lg-6">
                                <label className="form-label">Price</label>
                                <input type='text' className="form-control"/>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-lg-12" style={{marginTop:"15px"}}>
                                <input type="submit" className="btn prescriptionButton" value="UPDATE"/>
                            </div>
                        </div>
                    </form>

                </div>


    </div>
    
  )
}

export default Updatematerial
