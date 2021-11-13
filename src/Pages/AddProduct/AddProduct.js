import { Alert } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import "./AddProduct.css"

const AddService = () => {

    const [success, setSuccess] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        // console.log(data)
        axios.post("https://secure-lowlands-87242.herokuapp.com/products", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Successfully added.");
                    reset();
                    setSuccess(true);
                }
            })
    };


    return (
        <div className=" add-product m-0">
            <div className=" my-5 mx-0">
                <h2 className="text-color">Add Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder="Name" required />
                    <input {...register("price")} placeholder="Price" required />
                    <input {...register("rating")} placeholder="Rating" required />
                    <input {...register("year")} placeholder="Year" required />
                    <input  {...register("fuel")} placeholder="Fuel" required />
                    <textarea  {...register("details")} placeholder="Details" required />
                    <input  {...register("img")} placeholder="Image URL" required />
                    <input type="submit" />
                </form>
                {success && <Alert className="my-4" severity="success">Product Add successfully</Alert>}
            </div>
        </div>
    );
};

export default AddService;