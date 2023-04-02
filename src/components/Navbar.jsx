import React, { useEffect } from "react";
import Link from "next/link";
import {FiShoppingCart} from "react-icons/fi";
import { Cart } from ".";
import { useStateContext } from "../../context/stateContext";

const Navbar = () => {

    const {showCart, setShowCart, totalQuantities, setCartItems, setTotalQuantities, setTotalPrice, cartItems, totalPrice}= useStateContext();

    useEffect(() => {
        if(localStorage.getItem("product")) {
            setCartItems(JSON.parse(localStorage.getItem("product")).items);
            setTotalQuantities(JSON.parse(localStorage.getItem("product")).quantity);
            setTotalPrice(JSON.parse(localStorage.getItem("product")).price);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("product", JSON.stringify({quantity: totalQuantities, price: totalPrice, items: cartItems}));
    }, [cartItems, totalPrice, totalQuantities])
  
    
    const closeCart = (e) => {
        if (e.keyCode === 27) {
            setShowCart(!showCart);
        }
    }
 
    return (
        <div className="flex justify-between my-1.5 mx-4 relative">
            <p className="text-lg text-gray">
                <Link href={"/"}>Browse Products</Link>
            </p>
            <button  tabIndex={0} onKeyDown={(e) => closeCart(e)} onClick={() => setShowCart(!showCart)} type="button" className="flex text-2xl text-gray cursor-pointer relative transition-transform duration-300 ease-linear hover:scale-x-110 hover:scale-y-110 bg-transparent mt-1.5">
                <FiShoppingCart className="text-2xl"></FiShoppingCart>
                <span className="absolute right-[-8px] text-sc bg-sbg w-4 h-4 rounded-[50%] text-center font-semibold text-xs">{totalQuantities}</span>
            </button>
            {showCart && <Cart></Cart>}
        </div>
    )
};

export default Navbar;