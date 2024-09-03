"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const h1Ref = useRef(null);
  const spanRef = useRef(null);
  const pRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(bgRef.current, {
      width: "10%",
      height: "10%",
      transformOrigin: "center center",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      backgroundPosition: "center center",
      opacity: 0,
    });
    gsap.set(h1Ref.current, { xPercent: -200, opacity: 0 });
    gsap.set(spanRef.current, { opacity: 0 });
    gsap.set(pRef.current, { xPercent: 200, opacity: 0 });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
      },
    });

    timeline
      .to(bgRef.current, {
        width: "100%",
        height: "100%",
        opacity: 1,
        ease: "power4.out",
        duration: 3,
      })
      .to(h1Ref.current, { xPercent: 0, opacity: 1, duration: 1.5 })
      .to(pRef.current, { xPercent: 0, opacity: 1, duration: 1.5 })
      .to(spanRef.current, { opacity: 1, duration: 2.5 });
  }, []);

  return (
    <main
      ref={sectionRef}
      className="relative flex h-screen items-center justify-center overflow-hidden text-custom-white"
    >
      <div
        ref={bgRef}
        className="absolute w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(./assets/images/background.png)" }}
      ></div>
      <div className="absolute bottom-48 md:bottom-48 lg:bottom-20 left-4 md:left-9 lg:left-20 text-left max-w-full px-4">
        <h1
          ref={h1Ref}
          className="text-4xl md:text-[75px] lg:text-[100px] leading-tight mb-4 md:mb-4"
        >
          Unveiling{" "}
          <span
            ref={spanRef}
            className="italic font-play-fair text-4xl md:text-[75px] lg:text-[100px]"
          >
            Timeless Elegance
          </span>
          <br />
          in Every Space
        </h1>
      </div>

      <div className="absolute bottom-10 md:bottom-20 ml-8 md:left-6 lg:left-auto right-4 lg:right-24 text-custom-white max-w-full md:max-w-md">
        <p
          ref={pRef}
          className="text-sm md:text-[16px] leading-relaxed mb-12 md:mb-6"
        >
          Where design meets innovation, and spaces come alive with beauty. As
          architects, we blend design and function into the human environment,
          striving to bring the fusion of culture of a new and contemporary
          lifestyle.
        </p>
      </div>
    </main>
  );
};

export default Hero;
