import React, { useState } from "react";
import Title from "../components/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
const Services = () => {
  const [services] = useState([
    {
      icon: <FaCocktail />,
      title: "Free Cocktails",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ullam!",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ullam!",
    },
    {
      icon: <FaShuttleVan />,
      title: "Free Delivery",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ullam!",
    },
    {
      icon: <FaBeer />,
      title: "Super Beer",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ullam!",
    },
  ]);
  return (
    <section className="services">
      <Title title="Services" />
      <div className="services-center">
        {services.map((service, index) => (
          <article key={index} className="service">
            <span>{service.icon}</span>
            <h6>{service.title}</h6>
            <p>{service.info}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
