import React from "react";
import styled from "styled-components";

import { Container } from "@/components/widgets";

const GameSection = styled.section`
  padding-bottom: 80px;
`;

const GameInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const GameItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const GameItem = styled.div`
  border: 2px solid rgb(255, 255, 255);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const GameItemIcon = styled.span`
  max-width: 160px;

  img {
    width: 100%;
  }
`;

const GameItemText = styled.p`
  font-size: 30px;
  font-weight: 600;
  line-height: 119%;
  letter-spacing: -0.2px;
  text-align: center;
`;

export default function Game() {
  return (
    <GameSection>
      <Container>
        <GameInner>
          <h2 className="title-two">Game Engines Supported</h2>

          <GameItems>
            <GameItem>
              <GameItemIcon>
                <img src="/icons/ue4.svg" alt="Unreal Engine 4-5" />
              </GameItemIcon>

              <GameItemText>Unreal Engine 4-5</GameItemText>
            </GameItem>

            <GameItem>
              <GameItemIcon>
                <img src="/icons/unity.svg" alt="unity" />
              </GameItemIcon>

              <GameItemText>Unity</GameItemText>
            </GameItem>
          </GameItems>
        </GameInner>
      </Container>
    </GameSection>
  );
}
