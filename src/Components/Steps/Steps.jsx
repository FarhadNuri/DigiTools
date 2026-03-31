import React from "react";
import StepsCard from "./StepsCard";
import img1 from "../../assets/steps/s1.png";
import img2 from "../../assets/steps/s2.png";
import img3 from "../../assets/steps/s3.png";

const steps = [
  {
    id: 1,
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
    img: img1,
  },
  {
    id: 2,
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs.",
    img: img2,
  },
  {
    id: 3,
    title: "Start Creating",
    desc: "Download and start using your premium tools immediately.",
    img: img3,
  },
];

function Steps() {
  return (
    <section className="mt-24 bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl mt-10">
          Get Started in 3 Steps
        </h1>
        <p className="mt-3 text-sm text-slate-500 md:text-base">
          Start using premium digital tools in minutes, not hours.
        </p>
        <StepsCard steps={steps} />
      </div>
    </section>
  );
}

export default Steps;
