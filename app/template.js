"use client";

import React, { useState } from "react";
import ReactLenis from "@studio-freight/react-lenis";
import LoadingScreen from "./components/loading";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const Template = ({ children }) => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <ReactLenis root>
      {!loadingComplete ? (
        <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      ) : (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </ReactLenis>
  );
};

export default Template;
