'use client';
import React, { useEffect, useState } from 'react';
import { forwardRef  } from 'react';
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
        width:150px;
    }
`;

const scrollParnners = keyframes`
    0% {
        -webkit-transform: translateX(0%);
        -ms-transform: translateX(0%);
            transform: translateX(0%);
    }

    100% {
        -webkit-transform: translateX(calc(-100% - ${gapValue}));
        -ms-transform: translateX(calc(-100% - ${gapValue}));
            transform: translateX(calc(-100% - ${gapValue}));
    }
`;

const PartnersItem = styled.div`
   display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
    -ms-flex-negative: 0;
        flex-shrink: 0;
    gap: ${gapValue};
    -webkit-transform: translateX(0%);
        -ms-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-animation: ${scrollParnners} 40s linear infinite;
    animation: ${scrollParnners} 40s linear infinite;
    will-change: transform;
`;

const Partners = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>((props, ref) => {
    const [isSafari, setIsSafari] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent;
        const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(userAgent);

        setIsSafari(isSafariBrowser);

    }, [])

    console.log(isSafari)

    const images = [
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
    ]
    const repeations = 4;

    const combinedArr = Array(repeations).fill(images).flat();

    return (
        <PartnersBox ref={ref}>
            <PartnersInner>
                <Container>
                    <PartnersTitle className='partners__title'>Trusted By</PartnersTitle>
                </Container>

                <PartnersItems>
                    <PartnersItem>
                        {combinedArr.map((item, index) => (
                            <img
                                src={item.srcImage}
                                key={index}
                                alt={item.alt}
                                loading='lazy'
                                style={{ width: isSafari ? "120px" : "auto" }}
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
                                style={{ width: isSafari ? "120px" : "auto" }}
                            />
                        ))}
                    </PartnersItem>
                </PartnersItems>
            </PartnersInner>
        </PartnersBox>
    );
})

Partners.displayName = 'Partners';

export default Partners
