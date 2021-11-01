import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import './AddDetail.css';

const AddDetail = () => {
  const { register, handleSubmit, reset} = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post('http://localhost:5000/detailitems',data)
    .then(res=>{
        if(res.data.insertedId){
            alert('added successfully');
            reset();
        }
    })
  };

  return (
    <div className="add-detail"> 
      <h2 className="text-center">Please Add Your Order</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>
        <textarea {...register("description")} placeholder="Description" />
        <input type="number" {...register("price")} placeholder="Price" />
        <input type="date" {...register("date")} placeholder="date" />
        <input {...register("img")} placeholder="image url" />
        <input type="submit" />
      </form>
    </div>
  );
};
export default AddDetail;