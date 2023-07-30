import { Container, Carousel } from "react-bootstrap";
import "./ReviewsSection.css"; // Import the external CSS file

const ReviewsSection = () => {
  return (
    <section id="reviews" className="reviews-section section text-center">
      <Container fluid>
        <h2 className="section-title">See what our customers are saying</h2>
        <Carousel
          id="reviews-carousel"
          className="owl-carousel owl-theme"
          interval={null} // Disable auto-rotating the carousel
          slide={true} // Enable sliding for the carousel items
          pause={false} // Keep the carousel sliding continuously
        >
          {/* Review Item 1 */}
          <Carousel.Item>
            <div className="item">
              <div className="inner">
                <blockquote className="quote">
                  <i className="fas fa-quote-left" aria-hidden="true"></i>
                  <p>
                    Excellent workmanship. Aenean commodo ligula eget dolor.
                    Aenean massa. Cum sociis natoque penatibus et magnis dis
                    parturient montes aenean vulputate.
                  </p>
                </blockquote>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                {/* //rating */}
                <div className="source">
                  <img
                    className="customer-profile"
                    src="assets/images/customers/customer-1.png"
                    alt=""
                  />
                  <div className="customer-meta">
                    Kevin, London
                    <br />
                    via <a href="#">homeadvisor.com</a>
                  </div>
                </div>
                {/* //source */}
              </div>
              {/* //inner */}
            </div>
            {/* //item */}
          </Carousel.Item>

          {/* Review Item 2 */}
          <Carousel.Item>
            <div className="item">
              <div className="inner">
                <blockquote className="quote">
                  <i className="fas fa-quote-left"></i>
                  <p>
                    We are so pleased about the work! Ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula eget
                    dolor. Aenean massa quisque rutrum.
                  </p>
                </blockquote>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                {/* //rating */}
                <div className="source">
                  <img
                    className="customer-profile"
                    src="assets/images/customers/customer-2.png"
                    alt=""
                  />
                  <div className="customer-meta">
                    Kate, London
                    <br />
                    via <a href="#">homeadvisor.com</a>
                  </div>
                </div>
                {/* //source */}
              </div>
              {/* //inner */}
            </div>
            {/* //item */}
          </Carousel.Item>

          {/* Review Item 3 */}
          <Carousel.Item>
            <div className="item">
              <div className="inner">
                <blockquote className="quote">
                  <i className="fas fa-quote-left"></i>
                  <p>
                    A thoroughly professional job lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula eget
                    dolor.Phasellus viverra nulla ut metus varius laoreet.
                  </p>
                </blockquote>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                {/* //rating */}
                <div className="source">
                  <img
                    className="customer-profile"
                    src="assets/images/customers/customer-3.png"
                    alt=""
                  />
                  <div className="customer-meta">
                    Sara, London
                    <br />
                    via <a href="#">homeadvisor.com</a>
                  </div>
                </div>
                {/* //source */}
              </div>
              {/* //inner */}
            </div>
            {/* //item */}
          </Carousel.Item>

          {/* Add more review items here to display additional reviews */}
        </Carousel>
        {/* //reviews-carousel */}
      </Container>
      {/* //container-fluid */}
    </section>
  );
};

export default ReviewsSection;
