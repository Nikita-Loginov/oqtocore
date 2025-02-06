import React from "react";
import styled from "styled-components";

import { Container } from "@/components/widgets";

interface ArchitectureProp {
  info: {
    title: string;
    imgSrc: string[];
    imgFormat: string;
  };
}

const ArchitectureSection = styled.section`
  padding-bottom: 80px;
`;

const ArchitectureInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.625rem, 0.0241rem + 2.3166vw, 2.5rem);
  padding: clamp(0.9375rem, 0.4368rem + 1.9305vw, 2.5rem);
  border: 1px solid rgb(55, 55, 55);
`;

const ArchitectureImgs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  img {
    width: 100%;
  }
`;

export const Architecture: React.FC<ArchitectureProp> = ({ info }) => {
  return (
    <ArchitectureSection>
      <Container>
        <ArchitectureInner>
          <h2 className="title-two">{info.title}</h2>

          <ArchitectureImgs>
            {info.imgFormat !== "svg"
              ? info.imgSrc.map((itemSrc, index) => (
                  <picture key={index}>
                    <source
                      srcSet={`${itemSrc}.${info.imgFormat} 1x, ${itemSrc}2x.${info.imgFormat} 2x`}
                    />
                    <img
                      src={`${itemSrc}.${info.imgFormat}`}
                      alt="img"
                    />
                  </picture>
                ))
              : info.imgSrc.map((itemSrc, index) => (
                  <img key={index} src={`${itemSrc}.${info.imgFormat}`} alt="img" />
                ))}
          </ArchitectureImgs>
        </ArchitectureInner>
      </Container>
    </ArchitectureSection>
  );
};
