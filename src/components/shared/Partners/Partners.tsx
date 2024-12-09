'use client';
import styled, { keyframes } from 'styled-components';

const PartnersBox = styled.section`
    overflow: hidden;

    .container {
        width: 100%;
    }
`;

const PartnersInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const PartnersTitle = styled.h2`
    font-size: 40px;
    font-weight: 700;
    line-height: 1.17;
`;

const PartnersItems = styled.div`
    position: relative;
    display: flex;
    overflow: hidden;
    gap: 48px;
    border-bottom: 1px solid rgb(55, 55, 55);
    border-top: 1px solid rgb(55, 55, 55);
    padding: 24px 0;
`;

const scrollParnners = keyframes`
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(calc(-100% - 48px));
    }
`;

const PartnersItem = styled.div`
    display: flex;
    flex-shrink: 0;
    gap: 48px;
    min-width: 100%;
    animation: ${scrollParnners} 10s linear infinite;
`;

export default function Partners() {
    return (
        <PartnersBox className='partners'>
            <PartnersInner className='partners__inner'>
                <div className='container'>
                    <PartnersTitle className='partners__title'>Trusted By</PartnersTitle>
                </div>

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
