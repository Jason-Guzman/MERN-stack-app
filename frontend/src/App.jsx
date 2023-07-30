import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import PromoSection from "./components/PromoSection";
import OurServices from "./components/OurServices";
import WhySection from "./components/WhySection";
import ReviewsSection from "./components/ReviewsSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <PromoSection />
      <OurServices />
      <WhySection />
      {/* <ReviewsSection /> */}
      <AboutSection />
      <Footer />
    </>
  );
};

export default App;
