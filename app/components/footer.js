"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Footer = () => {
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  const addressRefs = useRef([]);
  const linkRefs = useRef([]);
  const createdByRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(logoRef.current, { opacity: 0, y: 100 });
    gsap.set(addressRefs.current, { opacity: 0, y: 40 });
    gsap.set(linkRefs.current, { opacity: 0, y: 40 });
    gsap.set(createdByRef.current, { opacity: 0, y: 60 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
    })
      .to(
        addressRefs.current,
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.25, ease: "power2.out" },
        "-=0.5"
      )
      .to(
        linkRefs.current,
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.25, ease: "power2.out" },
        "-=0.5"
      )
      .to(
        createdByRef.current,
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.5"
      );
  }, []);

  return (
    <section
      ref={footerRef}
      className="flex flex-col min-h-screen bg-[#246FA6] text-custom-white"
    >
      <div className="flex items-center justify-center pt-28 md:pt-[200px] px-4 md:px-[100px]">
        <img
          ref={logoRef}
          src="./assets/icons/Archie-Studio.svg"
          alt="Logo"
          className="w-[300px] md:w-[600px] lg:w-[89.7vw] h-auto"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between px-4 md:px-[60px] mt-8 md:mt-[280px]">
        <div className="flex flex-col md:flex-row space-y-8 md:space-x-5 md:space-y-0 lg:space-x-56 mb-8 md:mb-0">
          <div className="flex flex-col">
            <h3
              className="text-xl md:text-[32px]"
              ref={(el) => addressRefs.current.push(el)}
            >
              Bali, Indonesia
            </h3>
            <p
              className="text-sm md:text-base mt-2 md:mt-8 leading-relaxed"
              ref={(el) => addressRefs.current.push(el)}
            >
              Jl. Mawar No.7, Denpasar,
            </p>
            <p
              className="text-sm md:text-base"
              ref={(el) => addressRefs.current.push(el)}
            >
              Bali 707
            </p>
            <p
              className="text-sm md:text-base"
              ref={(el) => addressRefs.current.push(el)}
            >
              +62-857-6114
            </p>
          </div>
          <div className="flex flex-col">
            <h3
              className="text-xl md:text-[32px]"
              ref={(el) => addressRefs.current.push(el)}
            >
              Jakarta, Indonesia
            </h3>
            <p
              className="text-sm md:text-base mt-2 md:mt-8 leading-relaxed"
              ref={(el) => addressRefs.current.push(el)}
            >
              Jl. Permata 10 No.10, Central Jakarta,
            </p>
            <p
              className="text-sm md:text-base"
              ref={(el) => addressRefs.current.push(el)}
            >
              Jakarta 707
            </p>
            <p
              className="text-sm md:text-base"
              ref={(el) => addressRefs.current.push(el)}
            >
              +62-812-0440
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-16 lg:space-x-[173px] text-lg md:text-[28px]">
          <div className="flex flex-col space-y-2">
            <a
              href="#"
              className="hover:underline"
              ref={(el) => linkRefs.current.push(el)}
            >
              Home
            </a>
            <a
              href="#"
              className="hover:underline"
              ref={(el) => linkRefs.current.push(el)}
            >
              About Us
            </a>
            <a
              href="#"
              className="hover:underline"
              ref={(el) => linkRefs.current.push(el)}
            >
              Expertise
            </a>
          </div>
          <div className="flex flex-col space-y-2 md:space-y-[10px]">
            <a
              href="#"
              className="hover:underline"
              ref={(el) => linkRefs.current.push(el)}
            >
              Projects
            </a>
            <a
              href="#"
              className="hover:underline"
              ref={(el) => linkRefs.current.push(el)}
            >
              Blog
            </a>
            <a
              href="#"
              className="hover:underline"
              ref={(el) => linkRefs.current.push(el)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-[172px] md:mb-8 text-sm md:text-base px-4 md:px-12"
        ref={createdByRef}
      >
        <div>
          <p>&copy; 2024 Copyright Archie Studio</p>
        </div>

        <div className="flex space-x-4 md:space-x-4">
          <a href="#" className="hover:underline">
            Legal
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Warranty
          </a>
        </div>

        <div className="flex space-x-1 md:space-x-4">
          <p>Created by |</p>
          <img
            src="./assets/icons/lapomps.svg"
            className="w-14 md:w-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
