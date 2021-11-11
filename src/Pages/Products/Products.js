import React from 'react';
import useFireBase from '../../Hooks/useFireBase';
import Product from '../Product/Product';


const Products = () => {

    // Destructuring Data
    const { products } = useFireBase()
    // console.log(products)
    const sliceData = products.slice(0, 8);

    return (
        <div>
            <h2 className="mt-3">products</h2>
            <h5> all</h5>
            {
                sliceData.length === 0 ?
                    <div className="d-flex justify-content-center py-5">
                        <div className="spinner-border  text-warning" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>
                    :
                    <div className="row m-0">
                        {
                            sliceData.map(product =>
                                <Product
                                    key={product._id}
                                    product={product}
                                >
                                </Product>
                            )
                        }
                    </div>
            }
        </div>
    );
};

export default Products;