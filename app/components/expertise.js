"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Expertise = () => {
  const [data, setData] = useState(null);
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);
  const textRefs = useRef([]);

  useGSAP(() => {
    if (data) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(imageRefs.current[0], { x: "-100%", opacity: 0 });
      gsap.set(imageRefs.current[1], { x: "100%", opacity: 0 });
      textRefs.current.forEach((text) => gsap.set(text, { opacity: 0, x: 60 }));

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none none",
        },
      });

      timeline
        .to(imageRefs.current[0], { x: "0%", opacity: 1, duration: 1.25 })
        .to(imageRefs.current[1], {
          x: "0%",
          opacity: 1,
          duration: 1.25,
          stagger: 0.5,
        })
        .to(textRefs.current, {
          opacity: 1,
          x: 0,
          duration: 1.5,
          stagger: 1.5,
        });
    }
  }, [data]);

  useEffect(() => {
    fetch("http://localhost:1337/api/expertises?populate=image")
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen md:h-screen flex flex-col items-center justify-center bg-white overflow-hidden"
    >
      <p className="text-center text-2xl md:text-[32px] text-costum-black mt-16 md:mt-32 mb-8 md:mb-[124px]">
        Our Expertise
      </p>

      <div className="flex flex-col md:flex-row w-full h-auto md:h-3/4 justify-center">
        {data.map((item, index) => {
          const imageUrl = `http://localhost:1337${item.attributes.image.data[0].attributes.url}`;
          return (
            <div
              key={item.id}
              ref={(el) => (imageRefs.current[index] = el)}
              className="relative w-full md:w-1/2 h-[300px] md:h-auto bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${imageUrl})` }}
            >
              <div
                ref={(el) => (textRefs.current[index] = el)}
                className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4"
              >
                <p className="text-4xl lg:text-[100px] text-center">
                  {item.attributes.title}
                </p>
                <p className="mt-4 lg:mt-8 text-base lg:text-lg text-center w-full md:w-[375px] lg:w-[437px]">
                  {item.attributes.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Expertise;
