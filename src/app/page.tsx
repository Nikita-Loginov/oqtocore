"use client";
import React from "react";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import { useInView } from "react-intersection-observer";
import Top from "@/components/modules/Home/Top";
import { Services, Stories, Header, Footer } from "@/components/widgets";
import Partners from "@/components/shared/Partners/Partners";
import Experience from "@/components/modules/Home/Experience";
import News from "@/components/modules/Home/News";


const WaySection = dynamic(() => import("@/components/modules/Home/Way"), {
  ssr: false,
});


export default function Home() {
  const { ref, inView } = useInView({
    rootMargin: "100px 0px 0px 0px",
    triggerOnce: false,
  });
  const [isSmoothScrollLoaded, setIsSmoothScrollLoaded] = useState(false);

  let smoothScroll;

  function handleScriptLoad() {
    setIsSmoothScrollLoaded(true);
  }

  function initSmoothScroll() {
    smoothScroll = new (window as any).SmoothScroll({
      stepSize: 100,
      keyboardSupport: true,
      arrowScroll: 100,
      touchpadSupport: true,
    });

    // console.log(smoothScroll);
  }

  useEffect(() => {
    if (isSmoothScrollLoaded) {
      initSmoothScroll();
    }
  }, [isSmoothScrollLoaded]);

  React.useEffect(() => {
    const header = document.querySelector(".header");
    if (inView) {
      (header as HTMLElement).style.backgroundColor = "#010101";
    } else {
      (header as HTMLElement).style.backgroundColor = "transparent";
    }
  }, [inView]);

  return (
    <>
      <Header />

      <main className="main">
        <Top />

        <Partners ref={ref} />

        <Services />

        <div className="animation-block">
            <WaySection />

            <Experience />
        </div>

        

        <Stories />

        <News />
      </main>

      <Footer />

      <Script
        src="./js/lib/smoothScroll.js"
        integrity="sha256-huW7yWl7tNfP7lGk46XE+Sp0nCotjzYodhVKlwaNeco="
        crossOrigin="anonymous"
        async
        onLoad={handleScriptLoad} 
      />
    </>
  );
}
