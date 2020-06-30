import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Hero>
      <Banner title="404" subTitle="Page not found">
        <Link to="/">
          <button className="btn-primary">Return to home</button>
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
