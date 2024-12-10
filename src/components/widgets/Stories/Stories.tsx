'use client';

import React, { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from '@/components/widgets';
import Link from '@/components/controls/Link/Link';

const StoriesSection = styled.section`
    position: relative;

    &:before {
        position: absolute;
        content: "Our Customers' Success Stories";
        font-size: 127px;
        font-weight: 700;
        line-height: 1.17;
        color: rgb(55, 55, 55);
        text-transform: capitalize;
        transform: translateY(-73%);
        left: -30px;
        right: -5px;
        text-align: center;

        @media (max-width: 1900px) {
            font-size: 90px;
        }

        @media (max-width: 1500px) {
            font-size: 70px;
        }

        @media (max-width: 1223px) {
            font-size: 60px;
        }

        @media (max-width: 900px) {
            font-size: 48px;
        }

        @media (max-width: 767px) {
            transform: translateY(-87%);
            left: -14px;
            right: -9px;
        }

        @media (max-width: 339px) {
             font-size: 40px;
        }
    }
`;

const StoriesInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: clamp(2.5rem, 1.6988rem + 3.0888vw, 5rem);
    position: relative;
    z-index: 10;
`;

const StoriesBox = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    border: 2px solid rgb(55, 55, 55);
    border-radius: 60px;
    background: rgb(1, 1, 1);
    padding: clamp(1.25rem, 0.0483rem + 4.6332vw, 5rem);

    @media (max-width: 767px) {
        flex-direction: column;
        border-radius: 24px;

        &.stories-box-img-top {
            flex-direction: column-reverse;
        }
    }
`;

const StoriesContent = styled.div`
    max-width: 540px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: clamp(1.25rem, 0.8494rem + 1.5444vw, 2.5rem);

    @media (max-width: 767px) {
        max-width: 100%;
    }

    @media (max-width: 500px) {
        .stories-link {
            width: 100%;
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

const StoriesImg = styled.img`
    max-width: 896px;
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

export const Stories: React.FC = () => {
    return (
        <StoriesSection>
            <Container>
                <StoriesInner>
                    <StoriesBox className='stories-box-img-bottom'>
                        <StoriesContent>
                            <StoriesTitle>GTM</StoriesTitle>

                            <StoriesItems>
                                <StoriesItem>
                                    <StoriesItemTitle>Who:</StoriesItemTitle>

                                    <StoriesItemText>
                                        GameTrade Market is one of the first NFT gaming item
                                        marketplaces, focused on ease of use for gamers and
                                        professional traders.
                                    </StoriesItemText>
                                </StoriesItem>

                                <StoriesItem>
                                    <StoriesItemTitle>What we did:</StoriesItemTitle>

                                    <StoriesItemText>
                                        Created a hybrid of social networks and a trading platform,
                                        as this is how we envision trade in future virtual
                                        metaverses.
                                    </StoriesItemText>
                                </StoriesItem>

                                <StoriesItem>
                                    <StoriesItemTitle>Why it matters:</StoriesItemTitle>

                                    <StoriesItemText>
                                        The project started in 2021 during the initial boom of
                                        blockchain games. Our client needed to create an MVP for
                                        GameTrade in very tight deadlines in an ever-changing
                                        landscape of blockchain. We have succeeded with releasing
                                        the MVP in just 2 quarters.
                                    </StoriesItemText>
                                </StoriesItem>

                                <StoriesItem>
                                    <StoriesItemTitle>Tech stack:</StoriesItemTitle>

                                    <StoriesItemText>
                                        AWS, MySQL, ASP .Net MVC, React
                                    </StoriesItemText>
                                </StoriesItem>
                            </StoriesItems>

                            <Link
                                linkUrl='/cases/gametrade-market'
                                iconName='arrow-up-right'
                                className='stories-link'
                            >
                                full case
                            </Link>
                        </StoriesContent>

                        <picture>
                            <source
                                srcSet='./images/stories/gtm.webp'
                                type='image/webp'
                            />
                            <source
                                srcSet='./images/stories/gtm.png'
                                type='image/png'
                            />
                            <StoriesImg
                                loading='lazy'
                                src='./images/stories/gtm.png'
                                srcSet='./images/stories/gtm2x.png'
                                alt=''
                            />
                        </picture>
                    </StoriesBox>
                    <StoriesBox className='stories-box-img-top'>
                        <picture>
                            <source
                                srcSet='./images/stories/runes.png'
                                type='image/webp'
                            />
                            <source
                                srcSet='./images/stories/runes.png'
                                type='image/png'
                            />
                            <StoriesImg
                                loading='lazy'
                                src='./images/stories/runes.png'
                                srcSet='./images/stories/runes2x.png'
                                alt=''
                            />
                        </picture>

                        <StoriesContent>
                            <StoriesTitle>Runes</StoriesTitle>

                            <StoriesItems>
                                <StoriesItem>
                                    <StoriesItemTitle>Who:</StoriesItemTitle>

                                    <StoriesItemText>
                                        GameTrade Market is one of the first NFT gaming item
                                        marketplaces, focused on ease of use for gamers and
                                        professional traders.
                                    </StoriesItemText>
                                </StoriesItem>

                                <StoriesItem>
                                    <StoriesItemTitle>What we did:</StoriesItemTitle>

                                    <StoriesItemText>
                                        Created a hybrid of social networks and a trading platform,
                                        as this is how we envision trade in future virtual
                                        metaverses.
                                    </StoriesItemText>
                                </StoriesItem>

                                <StoriesItem>
                                    <StoriesItemTitle>Why it matters:</StoriesItemTitle>

                                    <StoriesItemText>
                                        The project started in 2021 during the initial boom of
                                        blockchain games. Our client needed to create an MVP for
                                        GameTrade in very tight deadlines in an ever-changing
                                        landscape of blockchain. We have succeeded with releasing
                                        the MVP in just 2 quarters.
                                    </StoriesItemText>
                                </StoriesItem>

                                <StoriesItem>
                                    <StoriesItemTitle>Tech stack:</StoriesItemTitle>

                                    <StoriesItemText>
                                        AWS, MySQL, ASP .Net MVC, React
                                    </StoriesItemText>
                                </StoriesItem>
                            </StoriesItems>

                            <Link
                                linkUrl='/cases/bitcoin-runes'
                                iconName='arrow-up-right'
                                className='stories-link'
                            >
                                full case
                            </Link>
                        </StoriesContent>
                    </StoriesBox>
                </StoriesInner>
            </Container>
        </StoriesSection>
    );
};
