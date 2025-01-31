"use client";
import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Partners from "@/components/shared/Partners/Partners";
import AboutTop from "@/components/modules/About/AboutTop";
import { Header, Footer, Services } from "@/components/widgets";
import {News} from "@/components/modules/Home/News";
import WhyUs from "@/components/modules/About/WhyUs";
import History from "@/components/modules/About/History";
import Contacts from "@/components/modules/About/Contacts";

import "@/styles/about/index.scss";

const headerInfo = {
  contactBtn: true,
};

const newsInfo = {
  title: 'Keep in touch with tech world in our blog'
}

export default function Home() {
  const { ref, inView } = useInView({
    rootMargin: "100px 0px 0px 0px",
    triggerOnce: false,
  });

  useEffect(() => {
    const header = document.querySelector(".header");
    if (inView) {
      (header as HTMLElement).style.backgroundColor = "#010101";
    } else {
      (header as HTMLElement).style.backgroundColor = "transparent";
    }
  }, [inView]);

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
      <Header headerInfo={headerInfo} />

      <main className="main about-page">
        <AboutTop />

        <Partners ref={ref} />

        <WhyUs />

        <History />

        <Services/>

        <Contacts />

        <News newsInfo={newsInfo}/>
      </main>

      <Footer />
    </>
  );
}
