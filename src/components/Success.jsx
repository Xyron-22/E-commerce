import React, {useEffect} from "react";
import Link from "next/link";
import {BsFillBagCheckFill} from "react-icons/bs";

import { useStateContext } from "../../context/stateContext";

const SuccessComponent = () => {

    const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
    }, [])

    return(
        <div>
            <div className="w-screen m-auto mt-40 bg-ws py-12 px-12 rounded-2xl flex justify-center items-center flex-col success, .cancel text-center">
                <p className="text-green text-4xl">
                    <BsFillBagCheckFill></BsFillBagCheckFill>
                </p>
                <h2 className="capitalize mt-[15px] font-black text-[40px] text-fc">
                    Thank You For Your Order!
                </h2>
                <p className="text-[16px] font-semibold text-center">
                    Check your email inbox for the receipt
                </p>
                <p className="text-[16px] font-semibol text-center m-2.5 mt-7">
                    If you have any questions, please email 
                    <a className="ml-[5px] text-red" href="mailto:XyronUySoftware@gmail.com">
                    XyronUySoftware@gmail.com
                    </a>
                </p>
                <Link href="/">
                    <button type="button" className="w-[300px] w-36 py-2.5 px-5 border border-solid border-red mt-10 text-lg font-medium bg-red text-white cursor-pointer w-48 scale-y-100 scale-x-100 ease-in duration-150 hover:scale-y-110 hover:scale-x-110">
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    )
}


export default SuccessComponent;