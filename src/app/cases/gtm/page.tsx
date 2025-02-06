"use client";
import React from "react";
import { useEffect, useRef } from "react";
import { Header, Footer, Stories } from "@/components/widgets";
import CasesTop  from "@/components/shared/CasesTop/CasesTop";
import ProblemSolution from "@/components/shared/ProblemSolution/ProblemSolution";
import { Key } from "@/components/shared/Key/Key";
import {MarketInfo} from "@/components/shared/MarketInfo/MarketInfo";
import { Architecture } from "@/components/shared/Architecture/Architecture";
import { Stack } from "@/components/shared/Stack/Stack";
import { Killer } from "@/components/shared/Killer/Killer";
import { WeCreate } from "@/components/shared/WeCreate/WeCreate";
import {Cta} from "@/components/shared/Cta/Cta";

import '@/styles/casesPages/main.scss';

const headerInfo = {
  contactBtn: true,
};

const infoCasesTop = {
  title:
    "GameTrade is gaming ecosystem on blockchain, merging traditional gaming infrastructure analogous to Steam with the potential that blockchain can bring to video-games economies. (If done right).",
  text: [
    "GameTrade allows users to discover new games, find friends, share gaming experience in various ways and needless to say trade in-game assets in the marketplace.",
    "The project started in 2021 during the initial boom of blockchain games. Our client needed to create an MVP for GameTrade in very tight deadlines in an ever-changing landscape of blockchain. We have succeded with releasing the MVP in just 2 quarters.",
    "As it was not clear which blockchains would win the hearts of gamers, we designed the platform to be fully agnostic for variety of chains (from variety of EVMS to Solana). Gametrade from the very first MVP release has supported a variety of crypto wallets (400+ wallets) and blockchains. With future developments to support payments with fiat currency for non-crypto native users. Our client wanted a unified gaming platform where people could buy and sell their gaming assets with peace of mind.",
  ],
  tags: [
    "Gaming Industry",
    "Blockchain",
    "NFT",
    "Cloud Computing",
    "E-Commerce",
    "GameFi",
  ],
  imgSrc: "/images/casesTop/gtm",
};

const infoProblemSolutionProps = [
  {
    id: 1,
    iconSrc: "/icons/problem.svg",
    title: "Problem",
    text: [
      "Create a gaming ecosystem for games (and their players) that onboarded blockchain technology.",
      "A place where such gamers can discover, play and rate games. Communicate with each other and confidently trade their gaming assets in the form of NFTs, knowing that their transactions will be secure. ",
    ],
  },
  {
    id: 2,
    iconSrc: "/icons/sun.svg",
    title: "Solution",
    text: [
      "A system that is designed to work with variety of blockchains, NFT protocols and crypto wallets, with aim to support fiat. Platform users can leave reviews for games and add NFT items to their favorites’ list. To help grow and interconnect the web3 community, the platform has established friends system and chats feature.",
      "In later stages, launchpad for games and token exchanger were added to the GameTrade ecosystem.",
    ],
  },
];

const infoKey = {
  title: "key solutions",
  items: [
    {
      id: 1,
      iconSrc: "/icons/wallet.svg",
      title: "Extensive Wallets support",
      text: ["The platform supports 400+ wallets, such as Metamask, Trust walllet, Phantom wallet and many many others."],
      maxWidthText: '243'
    },
    {
      id: 2,
      iconSrc: "/icons/schedule.svg",
      title: "Advanced search and flitering system for Games",
      text: ["Using complex algorithms, this feature allows users to quickly and effectivelly find games and assets that would be interesting and useful for them."],
      maxWidthText: '460'
    },
    {
      id: 3,
      iconSrc: "/icons/supermarket.svg",
      title: "Marketplace for game-assets",
      text: ["Allows users to buy and sell game items on multiple blockchains with ease."],
      maxWidthText: '300'
    },
  ],
};

const marketInfo = {
  title: "Something special about the gameTrade market",
  items: [
    {
      id: 1,
      iconSrc: "/icons/ts.svg",
      title: "Backend & Frontend",
      text: ["GameTrade utilizes TypeScript for both backend and frontend development. The backend, built with NestJS, is hosted on AWS Elastic Container Service (ECS) for scalability and stability, while the frontend uses NextJS and is deployed on AWS Amplify, leveraging server-side rendering for enhanced speed and SEO. They use a unified GraphQL schema for code generation to ensure compatibility between frontend and backend. The data storage is managed through a PostgreSQL-based AWS RDS cluster for long-term data, AWS DynamoDB for short-term data, and AWS OpenSearch for search functionalities. User activity tracking and marketing are implemented using Facebook Conversions API and Google Analytics. Automated emails are using Mailchimp+Mandrill."],
    },
    {
      id: 2,
      iconSrc: "/icons/money.svg",
      title: "Technology Stack and Blockchain Support",
      text: ['The system is capable of supporting any token and easily integrates with new blockchains. It supported Ethereum and various EVMS, Polygon, and Binance Smart Chain, later we added Solana and Avalanche.', 'The frontend uses ethers.js and web3.js, while the backend employs Infura for blockchain interactions. BigQuery is used for processing large datasets, such as parsing user tokens.'],
    },
    {
      id: 3,
      iconSrc: "/icons/platform.svg",
      title: "Platform Compatibility and Integration",
      text: ['Gametrade Paltfrom is designed to be flexible and blockchain-agnostic, supporting a variety of blockchains and any WalletConnect-compliant cryptowallets, with specific integration of highly used MetaMask wallet. It leverages third-party services like Moralis, Infura, and Google BigQuery to avoid building proprietary solutions and to ensure robust, failproof accounting, with transaction confirmations within 30 seconds.'],
    },
    {
      id: 4,
      iconSrc: "/icons/smart.svg",
      title: "Smart Contract Functionality and Security",
      text: ['A proprietary marketplace smart contract has been developed, based on an open-source template yet extensively modified, which manages transactions including fund transfers and fee adjustments directly through smart contract functions, ensuring security and flexibility. A token exchange smart contract was developed during later stages of a project.'],
    },
  ],
};

const architecture = {
  title: 'architecture',
  imgSrc: ['/images/architecture/gtm'],
  imgFormat: 'webp'
}

const stackInfo = {
  title: 'Technology Stack',
  columns: [
    {
      id: 1,
      classAdd: 'grid-two',
      itemBoxs: [
        {
          classAdd: 'grid-one',
          id: 1,
          items: [
            {
              id: 1,
              title: 'Backend',
              list: ['TypeScript', 'NestJS', 'AWS Elastic Container Service (ECS)']
            }
          ]
        },
        {
          classAdd: 'grid-one',
          id: 2,
          items: [
            {
              id: 2,
              title: 'Databases and data storage',
              list: ['PostgreSQL', 'AWS DynamoDB', 'AWS OpenSearch']
            }
          ]
        },
      ]
    },
    {
      id: 1,
      classAdd: 'grid-two',
      itemBoxs: [
        {
          classAdd: 'grid-one',
          id: 1,
          items: [
            {
              id: 1,
              title: 'CI/CD',
              list: ['Github actions for PR pre-validation', 'NestJS', 'AWS CodeBuild', 'AWS CodePipeline']
            }
          ]
        },
        {
          classAdd: 'grid-one',
          id: 2,
          items: [
            {
              id: 2,
              title: 'Frontend',
              list: ['TypeScript', 'Apollo Client', 'AWS Beanstalk for backend', 'web3.js', 'NextJS', 'ethers.js', 'AWS Amplify for frontend']
            }
          ]
        },
      ]
    }
  ]
}

const killerInfo = {
  title: 'killer feature',
  text: 'On later stages of the project we have developed an in-game overlay system for GameTrade, taking direct inspiration from Steam’s overlay functionality. Gametrade’s core functionality was directly integrated into 2 most popular game engines (Unity & Unreal Engine 4/5) which allowed users to access it with one button click from the game itself. This has improved retention rates with the platform and allowed users to trade game assets directly from the game. This is a core feature for web3 desktop games.',
  imgSrc: '/images/killer/gtm'
}

const weCreate = {
  title: 'Something close we can create',
  classAdd: 'grid-three',
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
      title: 'Digital Asset\n Management System',
      text: 'Creating a solution for inventorying and managing digital assets such as software licenses, digital media files, and documents, with capabilities for their exchange and sale.'
    },
    {
      id: 3,
      iconSrc: '/icons/nft.svg',
      title: 'NFT\n Marketplace',
      text: 'Developing a platform for creating, buying, selling, and auctioning non-fungible tokens (NFTs), providing opportunities for artists, musicians, and other creators of digital content.'
    }
  ]
}

const preloaderTextStories = false;
const titleBlockStories = 'More Success Stories'

const infoStoriesItems = [
  {
    id: 1,
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
    linkSrc: '/cases/runes',
  },
  {
    id: 2,
    title: 'In-Game Overlay',
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
      top: false,
      imgSrc: {
        webp: '/images/stories/game.webp',
        webp2x: '/images/stories/game2x.webp',
      }
    },
    linkSrc: '/cases/inGameOverlay',
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

        <MarketInfo info={marketInfo}/>

        <Architecture info={architecture}/>

        <Stack info={stackInfo} />

        <Killer info={killerInfo}/>

        <WeCreate info={weCreate}/>

         <Stories info={infoStoriesItems} preloaderTextStories={preloaderTextStories} countVisibleItems={countVisibleItems} titleBlockStories={titleBlockStories}/>

          <Cta info={ctaInfo}/>
      </main>

      <Footer />
    </>
  );
}
