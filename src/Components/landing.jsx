
import watch from "../Images/rqwr.png";
import razio from "../Images/razio.png";
import PointSlide from "./pointSlide";

function Landing() {

  return (
    <div className="containerLanding" id="home">
      <img src={watch} className="watch rotate-img" loading="lazy" alt="img" />
      <img src={razio} className=" front" loading="lazy" alt="img" />
      <div className="loading">
        <div class="loader"></div>
      </div>
      <div>
        <PointSlide />
      </div>
    </div>
  );
}

export default Landing;
