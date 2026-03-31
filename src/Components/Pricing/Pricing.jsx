import React, { use } from "react";
import PricingCard from "./PricingCard.jsx";

function Pricing({ pricingPromise }) {
  const pricing = use(pricingPromise);
  const pricingData = pricing.data;

  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        Simple, Transparent Pricing
      </h1>
      <p className="mt-3 text-sm text-slate-500 md:text-base">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>
      <PricingCard pricingData={pricingData} />
    </section>
  );
}

export default Pricing;
