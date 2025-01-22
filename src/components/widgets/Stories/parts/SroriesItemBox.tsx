import Link from "@/components/controls/Link/Link";
import styled from "styled-components";

const StoriesBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  border: 2px solid rgb(55, 55, 55);
  border-radius: 60px;
  background: rgb(1, 1, 1);
  padding: clamp(1.25rem, 0.0483rem + 4.6332vw, 5rem);

  &.stories-box-img-top {
    flex-direction: row-reverse;
  }

  @media (max-width: 767px) {
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

  @media (max-width: 767px) {
    max-width: 100%;
    display: contents;

    .stories-link {
       order:10;
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
  max-width: 896px;
  width: auto !important;
  max-height: 642px;
  border-radius: 40px;

  @media (max-width: 1439px) {
    max-width: 440px;
  }

  @media (max-width: 900px) {
    max-width: 340px;
  }

  @media (max-width: 767px) {
    border-radius: 24px;
  }

  @media (max-width: 500px) {
    max-width: 100%;
  }
`;

export default function StoriesItemBox({ content }) {
  return (
    <StoriesBox
      className={`stories-box-img-${content.img.top ? "top" : "bottom"} stories__box`}
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
                    item.list.map((linkText) => 
                      <StoriesItemLink key={linkText}>
                        {linkText}
                      </StoriesItemLink>
                    )}
                </StoriesItemList>
              </StoriesItemTextBox>
            </StoriesItem>
          ))}
        </StoriesItems>

        <Link
          linkUrl="/cases/gametrade-market"
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
    </StoriesBox>
  );
}
