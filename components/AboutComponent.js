"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import image1 from "@/public/assets/img1.png";
import image2 from "@/public/assets/img2.png";
import image3 from "@/public/assets/img3.png";

gsap.registerPlugin(ScrollTrigger);
export default function AboutComponent() {
  return (
    <section className="w-full min-h-screen relative">
      <div className="w-[82vw] ml-auto about-text py-50 relative mr-12 flex-center">
        <div className="w-7/12 h-full relative">
          <span className="text-lg font-semibold">
            Building a ecosystem that&apos;s truly
          </span>
          <h2 className="text-[3vw] leading-[3vw] gradient-text mb-9 mt-3  tracking-[1px] w-[35vw]">
            Interactive & Engaging
          </h2>
          <p className="text-[17px] w-[35vw] opacity-90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cil. ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cil tempor incididunt ut labore et dolore magna
            aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat
          </p>
          <p className="sub-text mt-17">Learn More</p>
        </div>
        <div className="w-5/12 h-[75vh] grid grid-cols-2 grid-rows-3 pr-5">
          <div className="w-full h-full border-t border-l flex flex-col gap-1 justify-center pl-7">
            <h5 >LOREM 1</h5>
            <p className="text-sm">
              velit esse cil tempor incididunt ut labore et dolore magna aliqua.
              Utenim ad m
            </p>
          </div>
          <div className="w-full h-full relative">
            <Image src={image1} alt="img1" fill className="p-1" />
          </div>
          <div className="w-full h-full relative">
            <Image src={image2} alt="img1" fill className="p-1" />
          </div>
          <div className="w-full h-full border-r flex flex-col gap-1 justify-center pl-7">
            <h5 >LOREM 2</h5>
            <p className="text-sm">
              velit esse cil tempor incididunt ut labore et dolore magna aliqua.
              Utenim ad m
            </p>
          </div>
          <div className="w-full h-full border-b border-l flex flex-col gap-1 justify-center pl-7">
            <h5 >LOREM 3</h5>
            <p className="text-sm">
              velit esse cil tempor incididunt ut labore et dolore magna aliqua.
              Utenim ad m
            </p>
          </div>
          <div className="w-full h-full relative">
            <Image src={image3} alt="img1" fill className="p-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
