import React from "react";
import useFetch from "../hooks/useFetch.js";
import LatestProducts from "../components/LatestProducts.js";
import Hero from '../components/Hero.js'

const Home = () => {
  // Fetch data for latest products marked as new
  const { data } = useFetch("/products?populate=*&filters[isNew]=true");

  return (
    <section>
      {/* Display a hero section */}
      <Hero />

      {/* Display latest products */}
      <LatestProducts />
    </section>
  );
};

export default Home;
