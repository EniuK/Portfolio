import "./home.scss";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="nav-container">
        <nav className="navigation">
          <Link className="link" to="/Me">
            <div className="circle">
              <span> Me</span>
            </div>
          </Link>

          <Link className="link" to="/Projects">
            <div className="circle">
              <span>Projects</span>
            </div>
          </Link>
          <Link className="link" to="/Hobbys">
            <div className="circle">
              <span>Hobbys </span>
            </div>
          </Link>
          <Link className="link" to="/Goals">
            <div className="circle">
              <span>Goals </span>
            </div>
          </Link>
          <Link className="link" to="Contact">
            <div className="circle">
              <span>Contact</span>
            </div>
          </Link>
          <Link className="link" to="/More">
            <div className="circle">
              <span>More</span>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Home;
