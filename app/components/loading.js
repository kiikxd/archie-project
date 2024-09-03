"use client";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LoadingScreen = ({ onComplete }) => {
  const loadingRef = useRef(null);
  const numberRef = useRef(null);
  const logoRef = useRef(null);
  const loadingTextRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useGSAP(() => {
    gsap.fromTo(
      [numberRef.current, loadingTextRef.current],
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      logoRef.current,
      { opacity: 0 },
      { opacity: 0, duration: 0.5, ease: "power3.out" }
    );

    gsap.to(numberRef.current, {
      innerHTML: 100,
      duration: 2,
      ease: "power2.out",
      snap: { innerHTML: 1 },
      onUpdate: function () {
        numberRef.current.innerHTML = `${Math.ceil(
          numberRef.current.innerHTML
        )}%`;
      },
      onComplete: () => {
        gsap.to([numberRef.current, loadingTextRef.current], {
          opacity: 0,
          duration: 0.5,
          ease: "power3.in",
          onComplete: () => {
            gsap.to(logoRef.current, {
              opacity: 1,
              y: -50,
              duration: 1.5,
              ease: "power3.out",
              delay: 0.25,
              onComplete: () => {
                gsap.to(loadingRef.current, {
                  opacity: 0,
                  duration: 1,
                  scale: 0.9,
                  ease: "power3.in",
                  onComplete: () => {
                    setIsLoading(false);
                    if (onComplete) onComplete();
                  },
                });
              },
            });
          },
        });
      },
    });
  }, []);

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-slate-950 bg-loader"
    >
      <div className="text-4xl md:text-6xl font-play-fair font-semibold relative z-10 flex flex-col items-center">
        <span ref={numberRef}>0%</span>
        <span ref={loadingTextRef} className="text-6xl md:text-8xl mt-4">
          LOADING
        </span>
      </div>
      <img
        ref={logoRef}
        src="./assets/icons/Archie-Studio.svg"
        alt="Logo"
        className="absolute z-20 opacity-0 w-[85.7vw] md:w-[89.7vw] h-auto"
      />
    </div>
  );
};

export default LoadingScreen;
