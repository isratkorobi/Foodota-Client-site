import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import './Order.css';

const Order = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://ghostly-nightmare-54995.herokuapp.com/addOrders",{
      method: 'POST',
      headers: {"content-type" : "application/json"},
      body: JSON.stringify(data),
    })
  };
  // ---------------
  const { itemId } = useParams();
  const [user, setuser] = useState({});
  useEffect(() => {
    fetch(`https://ghostly-nightmare-54995.herokuapp.com/detailitems/${itemId}`)
      .then((res) => res.json())
      .then((data) => setuser(data));
  }, [itemId]);
  // console.log(user);
  // console.log(itemId);

  return (
    <div>
      {/* <h1 className="text-center">this is order:{itemId}</h1> */}
      <h2 className="text-center fw-bold p-4">Your Order details</h2>
      <div>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-5 m-auto">
              <div className="card detail-card">
                <img src={user?.img} />
                <div className="card-body p-4">
                  <h3>{user?.name} </h3>
                  <p>{user?.description}</p>
                  <h4>{user?.price}</h4>
                  <button className="order-btn">Order Now</button>
                </div>
              </div>
            </div>
            {/*  */}

            <div className="col-md-5 m-auto order-form">
              <h3 className="text-center fw-bold p-3">Add Your Order</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                placeholder="Name"
                className="p-2 m-2"
              />
              <br />

              <input
                {...register("email", { required: true })}
                placeholder="Email"
                className="p-2 m-2"
              />
              <br />
              <input
                {...register("date", { required: true })}
                placeholder="date"
                defaultValue={new Date()}
                className="p-2 m-2"
              />
              <br />
              <input
                {...register("description", { required: true })}
                placeholder="Description"
                className="p-2 m-2"
              />
              <br />
              <input
                {...register("order", { required: true })}
                placeholder="Order Now"
                className="p-2 m-2"
              />
              <br/>
                <input className="order-btn" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
