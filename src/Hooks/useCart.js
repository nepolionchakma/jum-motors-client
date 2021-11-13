import { useState, useEffect } from 'react';
import { addToDb, getStoredCart } from '../LocalDataBase/LocalDataBase';
import useFireBase from './useFireBase';


const useCart = () => {
    const [cart, setCart] = useState([]);
    const { products } = useFireBase();
    useEffect(() => {
        const savedCart = getStoredCart();
        if (products.length) {
            const storedCart = [];
            for (const _id in savedCart) {
                const addedProduct = products.find(product => product._id === _id);
                if (addedProduct) {
                    // set quantity
                    const quantity = savedCart[_id];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products]);

    const handleCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // local storage
        addToDb(product._id);
    }



    return [cart, setCart, handleCart];
}

export default useCart;