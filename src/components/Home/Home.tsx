import Header from "../Header/Header";
import Portfolio from "./Portfolio";
import Process from "./Process";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
    </>
  );
};

export default Home;
