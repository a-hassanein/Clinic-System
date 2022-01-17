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
                    <h1  className='title'>ABOUT US</h1>
                </div>
            </div>

            <div className='row '>
                <div className='col-12'>
                    <div className='AboutContent'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer enim ipsum, viverra quis libero ut, iaculis feugiat nisl. Pellentesque egestas dui vel ipsum lobortis feugiat. Aliquam sed neque nec arcu malesuada placerat at sollicitudin orci. Etiam ut odio feugiat, lacinia lacus at, mollis risus. Praesent id accumsan elit. Duis egestas nunc efficitur gravida pharetra. Sed elit ante, molestie sit amet euismod vitae, mollis ut elit. Curabitur scelerisque imperdiet justo, maximus cursus ex porttitor et. Cras ullamcorper velit eget dignissim volutpat. In at bibendum velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse quis laoreet est. Sed vel ligula lorem.
                    Proin porttitor lacus quis semper porta. Integer sagittis massa sit amet orci condimentum consequat. Sed vehicula euismod ligula, nec lobortis turpis elementum nec. Mauris et lobortis odio, vitae porttitor risus. Donec vitae lacinia arcu. Fusce efficitur fermentum justo a consequat. Praesent a malesuada lorem. Etiam arcu diam, luctus in tortor in, convallis fringilla dolor. Aenean ut maximus nibh. Pellentesque viverra tortor sed eleifend pulvinar. Praesent rutrum nulla est, ultricies bibendum ex lobortis at. Morbi felis eros, egestas vitae iaculis sit amet, laoreet eget purus. Cras varius molestie tempus. Nullam mi enim, fermentum a eros a, porttitor sodales eros.
                    Pellentesque nec neque id tellus scelerisque aliquam eu sed libero. Integer malesuada aliquet pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec rhoncus sem vitae velit scelerisque consequat. Fusce condimentum malesuada lacus ac viverra. Pellentesque volutpat ante nunc, ac suscipit sem faucibus ac. Pellentesque scelerisque faucibus tellus.
                    Etiam venenatis odio non erat faucibus efficitur. Etiam a sem non leo commodo dignissim vel pellentesque lorem. Nam congue lacus risus, ut scelerisque odio aliquam vitae. Suspendisse consequat lorem et tincidunt lacinia. Quisque non ornare nulla. Nullam nec diam vitae elit faucibus mattis. Curabitur convallis in eros vel condimentum.
                    Nullam molestie metus at magna mattis, ac fringilla odio mattis. Praesent id ornare lorem. Etiam tincidunt a erat non auctor. Duis rhoncus, massa nec porta porta, lectus lacus interdum sapien, et porta lorem quam non sem. Donec interdum consectetur ex. Aenean et mauris aliquam, lacinia diam in, eleifend quam. Vestibulum vestibulum enim lectus, blandit pulvinar mauris porttitor a.</p>
                    </div>
                </div>
            </div>

        </div>


        <div className='container '>
        <h1  className='title'>OUR TEAM</h1>
        </div> 

        <section className='all'>
            <div className="container">
                <div className="card">
                    <div className="content">
                        <div className="imgBx"><img src={require('../Images/Hassanein.png')}/></div>
                        <div className="contentBx">
                            <h3>Ahmed Hassanein <br></br> <span>Software Engineer</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
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
                </ul>
                </div>

                <div className="card">
                    <div className="content">
                        <div className="imgBx"><img src={require('../Images/Asmaa2.png')}/></div>
                        <div className="contentBx">
                            <h3>Aasmaa Alaa <br></br> <span>Software Engineer</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
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
                </ul>
                </div>
            </div>
        </section>
        </>
);
}

export default About;