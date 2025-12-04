import Contact from "./Contact/Contact";
import Header from "./Header";
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
      <Contact />
    </>
  );
};

export default Home;
