import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Aos from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";

const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 100,
      easing: "ease-in-out-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <div className="">
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
    </div>
  );
};

export default App;
