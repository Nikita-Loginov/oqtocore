'use client';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import LinkUniq from '@/components/controls/LinkUniq/LinkUniq';
import { Container } from '@/components/widgets';

const Gallaxy = dynamic(() => import('@/components/lib/Gallaxy/Gallaxy'), {
    loading: () => <img loading='lazy' src='./images/top/preloadChar.png' alt='' />,
    ssr: true, 
});


const TopBox = styled.section`
    padding: clamp(6.5625rem, 4.4595rem + 8.1081vw, 13.125rem) 0 clamp(5rem, 1.5951rem + 13.1274vw, 15.625rem);
    position:relative;
`;

const TopInner = styled.div`
    display: flex;
    flex-direction: column;
    position:relative;
    z-index:10;
    gap: clamp(2.5rem, 1.6988rem + 3.0888vw, 5rem);;
    align-items: flex-start;
`;

const TopContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: clamp(1.25rem, 0.8494rem + 1.5444vw, 2.5rem);
    max-width: 1084px;
`;

const TopTitle = styled.h1`
    font-size: clamp(1.875rem, 0.6733rem + 4.6332vw, 5.625rem);;
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

    canvas,
    img {
       width:100% !important;
       height: 100% !important;
       object-fit: cover;
    }

    img {
        object-fit: cover;
    }
`

export default function Top() {
    return (
        <TopBox>
            <Container>
            {/* <img src='./images/top/preloader.png' alt='' /> */}
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
                    <Gallaxy />
                </TopGallaxy>
            </Container>
        </TopBox>
    );
}
