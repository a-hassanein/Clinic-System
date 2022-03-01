


const Setting = () => {


    function disabledFieldset(){
        document.getElementById('pet').disabled = !document.getElementById('pet').disabled;
    }


    function savaData(){
        document.getElementById('pet').disabled = true;
    }

    return (
        <>
               <section className="home-section">
          
               <div className="container-fluid text-center" style={{ marginTop: '20px' }}>
                    <h1>Settings</h1>
                </div>
               <div className='container-fluid formPart' >
               
                    <form method="post">
                    <fieldset disabled id="pet"> 
                    <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label">Name</label>
                                <input type='text' className='form-control' name="name" value={"Ahmed Ashraf Ahmed"}/>
                            </div>
                            <div className="col-lg-6">
                                <label className="form-label">Mobile No.</label>
                                <input type='text' className='form-control' name="mobile" value={"01149988627"} />
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12">
                                <label className="form-label">Email</label>
                                <input type='text' className='form-control' name="email" value={"ashrafahmed294@gmail.com"}  />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <label className="form-label">Password</label>
                                <input type='password' className="form-control" name="pass" value={"1230"}   />
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-lg-12">
                                    <label className="form-label">Visita</label>
                                    <input type='text' className="form-control" name="visita"  value={"100$"}/>
                                </div>
                           
                        </div>
                        </fieldset>
                       
                    </form>
                    <div className="row text-center">
                            <div className="col-lg-12" style={{marginTop:"30px"}}>
                                <button  className="btn prescriptionButton"  onClick={disabledFieldset}>Edit</button>
                                <span> </span>
                                <button className="btn prescriptionButton" onClick={savaData}>Save</button>
                            </div>
                        </div>
                   
                </div>
         
               </section>
       </>
   
    );
}


export default Setting;