import styled from "styled-components";
import React from "react";

import { Container } from "@/components/widgets";

const WhyUsSection = styled.section`
    padding: clamp(5rem, 4.1988rem + 3.0888vw, 7.5rem) 0 80px ;
`;

const WhyUsInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.9375rem, 0.4368rem + 1.9305vw, 2.5rem);
  max-width: 1024px;
  margin: 0 auto;
`;

const WhyUsTitle = styled.h2`
  color: rgb(255, 255, 255);
  font-size: clamp(1.25rem, 0.8494rem + 1.5444vw, 2.5rem);
  font-weight: 700;
  line-height: 1.17;
`;

const WhyUsTextBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    gap: 20px;
  }
`;

const WhyUsTextText = styled.p`
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 600;
`;

export default function WhyUs() {
  return (
    <WhyUsSection>
      <Container>
        <WhyUsInner>
          <WhyUsTitle>Why Us</WhyUsTitle>

          <WhyUsTextBox>
            <WhyUsTextText>
              Your blockchain project deserves a partner who simplifies
              complexity and delivers results.
            </WhyUsTextText>

            <WhyUsTextText>
              At OQTACORE, we craft custom blockchain solutions that grow with
              your business and drive innovation.
            </WhyUsTextText>

            <WhyUsTextText>
              With expertise in consensus algorithms, smart contracts, and
              cryptographic security, we ensure your solution is secure,
              scalable, and built for the future.
            </WhyUsTextText>

            <WhyUsTextText>
              From concept to launch, we manage every step to make your
              blockchain journey smooth, efficient, and impactful.
            </WhyUsTextText>
          </WhyUsTextBox>
        </WhyUsInner>
      </Container>
    </WhyUsSection>
  );
}
