import { Outlet } from "react-router-dom";
import PromoSection from "./PromoSection.jsx";
import OurServices from "./OurServices.jsx";
import WhySection from "./WhySection.jsx";
import AboutSection from "./AboutSection.jsx";

const HomeScreen = () => {
  return (
    <>
      <PromoSection />
      <OurServices />
      <WhySection />
      {/* <ReviewsSection /> */}
      <AboutSection />
    </>
  );
};

export default HomeScreen;
