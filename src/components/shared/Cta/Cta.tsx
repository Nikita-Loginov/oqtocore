import styled from "styled-components";
import React, { useEffect, useState } from "react";

import { Container } from "@/components/widgets";
import {Button} from "@/components/controls/Button/Button";
import ContactModal from "@/components/widgets/ContactModal/ContactModal";

interface CtaInfo {
  title: string;
  text?: string;
}

interface CtaProps {
  info?: CtaInfo;
}


const CtaSection = styled.section`
  padding: 120px 0;
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

export const Cta: React.FC<CtaProps> = ({info}) => {
  const [isOpenPopup, setOpenPopup] = useState(false);

  function openPopup() {
    setOpenPopup(() => true)
    document.documentElement.style.overflow = 'hidden';
  }

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).classList.contains('contact-modal')) {
        setOpenPopup(() => false)
        document.documentElement.style.overflow = 'visible'
        return 
      }

      if ((e.target as HTMLElement).closest('.close-btn')) {
        setOpenPopup(() => false)
        document.documentElement.style.overflow = 'visible'
      }
    })
  }, [])

  return (
    <>
      <CtaSection id="cta">
        <Container>
          <CtaInner>
            <CtaContent>
              <CtaTitle>{info.title}</CtaTitle>

              <CtaText>{info.text}</CtaText>
            </CtaContent>

            <Button
              iconName="comment"
              linkText="Contact us"
              positionIconFirstHover="24px, -24px"
              positionIconSecond="-24px, 24px"
              onClick={openPopup}
              disabled={
                false
              }
            />
          </CtaInner>
        </Container>
      </CtaSection>

      <ContactModal isOpen={isOpenPopup} isDisabled={true}/>
    </>
  );
}
