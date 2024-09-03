"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Project = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRefs = useRef([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(textRef.current, { y: 0 });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: textRef.current,
      pinSpacing: false,
      scrub: true,
    });

    imageRefs.current.forEach((image, index) => {
      gsap.fromTo(
        image,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-auto py-10 md:py-0 bg-white overflow-hidden"
    >
      <div className="h-auto md:min-h-screen text-costum-black flex flex-col items-center justify-between py-10 md:py-32">
        <p className="text-center text-xl md:text-2xl leading-[29.05px]">
          Our Project
        </p>

        <div
          ref={textRef}
          className="h-auto md:min-h-screen z-20 text-costum-black flex flex-col items-center justify-between py-10 md:py-32"
        >
          <div className="relative w-full text-center">
            <div className="absolute inset-0 bg-white/60 z-[-1]"></div>
            <p className="mt-8 sm:mt-16 text-4xl md:text-[46px] md:w-[500px] lg:w-[882px] lg:text-[90px] text-costum-black leading-none">
              Discover the Canvas
              <span className="block">
                of <span className="italic font-play-fair">Our creativity</span>
              </span>
            </p>
          </div>

          <button className="px-6 py-2 lg:px-[50px] lg:py-[20px] mt-8 md:mt-16 md:mb-12 lg:mb-12 md:text-2xl border border-black rounded-full text-costum-black cursor-pointer">
            See all Projects
          </button>
        </div>

        <div className="flex flex-col md:flex-row px-4 md:px-[50px] lg:px-[100px] mt-10 md:mt-0 z-10">
          <div className="flex flex-col w-full md:w-1/3 md:mr-[30px] lg:mr-[60px] xl:mr-[100px]">
            <img
              ref={(el) => imageRefs.current.push(el)}
              src="./assets/images/rumah1.jpeg"
              className="w-full h-[300px] md:h-[450px] object-cover"
            />
            <img
              ref={(el) => imageRefs.current.push(el)}
              src="./assets/images/project1.jpeg"
              className="w-full h-[300px] md:h-[450px] object-cover mt-8 md:mt-12 lg:mt-32"
            />
            <img
              ref={(el) => imageRefs.current.push(el)}
              src="./assets/images/project5.jpeg"
              className="w-full h-[300px] md:h-[450px] object-cover mt-8 md:mt-12 lg:mt-32"
            />
            <img
              ref={(el) => imageRefs.current.push(el)}
              src="./assets/images/project7.jpeg"
              className="w-full h-[300px] md:h-[450px] object-cover mt-8 md:mt-12 lg:mt-32"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/3 md:mr-[30px] lg:mr-[60px] xl:mr-[100px] mt-10 md:mt-24 lg:mt-[248px]">
            <img
              ref={(el) => imageRefs.current.push(el)}
              src="./assets/images/rumah2.jpeg"
              className="w-full h-[300px] md:h-[450px] object-cover"
            />
            <img
              ref={(el) => imageRefs.current.push(el)}
              src="./assets/images/project2.jpeg"
              className="w-full h-[300px] md:h-[450px] object-cover mt-8 md:mt-12 lg:mt-32"
            />
            <img
              ref={(el) => imageRefs.current.push(el)}
              src="./assets/images/project4.jpeg"
              className="w-full h-[300px] md:h-[450px] object-cover mt-8 md:mt-12 lg:mt-32"
            />
            <img
              ref={(el) => imageRefs.current.push(el)}
              src="./assets/images/project8.jpeg"
              className="w-full h-[300px] md:h-[450px] object-cover mt-8 md:mt-12 lg:mt-32"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/3 mt-10 md:mt-16 lg:mt-32">
            <img
              ref={(el) => imageRefs.current.push(el)}
              src="/assets/images/project0.jpeg"
              className="w-full h-[300px] md:h-[450px] object-cover"
            />
            <img
              ref={(el) => imageRefs.current.push(el)}
              src="./assets/images/project3.jpeg"
              className="w-full h-[300px] md:h-[450px] object-cover mt-8 md:mt-12 lg:mt-32"
            />
            <img
              ref={(el) => imageRefs.current.push(el)}
              src="./assets/images/project6.jpeg"
              className="w-full h-[300px] md:h-[450px] object-cover mt-8 md:mt-12 lg:mt-32"
            />
            <img
              ref={(el) => imageRefs.current.push(el)}
              src="./assets/images/project9.jpeg"
              className="w-full h-[300px] md:h-[450px] object-cover mt-8 md:mt-12 lg:mt-32"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
