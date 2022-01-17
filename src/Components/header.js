import {
  ImFacebook,
  ImTwitter,
  ImGithub,
  ImLinkedin2,
} from "react-icons/im";


const Home = () => {
    return (
        <>
        <div className="container-xxl">
  <div className="row">
    <div className="col-md-8 col-lg-8">
        <div><h1 style={{color: "var(--first_color)" , fontFamily: "var(--font_family)" , fontWeight:"bold"}}>Hello Doctor</h1></div>
        <div style={{fontFamily: "var(--font_family)"}}>
        The Doctor is the title character in the long-running BBC science fiction television programme Doctor Who.
         Since the show's inception in 1963, the character has been portrayed by thirteen lead actors. 
         In the programme, "the Doctor" is the alias assumed by a millennia-old humanoid alien called a Time Lord
          who travels through space and time in the TARDIS, frequently with companions. 
          The transition to each succeeding actor is explained within the show's narrative through the plot device of "regeneration", 
          a biological function of the Time Lord race that allows a change of cellular structure and appearance with recovery following
         a potentially fatal injury Hi Hassanin@.
        </div>
        <br/>
        <div>
            <button className='btn ' style={{background: "var(--first_color)" ,color: "white" }} >Sign In</button>
            <span> </span>
            <button className='btn' style={{background: "var(--first_color)" , color: "white" }} >Sign Up</button>
        </div>
        </div>
    <div className="col-3"><img className="d-none d-lg-block" src={require('../Images/Home_img.png')} alt='...img' width={'100%'} /></div>
    <div className='col-1'>
   <div className="d-none d-lg-block">
       
            <a
              href="https://twitter.com/?logout=1639488448834"
              className="btn btn-floating m-1"
            >
              <i>
                <ImTwitter />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              className="btn  btn-floating m-1"
            >
              <i>
                <ImLinkedin2 />
              </i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100035313377270"
              className="btn  btn-floating m-1"
            >
              <i>
                <ImFacebook />
              </i>
            </a>
         
            <a
              href="https://github.com/Ahmedxd199/"
              className="btn btn-floating m-1"
            >
              <i>
                <ImGithub />
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