import React from "react";
import { useStateContext } from "../../context/stateContext";

const AddProduct = ({product}) => {

    const {onAdd, qty, setShowCart, showCart} = useStateContext();
 
    const handleBuyNow = () => {
        onAdd(product, qty);

        setShowCart(!showCart);
    }

    return (
        <div className="flex gap-7">
            <button onClick={() => onAdd(product, qty)} type="button" className="w-36 py-2.5 px-5 border border-solid border-red mt-10 text-lg font-medium bg-white text-red cursor-pointer w-48 scale-y-100 scale-x-100 ease-in duration-150 hover:scale-y-110 hover:scale-x-110">Add to Cart</button>
            <button onClick={handleBuyNow} type="button" className="w-36 py-2.5 px-5 border border-solid border-red mt-10 text-lg font-medium bg-red text-white cursor-pointer w-48 scale-y-100 scale-x-100 ease-in duration-150 hover:scale-y-110 hover:scale-x-110">Buy Now</button>
        </div>
    )
}

export default AddProduct;