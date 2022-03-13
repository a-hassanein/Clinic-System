import '../Style/About.css';
import {
    RiFacebookFill,
    RiTwitterFill,
    RiGithubFill,
    RiLinkedinFill,
} from "react-icons/ri";


function About() {
    return(
        <>
        <div className='container-fluid '>
            <div className='row'>
                 <div className='col-12 text-center'>
                    <h1  className='title' style={{fontSize:"70px" ,color:"var(--dark_color)" ,marginTop:"20px"}}>ABOUT US</h1>
                </div>
            </div>

            <div className='row ' >
                <div className='col-12'  >
                    <div className='AboutContent'>
                    <p>3eadty clinic system , using Python and Django framwork , javaScript and reactjs framwork . This project implementation made by students from ITI-3 monthes -open source -full stack web development using python track. 3eadty clinic system .. this system help you to manage your clinic and provide analytics form clinic activities per month To improve profits and opportunities in your business, also can access your clinic from anywhere you are in and many awesome featuers and services that help you to manage your clinic easily such as you can book and handle appointment for yiur patient, make your prescription, extract bill for every patient, add an unlimited number of your patients, create your materiaks stock, add your favourite drugs and labs, add your assistants in clinic, create your surgeries stock and you can customize your profile setting. You can use and take advantage of all this features with trail package for 30 days. 
thank you for visiting our site.
</p>


                    </div>
                </div>
            </div>

        </div>


        <div className='container text-center'>
        <h1  className='title' style={{fontSize:"70px",color:"var(--dark_color)"}}>OUR TEAM</h1>
        </div> 

        <section className='all'>
            <div className="container-fluid About">
                <div className="card">
                    <div className="content">
                        <div className="imgBx"><img src={require('../Images/Hassanein.png')}/></div>
                        <div className="contentBx">
                            <h3>Ahmed Hassanein <br></br> <span>Software Engineer</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                    <li style={{"--i":1}}>
                        <a href="https://www.facebook.com/AhmedHassanein1998"><i><RiFacebookFill></RiFacebookFill></i></a>
                    </li>
                    <li style={{"--i":2}}>
                        <a href="https://twitter.com/hassanein_a"><i><RiTwitterFill></RiTwitterFill></i></a>
                    </li>
                    <li style={{"--i":3}}>
                        <a href="https://github.com/a-hassanein"><i><RiGithubFill></RiGithubFill></i></a>
                    </li>
                    <li style={{"--i":4}}>
                        <a href="https://www.linkedin.com/in/a-hassanein/"><i><RiLinkedinFill></RiLinkedinFill></i></a>
                    </li>
                </ul>
                </div>

                <div className="card frame">
                    <div className="content">
                        <div className="imgBx"><img src={require('../Images/Abdo.jpeg')}/></div>
                        <div className="contentBx">
                            <h3>Abdelrahman Mohamed <br></br> <span>Software Engineer</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                    <li style={{"--i":1}}>
                        <a href="https://www.facebook.com/abdo.elsese"><i><RiFacebookFill></RiFacebookFill></i></a>
                    </li>
                    <li style={{"--i":2}}>
                        <a href="#"><i><RiTwitterFill></RiTwitterFill></i></a>
                    </li>
                    <li style={{"--i":3}}>
                        <a href="https://github.com/abdelrahmanelsese1"><i><RiGithubFill></RiGithubFill></i></a>
                    </li>
                    <li style={{"--i":4}}>
                        <a href="https://www.linkedin.com/in/abdelrahman-mohamed-elsese/"><i><RiLinkedinFill></RiLinkedinFill></i></a>
                    </li>
                </ul>
                </div>

                <div className="card">
                    <div className="content">
                        <div className="imgBx"><img src={require('../Images/ashraf.png')}/></div>
                        <div className="contentBx">
                            <h3>Ahmed Ashraf <br></br> <span>Software Engineer</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                    <li style={{"--i":1}}>
                        <a href="https://www.facebook.com/profile.php?id=100035313377270"><i><RiFacebookFill></RiFacebookFill></i></a>
                    </li>
                    <li style={{"--i":2}}>
                        <a href="#"><i><RiTwitterFill></RiTwitterFill></i></a>
                    </li>
                    <li style={{"--i":3}}>
                        <a href="https://github.com/Ahmedxd199"><i><RiGithubFill></RiGithubFill></i></a>
                    </li>
                    <li style={{"--i":4}}>
                        <a href="https://www.linkedin.com/in/ahmed-elsobky-165349151"><i><RiLinkedinFill></RiLinkedinFill></i></a>
                    </li>
                </ul>
                </div>

                <div className="card">
                    <div className="content">
                        <div className="imgBx"><img src={require('../Images/Alaa2.png')}/></div>
                        <div className="contentBx">
                            <h3>Alaa Farouk <br></br> <span>Software Engineer</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                    <li style={{"--i":1}}>
                        <a href="https://www.facebook.com/alaafar19"><i><RiFacebookFill></RiFacebookFill></i></a>
                    </li>
                    <li style={{"--i":2}}>
                        <a href="https://twitter.com/itsalaa___"><i><RiTwitterFill></RiTwitterFill></i></a>
                    </li>
                    <li style={{"--i":3}}>
                        <a href="https://github.com/alaafarouk8"><i><RiGithubFill></RiGithubFill></i></a>
                    </li>
                    <li style={{"--i":4}}>
                        <a href="https://www.linkedin.com/in/alaa-farouk"><i><RiLinkedinFill></RiLinkedinFill></i></a>
                    </li>
                </ul>
                </div>

                <div className="card">
                    <div className="content">
                        <div className="imgBx"><img src={require('../Images/Asmaa2.png')}/></div>
                        <div className="contentBx">
                            <h3>Assmaa AlaaEldin <br></br> <span>Software Engineer</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                    <li style={{"--i":1}}>
                        <a href="https://www.facebook.com/profile.php?id=100009588633417"><i><RiFacebookFill></RiFacebookFill></i></a>
                    </li>
                    <li style={{"--i":2}}>
                        <a href="#"><i><RiTwitterFill></RiTwitterFill></i></a>
                    </li>
                    <li style={{"--i":3}}>
                        <a href="https://github.com/3asma2"><i><RiGithubFill></RiGithubFill></i></a>
                    </li>
                    <li style={{"--i":4}}>
                        <a href="https://www.linkedin.com/in/3asmaa-alaa-eldin/"><i><RiLinkedinFill></RiLinkedinFill></i></a>
                    </li>
                </ul>
                </div>

                <div className="card">
                    <div className="content">
                        <div className="imgBx"><img src={require('../Images/Abrar.png')}/></div>
                        <div className="contentBx">
                            <h3>Abrar Abdelmohsen <br></br> <span>Software Engineer</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                    <li style={{"--i":1}}>
                        <a href="https://web.facebook.com/angle.meshmesh/"><i><RiFacebookFill></RiFacebookFill></i></a>
                    </li>
                    <li style={{"--i":2}}>
                        <a href="#"><i><RiTwitterFill></RiTwitterFill></i></a>
                    </li>
                    <li style={{"--i":3}}>
                        <a href="https://github.com/abrar4799"><i><RiGithubFill></RiGithubFill></i></a>
                    </li>
                    <li style={{"--i":4}}>
                        <a href="https://www.linkedin.com/in/abrar-abd-el-mohsen/"><i><RiLinkedinFill></RiLinkedinFill></i></a>
                    </li>
                </ul>
                </div>
            </div>
        </section>
        </>
);
}

export default About;
