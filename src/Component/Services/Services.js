import React from "react";
import { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://ghostly-nightmare-54995.herokuapp.com/burgeritems")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 12)));
  }, []);
  return (
    <div className="mt-5 service pt-3 text-center mb-5">
      <h4>SUPER DELICIOUS</h4>
      <h1>Super Delicious Deal</h1>

      <div className="service-container">
        {services.map((service) => (
          <Service key={service?.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;