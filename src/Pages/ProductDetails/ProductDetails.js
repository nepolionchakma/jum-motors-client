import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const { _id } = useParams();
    const [product, setProduct] = useState();
    console.log(product);
    useEffect(() => {
        fetch(`https://secure-lowlands-87242.herokuapp.com/products/${_id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [_id])
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
                                <button className="btn btn-danger"> Add Cart</button>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div>
                                <h4>here is cart</h4>
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