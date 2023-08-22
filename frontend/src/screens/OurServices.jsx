import { Button } from "react-bootstrap";
import "./OurServices.css";
import { FaQuestionCircle } from "react-icons/fa";

const OurServices = () => {
  return (
    <div id="services" className="section services-section text-center">
      <div className="container">
        <h2 className="section-title">Our Services</h2>

        <div className="section-intro">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Aenean massa.
        </div>

        <div className="services-list row">
          <div className="item col-lg-4 col-md-6 col-12">
            <div className="item-inner">
              <span className="custom-icon icon-wheel_barrow">
                <FaQuestionCircle />
              </span>
              <h3 className="item-title">Plastering</h3>
              <div className="item-desc">
                <p>
                  There are 50+ construction icon fonts included in this
                  template. Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit
                  amet, consectetuer adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="item col-lg-4 col-md-6 col-12">
            <div className="item-inner">
              <span className="custom-icon icon-paint_brush">
                <FaQuestionCircle />
              </span>
              <h3 className="item-title">Painting &amp; Decorating</h3>
              <div className="item-desc">
                <p>
                  There are 50+ construction icon fonts included in this
                  template. Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit
                  amet, consectetuer adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="item col-lg-4 col-md-6 col-12">
            <div className="item-inner">
              <span className="custom-icon icon-paint_roller">
                <FaQuestionCircle />
              </span>
              <h3 className="item-title">Renovation &amp; Refurb</h3>
              <div className="item-desc">
                <p>
                  There are 50+ construction icon fonts included in this
                  template. Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit
                  amet, consectetuer adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="item col-lg-4 col-md-6 col-12">
            <div className="item-inner">
              <span className="custom-icon icon-digger">
                <FaQuestionCircle />
              </span>
              <h3 className="item-title">Extension</h3>
              <div className="item-desc">
                <p>
                  There are 50+ construction icon fonts included in this
                  template. Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit
                  amet, consectetuer adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="item col-lg-4 col-md-6 col-12">
            <div className="item-inner">
              <span className="custom-icon icon-ladder">
                <FaQuestionCircle />
              </span>
              <h3 className="item-title">Roofing</h3>
              <div className="item-desc">
                <p>
                  There are 50+ construction icon fonts included in this
                  template. Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit
                  amet, consectetuer adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="item col-lg-4 col-md-6 col-12">
            <div className="item-inner">
              <span className="custom-icon icon-ruler_pencil">
                <FaQuestionCircle />
              </span>
              <h3 className="item-title">Loft Conversion</h3>
              <div className="item-desc">
                <p>
                  There are 50+ construction icon fonts included in this
                  template. Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit
                  amet, consectetuer adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-area">
          <ul className="list-inline">
            <li className="list-inline-item">
              <Button variant="success" href="#contact">
                Get a FREE quote
              </Button>
            </li>
            <li className="list-inline-item">
              <Button variant="success" href="#projects">
                View our projects
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
