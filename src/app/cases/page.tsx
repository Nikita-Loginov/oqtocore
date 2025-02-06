"use client";
import React from "react";
import { useEffect} from "react";
import {Top} from "@/components/shared/Top/Top";
import {Header, Stories, Footer } from "@/components/widgets";
import {Cta} from "@/components/shared/Cta/Cta";

import '@/styles/case/main.scss';

const headerInfo = {
  contactBtn: true
}

const infoTop = {
  title: "Learn about our customers' success stories",
  text: "Want to see your story here too? Read below or contact us",
  linkUrl: '/cases#cta',
  gallaxy: {
    count: 269000,
    radius: 6.47,
    branches: 5,
    spin: 5,
    randomness: 0.364,
    randomnessPower: 1.177,
    insideColor: "#8010a1",
    outsideColor: "#382291",
  },
};

const preloaderTextStories = false;

const infoStoriesItems = [
  {
    id: 1,
    title: 'GTM',
    linkSrc: '/cases/gtm',
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
    title: 'Flymining',
    linkSrc: '/cases/flymining',
    items: [
      {
        title: 'Who:',
        text: 'The investor with $1.5m invested in Bitcoin mining equipment.'
      },
      {
        title: 'What we did:',
        text: 'Developed for him an international cloud mining web platform that allows people all over the world to invest in crypto mining.'
      },
      {
        title: 'Why it matters:',
        text: 'We have designed and built mining containers from scratch. They are super efficient with zero additional fans – all the air is pushed by in-built fans of the ASIC miners. Additionally we built a monitoring software around the farm, to establish transparency and hardware security through monitoring.'
      },
      {
        title: 'Tech stack:',
        text: 'Java, Javascript, Angular'
      },
    ],
    img: {
      top: true,
      imgSrc: {
        webp: './images/stories/flyming.webp',
        webp2x: './images/stories/flyming2x.webp',
      }
    }
  },
  {
    id: 3,
    title: 'Intranet',
    linkSrc: '/cases/intraVid',
    items: [
      {
        title: 'Who:',
        text: 'A large international enterprise company with 200k+ employees with need in an intranet video portal with all the modern functionality such as live streaming, automated transcriptions and captions.'
      },
      {
        title: 'What we did:',
        text: 'Implemented a comprehensive solution with a modern, efficient system built using AWS services. This system allows seamless uploading, processing, and streaming of video content, including multi-language captioning, transcription, and advanced media management features.'
      },
      {
        title: 'Why it matters:',
        text: 'It allows staff to share questions, polls, blog posts, videos, and many other content types, to discuss, to seek help among the company experts, and to communicate with colleagues. Also solution was built to be compliant with data security laws in both the US and EU. '
      },
      {
        title: 'Tech stack:',
        text: 'Java, Javascript, Angular, PostgresSQL, Flutter for mobile apps'
      },
    ],
    img: {
      top: false,
      imgSrc: {
        webp: './images/stories/intranet.webp',
        webp2x: './images/stories/intranet2x.webp',
      }
    }
  },
  {
    id: 4,
    title: 'In-Game Overlay',
    linkSrc: '/cases/inGameOverlay',
    items: [
      {
        title: 'Who:',
        text: 'NFT marketplace with a purpose to improve gaming experience for web3 games and user retention using Steam-like functionality.'
      },
      {
        title: 'What we did:',
        text: 'Developed a comprehensive in-game overlay that includes several key features:',
        list: [
          'A built-in marketplace has been added to the overlay to make it easier for users to buy and sell items without leaving the game',
          "Social component that shows friends' online and offline statuses, as well as chats for better communication",
          'Achievement tracking system that updates in real time using a system where achievements are tracked using unique identifiers.'
        ]
      },
      {
        title: 'Why it matters:',
        text: 'This feature-rich overlay enhances the gameplay experience by facilitating social interaction, providing achievement rewards, and introduces seamless in-game trading.'
      },
      {
        title: 'Tech stack:',
        text: 'Unreal Engine 4-5 Unity'
      },
    ],
    img: {
      top: true,
      imgSrc: {
        webp: './images/stories/game.webp',
        webp2x: './images/stories/game2x.webp',
      }
    }
  },
  {
    id: 5,
    title: 'Runes',
    linkSrc: '/cases/runes',
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
        webp: './images/stories/runes.webp',
        webp2x: './images/stories/runes2x.webp',
      }
    }
  },
  {
    id: 6,
    title: 'Desktop Time Tracker ',
    linkSrc: '/cases/tracker',
    items: [
      {
        title: 'Who:',
        text: 'A big enterprise company that hires remote developers from all over the world. Their problem was differentiating productive coding time and non-work activities, like browsing the internet.'
      },
      {
        title: 'What we did:',
        text: 'We built an enterprise-level solution for tracking remote developers time and focus, consisting of Windows/MacOS desktop apps, a Visual Studio plugin, and a cloud analytics engine.'
      },
      {
        title: 'Why it matters:',
        text: 'It allows the business to gather insights into how much time and focus developers dedicate to their work and address broken deadlines early. Additionally, it is cloud-native, offering several significant advantages for businesses, particularly in terms of scalability, efficiency, and cost optimization.This feature-rich overlay enhances the gameplay experience by facilitating social interaction, providing achievement rewards, and introduces seamless in-game trading.'
      },
      {
        title: 'Tech stack:',
        text: 'Microsoft Azure, MySQL, C#, React, Redis, Flutter'
      },
    ],
    img: {
      top: true,
      imgSrc: {
        webp: './images/stories/intranet.webp',
        webp2x: './images/stories/intranet2x.webp',
      }
    }
  },
  {
    id: 7,
    title: 'Tyrcoin',
    linkSrc: '/cases/tyrcoin',
    items: [
      {
        title: 'Who:',
        text: 'Client with need in developing a stablecoin and a centralised platform with functions like exchanging fiat or crypto for this stablecoin and back, depositing and withdrawing all the funds from the platform. '
      },
      {
        title: 'What we did:',
        text: 'Undertook a project to create a unique cryptocurrency token along with a comprehensive platform designed to seamlessly facilitate KYC, on-ramping and off-ramping. Our goal was to develop a user-friendly ecosystem where users can easily convert their fiat currency into cryptocurrency and vice versa. This involved complex blockchain development to enable the token to operate effectively across various exchanges and wallet systems.'
      },
      {
        title: 'Why it matters:',
        text: 'Our team has handled everything from the initial design and issuance of the token to the integration of complex security features that meet current regulatory standards.'
      },
      {
        title: 'Tech stack:',
        text: 'Microsoft Azure, MySQL, C#, React, Redis, Flutter'
      },
    ],
    img: {
      top: false,
      imgSrc: {
        webp: './images/stories/intranet.webp',
        webp2x: './images/stories/intranet2x.webp',
      }
    }
  }
]

const countVisibleItems = 3;

const ctaInfo = {
  title: 'And many more are already on the way',
  text: 'Looking forward to work with us, but want the project to stay confidential? Our NDA will start from first call. Just ask for it.'
}

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
      <Header headerInfo={headerInfo}/>

      <main className="main cases-page">
        <Top infoTop={infoTop} styleWidthContent={{maxWidth:"1150px"}}/>

        <Stories info={infoStoriesItems} preloaderTextStories={preloaderTextStories} countVisibleItems={countVisibleItems}/>

        <Cta info={ctaInfo}/>
      </main>

      <Footer />
    </>
  );
}
