"use client";
import Spline from "@splinetool/react-spline";

export default function ContactComponent() {
  return (
    <section className="w-screen min-h-screen relative flex-center">
      <div className="w-[65vw] mx-auto text-center relative">
      <h1 className="text-[6vw] leading-[6vw] z-10 uppercase">Let&apos;s talk about what&apos;s on your mind</h1>
      <button className="sub-text mt-15 font-semibold bg-gradient-to-br from-[#6c46c5] to-[#5d0169e0] px-6 py-3">SEND MESSAGE</button>
      </div>
      <div className="w-full absolute z-[-1]">
        <Spline scene="https://prod.spline.design/g8Y8AbvfOUVCFUc4/scene.splinecode"/>
      </div>
    </section>
  );
}
