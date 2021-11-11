import React from 'react';
import DeleteProduct from '../DeleteProduct/DeleteProduct';
import AddProduct from '../AddProduct/AddProduct';

const ManageProducts = () => {
    return (
        <div className="row m-0 p-5">
            <div className="col-lg-6">
                <div className="">
                    <DeleteProduct></DeleteProduct>
                </div>
            </div>
            <div className="col-lg-6">
                <AddProduct></AddProduct>
            </div>

        </div>
    );
};

export default ManageProducts;