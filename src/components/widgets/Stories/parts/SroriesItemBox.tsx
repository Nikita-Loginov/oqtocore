import Link from "@/components/controls/Link/Link";
import styled from "styled-components";
import React from "react";

const StoriesBox = styled.div`
  border: 2px solid rgb(55, 55, 55);
  border-radius: clamp(1.5rem, 0.5702rem + 2.9752vw, 3.75rem);
  background: rgb(1, 1, 1);
  padding: clamp(1.25rem, 0.0483rem + 4.6332vw, 5rem);

  // @media()
`;

const SroriesContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  max-width: 1710px;
  // padding: 0 40px;
  margin: 0 auto;

  &.stories-box-img-top {
    flex-direction: row-reverse;
  }

  @media (max-width: 1023px) {
      // padding:0 15px;
  }

  @media (max-width: 1279px) {
    flex-direction: column;
    border-radius: 24px;

    &.stories-box-img-top {
      flex-direction: column;
    }
  }
`;

const StoriesContent = styled.div`
  max-width: 540px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: clamp(1.25rem, 0.8494rem + 1.5444vw, 2.5rem);

  .stories-link {
    padding: 0 12px;
  }

  @media (max-width: 1279px) {
    max-width: 100%;
    display: contents;

    .stories-link {
      order: 10;
    }
  }

  @media (max-width: 500px) {
    .stories-link {
      width: 100%;
      justify-content: space-between;
    }
  }
`;

const StoriesTitle = styled.h2`
  font-size: clamp(1.75rem, 1.5097rem + 0.9266vw, 2.5rem);
  font-weight: 700;
  line-height: 1.17;
`;

const StoriesItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 0.5193rem + 1.8533vw, 2.5rem);
`;

const StoriesItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const StoriesItemTitle = styled.h3`
  font-size: clamp(0.875rem, 0.7548rem + 0.4633vw, 1.25rem);
  line-height: 1.45;
  color: #fff;
  font-weight: 600;
  background-color: rgb(43, 36, 255);
  padding: 0 1px;
`;

const StoriesItemText = styled.p`
  font-weight: 600;
`;

const StoriesItemTextBox = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
`;

const StoriesItemList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
`;

const StoriesItemLink = styled.li`
  list-style: disc;
`;

const StoriesImg = styled.img`
  max-width: clamp(40.625rem, -41.375rem + 91.1111vw, 56rem);;
  width: auto;
  max-height: 642px;
  border-radius: 40px;

  @media (max-width: 1439px) {
    max-width: clamp(31.25rem, 26.2633rem + 15.9574vw, 40.625rem);
  }

  @media (max-width: 767px) {
    border-radius: 24px;
  }

  @media (max-width: 620px) {
    width:100%;
  }

  @media (max-width: 500px) {
    max-width: 100%;
  }
`;

interface InfoItem {
  title: string;
  text: string;
  list?: string[];
}

interface ContentProps {
  content: {
    id: number;
    title: string;
    items: InfoItem[];
    linkSrc: string,
    img: {
      top: boolean;
      imgSrc: {
        webp: string;
        webp2x: string;
      };
    };
  }
}

export const StoriesItemBox: React.FC<ContentProps> = ({ content }) => {

  return (
    <StoriesBox
      className={`stories-box-img-${
        content.img.top ? "top" : "bottom"
      } stories__box`}
    >
      <SroriesContentBox
        className={`stories-box-img-${content.img.top ? "top" : "bottom"} stories__content-box`}
      >
        <StoriesContent>
          <StoriesTitle>{content.title}</StoriesTitle>

          <StoriesItems>
            {content.items.map((item) => (
              <StoriesItem key={item.title}>
                <StoriesItemTitle>{item.title}</StoriesItemTitle>

                <StoriesItemTextBox>
                  <StoriesItemText>{item.text}</StoriesItemText>

                  <StoriesItemList>
                    {item.list &&
                      item.list.map((linkText) => (
                        <StoriesItemLink key={linkText}>
                          {linkText}
                        </StoriesItemLink>
                      ))}
                  </StoriesItemList>
                </StoriesItemTextBox>
              </StoriesItem>
            ))}
          </StoriesItems>

          <Link
            linkUrl={content.linkSrc}
            iconName="arrow-up-right"
            className="stories-link"
            style={{}}
          >
            full case
          </Link>
        </StoriesContent>

        <picture>
          <source srcSet={content.img.imgSrc.webp} type="image/webp" />

          <source srcSet={`${content.img.imgSrc.webp} 2x`} type="image/webp" />

          <StoriesImg
            loading="lazy"
            src={content.img.imgSrc.webp}
            srcSet={`${content.img.imgSrc.webp} 2x`}
            alt={content.title}
            width={"100%"}
            height={"100%"}
          />
        </picture>
      </SroriesContentBox>
    </StoriesBox>
  );
}
