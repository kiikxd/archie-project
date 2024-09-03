"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Contact = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=1500",
      pin: true,
      pinSpacing: true,
      scrub: true,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    ).fromTo(
      buttonRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
      "-=0.5"
    );

    gsap.matchMedia().add("(min-width: 768px)", () => {
      gsap.fromTo(
        textRef.current,
        { x: 0 },
        {
          x: "-100%",
          duration: 5,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    gsap.matchMedia().add("(max-width: 767px)", () => {
      gsap.fromTo(
        textRef.current,
        { x: 0 },
        {
          x: "100%",
          duration: 2.5,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full overflow-hidden flex flex-col py-16 md:py-32 lg:py-64 relative text-costum-black bg-white"
    >
      <div className="flex flex-col px-4 md:px-8 lg:px-[100px] justify-between items-start md:items-start lg:flex-row">
        <h1
          ref={titleRef}
          className="text-3xl md:text-5xl lg:text-[64px] max-w-full md:max-w-[600px] lg:max-w-[700px] leading-tight"
        >
          Ready to transform your space?
        </h1>
        <button
          ref={buttonRef}
          className="mt-4 md:mt-6 lg:mt-0 flex items-center space-x-2 text-xl md:text-2xl"
        >
          <p>Contact us today</p>
          <img src="./assets/icons/arrow.svg" alt="Contact Button" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pl-4 md:pl-8 lg:pl-[100px] pb-10 md:pb-20 lg:pb-64 overflow-hidden">
        <h1
          ref={textRef}
          className="text-4xl md:text-[80px] lg:text-[160px] w-full md:w-[200vw] lg:w-[200vw] font-normal text-left leading-tight md:leading-[120px] lg:leading-[193.64px]"
        >
          Let's Create
          <span className="font-play-fair italic">Your Vision</span> Together
        </h1>
      </div>
    </section>
  );
};

export default Contact;
