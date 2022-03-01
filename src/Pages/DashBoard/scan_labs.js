import React from "react";
import "../../Style/scan_lab.css";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
const Labs = [
    {
        id: 1,
        selected: false,
        name: "lab1",
    },
    {
        id: 2,
        selected: false,
        name: "lab2",

    },
    {
        id: 3,
        selected: false,
        name: "lab3",

    },
    {
        id: 4,
        selected: true,
        name: "lab4",

    },
    {
        id: 5,
        selected: false,
        name: "lab5",

    },
];
class Scan_labs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        List: Labs,
        MasterChecked: false,
        SelectedList: [],
      };
    }   
   onMasterCheck (e) {
        let tempList = this.state.List;
        // Check/ UnCheck All Items
        tempList.map((lab) => (lab.selected = e.target.checked));

        //Update State
        this.setState({
            MasterChecked: e.target.checked,
            List: tempList,
            SelectedList: this.state.List.filter((e) => e.selected),
        });
    }
    onItemCheck  (e, item) {
        let tempList = this.state.List;
        tempList.map((lab) => {
            if (lab.id === item.id) {
                lab.selected = e.target.checked;
            }
            return lab;
        });
        const totalItems = this.state.List.length;
        const totalCheckedItems = tempList.filter((e) => e.selected).length;

        // Update State
        this.setState({
            MasterChecked: totalItems === totalCheckedItems,
            List: tempList,
            SelectedList: this.state.List.filter((e) => e.selected),
        });
    }

    // Event to get selected rows(Optional)
     getSelectedRows (){
        this.setState({
            SelectedList: this.state.List.filter((e) => e.selected),
        });
    }
 
    // patientValidate (e) {
    //     if (e.target.name === 'patientname') {
    //         setPatient({
    //             ...patient,
    //             patientname: e.target.value
    //         })
    //     }
    // }


 

    render () {
    return (

        <>
            <section className='home-section' style={{ marginTop: '20px' }} >
                    <div className="container-fluid text-center">
                    <h1>Scan & Labs</h1>
                    </div>
                <div>
                    
                    <div className='container-fluid  formcontainer' >
                        <form method="post">
                                <div className="col-lg-4">
                                    <label className="form-label">Patient Name</label>
                                    <input type='text' className='form-control' name="patientname" required />
                                </div>
                                <div className="col-lg-4">
                                    <label className="form-label">Patient Phone Number </label>
                                    <input type='text' className='form-control' name="patientmobile" required />
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <label className="form-label">Doctor Name</label>
                                        <input type='text' className='form-control' name="drugname" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        checked={this.state.MasterChecked}
                                                        id="mastercheck"
                                                        onChange={(e) => this.onMasterCheck(e)}
                                                    />
                                                </th>
                                                <th scope="col"> Lab Name</th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.List.map((user) => (
                                                <tr key={user.id} className={user.selected ? "selected" : ""}>
                                                    <th scope="row">
                                                        <input
                                                            type="checkbox"
                                                            checked={user.selected}
                                                            className="form-check-input"
                                                            id="rowcheck{user.id}"
                                                            onChange={(e) => this.onItemCheck(e, user)}
                                                        />
                                                    </th>
                                                    <td>{user.name}</td>
                                                   
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <button
                                        className="btn btn-primary"
                                    onClick={() => this.getSelectedRows()}
                                    >
                                        Get Selected Items {this.state.SelectedList.length}
                                    </button>
                                    <div className="row">
                                        <b>All Row Items:</b>
                                        <code>{JSON.stringify(this.state.List)}</code>
                                    </div>
                                    <div className="row">
                                        <b>Selected Row Items(Click Button To Get):</b>
                                        <code>{JSON.stringify(this.state.SelectedList)}</code>
                                    </div>
                                </div>

                                <div className="row text-center">
                                    <div className="col-lg-12" style={{ marginTop: "30px" }}>
                                        <input type="submit" className="btn prescriptionButton" value="submit" />
                                    </div>
                                </div>
                            </form>

                    </div>
                </div>


            </section >

        </>


    );


}

}
export default Scan_labs;