"use client";
import React from "react";
import styled from "styled-components";

import Social from "@/components/shared/Social/Social";
import { Container } from "@/components/widgets";

const FooterBox = styled.footer`
  padding: clamp(2.5rem, 1.6988rem + 3.0888vw, 5rem) 0;
  border-top: 1px solid rgb(55, 55, 55);
  position: relative;
`;

const FooterItems = styled.div`
  display: flex;
  gap: clamp(2.5rem, -3.0556rem + 9.8765vw, 7.5rem);
  position: relative;
  z-index: 10;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 1.1795rem + 1.2355vw, 2.5rem);
  max-width: 300px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 1.1795rem + 1.2355vw, 2.5rem);
`;

const FooterItemTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.17;
`;

const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FooterLinkText = styled.span`
  transition: all 0.5s;
  font-weight: 600;
`;

const FooterLinkItem = styled.a`
  display: flex;
  gap: 8px;
  color: #fff;
  transition: all 0.5s;

  &:hover {
    ${FooterLinkText} {
      opacity: 0.5;
    }
  }
`;

const FooterSpanItem = styled.span`
  display: flex;
  gap: 8px;
  color: #fff;
  transition: all 0.5s;
`;

const FooterDecor = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  bottom: 0;

  img {
    height: 100%;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const Footer: React.FC = () => {
  return (
    <FooterBox>
      <Container>
        <FooterItems>
          <FooterItem>
            <FooterItemTitle>Our contacts</FooterItemTitle>
            <FooterContent>
              <Social />

              <FooterList>
                <li className="footer__link">
                  <FooterLinkItem
                    href="tel:+41215050033"
                    className="footer__link-item-ext"
                  >
                    <span className="footer__link-decor">
                      <img
                        src="./icons/phone.svg"
                        alt=""
                        loading="lazy"
                        width={"16"}
                        height={"16"}
                      />
                    </span>
                    <FooterLinkText>
                      +41 215 050 033 Switzerland, Lausanne
                    </FooterLinkText>
                  </FooterLinkItem>
                </li>

                <li className="footer__link">
                  <FooterLinkItem
                    href="tel:+16469805740"
                    className="footer__link-item-ext"
                  >
                    <span className="footer__link-decor">
                      <img
                        src="./icons/phone.svg"
                        alt=""
                        loading="lazy"
                        width={"16"}
                        height={"16"}
                      />
                    </span>
                    <FooterLinkText>
                      +1 646 980 5740 USA, New York
                    </FooterLinkText>
                  </FooterLinkItem>
                </li>

                <li className="footer__link">
                  <FooterLinkItem
                    href="tel:+18884071205"
                    className="footer__link-item-ext"
                  >
                    <span className="footer__link-decor">
                      <img
                        src="./icons/phone.svg"
                        alt=""
                        width={"16"}
                        height={"16"}
                      />
                    </span>

                    <FooterLinkText>
                      +1 888 407 1205 USA toll free
                    </FooterLinkText>
                  </FooterLinkItem>
                </li>
              </FooterList>
            </FooterContent>
          </FooterItem>

          <FooterItem>
            <FooterItemTitle>Our Location</FooterItemTitle>

            <FooterContent>
              <FooterList>
                <li className="footer__link">
                  <FooterSpanItem>
                    <span className="footer__link-decor">
                      <img
                        src="./icons/map-pin.svg"
                        alt=""
                        width={"16"}
                        height={"16"}
                      />
                    </span>

                    <FooterLinkText>
                      OQTACORE Sàrl, CHE-406.118.174 Lausanne, Rue Haldimand 10
                      c/o Drys Fiduciaire SA
                    </FooterLinkText>
                  </FooterSpanItem>
                </li>
              </FooterList>
            </FooterContent>
          </FooterItem>

          <FooterItem>
            <FooterItemTitle>Menu</FooterItemTitle>

            <FooterContent>
              <FooterList style={{ gap: "20px" }}>
                <li className="footer__link">
                  <FooterLinkItem
                    className="footer__link-item-ext"
                    href="/services"
                    aria-label="Перейти на страницу Services"
                  >
                    <FooterLinkText>Services</FooterLinkText>
                  </FooterLinkItem>
                </li>

                <li className="footer__link">
                  <FooterLinkItem
                    className="footer__link-item-ext"
                    href="/cases"
                    aria-label="Перейти на страницу Case studies"
                  >
                    <FooterLinkText>Case studies</FooterLinkText>
                  </FooterLinkItem>
                </li>

                <li className="footer__link">
                  <FooterLinkItem
                    className="footer__link-item-ext"
                    href="/about"
                    aria-label="Перейти на страницу About"
                  >
                    <FooterLinkText>About us</FooterLinkText>
                  </FooterLinkItem>
                </li>

                <li className="footer__link">
                  <FooterLinkItem
                    className="footer__link-item-ext"
                    href="/blog"
                    aria-label="Перейти на страницу Blog"
                  >
                    <FooterLinkText>Blog</FooterLinkText>
                  </FooterLinkItem>
                </li>
              </FooterList>
            </FooterContent>
          </FooterItem>
        </FooterItems>

        <FooterDecor>
          <picture>
            <source srcSet="./images/footer/decor.webp" type="image/webp" />
            <source srcSet="./images/footer/decor.png" type="image/png" />
            <img
              loading="lazy"
              src="./images/footer/decor.png"
              alt="decor"
              width={"100%"}
              height={"100%"}
            />
          </picture>
          <picture>
            <source srcSet="./images/footer/decor.webp" type="image/webp" />
            <source srcSet="./images/footer/decor.png" type="image/png" />
            <img
              loading="lazy"
              src="./images/footer/decor.png"
              alt="decor"
              width={"100%"}
              height={"100%"}
            />
          </picture>
        </FooterDecor>
      </Container>
    </FooterBox>
  );
};
