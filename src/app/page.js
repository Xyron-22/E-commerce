import { Inter } from 'next/font/google';
import {HeroBanner, Product, FooterBanner} from "@/components";
import "./animation.css";


async function getData () {
  const products = await fetch(process.env.NEXT_PUBLIC_SANITY_PRODUCTS, {cache: "no-store"})
  .then((response) => response.json());
 
  const bannerData = await fetch(process.env.NEXT_PUBLIC_SANITY_BANNERDATA, {cache: "no-store"})
  .then((response) => response.json());
  
  return {
    products,
    bannerData,
  }
}


export default async function Home() {
  
  const {products, bannerData} = await getData();
  const productsArr = products.result;
  const bannerDataArr = bannerData.result;
  
 
  return (
    <>
    <main className='max-w-[1400px] m-auto w-full'>
        <HeroBanner heroBanner={bannerDataArr?.length && bannerDataArr[0]}></HeroBanner>
        <div className='w-full text-center my-5' id="products">
          <h2 className='text-6xl font-bold font-anton text-fc'>Best Selling Products</h2>
          <p className='text-2xl leading-loose'>Clothes of many variations</p>
        </div>
        <div className='flex justify-center flex-wrap lg:w-full'>
          {productsArr.map((product) => <Product key={product._id} product={product}></Product>)}
        </div>
        <FooterBanner footerBanner={bannerDataArr && bannerDataArr[0]}></FooterBanner>
    </main>
    </>
  )
}

