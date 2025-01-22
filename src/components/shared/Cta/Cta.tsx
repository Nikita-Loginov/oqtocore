import styled from "styled-components";

import { Container } from "@/components/widgets";
import Button from "@/components/controls/Button/Button";

const CtaSEction = styled.section`
  padding: clamp(5rem, 4.1988rem + 3.0888vw, 7.5rem) 0 40px;
`;

const CtaInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const CtaContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const CtaTitle = styled.h3`
  font-weight: 700;
  line-height: 1.17;
  font-size: clamp(1.25rem, 0.8494rem + 1.5444vw, 2.5rem);
  text-transform: capitalize;
  text-align: center;
`;

const CtaText = styled.p`
  font-size: clamp(0.875rem, 0.8349rem + 0.1544vw, 1rem);
  font-weight: 600;
  max-width: 570px;
  text-align: center;
`;

export default function Cta({ info }) {
  return (
    <CtaSEction>
      <Container>
        <CtaInner>
          <CtaContent>
            <CtaTitle>{info.title}</CtaTitle>

            <CtaText>{info.text}</CtaText>
          </CtaContent>

          <Button iconName="comment" linkText="Contact us" positionIconFirstHover="24px, -24px" positionIconSecond="-24px, 24px" onClick={{}}/>
        </CtaInner>
      </Container>
    </CtaSEction>
  );
}
