import React from "react";
import styled from "styled-components";

import { Container } from "@/components/widgets";

interface CasesTopProps {
  info: {
    title: string;
    text: string;
    imgSrc: string;
    maxWidthImg?: number
  };
}

const KillerSection = styled.section`
  padding: 0 0 clamp(0.9375rem, -0.3644rem + 5.0193vw, 5rem) 0;

  .container {
    padding: clamp(0rem, -18.2927rem + 32.5203vw, 2.5rem);
  }
`;

const KillerInner = styled.div`
  background-color: #2b24ff;
  padding: clamp(0.9375rem, -0.3644rem + 5.0193vw, 5rem);

  @media (max-width: 500px) {
    align-items: flex-start;
  }
`;

const KillerContent = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(0.9375rem, 0.4368rem + 1.9305vw, 2.5rem);
  margin: 0 auto;
`;

const KillerText = styled.p`
  font-size: clamp(0.875rem, 0.7949rem + 0.3089vw, 1.125rem);
  font-weight: 400;
  line-height: 117%;

  @media(max-width:767px) {
    line-height: 135%;
  }
`;

const KillerImg = styled.img`
  width: 100%;
`;

export const Killer: React.FC<CasesTopProps> = ({ info }) => {
  return (
    <KillerSection>
      <Container>
        <KillerInner>
          <KillerContent>
            <h2 className="title-two">{info.title}</h2>

            <KillerText>{info.text}</KillerText>

            <picture>
              <source
                srcSet={`${info.imgSrc}.webp  1x,
                  ${info.imgSrc}2x.webp 2x
                `}
              />
              <KillerImg style={{maxWidth: info.maxWidthImg}} loading="lazy" src={`${info.imgSrc}.webp`} alt="img" />
            </picture>
          </KillerContent>
        </KillerInner>
      </Container>
    </KillerSection>
  );
};
