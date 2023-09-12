import "./Footer.css";
import {
  FaCheck,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaMapMarked,
  FaMapPin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main container">
        <div className="row">
          <div className="footer-col business-hours-col col-lg-4 col-md-6 col-12">
            <h3 className="col-title">Business Hours</h3>
            <div className="intro">
              Lorem ipsum dolor sit amet, consectetuer <br />
              adipiscing elit. Aenean commodo ligula.
            </div>
            <ul className="business-hours-list list-unstyled">
              <li>
                <strong>Monday - Friday:</strong> 8am - 6pm
              </li>
              <li>
                <strong>Saturday:</strong> 9am - 4pm
              </li>
              <li>
                <strong>Sunday:</strong> Closed
              </li>
            </ul>
          </div>

          <div className="footer-col contact-us-col col-lg-4 col-md-6 col-12">
            <h3 className="col-title">Contact Us</h3>
            <ul className="footer-contact-list list-unstyled">
              <li className="item">
                <span>
                  <FaPhone />
                </span>
                <span className="info">
                  <a href="#"> 01234 555 666</a>
                </span>
              </li>
              <li className="item">
                <span>
                  <FaEnvelope />
                </span>
                <span className="info">
                  <a href="#"> info@yourwebsite.com</a>
                </span>
              </li>
              <li className="item">
                <span className="custom-icon icon-map_pin">
                  <FaMapPin />
                </span>
                <span className="info">
                  <span className="street-address">College Green</span>
                  <br />
                  <span className="region">56 College Green Road</span>
                  <br />
                  <span className="postal-code">BS1 6XR</span>
                  <br />
                  <span className="country-name">UK</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="footer-col follow-us-col col-lg-4 col-12">
            <h3 className="col-title">About Us</h3>
            <div className="intro">
              <strong>Jason & Company</strong> stands as a trusted name in AWS
              consulting, known for our deep expertise and passion for helping
              businesses thrive in the digital age.
            </div>

            <div className="social-container">
              <ul className="list-inline social-list">
                <li className="list-inline-item social-item">
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
                <li className="list-inline-item social-item">
                  <a href="#">
                    <FaGithub />
                  </a>
                </li>
                <li className="list-inline-item social-item">
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li className="list-inline-item social-item">
                  <a href="#">
                    <FaFacebook />
                  </a>
                </li>
              </ul>
            </div>

            <ul className="footer-menu list-unstyled">
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottombar text-center">
        <div className="copyright">
          Template @
          <a href="#" target="_blank">
            MERN PROJECT
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
