import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subTitle="Deluxe Rooms Starting At $299"
        >
          <Link to="/rooms">
            <button className="btn-primary">Our rooms</button>
          </Link>
        </Banner>
      </Hero>
      <Services />
    </>
  );
};

export default Home;
