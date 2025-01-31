import styled from "styled-components";
import React from "react";

import { Container } from "@/components/widgets";

const AboutTopBox = styled.section`
    padding:clamp(6.8125rem, 4.6894rem + 8.1853vw, 13.4375rem) 0 clamp(5rem, 4.1988rem + 3.0888vw, 7.5rem);
`;

const AboutTopInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: clamp(1.5rem, 1.1795rem + 1.2355vw, 2.5rem);
  position: relative;

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    top: -40px;
    bottom: -40px;
    background-image: url(./images/aboutTop/lines.svg);
    background-repeat: no-repeat;

    @media (max-width: 1279px) {
      left: -12%;
      right: 0;
      width: auto;
    }

    @media (max-width: 1023px) {
      display: none;
    }
  }
`;

const AboutTopContent = styled.div`
  max-width: 730px;
  padding: 40px 40px 40px clamp(0rem, -4.5082rem + 6.5574vw, 2.5rem);
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 1.1795rem + 1.2355vw, 2.5rem);
  align-items: flex-start;
  position: relative;

  @media (max-width: 1279px) {
    max-width: 600px;
  }

  @media (max-width: 767px) {
    max-width: 100%;
    padding-right:0;
    padding-bottom:0;
  }
`;

const AboutTopTitle = styled.h1`
  color: rgb(255, 255, 255);
  font-size: clamp(1.875rem, 0.6733rem + 4.6332vw, 5.625rem);
  font-weight: 400;
  line-height: 1.1;
`;

const AboutTopInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
`;

const AboutTopBadge = styled.h2`
  color: rgb(255, 255, 255);
  font-size: clamp(1rem, 0.9199rem + 0.3089vw, 1.25rem);
  font-weight: 600;
  background-color: #2b24ff;
`;

const AboutTopTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AboutTopText = styled.p`
  color: rgb(255, 255, 255);
  line-height: 1.35;
  font-size: 14px;
  font-weight: 600;
`;

const AboutTopLogo = styled.div`
  margin: 0 auto;

  img {
    max-width:326px;  
}

  @media (max-width: 767px) {
    display: none;
  }
`;

export default function AboutTop() {
  return (
    <AboutTopBox>
      <Container>
        <AboutTopInner>
          <AboutTopContent>
            <AboutTopTitle>Who we are?</AboutTopTitle>

            <AboutTopInfo>
              <AboutTopBadge>About OQTACORE</AboutTopBadge>

              <AboutTopTextBox>
                <AboutTopText>
                  OQTACORE is a leading development company specializing in
                  innovative software solutions that drive digital
                  transformation. Since 2013, we&apos;ve delivered 50+ successful
                  projects, helping businesses of all sizes—from startups to
                  enterprises—bring their digital ideas to life.
                </AboutTopText>

                <AboutTopText>
                  In 2017, we expanded our expertise into blockchain technology,
                  offering secure, scalable, and compliant solutions that align
                  with the evolving needs of modern businesses. With over $820M
                  in total project value, we&apos;re equipped to support a wide range
                  of industries, including finance, legal tech, and more.
                </AboutTopText>

                <AboutTopText>
                  Our team is skilled in building reusable codebases,
                  white-label solutions, and providing comprehensive, hands-on
                  support throughout every stage of development. Whether you&apos;re
                  creating a mobile app, an enterprise software solution, or
                  exploring emerging technologies like blockchain, OQTACORE is
                  the partner you need to stay ahead in the digital space.
                </AboutTopText>
              </AboutTopTextBox>
            </AboutTopInfo>
          </AboutTopContent>

          <AboutTopLogo>
            <img src="./images/aboutTop/logo.svg" alt="our logo" />
          </AboutTopLogo>
        </AboutTopInner>
      </Container>
    </AboutTopBox>
  );
}
