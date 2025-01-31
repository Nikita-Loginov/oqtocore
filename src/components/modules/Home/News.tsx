'use client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import React from 'react';

import { Container } from '@/components/widgets';
import Link from '@/components/controls/Link/Link';

const NewsSection = styled.section`
    padding: clamp(5rem, 4.1988rem + 3.0888vw, 7.5rem) 0;
`;

const NewsInner = styled.div`
    display: flex;
    flex-direction: column;
    // align-items: flex-start;
    gap: 40px;
    
    .news-link {
        align-self: self-start;
        padding: 0 12px;
    }

    @media (max-width: 500px) {
        .news-link {
            width: 100%;
            justify-content: space-between;
        }
    }
`;

const NewsTitle = styled.h2`
    font-size: clamp(1.8125rem, 1.5922rem + 0.8494vw, 2.5rem);
    font-weight: 700;
    line-height: 1.17;
    text-transform: capitalize;
`;

const NewsItems = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 1023px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const NewsItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const NewsItemTitle = styled.h3`
    font-size: clamp(1.25rem, 1.0898rem + 0.6178vw, 1.75rem);
    font-weight: 700;
    line-height: 1.17;
    text-transform: capitalize;
    color: #fff;
`;

const NewsItemText = styled.p`
    color: rgb(165, 165, 165);
    font-weight: 600;
`;

const NewsItemLink = styled.span`
    color: rgb(255, 255, 255);
    font-weight: 700;
    text-transform: uppercase;
    transition: all 0.5s;
`;

const NewsItem = styled.a`
    display: flex;
    flex-direction: column;
    gap: clamp(0.75rem, 0.5097rem + 0.9266vw, 1.5rem);
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    color: #fff;

    &:hover {
        ${NewsItemLink} {
            color: rgb(43, 36, 255);
        }
    }
`;

const NewsItemImg = styled.div`
    position: relative;
    border: 1.74px solid rgb(55, 55, 55);
    background: rgb(1, 1, 1);
    width: 100%;
    max-height: 286px;

    img {
        width: 100%;
        height: 100%;
    }
`;

const NewsItemImgDecor = styled.div`
    left: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    width: clamp(1.75rem, 1.3094rem + 1.6988vw, 3.125rem);
    background-color: rgb(43, 36, 255);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: auto;
        height: auto;

        @media (max-width: 500px) {
            width: 50%;
        }
    }
`;

interface NewsProps {
    newsInfo: {
        title: string
    }
}

export const News: React.FC<NewsProps> = ({newsInfo}) =>  {
    const [news, setNews] = useState([]);
    const [newsImages, setNewsImages] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(
                    'https://oqtacore.com/blog/wp-json/wp/v2/posts?per_page=3',
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setNews(data);

                const imageIds = data.map((item) => item.acf?.image).filter(Boolean);

                const imagePromises = imageIds.map(async (imgId) => {
                    const response = await fetch(
                        `https://oqtacore.com/blog/wp-json/wp/v2/media/${imgId}`,
                    );

                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    return await response.json();
                });

                const imagesData = await Promise.all(imagePromises);

                const photos = imagesData.map((dataImg) => {
                    return {
                        min: dataImg.media_details?.sizes?.min?.source_url || '',
                        min2x: dataImg.media_details?.sizes?.min2x?.source_url || dataImg.media_details?.sizes?.min?.source_url,
                    };
                });
                setNewsImages(photos)
                setLoading(false)
            } catch (error) {
                console.error('Error when turning on news:', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <NewsSection>
            <Container>
                <NewsInner>
                    <NewsTitle className='news__title'>{newsInfo.title}</NewsTitle>

                    <NewsItems>
                        {!loading ? (
                            news.map((item, index) => (
                                <NewsItem
                                    key={item?.id}
                                    href={item?.link}
                                    target='_blank'
                                >
                                    <NewsItemImg>
                                        {(newsImages[index]?.min || newsImages[index]?.min2x) && (
                                            <picture>
                                                <source srcSet={`${newsImages[index]?.min2x} 2x`} />
                                                <img
                                                    loading='lazy'
                                                    src={`${newsImages[index]?.min}`}
                                                    alt=''
                                                />
                                            </picture>
                                        )}

                                        <NewsItemImgDecor>
                                            <img
                                                src='./images/news/logo.svg'
                                                alt='logo'
                                                loading='lazy'
                                            />
                                        </NewsItemImgDecor>

                                    </NewsItemImg>

                                    <NewsItemInfo className='news__item-info'>
                                        <NewsItemTitle
                                            dangerouslySetInnerHTML={{
                                                __html: item?.title?.rendered,
                                            }}
                                        ></NewsItemTitle>

                                        <NewsItemText
                                            dangerouslySetInnerHTML={{
                                                __html: item?.excerpt?.rendered,
                                            }}
                                        />
                                        <NewsItemLink>read more</NewsItemLink>
                                    </NewsItemInfo>
                                </NewsItem>
                            ))
                        ) : (
                            //
                            <p></p>
                        )}
                    </NewsItems>

                    <Link
                        linkUrl='oqtacore.com/blog'
                        iconName='arrow-up-right'
                        className={'news-link'}
                        style={{}}
                    >
                        all posts blog
                    </Link>
                </NewsInner>
            </Container>
        </NewsSection>
    );
}
