import React, { useState, useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth';

const DashBoardHome = () => {
    const { user } = useAuth();
    // Data Load
    const [orderItems, setOrderItems] = useState([]);
    console.log(orderItems)
    useEffect(() => {
        fetch(`https://secure-lowlands-87242.herokuapp.com/users?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrderItems(data))
    }, []);
    return (
        <div>
            <p>{orderItems.length}</p>
            {
                orderItems.map(info =>

                    <div
                        key={info._id}
                    >
                        <p>Name : {orderItems[0].displayName}</p>
                        <p>Address : {orderItems[0].address}</p>
                        <p>Items : {orderItems[0].totalQuantity}</p>
                        <p>Price : {orderItems[0].price}</p>
                        <p>Total : {orderItems[0].total}</p>
                    </div>
                )
            }

        </div>
    );
};

export default DashBoardHome;