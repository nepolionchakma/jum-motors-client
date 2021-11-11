import { useState, useEffect } from 'react';
import { addToDb, getStoredCart } from '../FakeDB/fakeDB';
import useFireBase from './useFireBase';


const useCart = () => {
    const [cart, setCart] = useState([]);
    const { services } = useFireBase();
    useEffect(() => {
        const savedCart = getStoredCart();
        if (services.length) {
            const storedCart = [];
            for (const _id in savedCart) {
                const addedProduct = services.find(service => service._id === _id);
                if (addedProduct) {
                    // set quantity
                    const quantity = savedCart[_id];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
        // })


    }, [services]);




    const handleCart = (service) => {
        const newCart = [...cart, service];
        setCart(newCart);
        // local storage
        addToDb(service._id);
    }
    // const handleRemove = id => {
    //     const newCart = cart.find(service => service._id !== _id);
    //     setCart(newCart);
    //     removeFromDb(id);
    // }

    return [cart, setCart, handleCart];
}

export default useCart;