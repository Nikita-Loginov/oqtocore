"use client";
import React from "react";
import { useEffect, useRef } from "react";
import { Header, Footer, Stories } from "@/components/widgets";
import CasesTop  from "@/components/shared/CasesTop/CasesTop";
import ProblemSolution from "@/components/shared/ProblemSolution/ProblemSolution";
import { Key } from "@/components/shared/Key/Key";
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
    "Bitcoin cloud mining platform ",
  text: [
    "Our team designed and constructed a Bitcoin mining farm, followed by the implementation of a cloud mining platform on top of it.",
  ],
  tags: [
    "Bitcoin Mining",
    "Infrastructure",
    "Cloud Mining Platform",
    "Mining Equipment Maintenance",
    "Mining Security",
  ],
  imgSrc: "/images/casesTop/flymining",
};

const infoProblemSolutionProps = [
  {
    id: 1,
    iconSrc: "/icons/problem.svg",
    title: "Problem",
    text: [
      "A client had invested $1.5M into Bitcoin mining equipment. Our task was to build infrastructure around this equipment for profit maximization hardware/software security provision.",
    ],
  },
  {
    id: 2,
    iconSrc: "/icons/sun.svg",
    title: "Solution",
    text: [
      "We have designed and built mining containers from scratch. They are super efficient with zero additional fans - all the air is pushed by in-built fans of the ASIC miners.  Additionally we build a monitoring software around the farm, to establish trancparency and hardware security through monitoring. (Any hardware malfunctions we rapidly reported and sorted to ensure continous operation of the mining farm, to secure max profits).",
    ],
  },
];

const infoKey = {
  title: "key solutions",
  items: [
    {
      id: 1,
      iconSrc: "/icons/cloud.svg",
      title: "Cloud mining platform",
      text: ["To further improve the return on investment for our investors, we have developed and launched a state-of-the-art cloud mining platform. We started creating the FlyMining cloud mining platform in February 2018 and finished it about 5 months later, in July 2018. We maintained the platform until September 2020."],
      maxWidthText: '460'
    },
    {
      id: 2,
      iconSrc: "/icons/code.svg",
      title: "Marketing",
      text: ["In addition to developing and maintaining this cutting-edge infrastructure, we have also participated in marketing our platform. Based on customer feedback, we redesigned the platform to improve the user experience and increase engagement. We have partnered with marketers, bloggers and social media influencers to expand our reach and influence."],
      maxWidthText: '460'
    },
    {
      id: 3,
      iconSrc: "/icons/file.svg",
      title: "Monitoring 24/7",
      text: ["Moreover, we have developed a special tool in .Net that works around the clock, monitoring the equipment. This tool automatically checks each machine for signs of wear or malfunction, such as missing fans or microchips, and immediately alerts maintenance personnel via email. This proactive approach ensures that mining is always running smoothly, minimizing downtime and maximizing productivity."],
      maxWidthText: '460'
    },
  ],
};

const architecture = {
  title: 'architecture',
  imgSrc: ['/images/architecture/flyminingOne', '/images/architecture/flyminingTwo'],
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
              title: 'Technologies',
              list: ['distributed computing', 'Test-driven development', 'POSIX', 'CDN', 'UNIX', 'Web API','agile software development','Blockchain','cross-platform development','Digital currencies'],
              mibbleLink: true
            }
          ]
        },
        {
          classAdd: 'grid-one',
          id: 2,
          items: [
            {
              id: 2,
              title: 'Main Frameworks',
              list: ['ASP.NET MVC', 'Bootstrap', 'Vue.js', 'jQuery']
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
              title: 'Software',
              list: ['RS Bank', 'Mailchimp', 'PayPal', 'Microsoft Office Suite', 'Microsoft Visual Studio','Microsoft SQL Server','Redis','BTCPay','XCode','TeamCity','Selenium','Web engines (Apache, nginx, IIS)','vim','bash','Balsamic moqups','Git','Azure','Cloudflare'],
              mibbleLink: true
            }
          ]
        },
        {
          classAdd: 'grid-three',
          id: 2,
          items: [
            {
              id: 2,
              title: 'Programming Languages',
              list: ['C#', 'C++', 'HTML', 'CSS', 'Python', 'JavaScript']
            },
            {
              id: 3,
              title: 'Delivarables',
              list: ['Database Development', 'Desktop Applications', 'Web Applications', 'Database Architecture', 'Hardware engineering', 'API']
            },
            {
              id: 4,
              title: 'Web',
              list: ['IIS']
            }
          ]
        },
      ]
    }
  ]
}

const killerInfo = {
  title: 'killer feature',
  text: 'We have our own dashboard that shows effectivity of mining and statistics required for rapid maintenance procedure. The mining information is used for the cloud mining service, to calculate the profit of each investor. All the payments, payouts are calculated using the real banking software (our team had to learn accounting to be able to implement certain types of transactions). ',
  imgSrc: '/images/killer/flymining'
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
        webp: '/images/stories/gtm.webp',
        webp2x: '/images/stories/gtm2x.webp',
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
