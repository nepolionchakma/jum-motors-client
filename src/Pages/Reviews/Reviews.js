import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';


const Reviews = () => {
    const [products, setproducts] = useState([]);


    useEffect(() => {
        fetch("./fakeRating.json")
            .then(res => res.json())
            .then(data => setproducts(data))
    }, []);
    return (
        <div>
            <Container>
                <div className="row m-0">
                    {
                        products.map(rating =>
                            <div className="col-lg-3">


                                <h5>{rating.name}</h5>
                                <h5>{rating.rating}</h5>
                                <h5>{ }</h5>
                            </div>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Reviews;