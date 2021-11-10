import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';


const Reviews = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch("./fakeRating.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div>
            <Container>
                <div className="row m-0">
                    {
                        products.map(rating =>
                            <div className="col-lg-3"

                                key={rating.id}>


                                <h5>{rating.name}</h5>
                                <h5>{rating.rating}</h5>
                            </div>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Reviews;