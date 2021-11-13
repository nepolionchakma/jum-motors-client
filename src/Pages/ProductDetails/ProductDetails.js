import { faClock, faGasPump, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
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
        // console.log(newCart)
        setCart(newCart);
        removeFromDb(product);
        clearTheCart();
        handleCloseRemove();
    }

    return (
        <div className="my-3 container">
            <h2 className="my-3">Product Details</h2>
            {
                product?.name ?
                    <div className="row m-0 my-3">
                        <div className="col-lg-8 ">
                            <div className="row py-3 text-start border">
                                <div className="col-lg-4 d-flex justify-content-between align-items-center">
                                    <img className="w-100" src={product.img} alt="" />
                                </div>
                                <div className="col-lg-8 ">
                                    <h4 className="my-2 fw-bold">{product.name}</h4>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <h6><FontAwesomeIcon className="text-danger my-auto" icon={faClock} /> {product.year}</h6>
                                        <h6><FontAwesomeIcon className="text-danger" icon={faGasPump} /> {product.fuel}</h6>
                                        <h6><FontAwesomeIcon className="text-danger fw-bold" icon={faPaypal} />{product.price}</h6>
                                    </div>

                                    <div className="row  justify-content-evenly my-3">
                                        <div className="col">
                                            <Button className="btn btn-success text-center" onClick={handleShow}>
                                                Add Cart
                                            </Button>

                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Are You Sure ?</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className="text-center">
                                                        <h2 className=" py-2">{product.name}</h2>
                                                        <img className="w-50" src={product.img} alt="" />
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
                                        <div className="col">
                                            <Button className="btn btn-danger " onClick={handleShowRemove}>
                                                Remove
                                            </Button>

                                            <Modal show={showRemove} onHide={handleCloseRemove}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Are You Sure ?</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className="text-center">
                                                        <h2 className=" py-2">{product.name}</h2>
                                                        <img className="w-50" src={product.img} alt="" />
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
                                <h4>Details</h4>
                                <h6 className="text-muted ">{product.details}</h6>
                            </div>
                            <div className="row py-3 text-start border my-3">

                                <Reviews></Reviews>

                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div>
                                <Cart
                                    key={product._id}
                                    cart={cart}
                                    product={product}
                                    handleRemove={handleRemove}
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