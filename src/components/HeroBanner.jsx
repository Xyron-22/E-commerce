import React from "react";
import Image from "next/image";

import { urlFor } from "../../lib/client";

const HeroBanner = ({heroBanner}) => {
        

    return (
        <div className="container-fluid h-96 relative rounded-2xl" style={{background: "linear-gradient(45deg, #f02d34, #f02d34 50%, #dcdcdc 50%, #dcdcdc)"}}>
            <div className="pl-4 lg:pl-9 pt-4">
                <p>{heroBanner.smallText}</p>
                <h3 className="text-5xl">{heroBanner.midText}</h3>
                <h1 className="text-9xl font-anton lg:text-white">{heroBanner.largeText1}</h1>
            </div>
                <Image src={urlFor(heroBanner.image).url()} alt="T-shirt" width={250} height={250} className="rounded-2xl object-contain absolute top-[0] right-[20%] hidden lg:block"></Image>
                <div className="pl-4 lg:pl-9 pt-4">
                   <a href="#products">
                        <button className="text-black bg-white w-48 font-bold" type="button">{heroBanner.buttonText}</button>
                    </a>
                    <div>
                        <h5>Our Store offers one of the best quality of Clothing and Tumblers</h5>
                        <p>{heroBanner.desc}</p>
                    </div>
                </div>
        </div>
    )
};

export default HeroBanner;