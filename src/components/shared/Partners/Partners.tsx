"use client";
import React from "react";
import { forwardRef } from "react";
import styled, { keyframes } from "styled-components";
import { Container } from "@/components/widgets";

// const gapValue = "clamp(0.9375rem, 0.2765rem + 2.5483vw, 3rem)";

const PartnersBox = styled.section`
  overflow: hidden;
`;

const PartnersInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 767px) {
    gap: 12px;
  }
`;

const PartnersTitle = styled.h2`
  font-size: clamp(1.25rem, 0.8494rem + 1.5444vw, 2.5rem);
  font-weight: 700;
  line-height: 1.17;
`;

const PartnersItems = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  gap:48px;
  border-bottom: 1px solid rgb(55, 55, 55);
  border-top: 1px solid rgb(55, 55, 55);
  background-color: #010101;
  padding: 24px 0;
`;

const scrollParnners = keyframes`
    0% {
            transform: translateX(0%);
    }

    100% {
            transform: translateX(calc(-100% - 96px));
    }
`;

const PartnersItem = styled.div`
  display: flex;
  gap: 48px;

  img {
    max-width: 240px;
    height: 60px;

    @media(max-width:600px) {
       height: 37px;
    }
  }
  animation: ${scrollParnners} 50s linear infinite;
`;

const Partners = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  (props, ref) => {
    return (
      <PartnersBox ref={ref}>
        <PartnersInner>
          <Container>
            <PartnersTitle className="partners__title">
              Trusted By
            </PartnersTitle>
          </Container>

          <PartnersItems>
            <PartnersItem>
              <img src="./images/partners/zellic.svg" alt="zellic" />
              <img src="./images/partners/allianz.svg" alt="allianz" />
              <img src="./images/partners/sherlock.svg" alt="sherlock" />
              <img src="./images/partners/bk.svg" alt="bk" />
              <img src="./images/partners/fortyseven.svg" alt="fortyseven" />
              <img src="./images/partners/otvise.svg" alt="otvise" />
              <img src="./images/partners/altarey.svg" alt="altarey" />
              <img src="./images/partners/bmv.svg" alt="bmv" />
              <img src="./images/partners/teams.svg" alt="teams" />
              <img src="./images/partners/zellic.svg" alt="zellic" />
              <img src="./images/partners/allianz.svg" alt="allianz" />
              <img src="./images/partners/sherlock.svg" alt="sherlock" />
              <img src="./images/partners/bk.svg" alt="bk" />
              <img src="./images/partners/fortyseven.svg" alt="fortyseven" />
              <img src="./images/partners/otvise.svg" alt="otvise" />
              <img src="./images/partners/altarey.svg" alt="altarey" />
              <img src="./images/partners/bmv.svg" alt="bmv" />
              <img src="./images/partners/teams.svg" alt="teams" />
              <img src="./images/partners/zellic.svg" alt="zellic" />
              <img src="./images/partners/allianz.svg" alt="allianz" />
              <img src="./images/partners/sherlock.svg" alt="sherlock" />
              <img src="./images/partners/bk.svg" alt="bk" />
              <img src="./images/partners/fortyseven.svg" alt="fortyseven" />
              <img src="./images/partners/otvise.svg" alt="otvise" />
              <img src="./images/partners/altarey.svg" alt="altarey" />
              <img src="./images/partners/bmv.svg" alt="bmv" />
              <img src="./images/partners/teams.svg" alt="teams" />
            </PartnersItem>

            <PartnersItem>
              <img src="./images/partners/zellic.svg" alt="zellic" />
              <img src="./images/partners/allianz.svg" alt="allianz" />
              <img src="./images/partners/sherlock.svg" alt="sherlock" />
              <img src="./images/partners/bk.svg" alt="bk" />
              <img src="./images/partners/fortyseven.svg" alt="fortyseven" />
              <img src="./images/partners/otvise.svg" alt="otvise" />
              <img src="./images/partners/altarey.svg" alt="altarey" />
              <img src="./images/partners/bmv.svg" alt="bmv" />
              <img src="./images/partners/teams.svg" alt="teams" />
              <img src="./images/partners/zellic.svg" alt="zellic" />
              <img src="./images/partners/allianz.svg" alt="allianz" />
              <img src="./images/partners/sherlock.svg" alt="sherlock" />
              <img src="./images/partners/bk.svg" alt="bk" />
              <img src="./images/partners/fortyseven.svg" alt="fortyseven" />
              <img src="./images/partners/otvise.svg" alt="otvise" />
              <img src="./images/partners/altarey.svg" alt="altarey" />
              <img src="./images/partners/bmv.svg" alt="bmv" />
              <img src="./images/partners/teams.svg" alt="teams" />
              <img src="./images/partners/zellic.svg" alt="zellic" />
              <img src="./images/partners/allianz.svg" alt="allianz" />
              <img src="./images/partners/sherlock.svg" alt="sherlock" />
              <img src="./images/partners/bk.svg" alt="bk" />
              <img src="./images/partners/fortyseven.svg" alt="fortyseven" />
              <img src="./images/partners/otvise.svg" alt="otvise" />
              <img src="./images/partners/altarey.svg" alt="altarey" />
              <img src="./images/partners/bmv.svg" alt="bmv" />
              <img src="./images/partners/teams.svg" alt="teams" />
            </PartnersItem>
          </PartnersItems>
        </PartnersInner>
      </PartnersBox>
    );
  }
);

Partners.displayName = "Partners";

export default Partners;
