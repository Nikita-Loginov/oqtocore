'use client';
import styled from 'styled-components';
import Link from '@/components/controls/Link/Link';
import { Container } from '@/components/widgets';

const ServicesBox = styled.section`
    padding: clamp(5rem, 4.1988rem + 3.0888vw, 7.5rem) 0 clamp(2.5rem, 1.6988rem + 3.0888vw, 5rem);
`;

const ServicesInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;

    @media (max-width: 500px) {
        .services-link {
            width: 100%;
        }
    }
`;

const ServicesTitle = styled.h2`
    text-transform: capitalize;
    font-size: clamp(1.25rem, 0.8494rem + 1.5444vw, 2.5rem);
    font-weight: 700;
    line-height: 1.17;
`;

const ServicesItems = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;

    @media (max-width: 1279px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 640px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const ServicesItemContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 190px;
    width: 100%;
`;

const ServicesItemContentBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
    align-self: flex-start;
    transition: all 0.5s;
    width: 100%;

    img {
        width: 88px;
        height: 88px;
        object-fit: cover;
        margin: 0 auto;
    }
`;

const ServicesItemTitle = styled.h3`
    font-size: clamp(1rem, 0.8398rem + 0.6178vw, 1.5rem);
    font-weight: 600;
    line-height: 1.375;
    text-align: center;
    max-width: 190px;
`;

const ServicesItemLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid rgb(55, 55, 55);
    border-radius: 48px;
    background: rgb(14, 14, 14);
    padding: 14px 20px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    transition: all 0.5s;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: fit-content;
    margin: 0 auto;
    bottom: -20px;
    opacity: 0;
    visibility: hidden;

    &:hover {
        box-shadow: 0px 0px 30px 0px rgb(106, 106, 106);
    }

    @media (max-width: 640px) {
        position: static;
        visibility: visible;
        opacity: 1;
    }
`;

const ServicesItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid rgb(55, 55, 55);
    border-right: 1px solid rgb(55, 55, 55);
    border-top: 2px solid rgb(55, 55, 55);
    border-bottom: 2px solid rgb(55, 55, 55);
    padding: clamp(2.5rem, 1.2382rem + 4.8649vw, 6.4375rem) 0;
    transition: all 0.5s;

    &:last-of-type {
        border-right: 2px solid rgb(55, 55, 55);
    }

    &:first-of-type {
        border-left: 2px solid rgb(55, 55, 55);
    }

    @media (max-width: 1279px) {
        border-top: 1px solid rgb(55, 55, 55);
        border-bottom: 1px solid rgb(55, 55, 55);

        &:nth-child(-n + 3) {
            border-top: 2px solid rgb(55, 55, 55);
        }

        &:nth-child(3) {
           border-right: 2px solid rgb(55, 55, 55);
        }

        &:not(:nth-child(-n + 3)) {
            border-bottom: 2px solid rgb(55, 55, 55);
        }
    }

    @media (max-width: 900px) {
        &:nth-child(3) {
            border-top: 1px solid rgb(55, 55, 55);
            border-right: 1px solid rgb(55, 55, 55);
        }

        &:nth-child(even) {
            border-right: 2px solid rgb(55, 55, 55);
        }

        &:last-of-type {
            grid-column: span 2;
        }
    }

    @media (max-width: 640px) {
        grid-column: span 1 !important;
        border-left: 2px solid rgb(55, 55, 55) !important;
        border-top: 1px solid rgb(55, 55, 55) !important;;
        border-right: 2px solid rgb(55, 55, 55) !important;
        border-bottom: 1px solid rgb(55, 55, 55) !important;

        &:hover {
            border-color: rgb(55, 55, 55) !important;
        }

        

        &:first-of-type {
            border-top: 2px solid rgb(55, 55, 55) !important;
        }

        &:last-of-type {
            border-bottom: 2px solid rgb(55, 55, 55) !important;
        }
    }

    &:hover {
        border-color: rgb(43, 36, 255);

        &:last-of-type {
            border-right-color: rgb(43, 36, 255);
        }

        ${ServicesItemContentBox} {
            transform: translateY(-57px);
        }

        ${ServicesItemLink} {
            opacity: 1;
            visibility: visible;
        }

        @media (max-width: 767px) {
            ${ServicesItemContentBox} {
                transform: translateY(-47px);
            }
        }

        @media (max-width: 640px) {
            ${ServicesItemContentBox} {
            transform: translateY(0px);
            }
        }
    }
`;

export const Services: React.FC = () => {
    return (
        <ServicesBox className='services' id='services'>
            <Container>
                <ServicesInner>
                    <ServicesTitle>Our Key services</ServicesTitle>

                    <ServicesItems>
                        <ServicesItem>
                            <ServicesItemContent>
                                <ServicesItemContentBox>
                                    <img
                                        src='./images/services/development.svg'
                                        alt='development'
                                        loading='lazy'
                                    />

                                    <ServicesItemTitle>End-to-end Development</ServicesItemTitle>
                                </ServicesItemContentBox>

                                <ServicesItemLink href='/end-to-end-development'>
                                    Read More
                                </ServicesItemLink>
                            </ServicesItemContent>
                        </ServicesItem>

                        <ServicesItem>
                            <ServicesItemContent>
                                <ServicesItemContentBox>
                                    <img
                                        src='./images/services/writing.svg'
                                        alt='writing'
                                        loading='lazy'
                                    />

                                    <ServicesItemTitle>Whitepaper Writing</ServicesItemTitle>
                                </ServicesItemContentBox>

                                <ServicesItemLink href='/whitepaper-writing'>
                                    Read More
                                </ServicesItemLink>
                            </ServicesItemContent>
                        </ServicesItem>

                        <ServicesItem>
                            <ServicesItemContent>
                                <ServicesItemContentBox>
                                    <img
                                        src='./images/services/design.svg'
                                        alt='design'
                                        loading='lazy'
                                    />

                                    <ServicesItemTitle>
                                        Software <br></br> Design
                                    </ServicesItemTitle>
                                </ServicesItemContentBox>

                                <ServicesItemLink href='/software-design'>
                                    Read More
                                </ServicesItemLink>
                            </ServicesItemContent>
                        </ServicesItem>

                        <ServicesItem>
                            <ServicesItemContent>
                                <ServicesItemContentBox>
                                    <img
                                        src='./images/services/smallDevelopment.svg'
                                        alt='smallDevelopment'
                                        loading='lazy'
                                    />

                                    <ServicesItemTitle>
                                        Smart-Contract Development
                                    </ServicesItemTitle>
                                </ServicesItemContentBox>

                                <ServicesItemLink href='/smart-contract-development'>
                                    Read More
                                </ServicesItemLink>
                            </ServicesItemContent>
                        </ServicesItem>

                        <ServicesItem>
                            <ServicesItemContent>
                                <ServicesItemContentBox>
                                    <img
                                        src='./images/services/blockchain.svg'
                                        alt='blockchain'
                                        loading='lazy'
                                    />
                                    <ServicesItemTitle>Blockchain Development</ServicesItemTitle>
                                </ServicesItemContentBox>

                                <ServicesItemLink href='/blockchain-development'>
                                    Read More
                                </ServicesItemLink>
                            </ServicesItemContent>
                        </ServicesItem>
                    </ServicesItems>

                    <Link
                        iconName={'arrow-up-right'}
                        linkUrl='/services'
                        className={'services-link'}
                        style={{ minHeight: '60px' }}
                    >
                        SEE ALL SERVICES
                    </Link>
                </ServicesInner>
            </Container>
        </ServicesBox>
    );
};
