import React, {forwardRef} from "react";
import styled from "styled-components";

interface CasesTopProps {
  infoCasesTop: {
    title: string;
    text: string[];
    tags: string[];
    imgSrc: string;
  };
}

const CasesTopSection = styled.section`
  max-width: 1920px;
  padding: 92px 0 0 0;

  @media (max-width: 1279px) {
    padding-bottom: 80px;
  }

  @media (max-width: 767px) {
     padding-top:79px;
  }
`;

const CasesTopInner = styled.div`
  display: flex;
  justify-content: space-between;
  gap: clamp(2.5rem, -15.3571rem + 19.0476vw, 5rem);

  @media (max-width: 1279px) {
    flex-direction: column-reverse;
  }
`;

const CasesTopContent = styled.div`
  max-width: 658px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: clamp(0.625rem, -13.247rem + 17.0732vw, 5rem);
  padding-bottom: 80px;

  @media (max-width: 1279px) {
    max-width: 100%;
    padding: 0px clamp(0.9375rem, -10.4954rem + 20.3252vw, 2.5rem);
  }
`;

const CasesTopTitle = styled.h1`
  font-size: clamp(1.25rem, 1.0898rem + 0.6178vw, 1.75rem);
  font-weight: 700;
  line-height: 117%;
  text-transform: capitalize;
`;

const CasesTopTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;
`;

const CasesTopTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const CasesTopTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;
  border-radius: 51px;
  background: rgb(43, 36, 255);
  padding: clamp(0.75rem, 0.5898rem + 0.6178vw, 1.25rem) clamp(1.25rem, 0.9696rem + 1.0811vw, 2.125rem);
`;

const CasesTopImg = styled.div`
  max-width: 1060px;

  @media (max-width: 1279px) {
    max-width: 700px;
  }

  img {
    width: 100%;
  }
`;

const CasesTop = forwardRef<HTMLDivElement, CasesTopProps>(({ infoCasesTop }, ref) => {
  return (
    <CasesTopSection ref={ref}>
      <CasesTopInner>
        <CasesTopContent>
          <CasesTopTitle>{infoCasesTop.title}</CasesTopTitle>

          <CasesTopTextBox>
            {infoCasesTop.text.map((itemText) => (
              <p key={itemText}>{itemText}</p>
            ))}
          </CasesTopTextBox>

          <CasesTopTags>
            {infoCasesTop.tags.map((itemText) => (
              <CasesTopTag key={itemText}>{itemText}</CasesTopTag>
            ))}
          </CasesTopTags>
        </CasesTopContent>

        <CasesTopImg>
          <picture>
            <source
              srcSet={`
                ${infoCasesTop.imgSrc}.webp   1x,
                ${infoCasesTop.imgSrc}2x.webp 2x
              `}
            />
            <img src={`${infoCasesTop.imgSrc}.webp`} alt="img" />
          </picture>
        </CasesTopImg>
      </CasesTopInner>
    </CasesTopSection>
  );
});

CasesTop.displayName = "CaseTop";

export default CasesTop;
