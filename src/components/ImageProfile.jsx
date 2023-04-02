import React, {useState} from "react";
import Image from "next/image";
import { urlFor } from "../../lib/client";


const ImageProfile = ({image}) => {

    const [index, setIndex] = useState(0);

    return (
    <>
        <div className="flex justify-center">
            <div className="flex justify-center h-96 w-[500px] rounded-2xl bg-ws">
                <Image src={urlFor(image && image[index]).url()} width={400} height={350} alt="image for individual product" className="object-contain"></Image>
            </div>
        </div>
        <div className="flex gap-2.5 mt-5 flex-wrap justify-center">
        {image?.map((image, i) => {
            return (
                <div className="rounded-2xl flex justify-center items-center w-40 h-40 bg-ws hover:bg-red transition duration-500 delay-75 ease-in-out" key={image._key}>
                    <Image onMouseEnter={() => setIndex(i)} src={urlFor(image).url()} width={90} height={200} alt="other images" className="object-contain"></Image> 
                </div>
            )
        })}
        </div>
    </>
    )
}

export default ImageProfile;