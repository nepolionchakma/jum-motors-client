import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    console.log(product);
    useEffect(() => {
        fetch(`./fakeData.json/product-details/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    return (
        <div>
            {
                product?.name ?
                    <div className="d-flex justify-content-center py-5">
                        <div>
                            <h5>{product.name}</h5>
                            <img src={product.img} alt="" />
                            <h6>{product.id}</h6>
                        </div>
                    </div> :
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