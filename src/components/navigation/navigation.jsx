import "./navigation.scss";
import photo from "../../photos/moje-ciapki.jpg";
const Navigation = () => {
  return (
    <div className="navbar">
      <h1>I AM NAVIGATION</h1>
      <img src={photo} alt="nope" />
    </div>
  );
};

export default Navigation;
