"use client";
import React from "react";
import { useEffect} from "react";
import Top from "@/components/shared/Top/Top";
import {Header, Footer } from "@/components/widgets";


const infoTop = {
  title: "Learn about our customers' success stories",
  text: "Want to see your story here too? Read below or contact us",
  gallaxy: {
    count: 269000,
    // size:  0.005,
    radius: 6.47,
    branches: 5,
    spin: 5,
    randomness: 0.364,
    randomnessPower: 1.177,
    insideColor: "#8010a1",
    outsideColor: "#382291",
  },
};

export default function Home() {

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />

      <main className="main">
        <Top infoTop={infoTop} styleWidthContent={{maxWidth:"1150px"}}/>
      </main>

      <Footer />
    </>
  );
}
