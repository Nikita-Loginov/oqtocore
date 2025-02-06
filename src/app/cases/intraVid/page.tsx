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
    "Enterprise-level intranet video hosting (codename IntraVid)",
  text: [
    "For a large international customer with 200k+ employees we implemented a comprehensive solution with a modern, efficient system built using AWS services. This system allows seamless uploading, processing, and streaming of video content, including multi-language captioning, transcription, and advanced media management features. Additionally, we enhanced video search capabilities by incorporating object detection and caption-based search, while also improving scalability, security, and global distribution with CDN support.",
  ],
  tags: [
    "Enterprise Solutions",
    "E-Commerce",
    "Video Streaming",
    "Data Storage Compliance",
    "AWS",
  ],
  imgSrc: "/images/casesTop/intranet",
};

const infoProblemSolutionProps = [
  {
    id: 1,
    iconSrc: "/icons/problem.svg",
    title: "Problem",
    text: [
      "Implement an intranet video portal with all the modern functionality such as live streaming, automated transcriptions and captions.",
    ],
  },
  {
    id: 2,
    iconSrc: "/icons/sun.svg",
    title: "Solution",
    text: [
      "Our project enabled users to upload, edit, and manage media content like videos and audio files within the IntraVid platform, offering seamless media processing and storage across multiple resolutions. It supported automatic or custom thumbnails, multi-lingual captions and transcriptions (including ASR-generated ones), and provided advanced live streaming capabilities, including screen capture and webcam integration. Additional features included media clipping, detailedb permission settings for downloads, and options for scheduling and",
    ],
  },
];

const infoKey = {
  title: "key solutions",
  items: [
    {
      id: 1,
      iconSrc: "/icons/wallet.svg",
      title: "Media Processing and Transcoding",
      text: ["This ensures that content can be delivered efficiently across different regions and device types, regardless of network limitations. It enhances the company's ability to communicate with employees, partners, and customers globally without compromising media quality."],
      maxWidthText: '243'
    },
    {
      id: 2,
      iconSrc: "/icons/schedule.svg",
      title: "Multi-lingual Captions and Transcriptions",
      text: ["Supporting multiple languages fosters inclusivity and ensures clear communication across diverse global teams. This is vital for training, internal communication, and customer-facing content, improving both accessibility and comprehension."],
      maxWidthText: '460'
    },
    {
      id: 3,
      iconSrc: "/icons/supermarket.svg",
      title: " Live Streaming with Advanced Options",
      text: ["Live streaming with features like screen capture and webcam integration allows for dynamic presentations and real-time communication across geographically dispersed teams. It enhances collaboration during global events, internal meetings, and product launches, leading to better engagement and productivity."],
      maxWidthText: '300'
    },
  ],
};

const marketInfo = {
  title: "Unique and Beneficial Solutions",
  items: [
    {
      id: 1,
      iconSrc: "/icons/cloudNative.svg",
      title: "Cloud-native",
      text: ["Being cloud-native offers several significant advantages for businesses, particularly regarding scalability, efficiency, and cost optimization."],
    },
    {
      id: 2,
      iconSrc: "/icons/amazon.svg",
      title: "Use of AI Services Provided by AWS",
      text: ['Leveraging AI services like AWS Transcribe for automated transcription, AWS Translate for multi-language support, and AWS Rekognition for object and scene detection added immense value with minimal development effort.'],
    },
  ],
};

const architecture = {
  title: 'architecture',
  imgSrc: ['/images/architecture/inrtanet'],
  imgFormat: 'svg'
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
              title: 'AWS Services',
              list: ['AWS Amplify (frontend hosting)', 'AWS Elemental MediaConvert (Video transcoding)', 'AWS Beanstalk (backend hosting)', 'AWS Rekognition (Object and scene detection)', 'AWS Rekognition (Object and scene detection)', 'AWS S3 (Storage)', 'AWS Step Functions (Orchestration)', 'AWS CloudFront (CDN and content delivery)', 'AWS Lambda (Processing and serverless functions)', 'AWS Transcribe (Transcription)', 'Amazon SNS (Notifications)', 'AWS Translate (Multi-language support)', 'Amazon Athena (Analytics for storage and bandwidth)'],
            }
          ]
        },
        {
          classAdd: 'grid-two',
          id: 2,
          items: [
            {
              id: 2,
              title: 'Languages',
              list: ['JavaScript, TypeScript', 'Yaml', 'bash', 'Python', 'HTML5 (for video playback)']
            },
            {
              id: 3,
              title: 'Frameworks',
              list: ['Video.js (HTML5 video player)', 'Next.js (frontend)', 'Nest.js (backend)']
            }
          ]
        },
      ]
    },
  ]
}

const killerInfo = {
  title: 'killer feature',
  text: 'Our solution ensured GDPR, HIPAA, FINRA, and SOC2 compliance by implementing robust security measures such as encryption of video files during upload, storage, and streaming using AWS services like S3 and CloudFront. We enforced strict access control, leveraging Cloudfront signed cookies and IntraVid’s authentication to protect sensitive media and ensure only authorized users could access or download content. Additionally, we maintained comprehensive audit trails and analytics to track user interactions with media, ensuring all actions were securely logged and could be reviewed in accordance with regulatory requirements.',
  imgSrc: '/images/killer/inrtanet'
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
