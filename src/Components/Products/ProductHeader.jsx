import React from "react";

function ProductHeader({ handleHeaderBtnClick, cartItems, headerBtn }) {
  return (
    <div className="flex flex-col gap-3 text-center py-10 mt-10 items-center">
      <h1 className="text-4xl lg:text-5xl font-semibold text-[#1e2336]">Premium Digital Tools</h1>
      <p className="text-sm lg:text-lg text-gray-500 max-w-2xl px-4">
        Choose from our curated collection of premium digital products designed<br className="hidden md:block"/> to boost your productivity and creativity.
      </p>
      
      <div className="flex items-center bg-white p-1 rounded-full border border-gray-100 shadow-sm mt-4">
        <button 
          className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all ${
            headerBtn === "Products"
              ? "text-white bg-gradient-to-r from-[#4f39f6] to-[#9514fa]"
              : "text-[#6d28d9] hover:bg-gray-50"
          }`}
          onClick={()=> handleHeaderBtnClick("Products")}
        >
          Products
        </button>
        <button 
          className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all ${
            headerBtn === "Cart"
              ? "text-white bg-gradient-to-r from-[#4f39f6] to-[#9514fa]"
              : "text-[#6d28d9] hover:bg-gray-50"
          }`}
          onClick={()=> handleHeaderBtnClick("Cart")}
        >
          Cart ({cartItems.length})
        </button>
      </div>
    </div>
  );
}

export default ProductHeader;
