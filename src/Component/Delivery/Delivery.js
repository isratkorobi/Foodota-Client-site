import React from "react";

const Delivery = () => {
  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              className="img-fluid" style={{borderRadius: '50%'}}
              src="https://i.ibb.co/jMkqX5P/ggfg-min.jpg"
            />
          </div>
          <div className="col-md-6">
            <div className="order-section">
              <div>
                <h5 className="text-warning fw-bold">PIZZA DELIVERY</h5>
                <h1 className="fw-bold my-3">
                Get Started Today!
                </h1>
                <h3 className="fw-bold lead mb-3">Everything you need to build an amazing food restaurant responsive website.</h3>
                <p>
                  Plant-based diets may offer an advantage over those that are
                  not plant based with respect to prevention and management of
                  diabetes. the adventist health studies found that vegetarians
                  have approximately half the risk of developing diabetes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
