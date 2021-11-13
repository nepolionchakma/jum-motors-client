import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import useFireBase from '../../../Hooks/useFireBase';

const DeleteOrder = () => {

    const { orders, setOrders } = useFireBase();
    // const reload = () => {
    //     window.location.reload(false);
    // // }
    // Popup
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // console.log(orders)
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
                    // reload();
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

                                <td><div className="col">
                                    <Button className="btn btn-danger text-center" onClick={handleShow}>
                                        Delete
                                    </Button>

                                    <Modal className="d-flex justify-content-between align-items-center" show={show} onHide={handleClose}>
                                        <Modal.Header className="" closeButton>
                                            <Modal.Title>Are You Sure ?</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="text-center">
                                                <h6 className=" py-2">Price : {order.price}</h6>
                                                <h6 className=" py-2">Items : {order.totalQuantity}</h6>
                                                <h6 className=" py-2">Total : {order.total}</h6>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="danger" onClick={handleClose}>
                                                Cancel
                                            </Button>
                                            <Button variant="primary" onClick={() => handleDelete(order._id)}>
                                                Delete
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div></td>
                            </tr>
                        </tbody>
                    )
                }
            </table>

        </div>
    );
};

export default DeleteOrder;