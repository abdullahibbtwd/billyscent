import { addressDummyData } from "@/app/assets/assets";
import { ProductContext} from "@/context/AppContext";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const OrderSummary = () => {
    const router = useRouter()
  const {  totalItems, totalPrice } = useContext(ProductContext)
  //const [selectedAddress, setSelectedAddress] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [userAddresses, setUserAddresses] = useState([]);

  const fetchUserAddresses = async () => {
    setUserAddresses(addressDummyData);
  }

  // const handleAddressSelect = () => {
  //   setSelectedAddress(userAddresses);
  //   setIsDropdownOpen(false);
  // };

  const createOrder = async () => {

  }

  useEffect(() => {
    fetchUserAddresses();
  }, [])

  return (
    <div className="w-full md:w-96 bg-gray-500/5 p-3">
      <h2 className="text-[15px] md:text-[19px] font-medium text-gray-700">
        Order Summary
      </h2>
      <hr className="border-gray-500/30 my-2" />
      <div className="space-y-2">
        <div>
          <label className="text-[14px] font-medium uppercase text-gray-600 block mb-1">
            Select Address
          </label>
          <div className="relative inline-block w-full text-sm border">
            <button
              className="peer w-full text-left px-4 pr-2 py-2 bg-white text-gray-700 focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>
                {/* {selectedAddress
                  ? `${selectedAddress.fullName}, ${selectedAddress.area}, ${selectedAddress.city}, ${selectedAddress.state}`
                  : "Select Address"} */}
              </span>
              <svg className={`w-5 h-5 inline float-right transition-transform duration-200 ${isDropdownOpen ? "rotate-0" : "-rotate-90"}`}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6B7280"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <ul className="absolute w-full bg-white border shadow-md mt-1 z-10 py-1.5">
                {userAddresses.map((address, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-500/10 cursor-pointer"
                  //  onClick={() => handleAddressSelect(address)}
                  >
                    {/* {address.fullName}, {address.area}, {address.city}, {address.state} */}
                  </li>
                ))}
                <li
                  onClick={() => router.push("/add-address")}
                  className="px-4 py-2 hover:bg-gray-500/10 cursor-pointer text-center"
                >
                  + Add New Address
                </li>
              </ul>
            )}
          </div>
        </div>

        <div>
          <label className="text-[14px] font-medium uppercase text-gray-600 block mb-2">
            Promo Code
          </label>
          <div className="flex flex-col items-start gap-3">
            <input
              type="text"
              placeholder="Enter promo code"
              className="flex-grow w-full outline-none p-2 text-gray-600 border"
            />
            <button className="bg-green-600 text-white px-6  text-[14px] py-1 rounded-md hover:bg-green-700">
              Apply
            </button>
          </div>
        </div>

        <hr className="border-gray-500/30 my-5" />

        <div className="space-y-2">
          <div className="flex justify-between text-base font-medium">
            <p className="uppercase text-[14px] text-gray-600">Items {totalItems}</p>
            <p className="text-gray-800 text-[14px]">${totalPrice}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600  text-[14px]">Shipping Fee</p>
            <p className="font-medium text-[14px] text-gray-800">Free</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600 text-[14px]">Tax (2%)</p>
            <p className="font-medium text-[14px] text-gray-800">${Math.floor(totalPrice * 0.02)}</p>
          </div>
          <div className="flex justify-between text-[14px] md:text-[15px] font-bold border-t pt-1.5">
            <p>Total</p>
            <p>${totalPrice + Math.floor(totalItems * 0.02)}</p>
          </div>
        </div>
      </div>

      <button onClick={createOrder} className="w-full bg-green-600 text-white py-2 mt-2  rounded-md text-[15px] hover:bg-green-700">
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;