import React from "react";
import styled from "styled-components";

import { Container } from "@/components/widgets";

interface WeCreateItem {
  id: number;
  title: string;
  iconSrc?: string;
  text?: string;
}

interface WeCreateInfo {
  title: string;
  classAdd: string;
  items: WeCreateItem[];
}

interface WeCreateProp {
  info: WeCreateInfo;
}

const WeCreateSection = styled.section`
  padding: 80px 0;
`;

const WeCreateInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const WeCreateItems = styled.div`
  display:grid;
  gap: 24px;

  @media (max-width: 1600px) {
    &.grid-two,
    &.grid-three,
    &.grid-four {
      grid-template-columns: repeat(2, 1fr);
    }

    &.grid-five {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 1220px) {
    &.grid-two,
    &.grid-three,
    &.grid-four {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const WeCreateItem = styled.div`
  border: 2px solid rgb(43, 36, 255);
  background-color: rgb(43, 36, 255);
  padding: clamp(0.9375rem, 0.6371rem + 1.1583vw, 1.875rem);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const WeCreateIcon = styled.span`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 550px) {
    width: 50px;
    height: 50px;
  }
`;

const WeCreateItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const WeCreateItemTitle = styled.h3`
  font-size: clamp(1.25rem, 1.0898rem + 0.6178vw, 1.75rem);
  font-weight: 700;
  line-height: 117%;
  text-transform: capitalize;
  white-space: pre-line;
`;

const WeCreateItemText = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const WeCreate: React.FC<WeCreateProp> = ({ info }) => {
  return (
    <WeCreateSection>
      <Container>
        <WeCreateInner>
          <h2 className="title-two">{info.title}</h2>

          <WeCreateItems className={info.classAdd}>
            {info.items.map((item) => (
              <WeCreateItem key={item.id}>
                {item.iconSrc && <WeCreateIcon>
                  <img src={`${item.iconSrc}`} alt="icon" />
                </WeCreateIcon>}

                <WeCreateItemContent>
                  <WeCreateItemTitle>{item.title}</WeCreateItemTitle>

                  {item.text && <WeCreateItemText>{item.text}</WeCreateItemText>}
                </WeCreateItemContent>
              </WeCreateItem>
            ))}
          </WeCreateItems>
        </WeCreateInner>
      </Container>
    </WeCreateSection>
  );
};
