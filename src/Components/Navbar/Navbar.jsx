import React from "react";

function Navbar() {
  return (
    <div className="bg-base-100 shadow-sm border-b border-gray-200 w-full">
      <div className="navbar container mx-auto px-4 lg:px-12 flex justify-between">
        <div className="navbar-start w-auto lg:w-1/4">
        <div class="dropdown">
          <div tabIndex="0" role="button" class="btn btn-ghost px-1 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost text-lg lg:text-2xl font-bold px-1 lg:px-4" style={{ background: 'linear-gradient(to right, #4f39f6, #9514fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>DigiTools</a>
      </div>

      <div class="navbar-center hidden lg:flex lg:w-1/2 justify-center">
        <ul class="menu menu-horizontal px-1 gap-2 font-medium text-gray-700">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end w-auto lg:w-1/4 flex gap-1 pr-1 lg:pr-2">
        <div class="dropdown dropdown-end">
          <div tabIndex="0" role="button" class="btn btn-ghost btn-circle btn-sm lg:btn-md mt-1 lg:mt-0">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />{" "}
              </svg>
              <span class="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex="0"
            class="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
          >
            <div class="card-body">
              <span class="text-lg font-bold">8 Items</span>
              <span class="text-info">Subtotal: $999</span>
              <div class="card-actions">
                <button class="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-0.5 lg:gap-2 items-center shrink-0">
          <a class="btn btn-ghost btn-xs lg:btn-md font-semibold px-1 lg:px-4">Login</a>
          <a class="btn btn-xs lg:btn-md text-white rounded-full border-none px-2 lg:px-4" style={{ background: 'linear-gradient(to right, #4f39f6, #9514fa)' }}>Get Started</a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
