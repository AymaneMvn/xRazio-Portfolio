import Service from "./utils/Service";
import xMvn from "./../Images/Services/webDesign.png";
import Gdesign from "./../Images/Services/graphicDesign.png";
import Veditor from "./../Images/Services/videoEditor.png";
import Mgraphic from "./../Images/Services/motionGraphic.png";
import Wordpress from "./../Images/Services/wordpress.png";
import digitalArt from "./../Images/Services/digitalArt.png";


const serv = [
  {
    title: "Web Design",
    desc: "I Will Design Your Personal Website Or Your Company Website With High Professionalism , I Have A Lot Of Experience In Designing Frontend Using Html, Css, Javascript And More. As You Can Se In This Website I Designed It In Adobe Xd First And Start Code It",
    image: xMvn
  },
  {
    title: "Graphic Design",
    desc: "I Will Do Anything Graphic Design Related, Logo, Banner, Flyer, Brochure Vector Artwork Because I Have A Lot Of Experience In Designing Using Photoshop , Illustrator And Adobe XD And I Have Used All This For 1 Year So I Have The Sense To Make Any Design",
    image: Gdesign
  },
  {
    title: "Video Editor",
    desc: "I Will Edit Your Real Estate And Other Video Professionally DO You Want To Edit Your Raw Videos For Your Tour , Business, ,Commercial, Interviews, YouTube, Cinematic, Montages, Wedding, Short Ads Or Whatever You Want. I Insure The Best Quality And In Most Affordable Rate.",
    image: Veditor
  },
  {
    title: "Motion Graphics",
    desc: "I Will Create Poster Animation,Ads ,Video Animations, Motion Graphics, I Can Edit Amazing Motion Graphics For Your Video According To Your Requirements. If You Want Motion Graphics Videos For Your Youtube Channel Or Any Social Media Then Feel Free To Contact Me.",
    image: Mgraphic
  },
  {
    title: "Digital Art",
    desc: "I Will Create Digital Art For Covers, Games, And Prints I Make Character Designs, Album Book Covers, Poster Designs, Tattoo Designs, Portraits. I Have Been Doing Digital Art For A Long Time And Have Worked For Many People. I Enjoy Doing Dark Art.",
    image: digitalArt
  },
  {
    title: "Wordpress",
    desc: "I Will Build Premium Professional Wordpress Website Design Or Blog It’s Great To See You. Are You Looking For An Amazing Website For Your Purposes Like E-Commerce, Corporate, Creative, Education, Sports, Gym, Restaurant, Entertainment And Etc?",
    image: Wordpress
  },
  
];

function Services() {
  return (
    <div>
      <div className="ServicesContain">
        <div>
          <h1 className="serviceH1 About-h1">Services</h1>
        </div>
        <div className="comp">
          {serv.map((serv, index) => {
            return (
              <Service
                key={index}
                {...serv}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
