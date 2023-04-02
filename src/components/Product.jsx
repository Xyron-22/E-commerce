import React from "react";
import Link from "next/link";
import Image from "next/image";

import { urlFor } from "../../lib/client";


const Product = ({product: { image, name, slug, price}}) => {

    return (
        <div className="my-3 mx-3">
            <Link href={`/product/${slug.current}`} className="rounded-2xl">
                <div className="rounded-2xl scale-x-100 scale-y-100 hover:scale-x-110 hover:scale-y-110 transition transform w-screen h-80 md:w-60 lg:w-80 bg-ws hover:shadow-3xl">
                    <div className="flex justify-center align-center">
                    <Image src={urlFor(image && image[0]).url()} alt="image for the product" fill className="rounded-2xl object-contain"></Image>
                    </div>
                    <div className="absolute bottom-[5%] left-[5%]">
                    <p>{name}</p>
                    <p>${price}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
};

export default Product;