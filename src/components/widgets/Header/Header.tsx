"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "@/components/controls/Link/Link";
import { Container } from "@/components/widgets";
import Social from "@/components/shared/Social/Social";
import Button from "@/components/controls/Button/Button";
import ContactModal from "@/components/widgets/ContactModal/ContactModal";

const HeaderBox = styled.header`
  padding: 20px 0;
  position: fixed;
  -webkit-backdrop-filter: blur(35.3px);
  width: 100%;
  backdrop-filter: blur(35.3px);
  background: rgba(255, 255, 255, 0.01);
  z-index: 1000;
  transition: all 0.5s;
  

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(55, 55, 55);
    height: 1px;
    z-index: 1000;
  }

  @media (max-width: 767px) {
    padding-top: 35px;
  }

  .button-uniq {
    min-height: 52px;
    gap: 30px;
    padding: 0 8px 0 16px;
    background-color: rgb(43, 36, 255);

    &:disabled {
        background: rgb(55, 55, 55);
        pacity: 0.4;
        pointer-events: none; 
    }

    &:after {
      background-color: transparent;
    }
  }

  .button-decor {
    background-color: #010101;
  }
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 767px) {
    .header__menu-link {
      display: none;
    }
  }
`;

const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
`;

const HeaderLinkInfo = styled.a`
  line-height: 1.35;
  font-weight: 600;
  font-size: clamp(0.875rem, -0.5742rem + 1.3559vw, 1.375rem);
  color: #fff;
  transition: all 0.5s;

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

const HeaderLogo = styled.a`
  @media (max-width: 767px) {
    osition: relative;
    z-index: 101;
  }
`;

const HeaderMenuContent = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    a.header__menu-link {
      display: flex;
    }
  }
`;

const HaederMenuBtn = styled.button`
  display: none;
  width: 24px;
  height: 24px;
  position: relative;
  background-color: transparent;
  cursor: pointer;
  z-index: 101;
  overflow: hidden;

  &:before,
  &:after {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 20px;
    height: 2px;
    background-color: #fff;
    border-radius: 10px;
  }

  &:before {
    top: 3px;
    transition: rotate 0.5s, top 0.5s 0.5s;
  }

  &:after {
    bottom: 3px;
    transition: rotate 0.5s, bottom 0.5s 0.5s;
  }

  span {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 20px;
    height: 2px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fff;
    border-radius: 10px;
    transition: all 0.5s;
  }

  @media (max-width: 767px) {
    display: block;
  }
`;

const HeaderMenuInfo = styled.div`
  @media (max-width: 767px) {
    position: absolute;
    inset: 0;
    height: 105vh;
    width: 100vw;
    background-color: #010101;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    gap: 80px;
    transition: all 0.5s;
    transform: translateX(100%);
  }
`;

const HeaderMenu = styled.div`
  &.open {
    ${HeaderMenuInfo} {
      transform: translateX(0%);
    }

    ${HaederMenuBtn} {
      span {
        transform: translateX(100%);
        opacity: 0;
      }

      &:before {
        top: 50%;
        transform: translateY(-50%);
        rotate: 45deg;
        transition: top 0.5s, rotate 0.5s 0.5s;
      }

      &:after {
        bottom: 50%;
        transform: translateY(50%);
        rotate: -45deg;
        transition: bottom 0.5s, rotate 0.5s 0.5s;
      }
    }
  }
`;

interface HeaderProps {
  headerInfo: {
    contactBtn: boolean;
  };
}

export const Header: React.FC<HeaderProps> = ({ headerInfo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isOpenPopup, setOpenPopup] = useState<boolean>(false);
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [isMobile, setIsMobile] = useState<boolean>(true);

  function openPopup() {
    setOpenPopup(() => true);
    setIsMenuOpen(() => false);
    document.documentElement.style.overflow = "hidden";
  }

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if ((e.target as HTMLElement).classList.contains("contact-modal")) {
        setOpenPopup(() => false);
        document.documentElement.style.overflow = "visible";
        return;
      }

      if ((e.target as HTMLElement).closest(".close-btn")) {
        setOpenPopup(() => false);
        document.documentElement.style.overflow = "visible";
      }
    });
  }, []);

  useEffect(() => {
    // Проверяем ширину окна при первом рендере
    const updateMedia = () => {
      setIsMobile(window.innerWidth < 767);
    };

    updateMedia();

    window.addEventListener("resize", updateMedia);

    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <>
      <HeaderBox className="header">
        <Container>
          <HeaderInner>
            <HeaderLogo className="header__logo" href="/">
              <Image
                src="./images/header/logo.svg"
                alt="ogtacore logo"
                width={161}
                height={21}
                unoptimized
                priority
                //  loading='lazy'
              />
            </HeaderLogo>

            <HeaderMenu className={isMenuOpen ? "open" : ""}>
              <HaederMenuBtn
                type="button"
                aria-label="burger menu"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <span></span>
              </HaederMenuBtn>

              <HeaderMenuInfo>
                <HeaderList>
                  <li className="header__link">
                    <HeaderLinkInfo
                      href="/services"
                      aria-label="Перейти на страницу Services"
                    >
                      Services
                    </HeaderLinkInfo>
                  </li>

                  <li className="header__link">
                    <HeaderLinkInfo
                      href="/cases"
                      aria-label="Перейти на страницу Case studies"
                    >
                      Case studies
                    </HeaderLinkInfo>
                  </li>

                  <li className="header__link">
                    <HeaderLinkInfo
                      href="/about"
                      aria-label="Перейти на страницу About us"
                    >
                      About us
                    </HeaderLinkInfo>
                  </li>
                  <li className="header__link">
                    <HeaderLinkInfo
                      href="/blog"
                      aria-label="Перейти на страницу Blog"
                    >
                      Blog
                    </HeaderLinkInfo>
                  </li>
                </HeaderList>

                <HeaderMenuContent>
                  {headerInfo?.contactBtn ? (
                    <Button
                      iconName="comment"
                      linkText="Contact us"
                      positionIconFirstHover="24px, -24px"
                      positionIconSecond="-24px, 24px"
                      onClick={openPopup}
                      disabled={false}
                    />
                  ) : (
                    <Link
                      iconName="comment"
                      linkUrl="/contact"
                      className={"header__menu-link"}
                      style={{}}
                    >
                      Contact us
                    </Link>
                  )}

                  <Social />
                </HeaderMenuContent>
              </HeaderMenuInfo>
            </HeaderMenu>

            {headerInfo?.contactBtn && !isMobile ? (
              <Button
                iconName="comment"
                linkText="Contact us"
                positionIconFirstHover="24px, -24px"
                positionIconSecond="-24px, 24px"
                onClick={openPopup}
                disabled={false}
              />
            ) : (
              <Link
                iconName="comment"
                linkUrl="/contact"
                className={"header__menu-link"}
                style={{}}
              >
                Contact us
              </Link>
            )}
          </HeaderInner>
        </Container>
      </HeaderBox>

      <ContactModal isOpen={isOpenPopup} isDisabled={true} />
    </>
  );
};
