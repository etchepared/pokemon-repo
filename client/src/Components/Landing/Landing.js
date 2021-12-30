import "./landing.css";
//import catchemall from "../MyImages/catchemall.png";
import landingImage from "../MyImages/14729-pokemon.jpg";

const Landing = () => {
  return (
    <div className="landing">
      <img src={landingImage} alt="Landing" />
    </div>
  );
};

export default Landing;
