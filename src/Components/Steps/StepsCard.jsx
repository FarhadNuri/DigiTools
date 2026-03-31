import React from "react";

function StepsCard({ steps }) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6 mb-5">
      {steps.map((step) => {
        const { id, title, desc, img } = step;

        return (
          <article
            key={id}
            className="rounded-xl border border-slate-200 bg-white px-6 py-10 text-center shadow-sm"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-violet-100">
              <img src={img} alt={title} className="h-9 w-9 object-contain" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
            <p className="mx-auto mt-3 max-w-[260px] text-sm text-slate-500">
              {desc}
            </p>
          </article>
        );
      })}
    </div>
  );
}

export default StepsCard;
