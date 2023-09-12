import "./AboutSection.css";
import About from "../assets/images/about.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="about-section section text-center">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="section-intro">
          <p>
            Our story is rooted in a deep fascination with Amazon Web Services
            (AWS), a platform that has redefined the possibilities of the cloud.
            As AWS enthusiasts, we recognized early on the transformative
            potential of this platform and the need for specialized guidance in
            harnessing its power. With this conviction, we set out on a mission
            to provide businesses with the expertise they needed to navigate the
            complexities of AWS confidently.
          </p>
          <p>
            Our story is not just about the past; it's about the future. We
            remain dedicated to staying at the forefront of AWS and DevOps
            innovation, continually sharpening our skills to meet the
            ever-evolving needs of our clients. As technology evolves, so do we,
            ensuring that our clients are always equipped with the latest and
            most effective solutions.
          </p>
        </div>
        <figure className="about-figure">
          <img className="img-fluid center-block" src={About} alt="" />
        </figure>
      </div>
    </section>
  );
};

export default AboutSection;
