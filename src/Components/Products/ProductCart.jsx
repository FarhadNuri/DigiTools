import React from "react";
import { GiShoppingCart } from "react-icons/gi";

function ProductCart({ cartItems = [], handleRemoveFromCart = () => {} }) {
  const parsePrice = (value) => {
    return Number(value.slice(1));
  };

  const isCartEmpty = cartItems.length === 0;

  const total = cartItems.reduce((sum, item) => {
    const amount = parsePrice(item.price);
    return sum + amount;
  }, 0);

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-[#1e2336]">Your Cart</h2>

        {isCartEmpty ? (
          <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-6 py-10 text-center">
            <GiShoppingCart className="text-6xl text-gray-400" />
            <p className="mt-4 text-lg font-semibold text-[#1e2336]">
              Your cart is empty
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Add products to see them here.
            </p>
          </div>
        ) : (
          <>
            <div className="mt-6 space-y-3">
              {cartItems.map((item) => (
                <div
                  key={item.cartItemId}
                  className="flex items-center justify-between rounded-2xl bg-gray-100 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white p-1.5 shadow-sm">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-medium text-[#1e2336]">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500">{item.price}</p>
                    </div>
                  </div>

                  <button
                    className="text-sm font-medium text-pink-500 hover:text-pink-600"
                    onClick={() => handleRemoveFromCart(item.cartItemId)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between text-sm text-gray-500">
              <span>Total:</span>
              <span className="text-2xl font-bold text-[#1e2336]">
                ${total}
              </span>
            </div>

            <button className="mt-5 w-full rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] px-5 py-3 text-sm font-semibold text-white">
              Proceed To Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductCart;
