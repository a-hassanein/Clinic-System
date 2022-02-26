import { useState } from "react";


const Prescripe = () => {
    const[drugs,setDrugs] = useState([{
        drugname:"",
        dose:"",
        dosageform:"",
        frequency:"",
        noofdays:"",
        duration:"",
        foodrelation:"",
        instructions:"",
    }])
    // const [drugs,setDrugs] = useState([])

    // const drugnamevalidate = (e) => {
    //     if (e.target.name === "drugname"){
    //         setDrugs([...drugs, {
    //             drugname:e.target.value
    //         }])

    //     }
    // }
    // const dosevalidate = (e) => {
    //     if (e.target.name === "dose"){
    //         setDrugs([...drugs, {
    //             dose:e.target.value
    //         }])

    //     }
    // }

    // const adddrug = (e) => {
    //         setDrugs([...drugs, {
    //             drugname:e.target.value
    //         }])
    //     }
    

    const handlesubmit = (e) => {
        e.preventDefault()
        debugger;
        console.log(e)
        if(e.target[0].__reactProps$1xue4qvrdmv.name === "drugname"){
            setDrugs([...drugs,{
                drugname:e.target[0].value
            }])
        }
        console.log(drugs)
    }
    return(
        <>
            <section className='home-section' >
                <div className='container-fluid' style={{marginTop:'100px'}}>
                    <form  onSubmit={(e) => {handlesubmit(e)}}>
                        
                        <div className="row">
                            <div className="col-lg-12">
                                <label className="form-label">Drug Name</label>
                                <input type='text' className='form-control' name="drugname"  />
                            </div>
                        
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <label className="form-label">Dosage</label>
                                <input type='text' className="form-control" name="dose"  />
                            </div>
                            <div className="col-lg-4">
                            <label className="form-label">Dosage Form</label>
                                <select class="form-select">
                                    <option selected>Open this select menu</option>
                                    <option value="1">شراب</option>
                                    <option value="2">اقراص</option>
                                    <option value="2">كبسول</option>
                                    <option value="3">حقن</option>
                                    <option value="3">لبوس</option>
                                    <option value="3">مرهم</option>
                                    <option value="3">كريم</option>
                                    <option value="3">محلول</option>
                                    <option value="3">قطره</option>
                                    <option value="3">غسول فم</option>
                                </select>
                            </div>
                            <div className="col-lg-4">
                                <label className="form-label">Frequency</label>
                                <input type='text' className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <label className="form-label">No of Days</label>
                                <input type="number" className="form-control"/>
                            </div>
                            <div className="col-lg-3">
                                <label className="form-label">duration</label>
                                <select class="form-select">
                                    <option value="1">يوم</option>
                                    <option value="2">ايام</option>
                                    <option value="2">اسبوع</option>
                                    <option value="2">اسابيع</option>
                                    <option value="2">شهر</option>
                                    <option value="2">شهور</option>
                                </select>
                            </div>
                            <div className="col-lg-6">
                                <label className="form-label">Food Relation</label>
                                <select class="form-select">
                                    <option value="1">قبل الاكل</option>
                                    <option value="2">يعد الاكل</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="form-label">Instructions</label>
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-lg-12" style={{marginTop:"30px"}}>
                                <input type="submit" className="btn btn-danger" value="submit"/>
                            </div>
                        </div>
                    </form>

                </div>
                <div className="container"  style={{border:"2px solid black",marginTop:"40px",marginBottom:"50px",height:"800px",borderRadius:"10px" }}>
                    <div className="row" dir="rtl" style={{padding:"10px"}}>
                        <div className="col-lg-4">
                            <h3>عياده</h3>
                        </div>
                    </div>
                    <div className="row" dir="rtl">
                        <div className="col-lg-4">
                            <h5>دكتور/عبدالرحمن</h5>
                        </div>
                    </div>
                    <div className="row" dir="rtl">
                        <div className="col-lg-4">
                            <h5>الاسم:احمد حسانين</h5>
                        </div>
                            
                        <div className="col-lg-4">
                            <h5>السن:25</h5>
                        </div>
                        <div className="col-lg-4">
                            <h5>التاريخ:25-2-2022</h5>
                        </div>
                    </div>
                    <hr style={{height:"10px"}}></hr>
                    <div className="row">
                        <div className="col-lg-4" >
                            <h5 style={{fontSize:"100px",fontWeight:"900"}}>RX</h5>
                        </div>
                    </div>
                    <div className="row">
                        {drugs.map((drug) => {
                            return(
                                <p>{drug.drugname}</p>
                            )
                        })}
                        {/* <p>{drugs.drugname}</p> */}
                        
                    </div>
                </div>
            </section>


        </>
    )

}

export default Prescripe



