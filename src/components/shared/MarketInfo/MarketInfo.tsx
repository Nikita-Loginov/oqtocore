import React from "react";
import styled from "styled-components";

import { Container } from "@/components/widgets";

interface MarketInfoItem {
  id: number;
  iconSrc: string;
  title: string;
  text: string[];
}

interface MarketInfoProps {
  title: string;
  items: MarketInfoItem[];
}

interface MarketInfoProp {
  info: MarketInfoProps;
}

const MarketInfoSection = styled.section`
  padding-bottom: 80px;
`;

const MarketInfoInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const MarketInfoItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const MarketInfoItem = styled.div`
  border: 1px solid rgb(55, 55, 55);
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const MarketInfoIcon = styled.span`
  width: 180px;
  height: 180px;
  // overflow: hidden;
  border-radius: 14px;
  flex-shrink: 0;

  @media (max-width: 1100px) {
    width: clamp(5rem, 1.2135rem + 14.5985vw, 11.25rem);;
    height: clamp(5rem, 1.2135rem + 14.5985vw, 11.25rem);;
  }

  img {
    width: 100%;
  }
`;

const MarketInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MarketInfoTitle = styled.h3`
  font-size: clamp(1rem, 0.7597rem + 0.9266vw, 1.75rem);
  font-weight: 700;
  line-height: 117%;
  text-transform: capitalize;
`;

const MarketInfoTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: clamp(0.875rem, 0.8349rem + 0.1544vw, 1rem);
  font-weight: 600;
  line-height: 1.35;
`;

export const MarketInfo: React.FC<MarketInfoProp> = ({ info }) => {
  return (
    <MarketInfoSection>
      <Container>
        <MarketInfoInner>
          <h2 className="title-two">{info.title}</h2>

          <MarketInfoItems>
            {info.items.map((item) => (
              <MarketInfoItem key={item.id}>
                <MarketInfoIcon>
                  <img src={item.iconSrc} alt="icon" loading="lazy" />
                </MarketInfoIcon>

                <MarketInfoContent>
                  <MarketInfoTitle>{item.title}</MarketInfoTitle>

                  <MarketInfoTextBox>
                    {item.text.map((itemText) => (
                      <p key={itemText}>{itemText}</p>
                    ))}
                  </MarketInfoTextBox>
                </MarketInfoContent>
              </MarketInfoItem>
            ))}
          </MarketInfoItems>
        </MarketInfoInner>
      </Container>
    </MarketInfoSection>
  );
};
