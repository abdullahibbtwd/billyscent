"use client"
import { assets } from "@/app/assets/assets"
import ProductCard from "@/components/PruductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

//import Loading from "@/components/Loading";

import { useParams } from "next/navigation";
import { useContext,} from "react";
import { ProductContext } from "@/context/AppContext";
import Link from "next/link";
import { products } from "@/app/data";
import { useRouter } from "next/navigation";





const Product   =   () => {
    const { id } = useParams<{id:string}>();
    const router = useRouter()
    const {getProductById,addToCart } = useContext(ProductContext)
    const product = getProductById(id!)

    if(!product) {
        return(
            <div>
                <h2>Product not found</h2>
                <Link href="/"> Back home</Link>
            </div>
        )
    }
   
    return (
        <>
        <Navbar />
        <div className="px-6 md:px-16 lg:px-32 pt-14 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="px-5 lg:px-16 xl:px-20">
                    <div className="rounded-lg overflow-hidden bg-gray-500/10 mb-4">
                    {
                        product.image.map((image,index)=>(
                            <Image
                            key={index}
                            src={image}
                            alt="alt"
                            className="w-full h-auto object-cover mix-blend-multiply"
                            width={1280}
                            height={720}
                        />
                        ))
                    }
                        
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        {/* {products.map((image, index) => (
                            <div
                                key={index}
                            //  onClick={() => setMainImage(image)}
                                className="cursor-pointer rounded-lg overflow-hidden bg-gray-500/10"
                            >
                                <Image
                                    src={image.image[0]}
                                    alt="alt"
                                    className="w-full h-auto object-cover mix-blend-multiply"
                                    width={1280}
                                    height={720}
                                />
                            </div>

                        ))} */}
                    </div>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-2xl font-medium text-gray-800/90 mb-4">
                        {product.name}
                    </h1>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                            <Image className="h-3 w-3" src={assets.star_icon} alt="star_icon" />
                            <Image className="h-3 w-3" src={assets.star_icon} alt="star_icon" />
                            <Image className="h-3 w-3" src={assets.star_icon} alt="star_icon" />
                            <Image className="h-3 w-3" src={assets.star_icon} alt="star_icon" />
                            <Image
                                className="h-3 w-3"
                                src={assets.star_dull_icon}
                                alt="star_dull_icon"
                            />
                        </div>
                        <p className="text-[14px]">(4.5)</p>
                    </div>
                    <p className="text-gray-600 text-[14px] mt-3">
                        {product.description}
                    </p>
                    <p className="text-[17px] font-medium mt-6">
                        ${product.offerPrice}
                        <span className="text-[17px] font-normal text-gray-800/60 line-through ml-2">
                            ${product.price}
                        </span>
                    </p>
                    <hr className="bg-gray-600 my-6" />
                    <div className="overflow-x-auto">
                        <table className="table-auto border-collapse w-full max-w-72">
                            <tbody>
                                <tr>
                                    <td className="text-gray-600 font-medium">Brand</td>
                                    <td className="text-gray-800/50 ">Generic</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-600 font-medium">Color</td>
                                    <td className="text-gray-800/50 ">Multi</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-600 font-medium">Category</td>
                                    <td className="text-gray-800/50">
                                        {product.category}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="flex items-center mt-6 gap-4">
                        <button
                         onClick={() => addToCart(product._id)}
                          className="w-full py-3.5 bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition">
                            Add to Cart
                        </button>
                        <button 
                        onClick={() => { addToCart(product._id); router.push('/cart') }} 
                        className="w-full  py-3.5 px-3 bg-green-500 text-white hover:bg-green-600 transition">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center mb-4 mt-16">
                    <p className="text-3xl font-medium">Featured <span className="font-medium text-green-600">Products</span></p>
                    <div className="w-28 h-0.5 bg-green-600 mt-2"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full">
                    {products.slice(0, 5).map((product, index) => <ProductCard key={index} products={product} />)}
                </div>
                <button className="px-8 py-2 mb-16 border rounded text-gray-500/70 hover:bg-slate-50/90 transition">
                    See more
                </button>
            </div>
        </div>
        <Footer />
    </>
    )      
};

export default Product;