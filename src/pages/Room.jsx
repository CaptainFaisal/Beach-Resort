import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const Room = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title="Our Rooms">
        <Link to="/">
          <button className="btn-primary">Return Home</button>
        </Link>
      </Banner>
    </Hero>
  );
};

export default Room;
