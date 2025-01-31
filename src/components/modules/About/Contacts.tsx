import styled from "styled-components";
import React from "react";

import { Container } from "@/components/widgets";

const ContactsSection = styled.section`
  padding-top: 40px;

  @media (max-width: 1023px) {
    .container {
      padding: 0;
    }
  }
`;

const ContactsInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1.5rem, 1.1795rem + 1.2355vw, 2.5rem);
  border: 2px solid rgb(55, 55, 55);
  padding: clamp(2.5rem, 1.6988rem + 3.0888vw, 5rem) 0;

  @media (max-width: 1023px) {
    padding-inline: 15px;
  }
`;

const ContactsTitle = styled.h3`
  color: rgb(255, 255, 255);
  font-size: clamp(1.25rem, 1.0898rem + 0.6178vw, 1.75rem);
  font-weight: 700;
  line-height: 1.17;
  text-align: center;
  text-transform: capitalize;
`;

const ContactsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: normal;
  }
`;

const ContactsLink = styled.li`
  transition: all 0.5s;
`;

const ContactsItem = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: 600;
  line-height: 1.45;
  gap: 10px;
  transition: all 0.5s;
  padding: 16px;
  border-radius: 8px;

  svg {
    path {
      transition: all 0.5s;
    }
  }

  &:hover {
    background-color: #fff;

    color: rgb(1, 1, 1);

    svg {
      path {
        fill: rgb(1, 1, 1);
      }
    }
  }

  @media (max-width: 767px) {
    &__link {
      padding: 12px;
    }
  }
`;

export default function Contacts() {
  return (
    <ContactsSection>
      <Container>
        <ContactsInner>
          <ContactsTitle>
            Look after our digital journey on socials:
          </ContactsTitle>

          <ContactsList>
            <ContactsLink>
              <ContactsItem
                href="https://x.com/oqtacore_devs"
                className="contacts__item"
                aria-label="Перейти на наш x.com"
                target="_blank"
                title="x com"
              >
                <svg
                  width="43"
                  height="43"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3263 1.90381H21.6998L14.3297 10.3273L23 21.7898H16.2112L10.894 14.8378L4.80995 21.7898H1.43443L9.31743 12.7799L1 1.90381H7.96111L12.7674 8.25814L18.3263 1.90381ZM17.1423 19.7706H19.0116L6.94539 3.81694H4.93946L17.1423 19.7706Z"
                    fill="white"
                  ></path>
                </svg>

                <span className="contacts__link-text">x (ex. Twitter)</span>
              </ContactsItem>
            </ContactsLink>

            <ContactsLink>
              <ContactsItem
                href="https://www.linkedin.com/company/oqtacore"
                className="contacts__item"
                aria-label="Перейти на наш linkedin"
                target="_blank"
                title="linkedin"
              >
                <svg
                  width="43"
                  height="43"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_988_2374)">
                    <path
                      d="M22.2283 0H1.77167C1.30179 0 0.851161 0.186657 0.518909 0.518909C0.186657 0.851161 0 1.30179 0 1.77167V22.2283C0 22.6982 0.186657 23.1488 0.518909 23.4811C0.851161 23.8133 1.30179 24 1.77167 24H22.2283C22.6982 24 23.1488 23.8133 23.4811 23.4811C23.8133 23.1488 24 22.6982 24 22.2283V1.77167C24 1.30179 23.8133 0.851161 23.4811 0.518909C23.1488 0.186657 22.6982 0 22.2283 0ZM7.15333 20.445H3.545V8.98333H7.15333V20.445ZM5.34667 7.395C4.93736 7.3927 4.53792 7.2692 4.19873 7.04009C3.85955 6.81098 3.59584 6.48653 3.44088 6.10769C3.28591 5.72885 3.24665 5.31259 3.32803 4.91145C3.40941 4.51032 3.6078 4.14228 3.89816 3.85378C4.18851 3.56529 4.55782 3.36927 4.95947 3.29046C5.36112 3.21165 5.77711 3.25359 6.15495 3.41099C6.53279 3.56838 6.85554 3.83417 7.08247 4.17481C7.30939 4.51546 7.43032 4.91569 7.43 5.325C7.43386 5.59903 7.38251 5.87104 7.27901 6.1248C7.17551 6.37857 7.02198 6.6089 6.82757 6.80207C6.63316 6.99523 6.40185 7.14728 6.14742 7.24915C5.893 7.35102 5.62067 7.40062 5.34667 7.395ZM20.4533 20.455H16.8467V14.1933C16.8467 12.3467 16.0617 11.7767 15.0483 11.7767C13.9783 11.7767 12.9283 12.5833 12.9283 14.24V20.455H9.32V8.99167H12.79V10.58H12.8367C13.185 9.875 14.405 8.67 16.2667 8.67C18.28 8.67 20.455 9.865 20.455 13.365L20.4533 20.455Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_988_2374">
                      <rect width="48" height="48" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>

                <span className="contacts__link-text">LinkedIn</span>
              </ContactsItem>
            </ContactsLink>

            <ContactsLink>
              <ContactsItem
                href="https://www.youtube.com/channel/UCFy9bxQo8nc-5gkrtzU30TQ"
                className="contacts__item"
                aria-label="Перейти на наш youtube"
                target="_blank"
                title="youtube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                 width="43"
                  height="43"
                  viewBox="0 0 49 34"
                  fill="none"
                >
                  <path
                    d="M48.0219 7.4001C48.0219 7.4001 47.5531 4.09072 46.1094 2.6376C44.2812 0.725098 42.2375 0.715722 41.3 0.603222C34.5875 0.115722 24.5094 0.115723 24.5094 0.115723H24.4906C24.4906 0.115723 14.4125 0.115722 7.7 0.603222C6.7625 0.715722 4.71875 0.725098 2.89062 2.6376C1.44688 4.09072 0.9875 7.4001 0.9875 7.4001C0.9875 7.4001 0.5 11.2907 0.5 15.172V18.8095C0.5 22.6907 0.978125 26.5813 0.978125 26.5813C0.978125 26.5813 1.44687 29.8907 2.88125 31.3438C4.70937 33.2563 7.10938 33.1907 8.17813 33.397C12.0219 33.7626 24.5 33.8751 24.5 33.8751C24.5 33.8751 34.5875 33.8563 41.3 33.3782C42.2375 33.2657 44.2812 33.2563 46.1094 31.3438C47.5531 29.8907 48.0219 26.5813 48.0219 26.5813C48.0219 26.5813 48.5 22.7001 48.5 18.8095V15.172C48.5 11.2907 48.0219 7.4001 48.0219 7.4001ZM19.5406 23.2251V9.73447L32.5062 16.5032L19.5406 23.2251Z"
                    fill="white"
                  />
                </svg>

                <span className="contacts__link-text">Youtube</span>
              </ContactsItem>
            </ContactsLink>
          </ContactsList>
        </ContactsInner>
      </Container>
    </ContactsSection>
  );
}
