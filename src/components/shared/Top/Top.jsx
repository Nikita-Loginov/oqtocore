"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import LinkUniq from "@/components/controls/LinkUniq/LinkUniq";
import { Container } from "@/components/widgets";

const Galaxy = dynamic(() => import("@/components/widgets/Galaxy/Galaxy"), {
  ssr: false,
  loading: () => <></>,
});

const TopBox = styled.section`
  padding: clamp(6.5625rem, 4.4595rem + 8.1081vw, 13.125rem) 0
    clamp(5rem, 1.5951rem + 13.1274vw, 15.625rem);
  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: -70px;
    left: 0;
  }
`;

const TopInner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  gap: clamp(2.5rem, 1.6988rem + 3.0888vw, 5rem);
  align-items: flex-start;
`;

const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.25rem, 0.8494rem + 1.5444vw, 2.5rem);
  max-width: 1424px;
`;

const TopTitle = styled.h1`
  font-size: clamp(1.875rem, 0.6733rem + 4.6332vw, 5.625rem);
  font-weight: 400;
  line-height: 1.1;
`;

const TopText = styled.p`
  font-size: clamp(0.875rem, 0.7548rem + 0.4633vw, 1.25rem);
  font-weight: 600;
  line-height: 1.45;
`;

const TopGallaxy = styled.div`
  z-index: -1;
  position: absolute;
  pointer-events: none;
  left: 0;
  right: 0;
  bottom: -70px;
  height: 100%;
  // visibility: hidden;
  // height: 0;
  // width: 0;

  &.showImg {
    img {
      opacity: 1;
    }
  }

  canvas {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
    z-index: 100000;
    position: relative;
    transition: all 5s;
  }

  img {
    object-fit: cover;
    object-position: center;
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    inset: 0;
    // opacity: 0;
    top: 95px;
    transition: all 0.5s;

    // @media (max-width: 767px) {
    //     left: -179px;
    //     object-position: center;
    //     width: auto;
    // }

    // @media (max-width: 650px) {
    //     left: -250px;
    //     object-position: center;
    //     width: auto;
    // }

    // @media (max-width: 400px) {
    //     left: -275px;
    //     object-position: center;
    //     width: auto;
    // }
  }
`;

export default function Top({infoTop, styleWidthContent}) {
  const [loading, setLoading] = useState(true);
  // const [isLoaded, setLoadingPage] = useState(true);
  // const handleSetClient = () => {
  //   setLoading(false);
  // };
  
  // useEffect(() => {
  //   const handleLoad = () => {
  //     setLoadingPage(false);
  //   };

  //   window.onload = handleLoad;

  //   return () => {
  //     window.onload = null;
  //   };
  // }, []);

  return (
    <TopBox>
      <Container>
        <TopInner>
          <TopContent style={styleWidthContent}>
            <TopTitle>
              {infoTop.title}
            </TopTitle>

            <TopText>{infoTop.text}</TopText>
          </TopContent>

          <LinkUniq
            iconName="arrow-down"
            linkText="discover more"
            linkUrl="/#services"
          ></LinkUniq>
        </TopInner>

        <TopGallaxy>
          <Galaxy parametersGallaxy={infoTop.gallaxy}></Galaxy>

          {loading ? <picture>
              <img
                src="data:image/png;base64,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"
                alt="Loading..."
              />
            </picture> : <></>}

        </TopGallaxy>
      </Container>
    </TopBox>
  );
}
