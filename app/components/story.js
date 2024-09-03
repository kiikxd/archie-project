"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Story = () => {
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textElement = textRef.current;
    const words = textElement.textContent.split(" ");
    textElement.innerHTML = words
      .map((word) => `<span>${word} </span>`)
      .join("");
    const spans = textElement.querySelectorAll("span");

    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2000",
        pin: true,
        scrub: true,
      },
    });

    gsap.set(spans, { opacity: 0.25, y: 20 });
    gsap.to(spans, {
      opacity: 1,
      y: 0,
      stagger: 0.5,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2000",
        scrub: true,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col bg-white px-4">
      <div
        ref={containerRef}
        className="min-h-screen flex flex-col items-center justify-center mt-16 md:mt-[180px]"
      >
        <p className="text-center text-costum-black text-2xl md:text-[28px]">
          Our Story
        </p>
        <span
          ref={textRef}
          className="text-center text-costum-black mt-8 md:mt-16 text-2xl md:text-[48px] leading-snug md:leading-normal max-w-full md:max-w-[882px]"
        >
          We don't just design spaces, we weave narratives. Established in 2009,
          our journey in the world of architecture and interior design has been
          a tale of passion, innovation, and transformative creativity.
        </span>
      </div>
    </section>
  );
};

export default Story;
