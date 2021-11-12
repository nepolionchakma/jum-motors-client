import React from 'react';

const OrderItems = (props) => {
    const { name, price, img, _id, details, year, fuel, rating } = props.product;
    return (
        <div className="row text-start">
            <div className="col-lg-10">
                <p>{name}</p>
            </div>
            <div className="col-lg-2">
                <img className="w-100" src={img} alt="" />
            </div>
        </div>
    );
};

export default OrderItems;