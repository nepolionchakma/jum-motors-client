import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router';
import useCart from '../../Hooks/useCart';
import { removeFromDb, clearTheCart } from '../../LocalDataBase/LocalDataBase';
import Cart from '../Cart/Cart';
import Reviews from '../Reviews/Reviews';

const ProductDetails = () => {
    const { _id } = useParams();
    const [product, setProduct] = useState();
    const [cart, setCart, handleCart] = useCart();

    useEffect(() => {
        fetch(`https://secure-lowlands-87242.herokuapp.com/products/${_id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [_id])

    // Popup
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showRemove, setShowRemove] = useState(false);
    const handleCloseRemove = () => setShowRemove(false);
    const handleShowRemove = () => setShowRemove(true);



    const added = () => {
        handleCart(product);
        handleClose();
    }
    const handleRemove = _id => {
        const newCart = cart.filter(product => product._id !== _id)
        console.log(newCart)
        setCart(newCart);
        removeFromDb(product);
        clearTheCart();
        handleCloseRemove();
    }

    return (
        <div className="my-3">
            <h2 className="my-3">Product Details</h2>
            {
                product?.name ?
                    <div className="row m-0 my-3">
                        <div className="col-lg-8">
                            <div className="row py-3 text-start">
                                <div className="col-lg-4 d-flex justify-content-between align-items-center">
                                    <img className="w-100" src={product.img} alt="" />
                                </div>
                                <div className="col-lg-8 ">
                                    <h4 className="my-2">{product.name}</h4>
                                    <h6 className="text-muted">{product.details}</h6>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h6>{product.year}</h6>
                                        <h6>{product.fuel}</h6>
                                        <h6>{product.price}</h6>
                                    </div>

                                    <div>
                                        <Button className="btn btn-success " onClick={handleShow}>
                                            Add Cart
                                        </Button>

                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Are You Sure ?</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div>
                                                    <h2 className="text-start py-2">{product.name}</h2>
                                                    <img className="w-100" src={product.img} alt="" />
                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="danger" onClick={handleClose}>
                                                    Cancel
                                                </Button>
                                                <Button variant="primary" onClick={added}>
                                                    add
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                    <div>
                                        <Button className="btn btn-success " onClick={handleShowRemove}>
                                            Remove
                                        </Button>

                                        <Modal show={showRemove} onHide={handleCloseRemove}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Are You Sure ?</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div>
                                                    <h2 className="text-start py-2">{product.name}</h2>
                                                    <img className="w-100" src={product.img} alt="" />
                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="danger" onClick={handleCloseRemove}>
                                                    No
                                                </Button>
                                                <Button variant="primary" onClick={handleRemove}>
                                                    Yes
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                <Reviews></Reviews>

                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div>
                                <Cart
                                    key={product._id}
                                    cart={cart}
                                    product={product}
                                ></Cart>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="d-flex justify-content-center py-5">
                        <div className="spinner-border  text-warning" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>
            }
        </div>
    );
};

export default ProductDetails;