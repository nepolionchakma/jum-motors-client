import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
// import useFireBase from '../../../Hooks/useFireBase';

const DashBoardHome = () => {
    const { user } = useAuth();
    // Popup
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Data Load
    const [orderItems, setOrderItems] = useState([]);
    // const { orders, setOrders } = useFireBase();
    // console.log(orderItems)
    useEffect(() => {
        fetch(`https://secure-lowlands-87242.herokuapp.com/orders/${user.email}`)
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
            <h4 className="my-5 fw-bold text-danger">My Orders</h4>
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
                                <td><div className="col">
                                    <Button className="btn btn-danger text-center" onClick={handleShow}>
                                        Delete
                                    </Button>

                                    <Modal className="d-flex justify-content-between align-items-center" show={show} onHide={handleClose}>
                                        <Modal.Header className="" closeButton>
                                            <Modal.Title>Are You Sure ?</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="text-center text-left">
                                                <h6 className=" py-2">Price : {orderItems[0].price}</h6>
                                                <h6 className=" py-2">Items : {orderItems[0].totalQuantity}</h6>
                                                <h6 className=" py-2">Total : {orderItems[0].total}</h6>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="danger" onClick={handleClose}>
                                                Cancel
                                            </Button>
                                            <Button variant="primary" >
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

export default DashBoardHome;