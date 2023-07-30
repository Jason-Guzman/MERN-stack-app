import { Carousel, Button } from "react-bootstrap";
import "./PromoSection.css";

const PromoSection = () => {
  return (
    <div id="promo" className="promo-section">
      <Carousel id="hero-carousel" fade interval={8000} indicators={false}>
        <Carousel.Item className="item item-1" interval={8000}>
          <div className="item-content container text-center">
            <div className="item-content-inner">
              <h2 className="heading">
                The Perfect Bootstrap Template <br /> for Builders and Tradesmen
              </h2>
              <p className="intro">
                Effective one page website template <br />
                designed for small trade businesses
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
              <h2 className="heading">
                UX Centred Design with <br /> SEO Friendly Code
              </h2>
              <p className="intro">
                There is no need to start from scratch - we`ve got you covered.{" "}
                <br />
                Get this template and start building sites for all types of
                trade businesses.
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
              <h2 className="heading">50+ Construction Icons Included</h2>
              <p className="intro">
                This template also includes a set of useful construction icon
                fonts. <br />
                You can easily pick the ones right for your site.
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
              <h2 className="heading">
                Ready to build sites for <br /> trade businesses?
              </h2>
              <p className="intro">
                We`ve laid the foundations for you so you can easily make
                successful sites for builders, plumbers, electricians,
                carpenters, and many more.
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
