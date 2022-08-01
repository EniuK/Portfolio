import "./projects.scss";
const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project">
        <h2>Coffee maker</h2>
        <p>
          It's project about saving recipes for making coffee. Making coffee
          sounds preety easy but actually it is pretty hard and it needs many
          parameters to do nice batch. Idea about aplication is that it helps my
          firends with saving recipes and use it later. I don't know anything
          about making professional coffee so I had hard time to understand what
          they actually want. Working for this was fun and had practical use of
          mu knowledge about programming so i was into doing this. I'm happy
          making this usable and seeing people posting recipes here. I still
          improve this site after getting more knowledge from courses I do.
          <br />
          <br />
          <span className="technologies">
            Technologies I used: HTML, SCSS, REACT, firebase, react router, MUI{" "}
            {`(in progress)`}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Projects;
