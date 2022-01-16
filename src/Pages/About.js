import '../Style/About.css';
import '../Images/Hassanein.png';
import {
    RiFacebookFill,
    RiTwitterFill,
    RiGithubFill,
    RiLinkedinFill,
} from "react-icons/ri";


function About() {
    return(
        <div className='all'>

        <section>
            <div className="container">
                <div className="card">
                    <div className="content">
                        <div className="imgBx"><img src="../Images/Hassanein.png"></img></div>
                        <div className="contentBx">
                            <h3>Ahmed Hassanein <br></br> <span>Software Engineer</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                    <li style={{}}>
                        <a href="#"><i><RiFacebookFill></RiFacebookFill></i></a>
                    </li>
                    <li style={{}}>
                        <a href="#"><i><RiTwitterFill></RiTwitterFill></i></a>
                    </li>
                    <li style={{}}>
                        <a href="#"><i><RiGithubFill></RiGithubFill></i></a>
                    </li>
                    <li style={{}}>
                        <a href="#"><i><RiLinkedinFill></RiLinkedinFill></i></a>
                    </li>
                </ul>
                </div>

                <div className="card">
                    <div className="content">
                        <div className="imgBx"><img src="../Images/Hassanein.png"></img></div>
                        <div className="contentBx">
                            <h3>Ahmed Hassanein <br></br> <span>Software Engineer</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                    <li style={{}}>
                        <a href="#"><i><RiFacebookFill></RiFacebookFill></i></a>
                    </li>
                    <li style={{}}>
                        <a href="#"><i><RiTwitterFill></RiTwitterFill></i></a>
                    </li>
                    <li style={{}}>
                        <a href="#"><i><RiGithubFill></RiGithubFill></i></a>
                    </li>
                    <li style={{}}>
                        <a href="#"><i><RiLinkedinFill></RiLinkedinFill></i></a>
                    </li>
                </ul>
                </div>

                <div className="card">
                    <div className="content">
                        <div className="imgBx"><img src="../Images/Home_img.png"></img></div>
                        <div className="contentBx">
                            <h3>Ahmed Hassanein <br></br> <span>Software Engineer</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                    <li style={{}}>
                        <a href="#"><i><RiFacebookFill></RiFacebookFill></i></a>
                    </li>
                    <li style={{}}>
                        <a href="#"><i><RiTwitterFill></RiTwitterFill></i></a>
                    </li>
                    <li style={{}}>
                        <a href="#"><i><RiGithubFill></RiGithubFill></i></a>
                    </li>
                    <li style={{}}>
                        <a href="#"><i><RiLinkedinFill></RiLinkedinFill></i></a>
                    </li>
                </ul>
                </div>
            </div>
        </section>
        </div>
);
}

export default About;