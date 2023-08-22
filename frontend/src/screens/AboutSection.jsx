import "./AboutSection.css";
import About from "../assets/images/about.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="about-section section text-center">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="section-intro">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo
            <a href="#">link example</a> ligula eget dolor. Aenean massa. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <p>
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi.
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
