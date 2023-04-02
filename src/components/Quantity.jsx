import React from "react";
import { useStateContext } from "../../context/stateContext";
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/Ai";

const Quantity = () => {

    const {increaseQty, decreaseQty, qty} = useStateContext();
    
    return (
        <p className="flex items-center border-solid border-gray border">
            <span onClick={(e) => decreaseQty(e)} className=" text-base py-1.5 px-3 cursor-pointer text-red border-r border-solid border-gray"><AiOutlineMinusCircle></AiOutlineMinusCircle></span>
            <span className=" text-base py-1.5 px-3">{qty}</span>
            <span onClick={(e) => increaseQty(e)} className=" text-base py-1.5 px-3 cursor-pointer text-green border-l border-solid border-gray"><AiOutlinePlusCircle></AiOutlinePlusCircle></span>
        </p>
    )
}

export default Quantity;