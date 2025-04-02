"use client";
import AboutComponent from "@/components/AboutComponent";
import ContactComponent from "@/components/ContactComponent";
import HeroComponent from "@/components/HeroComponent";
import Navbar from "@/components/Navbar";
import ServicesComponent from "@/components/ServicesComponent";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const splineObjectRef = useRef(null);
  const splineObject2Ref = useRef(null);
  const sideNavRef = useRef(null);

  function onLoad(spline) {
    const object = spline.findObjectByName("elipse_light");
    const object2 = spline.findObjectByName("Glow");

    splineObjectRef.current = object;
    splineObject2Ref.current = object2;

    gsap.set(object.position, { y: -190 });
    gsap.set(object2.position, { y: -200 });

    createTimeline(
      "#section1",
      { y: 60, x: 540 },
      { x: 1, y: 1, z: 1 },
      { z: Math.PI / 2 }
    );
    createTimeline(
      "#section2",
      { y: 60, x: 540 },
      { x: 0, y: 0, z: 0 },
      { z: Math.PI / 2 }
    );
    // createTimeline(
    //   "#section3",
    //   { y: -200, x:0, z:0 },
    //   { x: 0, y: 0, z: 0 },
    //   {x: 0, z:0, y:0}
    // );
    // createTimeline(
    //   "#part2",
    //   { x: 150, y: 50 },
    //   { x: 0.8, y: 0.8, z: 0.8 },
    //   { x: Math.PI / 36, y: -Math.PI / 10 }
    // );
    // createTimeline("#part3", { x: 0, y: 0 });
  }

  function createTimeline(triggerId, position, scale, rotation) {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: triggerId,
        start: "top 40%",
        end: "bottom 100%",
        scrub: 1.5,
      },
    });

    timeline.to(sideNavRef.current, {
      y: -160,
    });
    if (position)
      timeline.to(
        [splineObjectRef.current.position, splineObject2Ref.current.position],
        { ...position, ease: "power2" },
        0
      );
    if (rotation)
      timeline.to(
        [splineObjectRef.current.rotation, splineObject2Ref.current.rotation],
        { ...rotation, ease: "power2" },
        0
      );
    if (scale)
      timeline.to(
        [splineObjectRef.current.scale, splineObject2Ref.current.scale],
        { ...scale, ease: "power2" },
        0
      );
  }

  return (
    <main className="w-screen max-w-screen relative">
      <Navbar />
      <div className="canvas-cont ">
        <Spline
          scene="https://prod.spline.design/AiTQiLYW8vDw6hgr/scene.splinecode"
          onLoad={onLoad}
        />
      </div>
      <ul
        className="flex items-center flex-col gap-50 w-1/12 h-full fixed pt-[30vh] left-4 z-10 mt-[10vh]"
        ref={sideNavRef}
      >
        <li className="nav-links">Pixel flow</li>
        <li className="nav-links">Our Story</li>
        <li className="nav-links">Overview</li>
      </ul>
      <div>
        <HeroComponent />
      </div>
      <div id="section1">
        <ServicesComponent />
      </div>
      <div id="section2">
        <AboutComponent />
      </div>
      <div>
        <ContactComponent/>
      </div>
    </main>
  );
}
