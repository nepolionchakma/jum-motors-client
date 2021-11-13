import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Product.css";
import { faClock, faGasPump, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import "./Product.css"

const Product = (props) => {
    const { name, price, img, _id, details, year, fuel, rating } = props.product;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-3 text-start p-2 homeOffer">
            <div className="border p-3">
                <div className="homeOfferImg">
                    <img className="w-100 my-2" src={img} alt="" />
                </div>
                <h3>{name}</h3>

                <span><FontAwesomeIcon className="text-danger my-auto" icon={faClock} /> {year}</span>
                <span><FontAwesomeIcon className="text-danger mx-2" icon={faStar} /> {rating}</span>
                <p className="limit-4 text-muted">{details}</p>
                <div className="d-flex justify-content-between align-items-center border p-2">
                    <h6><FontAwesomeIcon className="text-danger" icon={faGasPump} /> {fuel}</h6>
                    <h4 className="text-danger fw-bold"><FontAwesomeIcon className="text-danger fw-bold" icon={faPaypal} /> {price}</h4>
                </div>
                <div className="d-flex justify-content-center align-items-center my-2">
                    <Link to={`/products/${_id}`}><Button className="btn btn-danger">Purchase Now</Button></Link>

                </div>
            </div>
        </div>
    );
};


export default Product;