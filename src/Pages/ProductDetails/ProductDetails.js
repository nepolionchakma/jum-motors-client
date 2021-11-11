import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router';
import useCart from '../../Hooks/useCart';
import Cart from '../Cart/Cart';

const ProductDetails = () => {
    const { _id } = useParams();
    const [product, setProduct] = useState();
    const [cart, setCart, handleCart] = useCart()
    useEffect(() => {
        fetch(`https://secure-lowlands-87242.herokuapp.com/products/${_id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [_id])

    // Popup
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const added = () => {
        handleCart(product);
        handleClose();
    }

    return (
        <div className="my-3">
            <h2>Product Details</h2>
            {
                product?.name ?
                    <div className="row m-0 my-3">
                        <div className="col-lg-4">
                            <div>
                                <h5>{product.name}</h5>
                                <img className="w-100" src={product.img} alt="" />
                                <h6>{product.id}</h6>
                                <h6>{product.details}</h6>
                                <>
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
                                </>

                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div>
                                <Cart
                                    cart={cart}
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