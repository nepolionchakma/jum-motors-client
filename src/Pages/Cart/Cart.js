import { Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
// import PlaceOrder from '../PlaceOrder/PlaceOrder';

const Cart = (props) => {
    const { cart, handleRemove, } = props;
    const { user } = useAuth();
    // console.log(cart)
    const [success, setSuccess] = useState(false);

    let totalQuantity = 0;
    let total = 0;
    let price = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        price = product.price;
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }


    const initialInfo = { name: user.displayName, email: user.email, phone: "", address: "" };
    const [ordersData, setOrdersData] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...ordersData };
        newInfo[field] = value;
        // console.log(newInfo)
        setOrdersData(newInfo);
    }

    const handleOrdersDataSubmit = e => {
        // alert("Place Order SuccessFull");

        // data 
        const orderItem = {
            ...ordersData,
            price: price,
            totalQuantity: totalQuantity,
            total: total,
        }
        // console.log(orderItem)
        // send data 
        fetch("https://secure-lowlands-87242.herokuapp.com/users", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orderItem)
        })
            .then()

        // Order
        fetch("https://secure-lowlands-87242.herokuapp.com/orders", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orderItem)
        })
            .then()
        handleRemove();
        setSuccess(true);
        // console.log(iteorderItemm)
        e.preventDefault();
    }
    // const [ordersDetail, setOrdersDetail] = useState();
    // console.log(ordersDetail)
    return (
        <div className="pb-4 border p-2">
            <h3 className="my-5">Orders Summary</h3>
            <h4>Items : {totalQuantity}</h4>
            <hr />
            <h4>Total : {total}$</h4>
            {/* {
                cart.map(product =>
                    <OrderItems
                        key={product._id}
                        product={product}
                        total={total}
                        totalQuantity={totalQuantity}
                    ></OrderItems>
                )
            } */}
            <form onSubmit={handleOrdersDataSubmit}>
                <input className="w-100 my-1" onBlur={handleOnBlur} type="text" name="displayName" id="" defaultValue={user.displayName} />
                <br />
                <input className="w-100 my-1" onBlur={handleOnBlur} type="text" name="email" id="" defaultValue={user.email} />
                <br />
                <input className="w-100 my-1" onBlur={handleOnBlur} type="text" name="phone" id="" defaultValue={user.phone} placeholder="Phone" required />
                <br />
                <input className="w-100 my-1" onBlur={handleOnBlur} type="text" name="address" id="" defaultValue={user.address} placeholder="Address" required />
                <br />
                <input type="submit" value="Place Order Now" />
            </form>
            {success && <Alert className="my-4" severity="success">Place Order successfully</Alert>}
        </div>
    );
};

export default Cart;