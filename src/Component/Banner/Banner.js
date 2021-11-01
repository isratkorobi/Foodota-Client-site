import React from "react";
import { Carousel } from "react-bootstrap";
import './Banner.css';

const Banner = () => {
  return (
    <div>
        <div className="banner text-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-9">
                <div className="banner-content">
                  <h1>Order Healthy And Fresh Food Any Time</h1>
                  <p>Italian food makes people think of big family dinners. So you may want to position your restaurant as a place to bring the whole family.</p>
                  <a href="#" className="btn btn-lg btn-warning">Order Now</a>
                </div>
              </div>
              <div className="col-md-3">
              </div>
            </div>

          </div>
        </div>
    </div>
  );
};

export default Banner;
