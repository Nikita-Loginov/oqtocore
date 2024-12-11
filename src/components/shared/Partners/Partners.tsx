'use client';
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

    @media(max-width:767px) {
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
    min-width: 100%;
    animation: ${scrollParnners} 10s linear infinite;
`;

export default function Partners() {
    return (
        <PartnersBox className='partners'>
            <PartnersInner className='partners__inner'>
                <Container>
                    <PartnersTitle className='partners__title'>Trusted By</PartnersTitle>
                </Container>

                <PartnersItems className='partners__items'>
                    <PartnersItem className='partners__item'>
                        <img
                            src='./images/partners/zellic.svg'
                            alt='zellic'
                            loading='lazy'
                        />
                        <img
                            src='./images/partners/allianz.svg'
                            alt='allianz'
                            loading='lazy'
                        />
                        <img
                            src='./images/partners/sherlock.svg'
                            alt='sherlock'
                            loading='lazy'
                        />
                        <img
                            src='./images/partners/bk.svg'
                            alt='bk'
                            loading='lazy'
                        />
                        <img
                            src='./images/partners/fortyseven.svg'
                            alt='fortyseven'
                            loading='lazy'
                        />
                        <img
                            src='./images/partners/otvise.svg'
                            alt='otvise'
                            loading='lazy'
                        />
                        <img
                            src='./images/partners/altarey.svg'
                            alt='altarey'
                            loading='lazy'
                        />
                        <img
                            src='./images/partners/bmv.svg'
                            alt='bmv'
                            loading='lazy'
                        />
                        <img
                            src='./images/partners/teams.svg'
                            alt='teams'
                            loading='lazy'
                        />
                    </PartnersItem>

                    <PartnersItem className='partners__item'>
                        <img
                            src='./images/partners/zellic.svg'
                            alt='zellic'
                            loading='lazy'
                        />
                        <img
                            src='./images/partners/allianz.svg'
                            alt='allianz'
                            loading='lazy'
                        />
                        <img
                            src='./images/partners/sherlock.svg'
                            alt='sherlock'
                            loading='lazy'
                        />
                        <img
                            src='./images/partners/bk.svg'
                            alt='bk'
                            loading='lazy'
                        />
                        <img
                            src='./images/partners/fortyseven.svg'
                            alt='fortyseven'
                            loading='lazy'
                        />
                        <img
                            src='./images/partners/otvise.svg'
                            alt='otvise'
                            loading='lazy'
                        />
                        <img
                            src='./images/partners/altarey.svg'
                            alt='altarey'
                            loading='lazy'
                        />
                        <img
                            src='./images/partners/bmv.svg'
                            alt='bmv'
                            loading='lazy'
                        />
                        <img
                            src='./images/partners/teams.svg'
                            alt='teams'
                            loading='lazy'
                        />
                    </PartnersItem>
                </PartnersItems>
            </PartnersInner>
        </PartnersBox>
    );
}
