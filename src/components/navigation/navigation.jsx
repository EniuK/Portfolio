import "./navigation.scss";
import photo from "../photos/photo-to-change.jpg";
const Navigation = () => {
  return (
    <div className="navbar">
      <h1>I AM NAVIGATION</h1>
      <img className="profile" src={photo} alt="nope" />
      <div className="about">
        <h3>Introduction</h3>
        <p>Michał Semeniuk - front end developer </p>
        <p>"If you want to do it, you can do it"</p>
        <p>
          It's my main motto wchih is motivating me whole time in my life. I am
          doing this portfolio just to introduce myself for my future work. Im
          still learning new things in programming and i dont see end of my
          journey with that. I wanna do programming in as many languages as
          possible.
        </p>
      </div>
    </div>
  );
};

export default Navigation;
