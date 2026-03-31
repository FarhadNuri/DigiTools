import React from "react";

function Stats() {
  return (
    <div
      className="w-full py-12 lg:py-16 mt-8"
      style={{ background: "linear-gradient(#9514fa, #4f39f6)" }}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-center items-center text-center divide-y md:divide-y-0 md:divide-x divide-white/30 text-white">
          <div className="flex-1 w-full py-6 md:py-0">
            <div className="text-3xl lg:text-4xl font-bold ">50K+</div>
            <div className="text-sm lg:text-base text-white/90 mt-2">
              Active Users
            </div>
          </div>

          <div className="flex-1 w-full py-6 md:py-0">
            <div className="text-3xl lg:text-4xl font-bold ">200+</div>
            <div className="text-sm lg:text-base text-white/90 mt-2">
              Premium Tools
            </div>
          </div>

          <div className="flex-1 w-full py-6 md:py-0">
            <div className="text-3xl lg:text-4xl font-bold ">4.9</div>
            <div className="text-sm lg:text-base text-white/90 mt-2">
              Rating
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
