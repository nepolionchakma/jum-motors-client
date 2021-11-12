import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import OrderItems from '../OrderItems/OrderItems';

const Cart = (props) => {
    const { cart } = props;
    const { user } = useAuth();
    console.log(cart)

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


    const initialInfo = { name: user.displayName, email: user.email, address: "" };
    const [ordersData, setOrdersData] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...ordersData };
        newInfo[field] = value;
        console.log(newInfo)
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
        // send data 
        fetch("https://secure-lowlands-87242.herokuapp.com/users", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orderItem)
        })
            .then()
        // console.log(iteorderItemm)
        e.preventDefault();
    }
    // const [ordersDetail, setOrdersDetail] = useState();
    // console.log(ordersDetail)
    return (
        <div className="pb-4">
            <h3 className="my-5">Orders Summary</h3>
            <h4>Items : {totalQuantity}</h4>
            <hr />
            <h4>Total : {total}$</h4>
            {
                cart.map(product =>
                    <OrderItems
                        key={product._id}
                        product={product}
                    ></OrderItems>
                )
            }
            <form onSubmit={handleOrdersDataSubmit}>
                <input className="w-100 my-1" onBlur={handleOnBlur} type="text" name="name" id="" defaultValue={user.displayName} />
                <br />
                <input className="w-100 my-1" onBlur={handleOnBlur} type="text" name="email" id="" defaultValue={user.email} />
                <br />
                <input className="w-100 my-1" onBlur={handleOnBlur} type="text" name="address" id="" defaultValue={user.address} />
                <br />
                <input type="submit" value="Place Order" />
            </form>

        </div>
    );
};

export default Cart;