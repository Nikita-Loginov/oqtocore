"use client";

import React from "react";
import styled from "styled-components";
import { Container } from "@/components/widgets";
import Link from "@/components/controls/Link/Link";
import StoriesItemBox from "./parts/SroriesItemBox";

const StoriesSection = styled.section`
  position: relative;

  &.preloader-text {
       &:before {
    position: absolute;
    content: "Our Customers' Success Stories";
    font-size: 127px;
    font-weight: 700;
    line-height: 1.17;
    color: rgb(55, 55, 55);
    text-transform: capitalize;
    transform: translateY(-73%);
    left: -35px;
    right: -5px;
    text-align: center;

    @media (max-width: 1900px) {
      font-size: 90px;
    }

    @media (max-width: 1500px) {
      font-size: 70px;
    }

    @media (max-width: 1223px) {
      font-size: 60px;
    }

    @media (max-width: 900px) {
      font-size: 48px;
    }

    @media (max-width: 767px) {
      transform: translateY(-87%);
      left: -14px;
      right: -9px;
    }

    @media (max-width: 339px) {
      font-size: 40px;
    }
  }
`;

const StoriesInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(2.5rem, 1.6988rem + 3.0888vw, 5rem);
  position: relative;
  z-index: 10;
`;

export const Stories: React.FC = ({ info, preloaderTextStories }) => {
  return (
    <StoriesSection className={`${preloaderTextStories && "preloader-text"}`}>
      <Container>
        <StoriesInner>
          {info.map((box) => (
            <StoriesItemBox key={box.id} content={box} />
          ))}
        </StoriesInner>
      </Container>
    </StoriesSection>
  );
};
