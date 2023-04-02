import {AiFillStar} from "react-icons/ai";
import { Product, ImageProfile, Quantity, AddProduct, Toaster } from "@/components";
// import { Toaster } from "react-hot-toast";
import "../../animation.css";


export const dynamicParams = true;

export async function generateStaticParams () {
     
    const products = await fetch(process.env.NEXT_PUBLIC_SANITY_PRODUCTS)
    .then((response) => response.json());
  
    return products.result.map((product) => ({
        slug: product.slug.current,
    }));
 }

 const getPost = async (params) => {

    const {slug} = params;
 
    const product = await fetch(process.env.NEXT_PUBLIC_SANITY_PRODUCTS.concat(`[slug.current == "${slug}"]`))
    .then((response) => response.json());

    const products = await fetch(process.env.NEXT_PUBLIC_SANITY_PRODUCTS)
    .then((response) => response.json());

    return {
        product,
        products
    }
 }


const ProductDetails = async ({params}) => {

    const {product: {result}, products} = await getPost(params);

    const product = result[0];
    const {details, name, image, price} = product;

    return (         
        <div>
        <Toaster></Toaster>
            <div className="flex gap-10 mx-2 text-fc flex-wrap">
                <div className="w-full">
                    <ImageProfile image={image}></ImageProfile>
                    <div className="">
                        <h1>{name}</h1>
                        <div className="text-red mt-2.5 flex gap-1 items-center">
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                        </div>
                        <p className="mt-2.5">
                            (20)
                        </p>
                    </div>
                    <h4 className="mt-2.5">Details:</h4>
                    <p className="mt-2.5">{details}</p>
                    <p className="mt-2.5 text-gray font-bold text-2xl">${price}</p>
                    <div className="flex gap-5 mt-2.5 items-center">
                        <h3>Quantity:</h3>
                        <Quantity></Quantity>
                    </div>
                    <AddProduct product={product}></AddProduct>
                </div>
                <div className="mt-32 w-screen">
                    <h2>You may also like</h2>
                    <div className="relative w-full  h-[400px] overflow-x-hidden">
                        <div className="flex justify-center gap-4 mt-5 track sm:w-[180%] md:w-[90%] xl:w-[40%]">
                            {products.result?.map((product) => {
                                return (
                                    <Product key={product._id} product={product}></Product>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;