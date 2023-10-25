import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Hero from "./components/Hero";
import SportsGame from "./components/SportsGame";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReleventWork from "./components/ReleventWork";
import Services from "./components/Services";
import PricingPlan from "./components/PricingPlan";
import Webflow from "./components/Webflow";
import OurCustomer from "./components/OurCustomer";
import Accordian from "./components/Accordian";
import ProgressLine from "./components/ProgressLine";
import MyFooter from "./components/MyFooter";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { BackTop } from "./components/BackTop";
import { Preloader } from "./components/Preloader";
function App() {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1500,
    });
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        <ProgressLine />
        <Hero />
        <SportsGame />
        <ReleventWork />
        <Services />
        <PricingPlan />
        <Webflow />
        <OurCustomer />
        <Accordian />
        <MyFooter />
        <BackTop />
        <Preloader />
      </div>
    </>
  );
}

export default App;
