import React from "react";
import { useEffect, useState } from "react";
import Offer from "../Offer/Offer";

const Offers = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/offeritems")
          .then((res) => res.json())
          .then((data) => setServices(data.slice(0, 12)));
      }, []);

    return (
        <div className="mt-5 service pt-3 text-center mb-5">
      <h4>NEW ARIVALS</h4>
      <h1>Latest Tips And Tricks</h1>
      <div className="service-container">
        {services.map((service) => (
          <Offer key={service?.id} service={service}></Offer>
        ))}
      </div>
    </div>
    );
};

export default Offers;
