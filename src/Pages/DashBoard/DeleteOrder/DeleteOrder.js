import React from 'react';
import { Button } from 'react-bootstrap';
import useFireBase from '../../../Hooks/useFireBase';

const DeleteOrder = () => {

    const { orders, setOrders } = useFireBase();
    const reload = () => {
        window.location.reload(false);
    }
    console.log(orders)
    const handleDelete = id => {

        const url = `https://secure-lowlands-87242.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = orders.filter(order => orders._id !== id);
                    setOrders(remaining);
                    reload();
                }

            })
    }

    return (
        <div className="">
            <h4 className="my-5 fw-bold text-danger">Manage All Orders</h4>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Address: </th>
                        <th scope="col">Items</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>


                {
                    orders.map(order =>

                        <tbody
                            key={order._id}
                        >
                            <tr>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.price}</td>
                                <td> {order.total}</td>
                                <td>{order.totalQuantity}</td>
                                <td><Button className="btn btn-danger" onClick={() => handleDelete(order._id)}>Delete</Button></td>
                            </tr>
                        </tbody>
                    )
                }
            </table>

        </div>
    );
};

export default DeleteOrder;