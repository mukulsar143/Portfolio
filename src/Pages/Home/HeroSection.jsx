import logo from '../../Pics/newpic.jpg';
import YourPDFFile from '../../Pics/Mukul-Sarkar.pdf'; // Import your PDF file


export default function HeroSection() {

    const openPdf = () => {
      window.open(YourPDFFile, '_blank'); // Open the PDF file in a new tab
    };
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Mukul</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Python Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Web Development|| Python || Django Rest Framework 
            <br /> || React JS || Docker || Jenkins...
          </p>
        </div>
        <button className="btn btn-primary" onClick={openPdf}>Get In CV</button>
      </div>
      <div className="hero--section--img">
        <img src={logo} alt="Hero Section" />
      </div>
    </section>
  );
}
