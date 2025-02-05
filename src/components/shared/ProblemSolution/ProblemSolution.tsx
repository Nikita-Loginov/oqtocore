import React, { forwardRef } from "react";
import styled from "styled-components";

import { Container } from "@/components/widgets";

interface ProblemSolutionItem {
  id: number;
  iconSrc: string;
  title: string;
  text: string[];
}

interface ProblemSolutionProps {
  items: ProblemSolutionItem[];
}

const ProblemSolutionSection = styled.section`
  border-top: 2px solid rgb(55, 55, 55);
  border-bottom: 2px solid rgb(55, 55, 55);
`;

const ProblemSolutionItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
`;

const ProblemSolutionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 721px;

  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

const ProblemSolutionItem = styled.div`
  padding: clamp(1.25rem, -6.6768rem + 9.7561vw, 3.75rem) 0;

  &:nth-child(even) {
    padding-left: 30px;

    ${ProblemSolutionInfo} {
      margin-left: auto;

      @media (max-width: 1200px) {
        margin: 0;
      }
    }

    @media (max-width: 1200px) {
      padding: 20px 0;
    }
  }

  &:nth-child(odd) {
    padding-right: 50px;

    position: relative;

    &:before {
      position: absolute;
      content: "";
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      width: 2px;
      height: 130px;
      background-color: rgb(55, 55, 55);
    }

    @media (max-width: 1200px) {
      padding-right: 0;

      &:before {
        display: none;
      }
    }
  }

  @media (max-width: 1200px) {
    padding: 20px 0;
    margin: 0;
  }
`;

const ProblemSolutionIcon = styled.span`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

const ProblemSolutionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProblemSolutionTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: clamp(0.875rem, 0.8349rem + 0.1544vw, 1rem);
  font-weight: 600;
  line-height: 1.35;
`;

export const ProblemSolution = forwardRef<HTMLDivElement, ProblemSolutionProps>(
  ({ items }, ref) => {
    return (
      <ProblemSolutionSection>
        <Container ref={ref}>
          <div className="problemSolution__inner">
            <ProblemSolutionItems>
              {items.map((item) => (
                <ProblemSolutionItem key={item.id}>
                  <ProblemSolutionInfo>
                    <ProblemSolutionIcon>
                      <img src={item.iconSrc} alt="icon" />
                    </ProblemSolutionIcon>

                    <ProblemSolutionContent>
                      <h2 className="title-two">{item.title}</h2>

                      <ProblemSolutionTextBox>
                        {item?.text.map((itemText) => (
                          <p className="problemSolution__text" key={itemText}>
                            {itemText}
                          </p>
                        ))}
                      </ProblemSolutionTextBox>
                    </ProblemSolutionContent>
                  </ProblemSolutionInfo>
                </ProblemSolutionItem>
              ))}
            </ProblemSolutionItems>
          </div>
        </Container>
      </ProblemSolutionSection>
    );
  }
);

ProblemSolution.displayName = "ProblemSolution";

export default ProblemSolution;
