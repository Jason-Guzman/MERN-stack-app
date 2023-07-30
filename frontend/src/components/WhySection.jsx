import { FaCheck } from "react-icons/fa";
import "./WhySection.css";

const WhySection = () => {
  return (
    <div id="why" className="why-section section text-center">
      <h2 className="section-title">Why Choose Us?</h2>

      <div className="reasons me-auto ms-auto">
        <div className="item">
          <h3 className="item-title">
            <FaCheck className="custom-icon" /> We are “Home Advisor” screened
            and approved
          </h3>
          <div className="item-desc">
            You can explain further here. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa.
          </div>
        </div>

        <div className="item">
          <h3 className="item-title">
            <FaCheck className="custom-icon" /> 100% Customer satisfaction
            guaranteed
          </h3>
          <div className="item-desc">
            You can explain further here. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa.
          </div>
        </div>

        <div className="item">
          <h3 className="item-title">
            <FaCheck className="custom-icon" /> Our prices are competitive
          </h3>
          <div className="item-desc">
            You can explain further here. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa.
          </div>
        </div>

        <div className="item">
          <h3 className="item-title">
            <FaCheck className="custom-icon" /> We have 100% positive reviews
          </h3>
          <div className="item-desc">
            You can explain further here. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa.
          </div>
        </div>

        <div className="item">
          <h3 className="item-title">
            <FaCheck className="custom-icon" /> Free quotes and estimate
          </h3>
          <div className="item-desc">
            You can explain further here. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa.
          </div>
        </div>
      </div>

      <div className="badges container">
        <ul className="badges-list list-inline center-block">
          <li className="badge-item list-inline-item">
            <a href="#">
              <img
                className="img-fluid"
                src="../assets/images/badges/badge-1.png"
                alt=""
              />
            </a>
          </li>
          <li className="badge-item list-inline-item">
            <a href="#">
              <img
                className="img-fluid"
                src="../assets/images/badges/badge-2.png"
                alt=""
              />
            </a>
          </li>
          <li className="badge-item list-inline-item">
            <a href="#">
              <img
                className="img-fluid"
                src="../assets/images/badges/badge-3.png"
                alt=""
              />
            </a>
          </li>
          <li className="badge-item list-inline-item">
            <a href="#">
              <img
                className="img-fluid"
                src="../assets/images/badges/badge-4.png"
                alt=""
              />
            </a>
          </li>
          <li className="badge-item list-inline-item">
            <a href="#">
              <img
                className="img-fluid"
                src="../assets/images/badges/badge-5.png"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhySection;
