import React from "react";
import styled from "styled-components";

import { Container } from "@/components/widgets";

interface KeyItem {
  id: number;
  iconSrc: string;
  title: string;
  text: string[];
  maxWidthText: string;
}

interface KeyProps {
  title: string;
  items: KeyItem[];
}

interface KeyProp {
  info: KeyProps;
}

const KeySection = styled.section`
  padding: 80px 0;
`;

const KeyInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const KeyItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1.125rem, 0.6844rem + 1.6988vw, 2.5rem);

  @media (max-width: 1600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1220px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const KeyItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  align-items: center;
  padding: 30px
    clamp(0.9375rem, 0.5169rem + 1.6216vw, 2.25rem);
  border: 2px solid rgb(55, 55, 55);
  border-radius: 20px;
  background-color: rgba(1, 1, 1, 0.2);
  min-height: clamp(25.625rem, 21.0183rem + 17.7606vw, 40rem);
  justify-content: center;

  @media (max-width: 1600px) {
    &:nth-child(3) {
      grid-column: span 2;
    }
  }

  @media (max-width: 1220px) {
    &:nth-child(3) {
      grid-column: span 1;
    }
  }
`;

const KeyIcon = styled.span`
  height: 90px;

  img {
    height:100%;
  }
`;

const KeyItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  text-align: center;
`;

const KeyItemTitle = styled.h3`
 font-size: clamp(1.25rem, 1.0898rem + 0.6178vw, 1.75rem);
  font-weight: 700;
  line-height: 117%;
    text-transform: capitalize;
`;

const KeyTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const KeyText = styled.p`
  font-size: clamp(0.875rem, 0.7548rem + 0.4633vw, 1.25rem);
  font-weight: 600;
  line-height: 145%;
  max-width:460px;
`;


export const Key: React.FC<KeyProp> = ({ info }) => {
  return (
    <KeySection>
      <Container>
        <KeyInner>
          <h2 className="title-two">{info.title}</h2>

          <KeyItems>
            {info.items.map((item) => (
              <KeyItem key={item.id}>
                <KeyIcon>
                  <img src={item.iconSrc} alt="icon" loading="lazy" />
                </KeyIcon>

                <KeyItemContent>
                  <KeyItemTitle style={{ maxWidth: `${item.maxWidthText}px` }}>{item.title}</KeyItemTitle>
                    
                  <KeyTextBox>
                    {item.text.map((itemText) => (
                      <KeyText key={itemText}>{itemText}</KeyText>
                    ))}
                    </KeyTextBox>
                </KeyItemContent>
              </KeyItem>
            ))}
          </KeyItems>
        </KeyInner>
      </Container>
    </KeySection>
  );
};
