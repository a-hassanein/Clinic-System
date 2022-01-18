import {
  ImFacebook,
  ImTwitter,
  ImGithub,
  ImLinkedin2,
} from "react-icons/im";
import { Link } from "react-router-dom";
import Services from "../Pages/Services";
import '../Style/styleservices.css'
import Packages from "./Packages";
const Home = () => {
  return (
    <>
      <div className="container-xl" >
        <div className="row">
          <div className="col-md-6 col-lg-7 col-sm-12 col-xs-12">
            <div><h1 style={{ color: "var(--first_color)", fontFamily: "var(--font_family)", fontWeight: "bold" , fontSize:"4em" }}>Hello Doctor</h1></div>
            <div className="d-flex .justify-content-center" style={{ fontFamily: "var(--font_family)" , fontSize:"1.25em" }}>
              The Doctor is the title character in the long-running BBC science fiction television programme Doctor Who.
              Since the show's inception in 1963, the character has been portrayed by thirteen lead actors.
              In the programme, "the Doctor" is the alias assumed by a millennia-old humanoid alien called a Time Lord
              who travels through space and time in the TARDIS, frequently with companions.
              The transition to each succeeding actor is explained within the show's narrative through the plot device of "regeneration",
              a biological function of the Time Lord race that allows a change of cellular structure and appearance with recovery following
              a potentially fatal injury Hi Hassanin@.
            </div>
            <br />
            <div>
              <Link to='/login'>
                <button className='btn'  id="btn_services" style={{width:"150px"}} >Sign In</button>
              </Link>

              <span> </span>
              <Link to='signup'>
              <button className='btn'id="btn_services" style={{width:"150px"}}  >Sign Up</button>

              </Link>
            </div>
          </div>
            <div className="col-lg-4 col-md-5 col-sm-0 col-xs-0"><img className="d-none d-lg-block" src={require('../Images/Home_img.png')} alt='...img' width={'450px'} /></div>
         
         
         
        <div className='col-1' style={{marginTop:"100px"}}>
            <div className="d-none d-lg-block">

              <a
                href="https://twitter.com/?logout=1639488448834"
                className="btn btn-floating m-1"   
              >
                <i style={{color:'var(--first_color)' }} >
            
                  <ImTwitter />
                </i>
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                className="btn  btn-floating m-1"
              >
                    <i style={{color:'var(--first_color)'}}>
                  <ImLinkedin2 />
                </i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100035313377270"
                className="btn  btn-floating m-1"
              >
               <i style={{color:'var(--first_color)'}}>
                  <ImFacebook />
                </i>
              </a>

              <a
                href="https://github.com/Ahmedxd199/"
                className="btn btn-floating m-1"
              >
              <i style={{color:'var(--first_color)'}}>
                  <ImGithub />
                </i>
              </a>




            </div>


          </div>
        </div>

        <Services />
        <Packages/>
      


      </div>
   
    </>
  );
}


export default Home;