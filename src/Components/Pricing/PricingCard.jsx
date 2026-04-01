import React from "react";

function PricingCard({ pricingData = [] }) {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-3">
      {pricingData.map((plan) => {
        const popular = Boolean(plan.badge);
        const buttonText = plan.btnText;

        return (
          <article
            key={plan.id}
            className={`relative flex h-full flex-col rounded-xl border p-6 text-left shadow-sm transition-transform ${
              popular
                ? "border-violet-500 bg-gradient-to-b from-violet-600 to-purple-700 text-white"
                : "border-slate-200 bg-slate-50 text-slate-900"
            }`}
          >
            {popular && (
              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300 px-3 py-1 text-xs font-semibold text-slate-900">
                {plan.badge}
              </span>
            )}

            <h3 className="text-2xl font-semibold">{plan.title}</h3>
            <p className={`mt-1 text-sm ${popular ? "text-violet-100" : "text-slate-500"}`}>
              {plan.desc}
            </p>

            <div className="mt-5 flex items-end gap-1">
              <span className="text-5xl font-bold leading-none">{plan.price}</span>
              <span className={`${popular ? "text-violet-100" : "text-slate-500"}`}>
                {plan.period.replace("Mo", "Month")}
              </span>
            </div>

            <ul className="mt-6 space-y-2 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`mt-0.5 h-4 w-4 ${popular ? "text-violet-100" : "text-emerald-500"}`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.42 0l-3.2-3.2a1 1 0 111.414-1.42l2.493 2.494 6.493-6.494a1 1 0 011.42 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className={popular ? "text-violet-50" : "text-slate-600"}>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-7">
              <button
                type="button"
                className={`w-full rounded-full px-5 py-2.5 text-sm font-semibold transition-colors cursor-pointer ${
                  popular
                    ? "bg-white text-violet-700 hover:bg-slate-100"
                    : "bg-violet-600 text-white hover:bg-violet-700"
                }`}
              >
                {buttonText}
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default PricingCard;