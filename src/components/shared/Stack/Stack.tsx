import React from "react";
import styled from "styled-components";

import { Container } from "@/components/widgets";

interface CaseItem {
  id: number;
  title: string;
  list: string[];
  mibbleLink?: boolean;
}

interface CaseItemsBoxs {
  id: number;
  classAdd: string;
  items: CaseItem[];
}

interface CaseColumns {
  id: number;
  classAdd: string;
  itemBoxs: CaseItemsBoxs[];
}

interface CaseProps {
  title: string;
  columns: CaseColumns[];
}

interface CaseProp {
  info: CaseProps;
}

const StackSection = styled.section`
  padding-bottom: 80px;
`;

const StackInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const StackItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StackItemBox = styled.div`
  display: grid;
  gap: 12px;

  @media (max-width: 767px) {
    &.grid-three,
    &.grid-two {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const StackItem = styled.div`
  padding: clamp(1.25rem, 0.8494rem + 1.5444vw, 2.5rem);
  border: 2px solid rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StackItemTitle = styled.h3`
  font-size: clamp(1.25rem, 1.0898rem + 0.6178vw, 1.75rem);
  font-weight: 700;
  line-height: 117%;
  text-transform: capitalize;
`;

const StackItemRow = styled.div`
  display: grid;
  gap: 12px;

  @media (max-width: 1300px) {
    &.grid-three,
    &.grid-two {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const StackItemList = styled.ul`
  font-size: clamp(0.875rem, 0.8349rem + 0.1544vw, 1rem);
  font-weight: 600;
  line-height: 1.35;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;

  &.middle {
    flex-direction: row;

    @media(max-width:1279px) {
      flex-direction: column;
    }
  }
`;

const StackItemLink = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 25px;

  &.middle {
    max-width: 48%;
    width: 100%;

    @media(max-width:1279px) {
      max-width: 100%;
    }
  }

  &:before {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: #fff;
    left: 9px;
  }
`;

export const Stack: React.FC<CaseProp> = ({ info }) => {
  return (
    <StackSection>
      <Container>
        <StackInner>
          <h2 className="title-two">{info.title}</h2>

          <StackItems>
            {info.columns.map((item, index) => (
              <StackItemBox key={index} className={`${item.classAdd}`}>
                {item.itemBoxs.map((row, index) => (
                  <StackItemRow key={index} className={`${row.classAdd}`}>
                    {row.items.map((subItem, index) => (
                      <StackItem key={index}>
                        <StackItemTitle>{subItem.title}</StackItemTitle>

                        <StackItemList className={`${subItem.mibbleLink && "middle"}`}>
                          {subItem.list.map((linkText) => (
                            <StackItemLink
                              key={linkText}
                              className={`${subItem.mibbleLink && "middle"}`}
                            >
                              {linkText}
                            </StackItemLink>
                          ))}
                        </StackItemList>
                      </StackItem>
                    ))}
                  </StackItemRow>
                ))}
              </StackItemBox>
            ))}
          </StackItems>
        </StackInner>
      </Container>
    </StackSection>
  );
};
