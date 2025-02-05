"use client";
import React from "react";
import { useEffect, useRef } from "react";
import { Header, Footer, Stories } from "@/components/widgets";
import CasesTop  from "@/components/shared/CasesTop/CasesTop";
import ProblemSolution from "@/components/shared/ProblemSolution/ProblemSolution";
import { Key } from "@/components/shared/Key/Key";
import { Architecture } from "@/components/shared/Architecture/Architecture";
import { Killer } from "@/components/shared/Killer/Killer";
import { WeCreate } from "@/components/shared/WeCreate/WeCreate";
import {Cta} from "@/components/shared/Cta/Cta";
import Game from "@/components/shared/Game/Game";

import '@/styles/casesPages/main.scss';

const headerInfo = {
  contactBtn: true,
};

const infoCasesTop = {
  title:
    "Improved gaming experience for web3 games and user retention for GameTrade with an in-game Overlay.",
  text: [
    "On later stages of the project we have developed an in-game overlay system for GameTrade, taking direct inspiration from Steam’s overlay functionality. Gametrade’s core functionality was directly integrated into 2 most popular game engines (Unity & unreal engine 4/5), which allowed users to access it with one button click from the game itself. This has improved retention rates with the platform and allowed users to trade game assets directly from the game. This is a core feature for web3 desktop games.",
  ],
  tags: [
    "Web3 Gaming",
    "GameFi",
    "In-Game Overlay",
    "Game Development",
    "User Experience Enchancement",
    "Simplified Purchase Process",
    "Sales Boost",
  ],
  imgSrc: "/images/casesTop/inGameOverlay",
};

const infoProblemSolutionProps = [
  {
    id: 1,
    iconSrc: "/icons/problem.svg",
    title: "Problem",
    text: [
      "Create an in-game overlay for Web3 games, similar to the Steam overlay, which will include all the functions necessary for the convenience of players in game. ",
    ],
  },
  {
    id: 2,
    iconSrc: "/icons/sun.svg",
    title: "Solution",
    text: [
      "We have developed a comprehensive in-game overlay that includes several key features. A built-in marketplace has been added to the overlay to make it easier for users to buy and sell items without leaving the game. We have integrated a social component that shows your friends' online and offline status, as well as chats for better communication. We have also implemented an achievement tracking system that updates in real time using a system where achievements are tracked using unique identifiers. This feature-rich overlay enhances the gameplay experience by facilitating social interaction, providing achievement rewards, and introduces seamless in-game trading. ",
    ],
  },
];

const infoKey = {
  title: "key solutions",
  items: [
    {
      id: 1,
      iconSrc: "/icons/tracker.svg",
      title: "Achievement tracker",
      text: ["The achievements catalog is pre-populated by a representative of the game developer, with each achievement receiving an internal AchID. Later during gameplay, the game server sends API POST requests to notify the central overlay server of new users' achievements by their internal AchID."],
      maxWidthText: '460'
    },
    {
      id: 2,
      iconSrc: "/icons/userPlus.svg",
      title: "Friends & Chats",
      text: ["We have added a display of your friends online and offline, as well as chat rooms for communication. "],
      maxWidthText: '460'
    },
    {
      id: 3,
      iconSrc: "/icons/supermarket.svg",
      title: " Built-in marketplace",
      text: ["We have added a marketplace to the overlay to make it easier for users to make purchases and facilitate trading in general. In the overlay marketplace users can view prices for in-game items, sort them according to their needs, and therefore get more enjoyment from trading, thus improving the overall in-game experience. "],
      maxWidthText: '460'
    },
  ],
};

const architecture = {
  title: 'architecture',
  imgSrc: ['/images/architecture/inGameOverlay']
}

const killerInfo = {
  title: 'killer feature',
  text: 'We have introduced a full-fledged built-in trading platform into the overlay with the function of in- game purchases, which allows the user to conduct trading operations faster and easier, and therefore make more purchases and sell items with ease while still in-game. ',
  imgSrc: '/images/killer/inGameOverlay'
}

const weCreate = {
  title: 'Something close we can create',
  items: [
    {
      id: 1,
      iconSrc: '/icons/ido.svg',
      title: 'ICO/IDO Platform(Initial Coin Offering/Initial DEX Offering)',
      text: 'Developing a platform for organizing and conducting crowdfunding campaigns using cryptocurrencies, including tools for token creation and management, fundraising, and distribution of tokens to investors.'
    },
    {
      id: 2,
      iconSrc: '/icons/setting.svg',
      title: 'Digital Asset Management System',
      text: 'Creating a solution for inventorying and managing digital assets such as software licenses, digital media files, and documents, with capabilities for their exchange and sale.'
    },
    {
      id: 3,
      iconSrc: '/icons/nft.svg',
      title: 'NFT Marketplace',
      text: 'Developing a platform for creating, buying, selling, and auctioning non-fungible tokens (NFTs), providing opportunities for artists, musicians, and other creators of digital content.'
    }
  ]
}

const preloaderTextStories = false;
const titleBlockStories = 'More Success Stories'

const infoStoriesItems = [
  {
    id: 2,
    title: 'GTM',
    linkSrc: '/cases/gametrade-market',
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
        webp: '/images/stories/gtm.webp',
        webp2x: '/images/stories/gtm2x.webp',
      }
    }
  },
  {
    id: 2,
    title: 'Runes',
    items: [
      {
        title: 'Who:',
        text: 'Our client who is developing a Runes DEX (this team also has members actively maintaining the main repository of Bitcoin Runes). '
      },
      {
        title: 'What we did:',
        text: 'Worked alongside the contributors of Bitcoin Runes, taking part in the creation of one of the world’s first Bitcoin Runes DEX. Our team is responsible for the QA infrastructure and writes code based on the ‘ord’ source code—the software that implements the Bitcoin Runes protocol.'
      },
      {
        title: 'Why it matters:',
        text: "By collaborating directly with the Bitcoin Runes team, we help shape the protocol's future, providing expert oversight on its quality assurance infrastructure."
      },
      {
        title: 'Tech stack:',
        text: 'TypeScript, Rust, Bitcoin Protocol'
      },
    ],
    img: {
      top: true,
      imgSrc: {
        webp: '/images/stories/runes.webp',
        webp2x: '/images/stories/runes2x.webp',
      }
    },
    linkSrc: '/cases/bitcoin-runes',
  },
]

const countVisibleItems = infoStoriesItems.length;

const ctaInfo = {
  title: "Let's create your own story together",
}


export default function Home() {
  const container = useRef<HTMLDivElement | null>(null);
  const caseTop = useRef<HTMLDivElement | null>(null);
  const main = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', setMarginLeftCaseTop)

    function setMarginLeftCaseTop() {
      if (window.innerWidth > 1279) {
        const stylesContainer = window.getComputedStyle(container.current);
        const marginLeft = parseFloat(stylesContainer.marginLeft) + parseFloat(stylesContainer.paddingLeft)
        caseTop.current.style.marginLeft = marginLeft + 'px'
      } else {
        caseTop.current.style.marginLeft = "0"
      }
    }

    setMarginLeftCaseTop()
    main.current.style.opacity = '1';
    main.current.style.visibility = 'visible';
    document.documentElement.style.overflow = 'auto'
  }, [])

  return (
    <>
      <Header headerInfo={headerInfo} />

      <main className="main cases-item-page" ref={main}>
        <CasesTop infoCasesTop={infoCasesTop} ref={caseTop}/>

        <ProblemSolution items={infoProblemSolutionProps} ref={container}/>

        <Key info={infoKey} />

        <Architecture info={architecture}/>

        <Game />

        <Killer info={killerInfo}/>

        <WeCreate info={weCreate}/>

         <Stories info={infoStoriesItems} preloaderTextStories={preloaderTextStories} countVisibleItems={countVisibleItems} titleBlockStories={titleBlockStories}/>

          <Cta info={ctaInfo}/>
      </main>

      <Footer />
    </>
  );
}
