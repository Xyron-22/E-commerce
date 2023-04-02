import React from "react";
import Link from "next/link";
import Image from "next/image";

import { urlFor } from "../../lib/client";

const FooterBanner = ({footerBanner}) => {

    const {discount, desc, largeText1, largeText2, midText, saleTime, smallText, buttonText, product, image} = footerBanner;

    return (
        <div className="py-24 px-10 bg-red rounded-2xl relative w-full leading-none mt-28 text-white lg:h-fit">
            <div className="flex justify-between flex-wrap">
                <div>
                    <p className="my-4 mx-4">{discount}</p>
                    <h3  className="font-black text-7xl">{largeText1}</h3>
                    <h3  className="font-black text-7xl">{largeText2}</h3>
                    <p className="my-4 mx-4">{saleTime}</p>
                </div>
                <Image src={urlFor(image).url()} width={200} height={200} className="object-contain hidden lg:block lg:w-72"></Image>
                <div className="leading-snug">
                    <p className="text-lg">{smallText}</p>
                    <h3 className="font-extrabold text-6xl">{midText}</h3>
                    <p className="text-lg">{desc}</p>
                    <Link href={`/product/${product}`}>
                        <button type="button">
                            {buttonText}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default FooterBanner;