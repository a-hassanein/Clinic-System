import {
  BsFacebook,
  BsInstagram,
  BsGoogle,
  BsTwitter,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";


const Home = () => {
    return (
        <>
        <div className="container">
  <div className="row">
    <div className="col-6">
        <div><h1 style={{color: "var(--first_color)" , fontFamily: "var(--font_family)" , fontWeight:"bold"}}>Hello Doctor</h1></div>
        <div style={{fontFamily: "var(--font_family)"}}>
        The Doctor is the title character in the long-running BBC science fiction television programme Doctor Who.
         Since the show's inception in 1963, the character has been portrayed by thirteen lead actors. 
         In the programme, "the Doctor" is the alias assumed by a millennia-old humanoid alien called a Time Lord
          who travels through space and time in the TARDIS, frequently with companions. 
          The transition to each succeeding actor is explained within the show's narrative through the plot device of "regeneration", 
          a biological function of the Time Lord race that allows a change of cellular structure and appearance with recovery following
         a potentially fatal injury.
        </div>
        <br/>
        <div>
            <button className='btn' style={{background: "var(--first_color)" ,color: "white" }} >Sign In</button>
            <span> </span>
            <button className='btn' style={{background: "var(--first_color)" , color: "white" }} >Sign Up</button>
        </div>
        </div>
    <div className="col-md-3 col-lg-3 col-sm-12"><img src={require('../Images/Home_img.png')} alt='...img' width={'100%'} /></div>
    <div className='col-1'>
   <div>
            <a
              href="https://www.google.com"
              className="btn btn-floating m-1"
              style={{background: "var(--first_color)"}}
            >
              <i>
                <BsGoogle />
              </i>
            </a>
            <a
              href="https://twitter.com/?logout=1639488448834"
              className="btn btn-info btn-floating m-1"
            >
              <i>
                <BsTwitter />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              className="btn btn-outline-info btn-floating m-1"
            >
              <i>
                <BsLinkedin />
              </i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100035313377270"
              className="btn btn-outline-info btn-floating m-1"
            >
              <i>
                <BsFacebook />
              </i>
            </a>
            <a
              href="https://www.instagram.com/"
              className="btn btn-outline-info btn-floating m-1"
            >
              <i>
                <BsInstagram />
              </i>
            </a>
            <a
              href="https://github.com/Ahmedxd199/"
              className="btn btn-outline-info btn-floating m-1"
            >
              <i>
                <BsGithub />
              </i>
            </a>
          </div>


    </div>
  </div>
</div>
        </>
    );
}


export default Home;