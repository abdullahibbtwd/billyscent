// 'use client'
// import { productsDummyData, userDummyData } from "@/app/assets/assets";
// //import { useUser } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
// import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

// export type Product = {
//   _id: string; 
//     userId: string;
//     name: string;
//     description: string;
//     price: number;
//     offerPrice: number;
//     image: string[];
//     category: string;
//     date: number;
//     __v: number;
// }


// interface ProductCardProps {
//     product: Product;
//     setProducts:Dispatch<SetStateAction<Product>>
//   }

// export const AppContext = createContext<Partial<ProductCardProps>>({});

// // export const useAppContext = () => {
// //     return useContext(AppContext)
// // }

// //     type AppContextProvide ={
// //         pruduct :ReactNode
// //     }
//   type ProductProvideProps = {
//         children:React.ReactNode
//     }
// export const AppContextProvider = ({children}:ProductProvideProps) => {

  
//    // const currency = process.env.NEXT_PUBLIC_CURRENCY
//     // const router = useRouter()


//   //  const {user} = useUser()

//     const [products, setProducts] = useState<Product>({})
//     // const [userData, setUserData] = useState(false)
//     // const [isSeller, setIsSeller] = useState(true)
//     // const [cartItems, setCartItems] = useState({})

//   n

//     // const fetchUserData = async () => {
//     //     setUserData(userDummyData)
//     // }

//     // const addToCart = async (itemId) => {

//     //     const cartData = structuredClone(cartItems);
//     //     if (cartData[itemId]) {
//     //         cartData[itemId] += 1;
//     //     }
//     //     else {
//     //         cartData[itemId] = 1;
//     //     }
//     //     setCartItems(cartData);

//     // }

//     // const updateCartQuantity = async (itemId, quantity) => {

//     //     const cartData = structuredClone(cartItems);
//     //     if (quantity === 0) {
//     //         delete cartData[itemId];
//     //     } else {
//     //         cartData[itemId] = quantity;
//     //     }
//     //     setCartItems(cartData)

//     // }

//     // const getCartCount = () => {
//     //     let totalCount = 0;
//     //     for (const items in cartItems) {
//     //         if (cartItems[items] > 0) {
//     //             totalCount += cartItems[items];
//     //         }
//     //     }
//     //     return totalCount;
//     // }

//     // const getCartAmount = () => {
//     //     let totalAmount = 0;
//     //     for (const items in cartItems) {
//     //         const itemInfo = products.find((product) => product._id === items);
//     //         if (cartItems[items] > 0) {
//     //             totalAmount += itemInfo.offerPrice * cartItems[items];
//     //         }
//     //     }
//     //     return Math.floor(totalAmount * 100) / 100;
//     // }

//     // useEffect(() => {
//     //     fetchProductData()
//     // }, [])

//     // useEffect(() => {
//     //     fetchUserData()
//     // }, [])

//     // const value = {
//     //    router,
//     //     isSeller, setIsSeller,
//     //     userData, fetchUserData,
//     //     products, fetchProductData,
//     //     cartItems, setCartItems,
//     //     addToCart, updateCartQuantity,
//     //     getCartCount, getCartAmount
//     // }
//     const value= {
//         products,setProducts,
//         fetchProductData
//     }

//     return (
//         <AppContext.Provider value={value}>
//             {children}
//         </AppContext.Provider>
//     )
// }
"use client"
import React,{createContext,ReactNode, useMemo, useState} from 'react'

import {Product, products} from '@/app/data'

interface CartItem extends Product{
    quantity:number
    price:number
}
interface ProductContextType {
    products :Product[];
    getProductById:(_id:string) => Product | undefined;
    cartItems:CartItem[];
    totalPrice:number;
    totalItems:number;
    addToCart:(productId:string)=>void;
    increamentQuantity:(productId:string)=>void;
    decreamentQuantity:(productId:string)=>void;



}

export const ProductContext = createContext<ProductContextType>({}as ProductContextType);

//    const [userData, setUserData] = useState(false)
    // const [isSeller, setIsSeller] = useState(true)
    
export const ProductProvider  = ({children}:{children:ReactNode}) => {
      const [cartItems, setCartItems] = useState<CartItem[]>([])
    
    const getProductById = (_id:string)=>{
            return products.find(product=>product._id === _id);
        };

        const totalPrice =useMemo(()=>cartItems.reduce((total,item) => total + item.price*item.quantity,0),[cartItems]);
        const totalItems = useMemo(()=> cartItems.reduce((total,item) => total + item.quantity,0),[cartItems])
        const addToCart = (productId:string)=>{
            const product =getProductById(productId);

            if(!product) return;
            setCartItems(prev => {
                const existingItems = prev.find(item => item._id === productId);
                return existingItems
                ? prev.map(item => 
                    item._id === productId
                    ?{...item,quantity:item.quantity +1}:item
                ):[...prev, {...product,quantity:1}]
            })
        }

     const increamentQuantity =(productId:string) => {
        setCartItems(prev => 
            prev.map(item => 
                item._id === productId
            ?{...item,quantity:item.quantity + 1}:item
            )
        )
     }
        const decreamentQuantity = (productId:string) => {
            setCartItems(prev =>{
                const existingItems=prev.find(item=> item._id === productId);
                if(existingItems?.quantity===1){
                    return prev.filter(item=> item._id !== productId)
                }
                return prev.map(items=>
                    items._id === productId 
                    ?{...items, quantity: Math.max(0,items.quantity -1)}:items
                )
            })
        }

  
return(
<ProductContext.Provider value={{
    products,
    getProductById,
    cartItems,
    totalItems,
    totalPrice,
    addToCart,
    increamentQuantity,
    decreamentQuantity

}}>
    {children}
</ProductContext.Provider>
)
}
