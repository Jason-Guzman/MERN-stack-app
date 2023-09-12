import { Carousel, Button } from "react-bootstrap";
import "./PromoSection.css";

const PromoSection = () => {
  return (
    <div id="promo" className="promo-section">
      <Carousel id="hero-carousel" fade interval={8000} indicators={false}>
        <Carousel.Item className="item item-1" interval={8000}>
          <div className="item-content container text-center">
            <div className="item-content-inner">
              <div className="dark-overlay"></div>
              <h2 className="heading">
                Optimize Your AWS Infrastructure with Our Expertise
              </h2>
              <p className="intro">
                Explore How We Can Optimize Your AWS Infrastructure for Maximum
                Efficiency and Cost Savings
              </p>
              <Button variant="success" href="#contact" target="_blank">
                Get a FREE Quote
              </Button>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item className="item item-2" interval={8000}>
          <div className="item-content container text-center">
            <div className="item-content-inner">
              <div className="dark-overlay"></div>
              <h2 className="heading">Your Trusted AWS Consulting Partner</h2>
              <p className="intro">
                Learn About Our Journey and How We Can Empower Your AWS Success
              </p>
              <Button variant="success" href="#contact" target="_blank">
                View Our Projects
              </Button>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item className="item item-3" interval={8000}>
          <div className="item-content container text-center">
            <div className="item-content-inner">
              <div className="dark-overlay"></div>
              <h2 className="heading">Always Ready to Serve You</h2>
              <p className="intro">
                Get 24/7 AWS Support Now to Ensure the Reliability and
                Availability of Your Cloud Applications
              </p>
              <Button variant="success" href="#contact" target="_blank">
                Buy Now
              </Button>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item className="item item-4" interval={8000}>
          <div className="item-content container text-center">
            <div className="item-content-inner">
              <div className="dark-overlay"></div>
              <h2 className="heading">Accelerate Your Software Delivery</h2>
              <p className="intro">
                Discover How Our DevOps Transformation Services Can Help You
                Accelerate Software Delivery and Enhance Operational Efficiency
              </p>
              <Button variant="success" href="#contact" target="_blank">
                Buy Now
              </Button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default PromoSection;
