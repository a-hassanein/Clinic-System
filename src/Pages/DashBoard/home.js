import '../../Style/DashHome.css';
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

const HomeDashboard = () => {

    return (
        <>
            <section className='all home-section'>
            <div className="container-fluid homeItem">
                <div className="card">
                    <div className="content">
                        {/* <div className="imgBx"><img src={require('../Images/Hassanein.png')}/></div> */}
                        <i className="iconstyle"><FaUserInjured style={{fontSize: '32px' ,color:"#528298"}}></FaUserInjured></i>                        <div className="contentBx">
                            <h3>Patient</h3>
                        </div>
                    </div>
                    {/* <ul className="sci">
                    <li style={{"--i":1}}>
                        <a href="#"><i><RiFacebookFill></RiFacebookFill></i></a>
                    </li>
                    <li style={{"--i":2}}>
                        <a href="#"><i><RiTwitterFill></RiTwitterFill></i></a>
                    </li>
                    <li style={{"--i":3}}>
                        <a href="#"><i><RiGithubFill></RiGithubFill></i></a>
                    </li>
                    <li style={{"--i":4}}>
                        <a href="#"><i><RiLinkedinFill></RiLinkedinFill></i></a>
                    </li>
                </ul> */}
                </div>

                <div className="card frame">
                    <div className="content">
                    <i className="iconstyle"><FiCalendar style={{fontSize: '32px' ,color:"#528298"}}></FiCalendar></i>
                        {/* <div className="imgBx"><img src={require('../Images/Abdo.jpeg')}/></div> */}
                        <div className="contentBx">
                            <h3>Appointment</h3>
                        </div>
                    </div>
                    {/* <ul className="sci">
                    <li style={{"--i":1}}>
                        <a href="#"><i><RiFacebookFill></RiFacebookFill></i></a>
                    </li>
                    <li style={{"--i":2}}>
                        <a href="#"><i><RiTwitterFill></RiTwitterFill></i></a>
                    </li>
                    <li style={{"--i":3}}>
                        <a href="#"><i><RiGithubFill></RiGithubFill></i></a>
                    </li>
                    <li style={{"--i":4}}>
                        <a href="#"><i><RiLinkedinFill></RiLinkedinFill></i></a>
                    </li>
                </ul> */}
                </div>

                <div className="card">
                    <div className="content">
                    <i className="iconstyle"><GiMedicines style={{fontSize: '32px' ,color:"#528298"}}></GiMedicines></i>
                        {/* <div className="imgBx"><img src={require('../Images/ashraf.png')}/></div> */}
                        <div className="contentBx">
                            <h3>Prescription</h3>
                        </div>
                    </div>
                    {/* <ul className="sci">
                    <li style={{"--i":1}}>
                        <a href="#"><i><RiFacebookFill></RiFacebookFill></i></a>
                    </li>
                    <li style={{"--i":2}}>
                        <a href="#"><i><RiTwitterFill></RiTwitterFill></i></a>
                    </li>
                    <li style={{"--i":3}}>
                        <a href="#"><i><RiGithubFill></RiGithubFill></i></a>
                    </li>
                    <li style={{"--i":4}}>
                        <a href="#"><i><RiLinkedinFill></RiLinkedinFill></i></a>
                    </li>
                </ul> */}
                </div>

                <div className="card">
                    <div className="content">
                    <i className="iconstyle"><RiNurseFill style={{fontSize: '32px' ,color:"#528298"}}></RiNurseFill></i>
                        {/* <div className="imgBx"><img src={require('../Images/Alaa2.png')}/></div> */}
                        <div className="contentBx">
                            <h3>Assistants</h3>
                        </div>
                    </div>
                    {/* <ul className="sci">
                    <li style={{"--i":1}}>
                        <a href="#"><i><RiFacebookFill></RiFacebookFill></i></a>
                    </li>
                    <li style={{"--i":2}}>
                        <a href="#"><i><RiTwitterFill></RiTwitterFill></i></a>
                    </li>
                    <li style={{"--i":3}}>
                        <a href="#"><i><RiGithubFill></RiGithubFill></i></a>
                    </li>
                    <li style={{"--i":4}}>
                        <a href="#"><i><RiLinkedinFill></RiLinkedinFill></i></a>
                    </li>
                </ul> */}
                </div>

                <div className="card">
                    <div className="content">
                    <i className="iconstyle"><BsBagDashFill style={{fontSize: '32px' ,color:"#528298"}}></BsBagDashFill></i>
                        {/* <div className="imgBx"><img src={require('../Images/Asmaa2.png')}/></div> */}
                        <div className="contentBx">
                            <h3>Materials</h3>
                        </div>
                    </div>
                    {/* <ul className="sci">
                    <li style={{"--i":1}}>
                        <a href="#"><i><RiFacebookFill></RiFacebookFill></i></a>
                    </li>
                    <li style={{"--i":2}}>
                        <a href="#"><i><RiTwitterFill></RiTwitterFill></i></a>
                    </li>
                    <li style={{"--i":3}}>
                        <a href="#"><i><RiGithubFill></RiGithubFill></i></a>
                    </li>
                    <li style={{"--i":4}}>
                        <a href="#"><i><RiLinkedinFill></RiLinkedinFill></i></a>
                    </li>
                </ul> */}
                </div>

                <div className="card">
                    <div className="content">
                        {/* <div className="imgBx"><img src={require('../Images/Abrar.png')}/></div> */}
                        <i className="iconstyle"><RiBillLine style={{fontSize: '32px' ,color:"#528298"}}></RiBillLine></i>
                        <div className="contentBx">
                            <h3>Bill</h3>
                        </div>
                    </div>
                    {/* <ul className="sci">
                    <li style={{"--i":1}}>
                        <a href="#"><i><RiFacebookFill></RiFacebookFill></i></a>
                    </li>
                    <li style={{"--i":2}}>
                        <a href="#"><i><RiTwitterFill></RiTwitterFill></i></a>
                    </li>
                    <li style={{"--i":3}}>
                        <a href="#"><i><RiGithubFill></RiGithubFill></i></a>
                    </li>
                    <li style={{"--i":4}}>
                        <a href="#"><i><RiLinkedinFill></RiLinkedinFill></i></a>
                    </li>
                </ul> */}
                </div>

                <div className="card">
                    <div className="content">
                        {/* <div className="imgBx"><img src={require('../Images/Abrar.png')}/></div> */}
                        <i className="iconstyle"><GiScalpel style={{fontSize: '32px' ,color:"#528298"}}></GiScalpel></i>
                        <div className="contentBx">
                            <h3>Surgery</h3>
                        </div>
                    </div>
                    {/* <ul className="sci">
                    <li style={{"--i":1}}>
                        <a href="#"><i><RiFacebookFill></RiFacebookFill></i></a>
                    </li>
                    <li style={{"--i":2}}>
                        <a href="#"><i><RiTwitterFill></RiTwitterFill></i></a>
                    </li>
                    <li style={{"--i":3}}>
                        <a href="#"><i><RiGithubFill></RiGithubFill></i></a>
                    </li>
                    <li style={{"--i":4}}>
                        <a href="#"><i><RiLinkedinFill></RiLinkedinFill></i></a>
                    </li>
                </ul> */}
                </div>

                <div className="card">
                    <div className="content">
                        {/* <div className="imgBx"><img src={require('../Images/Abrar.png')}/></div> */}
                        <i className="iconstyle"><FiSettings style={{fontSize: '32px' ,color:"#528298"}}></FiSettings></i>
                        <div className="contentBx">
                            <h3>Settings</h3>
                        </div>
                    </div>
                    {/* <ul className="sci">
                    <li style={{"--i":1}}>
                        <a href="#"><i><RiFacebookFill></RiFacebookFill></i></a>
                    </li>
                    <li style={{"--i":2}}>
                        <a href="#"><i><RiTwitterFill></RiTwitterFill></i></a>
                    </li>
                    <li style={{"--i":3}}>
                        <a href="#"><i><RiGithubFill></RiGithubFill></i></a>
                    </li>
                    <li style={{"--i":4}}>
                        <a href="#"><i><RiLinkedinFill></RiLinkedinFill></i></a>
                    </li>
                </ul> */}
                </div>
            </div>
        </section>
        </>
    );
};
export default HomeDashboard;
