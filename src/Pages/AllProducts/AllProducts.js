import React from 'react';
import useFireBase from '../../Hooks/useFireBase';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';


const AllProducts = () => {

    // Destructuring Data
    const { products } = useFireBase()
    return (
        <div className="container py-5">
            <h2 className="mt-3">All Cars</h2>
            {
                products.length === 0 ?
                    <div className="d-flex justify-content-center py-5">
                        <div className="spinner-border  text-warning" role="status">

                        </div>
                    </div>
                    :
                    <div className="row m-0">
                        {
                            products.map(product =>
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

export default AllProducts;