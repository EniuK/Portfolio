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
          <span>
            <br />
            Link for site:{" "}
            <a href="https://coffe-api.vercel.app">
              https://coffe-api.vercel.app
            </a>
          </span>
        </p>
      </div>
      <div className="project">
        <h2>Clicker JS game</h2>
        <p>
          Since I started programming, I was into writing clicker game{" "}
          {"(like cookie clicker). "}That game was first game i wanted to
          produce by myself. It is my first project and i decided to write it in
          js just to show that I started from basics.
        </p>
        <span className="technologies">
          Techologies I used: HTML, CSS, JS, dom.
        </span>
        <br />
        Link for this site: <a href="/"></a>
      </div>
      <div className="project">
        <h2>Copy Layout</h2>
        <p>
          It's a site where I will add responsive sites by copying layouts of
          single pages. It wont have any functionality. Here I will practise and also try new things and ideas, so it works like a test page. 
        </p>
      </div>
    </div>
  );
};

export default Projects;
