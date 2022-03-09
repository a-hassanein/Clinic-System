import '../../Style/DashHome.css';
import {Link} from "react-router-dom";
import {
    FiMenu,
    FiGrid,
    FiCalendar,
    FiSettings
} from "react-icons/fi";

import {
    GiMedicines,
    GiScalpel
} from "react-icons/gi";

import {
    FaUserInjured
} from "react-icons/fa";

import {
    ImLab,
    ImSearch
} from "react-icons/im";

import {
    RiNurseFill,
    RiBillLine
} from "react-icons/ri";

import {
    BsBagDashFill
} from "react-icons/bs";

import {
    BiLogOut
  } from "react-icons/bi";

import {
    IoMdAnalytics
} from "react-icons/io";

const HomeDashboard = () => {

    return (
        <>
            <section className='all home-section'>
            <div className="container-fluid homeItem">
            <Link to={"/dashboard/patient"} className='cardLink'>
                <div className="card">
                    <div className="content">
                        <i className="iconstyle"><FaUserInjured style={{fontSize: '60px' ,color:"#528298"}}></FaUserInjured></i>                        <div className="contentBx">
                            <h3>Patient</h3>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to={"/dashboard/appointment"} className='cardLink'>
                <div className="card frame">
                    <div className="content">
                    <i className="iconstyle"><FiCalendar style={{fontSize: '60px' ,color:"#528298"}}></FiCalendar></i>
                        <div className="contentBx">
                            <h3>Appointment</h3>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to={"/dashboard/prescription"} className='cardLink'>
                <div className="card">
                    <div className="content">
                    <i className="iconstyle"><GiMedicines style={{fontSize: '60px' ,color:"#528298"}}></GiMedicines></i> 
                        <div className="contentBx">
                            <h3>Prescription</h3>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to={"/dashboard/assistant"} className='cardLink'>
                <div className="card">
                    <div className="content">
                    <i className="iconstyle"><RiNurseFill style={{fontSize: '60px' ,color:"#528298"}}></RiNurseFill></i>
                        <div className="contentBx">
                            <h3>Assistants</h3>
                        </div>
                    </div>
                   
                </div>
            </Link>

            <Link to={"/dashboard/materials"} className='cardLink'>
                <div className="card">
                    <div className="content">
                    <i className="iconstyle"><BsBagDashFill style={{fontSize: '60px' ,color:"#528298"}}></BsBagDashFill></i>
                        <div className="contentBx">
                            <h3>Materials</h3>
                        </div>
                    </div>
                   
                </div>
            </Link>

            <Link to={"/dashboard/bill"} className='cardLink'>
                <div className="card">
                    <div className="content">
                        <i className="iconstyle"><RiBillLine style={{fontSize: '60px' ,color:"#528298"}}></RiBillLine></i>
                        <div className="contentBx">
                            <h3>Bill</h3>
                        </div>
                    </div>
                    
                </div>
            </Link>

            <Link to={"/dashboard/surgery"} className='cardLink'>
                <div className="card">
                    <div className="content">
                        <i className="iconstyle"><GiScalpel style={{fontSize: '60px' ,color:"#528298"}}></GiScalpel></i>
                        <div className="contentBx">
                            <h3>Surgery</h3>
                        </div>
                    </div>
                    
                </div>
            </Link>
            <Link to={"/dashboard/scan_labs"} className='cardLink'> 
                <div className="card">
                    <div className="content">
                        <i className="iconstyle"><ImLab style={{fontSize: '60px' ,color:"#528298"}}></ImLab></i>
                        <div className="contentBx">
                            <h3>Scan & Labs</h3>
                        </div>
                    </div>
                    
                </div>
            </Link>

            <Link to={"/dashboard/analytics"} className='cardLink'>
                <div className="card">
                    <div className="content">
                        <i className="iconstyle"><IoMdAnalytics style={{fontSize: '60px' ,color:"#528298"}}></IoMdAnalytics></i>
                        <div className="contentBx">
                            <h3>Analytics</h3>
                        </div>
                    </div>
                    
                </div>
            </Link>

            <Link to={"/dashboard/setting"} className='cardLink'>
                <div className="card">
                    <div className="content">
                        <i className="iconstyle"><FiSettings style={{fontSize: '60px' ,color:"#528298"}}></FiSettings></i>
                        <div className="contentBx">
                            <h3>Settings</h3>
                        </div>
                    </div>
                    
                </div>
            </Link>
            </div>
        </section>
        </>
    );
};
export default HomeDashboard;
