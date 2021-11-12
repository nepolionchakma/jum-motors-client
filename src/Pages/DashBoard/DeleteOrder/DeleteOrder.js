import React from 'react';
import { Button } from 'react-bootstrap';
import useFireBase from '../../../Hooks/useFireBase';

const DeleteOrder = () => {
    const { orders, setOrders } = useFireBase();
    const reload = () => {
        window.location.reload(false);
    }
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
            {
                orders.map(order =>
                    <div
                        key={order._id}
                        className="my-3 row"
                    >
                        <div className="col-lg-6">
                            <h5>{order._id}</h5>
                        </div>
                        <div className="col-lg-6">
                            <Button className="btn btn-danger" onClick={() => handleDelete(order._id)}>Delete</Button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default DeleteOrder;