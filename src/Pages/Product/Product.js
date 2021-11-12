import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Product.css";
import { faClock, faLocationArrow, faTrafficLight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudflare } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const Product = (props) => {
    const { name, price, img, _id, details, year, fuel, rating } = props.product;
    console.log(props)
    return (
        <div className="col-lg-3 my-3 text-start p-2">
            <div className="border p-3">
                <img className="w-100 my-2" src={img} alt="" />
                <h3>{name}</h3>
                <p className="limit-4 text-muted">{details}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <h6><FontAwesomeIcon className="text-warning" icon={faClock} /> {year}</h6>
                    <h6><FontAwesomeIcon className="text-warning" icon={faLocationArrow} /> {fuel}</h6>
                    <h4><FontAwesomeIcon className="text-warning" icon={faTrafficLight} /> {price}</h4>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/products/${_id}`}><Button className="btn btn-danger">Purchase Now</Button></Link>
                    <span><FontAwesomeIcon className="text-warning" icon={faStar} /> {rating}</span>
                </div>
            </div>
        </div>
    );
};


export default Product;