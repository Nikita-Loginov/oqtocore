'use client';
import React from 'react';
import { useState,forwardRef  } from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from '@/components/widgets';

const gapValue = 'clamp(0.9375rem, 0.2765rem + 2.5483vw, 3rem)';

const PartnersBox = styled.section`
    overflow: hidden;
`;

const PartnersInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: 767px) {
        gap: 12px;
    }
`;

const PartnersTitle = styled.h2`
    font-size: clamp(1.25rem, 0.8494rem + 1.5444vw, 2.5rem);
    font-weight: 700;
    line-height: 1.17;
`;

const PartnersItems = styled.div`
    position: relative;
    display: flex;
    overflow: hidden;
    gap: ${gapValue};
    border-bottom: 1px solid rgb(55, 55, 55);
    border-top: 1px solid rgb(55, 55, 55);
    background-color: #010101;
    padding: 24px 0;

    img {
        height: clamp(1.875rem, 1.2541rem + 2.3938vw, 3.8125rem);
    }
`;

const scrollParnners = keyframes`
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(calc(-100% - ${gapValue}));
    }
`;

const PartnersItem = styled.div`
    display: flex;
    flex-shrink: 0;
    gap: ${gapValue};
    animation: ${scrollParnners} 40s linear infinite;
`;

interface PartnersProps extends React.HTMLProps<HTMLDivElement> {}

const Partners = forwardRef<HTMLDivElement, PartnersProps>((props, ref) => {
    const [images, setImages] = useState([
        {
            srcImage: './images/partners/zellic.svg',
            alt: 'zellic',
        },
        {
            srcImage: './images/partners/allianz.svg',
            alt: 'allianz',
        },
        {
            srcImage: './images/partners/sherlock.svg',
            alt: 'sherlock',
        },
        {
            srcImage: './images/partners/bk.svg',
            alt: 'bk',
        },
        {
            srcImage: './images/partners/fortyseven.svg',
            alt: 'fortyseven',
        },
        {
            srcImage: './images/partners/otvise.svg',
            alt: 'otvise',
        },
        {
            srcImage: './images/partners/altarey.svg',
            alt: 'altarey',
        },
        {
            srcImage: './images/partners/bmv.svg',
            alt: 'bmv',
        },
        {
            srcImage: './images/partners/teams.svg',
            alt: 'teams',
        },
    ]);
    const repeations = 4;

    const combinedArr = Array(repeations).fill(images).flat();

    return (
        <PartnersBox ref={ref}>
            <PartnersInner>
                <Container>
                    <PartnersTitle>Trusted By</PartnersTitle>
                </Container>

                <PartnersItems>
                    <PartnersItem>
                        {combinedArr.map((item, index) => (
                            <img
                                src={item.srcImage}
                                key={index}
                                alt={item.alt}
                                loading='lazy'
                                width={"100%"}
                            />
                        ))}
                    </PartnersItem>

                    <PartnersItem>
                        {combinedArr.map((item, index) => (
                            <img
                                src={item.srcImage}
                                key={index}
                                alt={item.alt}
                                loading='lazy'
                                width={"100%"}
                            />
                        ))}
                    </PartnersItem>
                </PartnersItems>
            </PartnersInner>
        </PartnersBox>
    );
})

export default Partners
