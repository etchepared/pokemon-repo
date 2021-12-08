import "./landing.css";
import catchemall from "../MyImages/catchemall.png";
import PokeGo from "../MyImages/PokeGo.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <Link to="/Home">
        <img src={PokeGo} alt="Home" />
      </Link>

      <img src={catchemall} alt="Landing" />
    </div>
  );
};

export default Landing;
