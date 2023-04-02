"use client"

import React, {createContext, useContext, useState} from "react";
import toast, {Toaster} from "react-hot-toast";


const Context = createContext();

export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;
 
    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id);

        if (checkProductInCart) {
            setTotalPrice(totalPrice + product.price * quantity);
            setTotalQuantities(totalQuantities + quantity);

            const updatedCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })
            setCartItems(updatedCartItems);
        } else {
            product.quantity = quantity;
            setTotalQuantities(totalQuantities + quantity);
            setCartItems([...cartItems, {...product}]);
            setTotalPrice(totalPrice + product.price * quantity);
        }
        toast.success(`${quantity} of ${product.name} is added to the cart`);
    }


    const increaseQty = (e) => {
        e.preventDefault();
        setQty(qty + 1);
    }
    
    const decreaseQty = (e) => {
        e.preventDefault();
        setQty(qty -1 < 1 ? 1 : qty - 1);
    }

    const removeItem = (product) => {
        const newCartItems = cartItems.filter((item) => item._id !== product._id);
        setTotalPrice(totalPrice - product.price * product.quantity);
        setTotalQuantities(totalQuantities - product.quantity);
        setCartItems(newCartItems);
        toast.success(`${product?.name} removed from cart`);
    }

    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id === id);
        index = cartItems.findIndex((product) => product._id === id);
     
        const tempArr = cartItems;
        
        if (value === "inc") {
            tempArr[index].quantity += 1;
            setCartItems(tempArr);
            setTotalPrice(totalPrice + foundProduct.price);
            setTotalQuantities(totalQuantities + 1);
        } else if (value === "dec") {
            if(foundProduct.quantity > 1) {
                tempArr[index].quantity -= 1;
                setCartItems(tempArr);
                setTotalPrice(totalPrice - foundProduct.price);
                setTotalQuantities(totalQuantities - 1);
            }
        }
    }

 
    return (
        <Context.Provider value={{
            showCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            increaseQty,
            decreaseQty,
            onAdd,
            setShowCart,
            setQty,
            setTotalQuantities,
            toggleCartItemQuantity,
            removeItem,
            setCartItems,
            setTotalPrice,
        }}>
            {children}
        </Context.Provider>
    )

}

export const useStateContext = () => useContext(Context);

export default Toaster;