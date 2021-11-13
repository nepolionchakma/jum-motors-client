import React from 'react';
import AddProduct from '../../AddProduct/AddProduct';
import useFireBase from '../../../Hooks/useFireBase';
import { faClock, faGasPump, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';

const ManageAllProducts = () => {
    const { products } = useFireBase()
    return (
        <div className="row">
            <div className="col-lg-6">
                <div className="">
                    <h2 className="mt-3">All Cars</h2>
                    {
                        products.length === 0 ?
                            <div className="d-flex justify-content-center py-5">
                                <div className="spinner-border  text-warning" role="status">

                                </div>
                            </div>
                            :
                            <div className="row m-0">
                                {
                                    products.map(product =>
                                        <div
                                            key={product._id}
                                            product={product}
                                            className=""
                                        >
                                            <div className="border p-3 my-2">
                                                <img className="w-100 my-2" src={product.img} alt="" />
                                                <h3>{product.name}</h3>

                                                <span><FontAwesomeIcon className="text-danger my-auto" icon={faClock} /> {product.year}</span>
                                                <span><FontAwesomeIcon className="text-danger mx-2" icon={faStar} /> {product.rating}</span>
                                                <p className="limit-4 text-muted">{product.details}</p>
                                                <div className="d-flex justify-content-between align-items-center border p-2">
                                                    <h6><FontAwesomeIcon className="text-danger" icon={faGasPump} /> {product.fuel}</h6>
                                                    <h4 className="text-danger fw-bold"><FontAwesomeIcon className="text-danger fw-bold" icon={faPaypal} /> {product.price}</h4>
                                                </div>
                                                <div className="d-flex justify-content-center align-items-center my-2">
                                                    <Link to={`/products/${product._id}`}><Button className="btn btn-danger">Purchase Now</Button></Link>

                                                </div>
                                            </div>
                                        </div>
                                    )
                                }

                            </div>
                    }
                </div>
            </div>
            <div className="col-lg-6">
                <AddProduct></AddProduct>
            </div>
        </div>
    );
};

export default ManageAllProducts;