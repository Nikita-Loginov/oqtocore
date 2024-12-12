'use client';
import { useEffect, useState } from 'react';
// import Script from 'next/script';
import styled from 'styled-components';
import LinkUniq from '@/components/controls/LinkUniq/LinkUniq';
import { Container } from '@/components/widgets';


const TopBox = styled.section`
    padding: clamp(6.5625rem, 4.4595rem + 8.1081vw, 13.125rem) 0
        clamp(5rem, 1.5951rem + 13.1274vw, 15.625rem);
    position: relative;
`;

const TopInner = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 10;
    gap: clamp(2.5rem, 1.6988rem + 3.0888vw, 5rem);
    align-items: flex-start;
`;

const TopContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: clamp(1.25rem, 0.8494rem + 1.5444vw, 2.5rem);
    max-width: 1084px;
`;

const TopTitle = styled.h1`
    font-size: clamp(1.875rem, 0.6733rem + 4.6332vw, 5.625rem);
    font-weight: 400;
    line-height: 1.1;
`;

const TopText = styled.p`
    font-size: clamp(0.875rem, 0.7548rem + 0.4633vw, 1.25rem);
    font-weight: 600;
    line-height: 1.45;
`;

const TopGallaxy = styled.div`
    z-index: -1;
    position: absolute;
    pointer-events: none;
    left: 0;
    right: 0;
    bottom: -70px;
    height: 100%;

    canvas {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover;
    }

    img {
        object-fit: cover;
        object-position: right;
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
        inset: 0;

        @media (max-width: 767px) {
            left: -179px;
            object-position: center;
            width: auto;
        }

        @media (max-width: 650px) {
            left: -250px;
            object-position: center;
            width: auto;
        }
    }
`;

export default function Top() {
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = './js/lib/3d-gallaxy.js';
    //     script.async = true;
    //     script.onload = () => {
    //         setLoading(false);
    //     };
    //     script.onerror = () => {
    //         console.error('Ошибка при загрузке скрипта');
    //         setLoading(false);
    //     };
    //     document.body.appendChild(script);

    //     return () => {
    //         document.body.removeChild(script);
    //     };
    // }, []);

    return (
        <>
            <TopBox>
                <Container>
                    <TopInner>
                        <TopContent>
                            <TopTitle>Web3 Development Powerhouse & Marketing Solutionhub</TopTitle>

                            <TopText>Let’s build something beyond ordinary together</TopText>
                        </TopContent>

                        <LinkUniq
                            iconName='arrow-down'
                            linkText='discover more'
                            linkUrl='/#services'
                        ></LinkUniq>
                    </TopInner>

                    <TopGallaxy>
                        <canvas className='webgl'></canvas>
                        {/* {loading && (
                            <picture>
                                <source srcSet='./images/top/preloadChar2x.webp 2x' />
                                <img
                                    src='./images/top/preloadChar.webp'
                                    alt='Loading...'
                                />
                            </picture>
                        )} */}
                    </TopGallaxy>
                </Container>
            </TopBox>

            {/* <Script src='./js/lib/3d-gallaxy.js' async/> */}
        </>
    );
}
