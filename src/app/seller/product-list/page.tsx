'use client'
import React  from "react";
import {  Product, products } from "@/app/data";
import Image from "next/image";
import {assets} from "@/app/assets/assets"
import Footer from "@/components/seller/Footer";

import { useRouter } from "next/navigation";

const ProductList = () => {

  const  router  = useRouter()

  // const [product, setProduct] = useState([])
  // const [loading, setLoading] = useState(true)

  // const fetchSellerProduct = async () => {
  //   setProduct(products)
  //   setLoading(false)
  // }

  // useEffect(() => {
  //   fetchSellerProduct();
  // }, [])

  return (
    <div className="flex-1 min-h-screen flex flex-col justify-between">
       <div className="w-full md:p-10 p-4">
        <h2 className="pb-4 text-lg font-medium">All Product</h2>
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          <table className=" table-fixed w-full overflow-hidden">
            <thead className="text-gray-900 text-sm text-left">
              <tr>
                <th className="w-2/3 md:w-2/5 px-4 py-3 font-medium truncate">Product</th>
                <th className="px-4 py-3 font-medium truncate max-sm:hidden">Category</th>
                <th className="px-4 py-3 font-medium truncate">
                  Price
                </th>
                <th className="px-4 py-3 font-medium truncate max-sm:hidden">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-500">
              {products.map(( index :Product)  => (
                <tr key={index._id} className="border-t border-gray-500/20">
                  <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                    <div className="bg-gray-500/10 rounded p-2">
                      <Image
                        src={index.image[0]}
                        alt="product Image"
                        className="w-16"
                        width={1280}
                        height={720}
                      />
                    </div>
                    <span className="truncate w-full">
                      {index.name}
                    </span>
                  </td>
                  <td className="px-4 py-3 max-sm:hidden">{index.category}</td>
                  <td className="px-4 py-3">${index.offerPrice}</td>
                  <td className="px-4 py-3 max-sm:hidden">
                    <button onClick={() => router.push(`/product/${index._id}`)} className="flex items-center text-[14px] gap-1 px-1.5 md:px-3.5 py-2 bg-green-600 text-white rounded-md">
                      <span className="hidden md:block">Visit</span>
                      <Image
                        className="h-3.5"
                        src={assets.redirect_icon}
                        alt="redirect_icon"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;