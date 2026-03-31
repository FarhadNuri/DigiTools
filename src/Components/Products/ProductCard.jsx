import React from "react";

function ProductCard({ productsData }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-7xl mx-auto px-4">
      {productsData.map(({ id, title, desc, price, period, badge, badgeStyle, features, img }) => (
        <div key={id} className="card w-full bg-base-100 shadow-sm border border-base-200">
          <div className="card-body p-6">
            <div className="flex justify-between items-start mb-2">
              <div className="w-12 h-12 bg-base-200 rounded-xl flex items-center justify-center p-2">
                <img src={img} alt={`${title} Logo`} className="w-full h-full object-contain" />
              </div>
              <span className={`badge badge-xs p-2 ${badgeStyle}`}>
                {badge}
              </span>
            </div>

            <div className="text-left py-2">
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="text-sm text-base-content/70 mt-2 min-h-[40px]">
                {desc}
              </p>
            </div>

            <div className="flex items-baseline gap-1 mt-2 text-left">
              <span className="text-3xl font-extrabold">{price}</span>
              <span className="text-sm font-medium text-base-content/50">{period}</span>
            </div>

            <ul className="mt-6 flex flex-col gap-2 text-sm flex-1 text-left">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <button 
                className="btn btn-block text-white border-none rounded-full"
                style={{ background: 'linear-gradient( #4f39f6, #9514fa)' }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
