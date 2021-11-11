import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddProduct.css"

const AddService = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        // console.log(data)
        axios.post("https://secure-lowlands-87242.herokuapp.com/products", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Successfully added.");
                    reset();
                }
            })
    };


    return (
        <div className=" add-product m-0">
            <div className=" my-5 mx-0">
                <h2 className="text-color">Add Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder="Name" required />
                    <input {...register("country")} placeholder="Country" required />
                    <input type=""{...register("rate")} placeholder="Rate" required />
                    <input {...register("review")} placeholder="Review" required />
                    <input type="number" {...register("price")} placeholder="Price" required />
                    <input type="duration" {...register("duration")} placeholder="Duration (Hours)." required />
                    <input {...register("category")} placeholder="Category" required />
                    <input type="number" step="0" min="0" max="100"{...register("offer")} placeholder="Discount Offer" required />
                    <textarea  {...register("details")} placeholder="Details" required />
                    <input  {...register("img")} placeholder="Image URL" required />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;