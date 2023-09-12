import { FaCheck } from "react-icons/fa";
import "./WhySection.css";
import badge1 from "../assets/images/badges/badge-1.png";
import badge2 from "../assets/images/badges/badge-2.png";
import badge3 from "../assets/images/badges/badge-3.png";
import badge4 from "../assets/images/badges/badge-4.png";
import badge5 from "../assets/images/badges/badge-5.png";

const WhySection = () => {
  return (
    <div id="why" className="why-section section text-center">
      <h2 className="section-title">Why Choose Us?</h2>

      <div className="reasons me-auto ms-auto">
        <div className="item">
          <h3 className="item-title">
            <FaCheck className="custom-icon" /> Deep AWS Expertise
          </h3>
          <div className="item-desc">
            Our team boasts extensive knowledge and hands-on experience with
            Amazon Web Services (AWS). From architecting cloud solutions to
            fine-tuning infrastructure and implementing cost-effective
            strategies, our expertise is your assurance of AWS excellence.
          </div>
        </div>

        <div className="item">
          <h3 className="item-title">
            <FaCheck className="custom-icon" /> Client-Centric Approach:
          </h3>
          <div className="item-desc">
            At <strong>Jason & Company</strong>, we believe in partnership and
            collaboration. We take the time to understand your unique business
            objectives, tailoring our solutions to align perfectly with your
            goals. Your success is our top priority.
          </div>
        </div>

        <div className="item">
          <h3 className="item-title">
            <FaCheck className="custom-icon" /> Cutting-Edge DevOps Practices
          </h3>
          <div className="item-desc">
            We stay at the forefront of DevOps innovation. By implementing
            cutting-edge practices like Continuous Integration and Continuous
            Deployment (CI/CD), Infrastructure as Code (IaC), and
            containerization, we accelerate software delivery, enhance
            reliability, and future-proof your operations.
          </div>
        </div>

        <div className="item">
          <h3 className="item-title">
            <FaCheck className="custom-icon" /> Exceptional Support and
            Reliability
          </h3>
          <div className="item-desc">
            Your peace of mind matters to us. With our 24/7 support and rapid
            incident response capabilities, we're dedicated to ensuring the
            reliability and availability of your AWS applications. Count on us
            to resolve issues promptly and keep your systems running smoothly.
          </div>
        </div>

        <div className="item">
          <h3 className="item-title">
            <FaCheck className="custom-icon" /> Proven Track Record
          </h3>
          <div className="item-desc">
            We've successfully tackled diverse challenges and delivered
            measurable results for a variety of clients. Our portfolio of past
            projects and case studies illustrates our ability to optimize AWS
            environments, save costs, and drive business success.
          </div>
        </div>
      </div>

      <div className="badges container">
        <ul className="badges-list list-inline center-block">
          <li className="badge-item list-inline-item">
            <a href="#">
              <img className="img-fluid" src={badge1} alt="" />
            </a>
          </li>
          <li className="badge-item list-inline-item">
            <a href="#">
              <img className="img-fluid" src={badge2} alt="" />
            </a>
          </li>
          <li className="badge-item list-inline-item">
            <a href="#">
              <img className="img-fluid" src={badge3} alt="" />
            </a>
          </li>
          <li className="badge-item list-inline-item">
            <a href="#">
              <img className="img-fluid" src={badge4} alt="" />
            </a>
          </li>
          <li className="badge-item list-inline-item">
            <a href="#">
              <img className="img-fluid" src={badge5} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhySection;
