"use client";
import React   from "react";
import { assets } from "@/app/assets/assets";
import Link from "next/link";

import Image from "next/image";
import { useRouter } from "next/navigation";



const Navbar = () => {
  
const router = useRouter()

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Image
        className="cursor-pointer w-28 md:w-45"
        width={200}
        height={10}
        src="/billy.png"
        alt="logo"
      />
      <div className="flex items-center gap-4 lg:gap-8">
        <Link href="/" className="hover:text-gray-900 transition hidden md:flex">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition hidden md:flex">
          Shop
        </Link>
        <Link href="/" className="hover:text-gray-900 transition hidden md:flex">
          About Us
        </Link>
        <Link href="/" className="hover:text-gray-900 transition hidden md:flex">
          Contact
        </Link>

     
          <button
          onClick={()=> router.push('/seller')}
           className="text-xs md:text-1xl border px-2 md:px-4  py-1.5 rounded-full">
            Seller Dashboard
          </button>
    
      </div>

      <ul className=" md:flex flex items-center gap-2 md:gap-4 ">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        
          <button
          
            className="flex items-center gap-2 hover:text-gray-900 transition"
          >
            <Image src={assets.user_icon} alt="user icon" />
             <p className="text-xs md:text-1xl hidden md:flex">
                Account
            </p>
          </button>
       
      </ul>
    </nav>
  );
};

export default Navbar;
