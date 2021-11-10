import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    // all fake data
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("./fakeData.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <h2 className="mt-3">products</h2>
            <Container>
                <div className="row m-0">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                        >

                        </Product>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Products;