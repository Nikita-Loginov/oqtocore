"use client";
import React from "react";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import { useInView } from "react-intersection-observer";
import Top from "@/components/shared/Top/Top";
import { Services, Stories, Header, Footer } from "@/components/widgets";
import Partners from "@/components/shared/Partners/Partners";
import Experience from "@/components/modules/Home/Experience";
import News from "@/components/modules/Home/News";

const WaySection = dynamic(() => import("@/components/modules/Home/Way"), {
  ssr: false,
});

const infoTop = {
  title: "Web3 Development Powerhouse & all-in-one Solutionhub",
  text: "Let’s build something beyond ordinary together",
  gallaxy: {
    count: 518300,
    size: 0.005,
    radius: 4.95,
    branches: 6,
    spin: 5,
    randomness: 0.429,
    randomnessPower: 4.298,
    insideColor: "#4830ff",
    outsideColor: "#441969",
  },
};

const preloaderTextStories = true;

const infoStoriesItem = [
  {
    id: 1,
    title: 'GTM',
    items: [
      {
        title: 'Who:',
        text: 'GameTrade Market is one of the first NFT gaming item marketplaces, focused on ease of use for gamers and professional traders.'
      },
      {
        title: 'What we did:',
        text: 'Created a hybrid of social networks and a trading platform, as this is how we envision trade in future virtual metaverses.'
      },
      {
        title: 'Why it matters:',
        text: 'The project started in 2021 during the initial boom of blockchain games. Our client needed to create an MVP for GameTrade in very tight deadlines in an ever-changing landscape of blockchain. We have succeeded with releasing the MVP in just 2 quarters.'
      },
      {
        title: 'Tech stack:',
        text: 'AWS, MySQL, ASP .Net MVC, React'
      },
    ],
    img: {
      top: false,
      imgSrc: {
        webp: './images/stories/gtm.webp',
        webp2x: './images/stories/gtm2x.webp',
      }
    }
  },
  {
    id: 2,
    title: 'Runes',
    items: [
      {
        title: 'Who:',
        text: 'GameTrade Market is one of the first NFT gaming item marketplaces, focused on ease of use for gamers and professional traders.'
      },
      {
        title: 'What we did:',
        text: 'Created a hybrid of social networks and a trading platform, as this is how we envision trade in future virtual metaverses.'
      },
      {
        title: 'Why it matters:',
        text: 'The project started in 2021 during the initial boom of blockchain games. Our client needed to create an MVP for GameTrade in very tight deadlines in an ever-changing landscape of blockchain. We have succeeded with releasing the MVP in just 2 quarters.'
      },
      {
        title: 'Tech stack:',
        text: 'AWS, MySQL, ASP .Net MVC, React'
      },
    ],
    img: {
      top: true,
      imgSrc: {
        webp: './images/stories/runes.webp',
        webp2x: './images/stories/runes2x.webp',
      }
    }
  }
]

export default function Home() {
  const { ref, inView } = useInView({
    rootMargin: "100px 0px 0px 0px",
    triggerOnce: false,
  });
  const [isSmoothScrollLoaded, setIsSmoothScrollLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

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
        <Top infoTop={infoTop} styleWidthContent={{maxWidth:"1424px"}}/>

        <Partners ref={ref} />

        <Services />

        <div className="animation-block">
          <WaySection />

          <Experience />
        </div>

        <Stories info={infoStoriesItem} preloaderTextStories={preloaderTextStories}/>

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
