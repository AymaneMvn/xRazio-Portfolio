import RazioMvn from "../Images/about1.png";
// import Arrow from "../Images/up-arrow.png"
import React , { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; 
import ScrollToTop from "react-scroll-to-top";


function About() {

  useEffect(() => {
    Aos.init({duration : 2000});
  },[])

  return (
    <div className="About" id="About">
      <div className="About-title">
        <h1 className="About-h1">About</h1>
      </div>
      <div className="About-Content-Parent" data-aos="fade-up">
        <div className="About-Content">
         <div className="About-text">
         <h1>Hi! I'm Mvn </h1>
          <h2>
            Front end Developer | Graphic Designer | 3D artist | UX & UI
            Designer | Video Editor
          </h2>
          <p>
            I am a Front-end Developer with 1 year commercial experience, author
            of JS Foundations, and graduate of Internet Technology. I create
            successful websites that are fast, easy to use, and built with best
            practices. And i have experience in Graphic design and UI & UX So i
            can make the website more better and look good for users.
          </p>
         </div>
         <div className="About-image">
            <img src={RazioMvn} alt="Aymen Jeddad" className="img-about vert-move" />
         </div>
        </div>
      </div>
      {/* <button type="submit" style={{background : 'transparent'}} onClick={() => {
          window.scrollTo({top: 0, left: 0});
        }}><img src={Arrow} alt="back to top" className="arrow" /></button> */}
       <ScrollToTop smooth  color="#6131df" background="transparent"/>
    </div>
  );
}

export default About;
