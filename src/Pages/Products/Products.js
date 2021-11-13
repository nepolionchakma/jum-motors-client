import React from 'react';
import useFireBase from '../../Hooks/useFireBase';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';


const Products = () => {

    // Destructuring Data
    const { products } = useFireBase()
    const sliceData = products.slice(0, 6);
    return (
        <div className="container py-5">
            <h2 className="mt-3 fw-bold text-danger">Featured Items</h2>
            {
                sliceData.length === 0 ?
                    <div className="d-flex justify-content-center py-5">
                        <div className="spinner-border  text-warning" role="status">

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
            <Link className="btn btn-danger" to="/cars">Explore All Cars</Link>
        </div>
    );
};

export default Products;