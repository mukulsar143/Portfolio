import logo from "../../Pics/mypic2.jpg";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={logo} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I am results-driven, often assessing progress toward the objective
            and the steps necessary to achieve it. I am persuing Diploma in
            Computer science . I have following skills: Frontend , React js ,
            Python , Django , Rest framework ,My sql , Sql lite , Devops EXP - 6
            months. With my team’s support,
          </p>
          <p className="hero--section-description">
            we’ve cut down the time it takes to bring a product to market by two
            weeks over the past year. And I'm eager to become Python Full Stack
            Developer . Programming it's my enthusiasm.
          </p>
        </div>
      </div>
    </section>
  );
}
