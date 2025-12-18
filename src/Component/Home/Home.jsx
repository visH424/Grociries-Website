import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Caterory from "../Category/Caterory";
import Values from "../Values/Values";
import Product from "../Product/Product";
import Discount from "../Discount/Discount";
import Process from "../Process/Process";
import Testimonails from "../Testimonials/Testimonails";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Caterory />
      <Values />
      <Product />
      <Discount />
      <Process />
      <Testimonails />
    </div>
  );
};

export default Home;
