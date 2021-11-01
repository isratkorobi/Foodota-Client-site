import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import './AddItem.css';

const AddItem = () => {
    
  const { register, handleSubmit, reset} = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post('http://localhost:5000/burgeritems',data)
    .then(res =>{
        if(res.data.insertedId){
            alert('added successfully');
            reset();
        }
    })
  }
  return (
    <div className="addItem">
        <h2 className="text-center pb-4">PLEASE ADD A ITEM</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>
        <textarea {...register("description")} placeholder="Description" />
        <input type="number" {...register("price")} placeholder="Price" />
        <input {...register("img")} placeholder="image url" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddItem;
