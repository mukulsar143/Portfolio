import logo from "../../Pics/mypic2.jpg";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={logo} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            Specialized in Python and Django for web development, with
            proficiency across full-stack projects. Completed a web development
            internship, gaining hands-on experience with React.js for frontend
            and Django and FastAPI for backend development. Skilled in database
            management using MySQL, PostgreSQL, SQLite, and MongoDB; experienced
            in deploying applications with Docker as part of DevOps practices.
            Currently working as a Python Developer, contributing to product
            development efficiency and collaborating with team members to
            accelerate time to market. "Implemented core features and enhanced project
            functionality through seamless integration with third-party APIs."
          </p>
          <p className="hero--section-description">
          Implemented core features and enhanced project
          functionality through seamless integration with third-party APIs.
          </p>
        </div>
      </div>
    </section>
  );
}
