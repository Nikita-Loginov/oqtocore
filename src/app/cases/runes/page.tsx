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
    "Pioneering a Fungible Token Protocol on the Bitcoin Network.",
  text: [
    "For this project, we work directly with the developers of Bitcoin Ordinals and Runes, contributing to the creation of the world's first Bitcoin Runes DEX. Our team is responsible for the QA infrastructure and writes code based on the ‘ord’ source code—the software that implements the Bitcoin Runes protocol.",
    "By working at the opcode level, similar to assembler but for Bitcoin, we can manipulate Bitcoin's low-level instruction set, enabling transaction logic that isn't achievable with higher-level applications.",
  ],
  tags: [
    "Runes",
    "Bitcoin",
    "NFT",
    "BRC-20",
    "UTXO",
    "Ongoing",
    "Security",
    "QA",
    "Ordinals",
  ],
  imgSrc: "/images/casesTop/runes",
};

const infoProblemSolutionProps = [
  {
    id: 1,
    iconSrc: "/icons/problem.svg",
    title: "Problem",
    text: [
      "Our client has a core team that is developing a Runes DEX (this team also has members actively maintaining the main repository of Bitcoin Runes). Since the underlying protocol is still under development, our team had an important task: end-to-end testing. It is necessary to ensure that the protocol functions flawlessly and is correctly integrated with market operations. The specifics of the Bitcoin Runes protocol are such that a user can send their runes by mistake when sending the transaction. To avoid that, our team establishes QA infrastructure that makes sure that all Rune transactions are correctly handled. This involves rigorous testing to protect the platform from any inconsistencies and vulnerabilities.",
    ],
  },
  {
    id: 2,
    iconSrc: "/icons/sun.svg",
    title: "Solution",
    text: [
      "To solve a problem posed by client, we assembled our team of highly qualified developers with mathematical expertise, along with a project manager and  multiple technical writers. Our team creates detailed documentation, identifies inconsistencies and edge cases, documents them, and covers them with tests to ensure that the P2P marketplace and protocol operate flawlessly and are free from any vulnerabilities. We also produce onboarding materials for future developers, ensuring a smooth transition and continued success",
      "In later stages, launchpad for games and token exchanger were added to the GameTrade ecosystem.",
    ],
  },
];

const infoKey = {
  title: "key solutions",
  items: [
    {
      id: 1,
      iconSrc: "/icons/code.svg",
      title: "Learning from code",
      text: ["We treat the source code as our primary documentation source since the protocol is in active development. By analyzing the code, we gain a deep understanding of how specific processes function and then document our findings. ", 'This documentation will serve as a valuable resource for future developers, enabling them to quickly grasp how the protocol and the app operate.'],
      maxWidthText: '460'
    },
    {
      id: 2,
      iconSrc: "/icons/protocol.svg",
      title: "Working with the new protocol ",
      text: ["The runes protocol and P2P marketplace are still in the development stage. We are directly involved with working on them to guarantee that they function properly and without vulnerabilities. "],
      maxWidthText: '240'
    },
    {
      id: 3,
      iconSrc: "/icons/file.svg",
      title: "Documentation in the external Clickup system",
      text: ["We report weekly to the client, providing constant communication and ensuring creation of extensive daily reports. This professional approach helps our client to understand at what stage each particular process is, how soon it will be ready and what challenges arised during the work.", "Finally, this approach enables us to promptly and quickly direct the team in the right direction if they want to make changes to the project. "],
      maxWidthText: '460'
    },
  ],
};

const marketInfo = {
  title: "Something special about Runes",
  items: [
    {
      id: 1,
      iconSrc: "/icons/verification.svg",
      title: "Comprehensive historical verification",
      text: ["Our initial level of verification conducts a comprehensive scan from the blockchain's inception to the present day. This extensive verification ensures that every transaction and block follows established protocols and remains unaffected, providing a strong foundation of trust and reliability. In our commitment to ensure maximum accuracy and safety, we have improved the verification process by introducing a double verification system of the database."],
    },
    {
      id: 2,
      iconSrc: "/icons/checking.svg",
      title: "Incremental block checking ",
      text: ['In addition to our initial level of verification, our second level focuses solely on the last added block. This phased approach was developed by our team as a strategic solution to improve the speed of data validations. This allows us to quickly validate new data without compromising thoroughness or security. This two-way verification strategy not only speeds up the process, but also strengthens the integrity of the blockchain, protecting it from potential vulnerabilities.']
    }
  ]
};

const architecture = {
  title: 'architecture',
  imgSrc: ['/images/architecture/runes'],
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
              list: ['TypeScript']
            }
          ]
        },
        {
          classAdd: 'grid-one',
          id: 2,
          items: [
            {
              id: 2,
              title: 'Blockchain',
              list: ['Bitcoin']
            }
          ]
        },
      ]
    },
  ]
}

const killerInfo = {
  title: 'killer feature',
  text: 'OWe ensure an unmatched level of security and data integrity through our comprehensive protocol vulnerability assurance and data validation. The result of our work is that the protocol is free of flaws that could compromise the system, while maintaining strict verification, accuracy and reliability of the data managed on the blockchain. ',
  imgSrc: '/images/killer/runes'
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
    id: 1,
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
      top: false,
      imgSrc: {
        webp: '/images/stories/game.webp',
        webp2x: '/images/stories/game2x.webp',
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
        webp: '/images/stories/flyming.webp',
        webp2x: '/images/stories/flyming2x.webp',
      }
    }
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
