import Footer from "../Components/Footer/Footer";
import About from "../Components/Home/About";
import Explore from "../Components/Home/Explore";
import Hero from "../Components/Home/Hero";
import Testimony from "../Components/Home/Testimony";
import Navbar from "../Components/Navbar/Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Explore />
      <About />
      <Testimony />
      <Footer />
    </div>
  );
};

export default Homepage;
