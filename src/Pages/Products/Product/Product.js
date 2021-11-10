import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, price, img, id } = props.product
    return (
        <div className="col-lg-3 my-3">
            <h4>{name}</h4>
            <img className="w-100" src={img} alt="" />
            <h4>{price}</h4>

            <Link to={`/product-details/${id}`}><Button className="btn btn-danger">Purchase Now</Button></Link>
        </div>
    );
};

export default Product;