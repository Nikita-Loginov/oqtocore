'use client';
import { useEffect, useState, useMemo } from 'react';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import LinkUniq from '@/components/controls/LinkUniq/LinkUniq';
import { Container } from '@/components/widgets';

const Galaxy = dynamic(() => import('@/components/widgets/Galaxy/Galaxy'), {
    ssr: false,
    loading: () => <></>
});

const TopBox = styled.section`
    padding: clamp(6.5625rem, 4.4595rem + 8.1081vw, 13.125rem) 0
        clamp(5rem, 1.5951rem + 13.1274vw, 15.625rem);
    position: relative;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: -70px;
        left: 0;
    }
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
    // visibility: hidden;
    // height: 0;
    // width: 0;

    &.showImg {
        img {
            opacity: 1;
        }
    }

    canvas {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover;
        z-index: 100000;
        position: relative;
        transition: all 5s;
    }

    img {
        object-fit: cover;
        object-position: center;
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
        inset: 0;
        // opacity: 0;
        top: 95px;
        transition: all 0.5s;

        // @media (max-width: 767px) {
        //     left: -179px;
        //     object-position: center;
        //     width: auto;
        // }

        // @media (max-width: 650px) {
        //     left: -250px;
        //     object-position: center;
        //     width: auto;
        // }

        // @media (max-width: 400px) {
        //     left: -275px;
        //     object-position: center;
        //     width: auto;
        // }
    }
`;

export default function Top() {
    const [loading, setLoading] = useState(true);
    const handleSetClient = () => {
        setLoading(true);
      };

    // const scriptUrl = useMemo(() => './js/lib/3d-gallaxy.js', []);

    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = './js/lib/3d-gallaxy.js';
    //     script.type = 'module';
    //     script.async = true;
    //     script.onload = () => {
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
                    {/* <canvas id="starfield"></canvas> */}
                    {/* <img
                        src='./images/top/gallaxy.webp'
                        alt='Loading...'
                    /> */}
                    <TopGallaxy>
                        <Galaxy onClientReady={handleSetClient}></Galaxy>
                        {/* <canvas className='webgl'></canvas> */}
                        {loading && (
                            <picture>
                                <img
                                    src='./images/top/preloaderChar.png'
                                    alt='Loading...'
                                />
                            </picture>
                        )}

                        {/* <source srcSet='./images/top/gallaxy.webp 2x' /> */}
                        {/* {loading ? (
                            
                        ) :  null} */}
                    </TopGallaxy>
                </Container>
            </TopBox>

            {/* <Script
                src='./js/lib/3d-gallaxy.js'
                async
                type='module'
                // onLoad={() => {
                //     const lilGuiElement = document.querySelector('.lil-gui') as HTMLElement;
                //     if (lilGuiElement) {
                //         lilGuiElement.style.opacity = '0';
                //     }
                // }}
            /> */}
        </>
    );
}
