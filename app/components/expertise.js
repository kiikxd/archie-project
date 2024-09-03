"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Expertise = () => {
  const sectionRef = useRef(null);
  const architecturalRef = useRef(null);
  const interiorRef = useRef(null);
  const pRefs = useRef([]);
  const textRefs = useRef([]);

  const [expertiseData, setExpertiseData] = useState(null);

  // Fetch data from Strapi
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/expertises?populate"
        );
        const result = await response.json();
        setExpertiseData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useGSAP(() => {
    if (!expertiseData) return; // Return early if data is not fetched yet
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(architecturalRef.current, { x: "-100%", opacity: 0 });
    gsap.set(interiorRef.current, { x: "100%", opacity: 0 });
    pRefs.current.forEach((p) => gsap.set(p, { opacity: 0, y: 30 }));
    textRefs.current.forEach((text) => gsap.set(text, { opacity: 0, x: 60 }));

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    timeline
      .to(architecturalRef.current, { x: "0%", opacity: 1, duration: 15 })
      .to(interiorRef.current, {
        x: "0%",
        opacity: 1,
        duration: 15,
        stagger: 0.5,
      })
      .to(pRefs.current, { opacity: 1, y: 0, duration: 10, stagger: 0.5 })
      .to(textRefs.current, { opacity: 1, x: 0, duration: 10, stagger: 1.5 });
  }, [expertiseData]);

  if (!expertiseData) {
    return <p>Loading...</p>; // Show loading message if data is not fetched yet
  }

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen md:h-screen flex flex-col items-center justify-center bg-white overflow-hidden"
    >
      <p className="text-center text-2xl md:text-[32px] text-costum-black mt-16 md:mt-32 mb-8 md:mb-[124px]">
        Our Expertise
      </p>

      {/* Architectural */}
      <div
        ref={architecturalRef}
        className="flex flex-col md:flex-row w-full h-auto md:h-3/4 justify-center"
      >
        <div
          className="relative w-full md:w-1/2 h-[300px] md:h-auto bg-cover bg-center rounded-t-lg md:rounded-l-lg md:rounded-r-none"
          style={{
            backgroundImage: `url(${expertiseData[0].attributes.imageUrl})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
            <p
              ref={(el) => (pRefs.current[0] = el)}
              className="text-4xl lg:text-[100px] text-center"
            >
              {expertiseData[0].attributes.title}
              <span className="italic font-play-fair text-4xl lg:text-6xl">
                {expertiseData[0].attributes.subtitle}
              </span>
            </p>
            <p
              ref={(el) => (textRefs.current[0] = el)}
              className="mt-4 lg:mt-8 text-base lg:text-lg text-center w-full md:w-[375px] lg:w-[437px]"
            >
              {expertiseData[0].attributes.description}
            </p>
          </div>
        </div>

        {/* Interior */}
        <div
          ref={interiorRef}
          className="relative w-full md:w-1/2 h-[300px] md:h-auto bg-cover bg-center rounded-b-lg md:rounded-r-lg md:rounded-l-none"
          style={{
            backgroundImage: `url(${expertiseData[1].attributes.imageUrl})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
            <p
              ref={(el) => (pRefs.current[1] = el)}
              className="text-4xl lg:text-[100px] text-center"
            >
              {expertiseData[1].attributes.title}
              <span className="italic font-play-fair text-4xl lg:text-6xl">
                {expertiseData[1].attributes.subtitle}
              </span>
            </p>
            <p
              ref={(el) => (textRefs.current[1] = el)}
              className="mt-4 lg:mt-8 text-base lg:text-lg text-center w-full md:w-[375px] lg:w-[437px]"
            >
              {expertiseData[1].attributes.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
