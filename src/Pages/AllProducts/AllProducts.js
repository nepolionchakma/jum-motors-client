import React from 'react';
import useFireBase from '../../Hooks/useFireBase';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';


const AllProducts = () => {

    // Destructuring Data
    const { products } = useFireBase()
    return (
        <div>
            <div className="container py-5">
                <h2 className="mt-3 text-danger fw-bold">All Cars</h2>
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
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;