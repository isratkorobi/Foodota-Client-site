import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import './NewItem.css';

const NewItem = () => {
  const { register, handleSubmit, reset} = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post('http://localhost:5000/offeritems',data)
    .then(res=>{
        if(res.data.insertedId){
            alert('added successfully');
            reset();
        }
    })
  };

  return (
    <div className="add-detail"> 
      <h1 className="text-center color-green fw-bold p-3">Please Add An Item</h1>
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
export default NewItem;