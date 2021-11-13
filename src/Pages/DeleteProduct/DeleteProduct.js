import React from 'react';
import { Button } from 'react-bootstrap';
import useFireBase from '../../Hooks/useFireBase';

const DeleteProduct = () => {
    const { products, setProducts } = useFireBase();
    // const reload = () => {
    //     window.location.reload(false);
    // }
    const handleDelete = id => {

        const url = `https://secure-lowlands-87242.herokuapp.com/products/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = products.filter(product => products._id !== id);
                    setProducts(remaining);
                    // reload();
                }

            })
    }
    return (
        <div className="row">
            {
                products.map(product =>
                    <div
                        key={product._id}
                        className="my-3 col-lg-4"
                    >
                        <img className="w-100" src={product.img} alt="" />
                        <h5>{product.name}</h5>
                        <h5>{product.price}</h5>
                        <Button className="btn btn-danger" onClick={() => handleDelete(product._id)}>Delete</Button>
                    </div>
                )
            }
        </div>
    );
};

export default DeleteProduct;