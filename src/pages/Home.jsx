import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Card from "../components/card/Card";
import Carousel from "../components/carousel/Carousel";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div><Carousel/></div>
      <div className="m-3">
   <Card/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
