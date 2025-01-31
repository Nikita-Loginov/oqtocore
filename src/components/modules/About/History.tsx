import styled from "styled-components";
import React from "react";

import { Container } from "@/components/widgets";

const HistorySection = styled.section`
  background-color: #2b24ff;
  padding: 40px 0;
`;

const HistoryInner = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(0.9375rem, 0.4368rem + 1.9305vw, 2.5rem);
`;

const HistoryTitle = styled.h2`
  color: rgb(255, 255, 255);
  font-size: 40px;
  font-weight: 700;
  font-size: clamp(1.25rem, 0.8494rem + 1.5444vw, 2.5rem);
`;

const HistoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const HistoryLink = styled.li`
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;
  padding-left: 15px;
`;

const HistoryTilte = styled.span`
  position: relative;
  display: flex;
  align-items: center;

  &:before {
    position: absolute;
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #fff;
    left: -12px;
  }
`;

export default function History() {
  return (
    <HistorySection>
      <Container>
        <HistoryInner>
          <HistoryTitle>What Sets OQTACORE Developers Apart</HistoryTitle>

          <HistoryList>
            <HistoryLink>
              <HistoryTilte>Web3 Expertise</HistoryTilte>

              <span>
                Blockchain products crafted to meet your business goals and
                exceed customer expectations.
              </span>
            </HistoryLink>

            <HistoryLink>
              <HistoryTilte>Results-Driven</HistoryTilte>

              <span>
                We tackle every challenge head-on and deliver without excuses.
              </span>
            </HistoryLink>

            <HistoryLink>
              <HistoryTilte>Secure Smart Contracts</HistoryTilte>

              <HistoryTilte>
                Hack-proof contracts developed by experts to protect your
                platform.
              </HistoryTilte>
            </HistoryLink>

            <HistoryLink>
              <HistoryTilte>Full Transparency</HistoryTilte>

              <span>
                Stay informed every step of the way — process, tech, and budget.
              </span>
            </HistoryLink>

            <HistoryLink>
              <HistoryTilte>Experienced Team</HistoryTilte>

              <span>
                Blockchain innovators since 2017, delivering expertise and
                creativity.
              </span>
            </HistoryLink>

            <HistoryLink>
              <HistoryTilte>Uncompromising Quality</HistoryTilte>

              <span>
                Every project meets the highest standards, ensuring exceptional
                results.
              </span>
            </HistoryLink>
          </HistoryList>
        </HistoryInner>
      </Container>
    </HistorySection>
  );
}
