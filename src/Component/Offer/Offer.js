import React from "react";
import { Link } from 'react-router-dom';
const Offer = (props) => {
  const { title, description, price, name, img ,_id} = props?.service; //distructure array
  return (   
    <div>
      <div className="container">
            <div class="card mb-5 p-2" style={{ width: "22rem" }}>
              <img src={img} class="card-img-top" alt="..." />
              <div class="card-body">
                <h3>{name}</h3>
                <h5>{title}</h5>
                <p>{description}</p>
                <h4>${price}</h4>
                <Link to={`/order/${_id}`}>
                  <button className="btn btn-secondary ps-4 pe-4">Order</button>
                </Link>
              </div>
            </div>

      </div> 
    </div>
  );
};

export default Offer;