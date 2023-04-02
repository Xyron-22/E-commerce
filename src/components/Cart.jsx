import React, {useRef} from "react";
import Link from "next/link";
import Image from "next/image";
import {AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping} from "react-icons/Ai";
import {TiDeleteOutline} from "react-icons/Ti";
import { toast } from "react-hot-toast";
import { urlFor } from "../../lib/client";
import getStripe from "../../lib/getStripe";

import { useStateContext } from "../../context/stateContext";

const Cart = () => {
    const cartRef = useRef();
    const {totalPrice, totalQuantities, cartItems, setShowCart, showCart, toggleCartItemQuantity, removeItem} = useStateContext();
       
    const handdleCheckout = async () => {
        const stripe = await getStripe();

        const response = await fetch("/stripe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cartItems),
        });

        if(response.statusCode === 500) return;

        const data = await response.json();

        console.log(data);

        toast.loading("Redirecting...");

        stripe.redirectToCheckout({ sessionId: data.id});
    }


    return (
        <div className="w-screen bg-cartBg/50 fixed right-[0] top-[0] z-[100] transition-all duration-1000 ease-in-out" ref={cartRef}>
            <div className="h-screen w-screen md:w-[600px] bg-white float-right md:py-10 md:px-2.5 relative">
                <button type="button" className="flex items-center text-lg font-medium cursor-pointer gap-0.5 ml-2.5 border-none bg-transparent" onClick={() =>  setShowCart(!showCart)}>
                    <AiOutlineLeft></AiOutlineLeft>
                    <span className="ml-2.5">Your Cart</span>
                    <span className="ml-2.5 text-red">({totalQuantities} items)</span>
                </button>
                {cartItems.length < 1 && (
                    <div className="m-10 text-center">
                        <AiOutlineShopping size={150} className="m-auto"></AiOutlineShopping>
                        <h3 className="font-semibold text-xl">Your Shopping bag is empty</h3>
                        <Link href="/">
                            <button type="button" onClick={() => setShowCart(!showCart)} className="w-full max-w-sm py-2.5 px-3 rounded-2xl border-none text-xl mt-2.5 mt-10 uppercase bg-red text-white cursor-pointer scale-x-100 scale-y-100 transition-transform  duration-500 ease-in-out hover:scale-x-110 hover:scale-y-110">Home</button>
                        </Link>
                    </div>
                )}
                <div className="mt-4 overflow-auto max-h-[70v] md:py-5 md:px-2.5 flex flex-wrap">    
                    {cartItems.length >= 1 && cartItems.map((item) => (
                        <div className="mt-4 flex gap-7 p-5" key={item._id}>
                            <div className="flex rounded-2xl justify-center items-center md:w-40 md:h-40 bg-ws hover:bg-red transition duration-500 delay-75 ease-in-out">
                                <Image src={urlFor(item?.image[0]).url()} width={90} height={200} className="object-contain"></Image>
                            </div>
                            <div>
                                <div className="">
                                    <h5>{item.name}</h5>
                                    <h4>${item.price}</h4>
                                </div>
                                <div className="flex w-40 justify-between">
                                    <div>
                                        <p className="flex items-center border-solid border-gray border">
                                            <span onClick={() => toggleCartItemQuantity(item._id, "dec")} className=" text-base py-1.5 px-3 cursor-pointer text-red border-r border-solid border-gray"><AiOutlineMinus></AiOutlineMinus></span>
                                            <span className=" text-base py-1.5 px-3">{item.quantity}</span>
                                            <span onClick={() => toggleCartItemQuantity(item._id, "inc")} className=" text-base py-1.5 px-3 cursor-pointer text-green border-l border-solid border-gray"><AiOutlinePlus></AiOutlinePlus></span>
                                        </p>
                                    </div>
                                    <button type="button" className="text-2xl text-red cursor-pointer bg-transparent border-none" onClick={() => removeItem(item)}>
                                            <TiDeleteOutline></TiDeleteOutline>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {cartItems.length >= 1 && (
                    <div className="absolute bottom-3 w-full py-7 px-16">
                        <div>
                            <h3>Subtotal:</h3>
                            <h3>${totalPrice}</h3>
                        </div>
                        <div className="w-[100%] m-auto">
                            <button type="button" className="w-full md:w-full py-2.5 px-5 border border-solid border-red mt-10 text-lg font-medium bg-red text-white cursor-pointer w-48 scale-y-100 scale-x-100 ease-in duration-150 hover:scale-y-110 hover:scale-x-110" onClick={handdleCheckout}>
                                Pay with Stripe
                            </button>
                        </div>
                    </div>
                )}
            </div>
            
        </div>
    )
};

export default Cart;