import React from "react";
import productLogo from "../../assets/Play.png";

const Products = [
  {
    id: 1,
    title: "AI Writing Pro",
    desc: "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
    price: "$29",
    period: "/Mo",
    badge: "Best Seller",
    badgeStyle: "bg-orange-100 text-orange-600",
    features: ["Unlimited AI generations", "50+ writing templates", "Grammar checker"]
  },
  {
    id: 2,
    title: "Design Templates Pack",
    desc: "2000+ premium templates for social media, presentations, and marketing materials.",
    price: "$49",
    period: "/One-Time",
    badge: "Popular",
    badgeStyle: "bg-purple-100 text-[#8b3dff]",
    features: ["2000+ templates", "Monthly updates", "Commercial license"]
  },
  {
    id: 3,
    title: "Premium Stock Assets",
    desc: "Access millions of royalty-free photos, videos, and graphics for your projects.",
    price: "$19",
    period: "/Mo",
    badge: "New",
    badgeStyle: "bg-green-100 text-green-600",
    features: ["10M+ assets", "Commercial use", "No attribution"]
  },
  {
    id: 4,
    title: "Automation Toolkit",
    desc: "Automate repetitive tasks and streamline your workflow with powerful tools.",
    price: "$79",
    period: "/Mo",
    badge: "Popular",
    badgeStyle: "bg-purple-100 text-[#8b3dff]",
    features: ["50+ automations", "API access", "Custom workflows"]
  },
  {
    id: 5,
    title: "Resume Builder Pro",
    desc: "Create professional resumes and cover letters that land interviews.",
    price: "$15",
    period: "/One-Time",
    badge: "New",
    badgeStyle: "bg-green-100 text-green-600",
    features: ["100+ templates", "ATS optimization", "Export to PDF"]
  },
  {
    id: 6,
    title: "Social Media Content Kit",
    desc: "Complete toolkit for creating engaging social media content across all platforms.",
    price: "$39",
    period: "/Mo",
    badge: "Best Seller",
    badgeStyle: "bg-orange-100 text-orange-600",
    features: ["5000+ assets", "Scheduler included", "Analytics dashboard"]
  }
];

function ProductCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-7xl mx-auto px-4">
      {Products.map((product) => (
        <div key={product.id} className="card w-full bg-base-100 shadow-sm border border-base-200">
          <div className="card-body p-6">
            <div className="flex justify-between items-start mb-2">
              <div className="w-12 h-12 bg-base-200 rounded-xl flex items-center justify-center p-2">
                <img src={productLogo} alt="Product Logo" className="w-full h-full object-contain" />
              </div>
              <span className={`badge badge-xs p-2 ${product.badge === 'Best Seller' ? 'badge-warning' : product.badge === 'New' ? 'badge-success' : 'badge-primary'}`}>
                {product.badge}
              </span>
            </div>

            <div className="text-left py-2">
              <h2 className="text-xl font-bold">{product.title}</h2>
              <p className="text-sm text-base-content/70 mt-2 min-h-[40px]">
                {product.desc}
              </p>
            </div>

            <div className="flex items-baseline gap-1 mt-2 text-left">
              <span className="text-3xl font-extrabold">{product.price}</span>
              <span className="text-sm font-medium text-base-content/50">{product.period}</span>
            </div>

            <ul className="mt-6 flex flex-col gap-2 text-sm flex-1 text-left">
              {product.features.map((feature, idx) => (
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
