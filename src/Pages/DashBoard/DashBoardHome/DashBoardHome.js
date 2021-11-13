import React, { useState, useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth';
// import useFireBase from '../../../Hooks/useFireBase';

const DashBoardHome = () => {
    const { user } = useAuth();
    // Data Load
    const [orderItems, setOrderItems] = useState([]);
    // const { orders, setOrders } = useFireBase();
    console.log(orderItems)
    useEffect(() => {
        fetch(`https://secure-lowlands-87242.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrderItems(data))
    }, []);

    // ?delete order 
    // const handleDelete = email => {

    //     const url = `https://secure-lowlands-87242.herokuapp.com/orders?email=${user.email}`;
    //     fetch(url, {
    //         method: "DELETE"
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.deletedCount > 0) {
    //                 const remaining = orderItems.filter(order => orderItems[0].email !== email);
    //                 setOrders(remaining);
    //                 // reload();
    //             }

    //         })
    // }


    return (
        <div className="row">
            <h4 className="my-5 fw-bold text-danger">All Orders</h4>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Address: </th>
                        <th scope="col">Items</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total</th>
                        <th scope="col">delete</th>
                    </tr>
                </thead>
                {
                    orderItems.map(info =>

                        <tbody
                            key={info._id}
                        >
                            <tr>
                                <td>{orderItems[0].name}</td>
                                <td>{orderItems[0].address}</td>
                                <td>{orderItems[0].totalQuantity}</td>
                                <td> {orderItems[0].price}</td>
                                <td>{orderItems[0].total}</td>
                                <td><button className="btn btn-danger"
                                // onClick={() => handleDelete(orderItems[0].email)}
                                >Delete</button></td>
                            </tr>
                        </tbody>
                    )
                }
            </table>
        </div>
    );
};

export default DashBoardHome;