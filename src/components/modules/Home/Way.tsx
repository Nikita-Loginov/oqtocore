'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import { Container } from '@/components/widgets';

gsap.registerPlugin(ScrollTrigger);

const WaySection = styled.section`
    background-color: rgb(43, 36, 255);
    padding: clamp(1.25rem, 0.8507rem + 1.5432vw, 2.5rem) 0 0 0;
    height: 85vh;
    overflow: hidden;
    position: relative;

    @media (max-width: 900px) {
        height: auto;

        &:before {
            display: none;
        }
    }

    &:before {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 840px;
        background-image: url(./images/way/decor.webp);
        z-index: 0;
    }
`;

const WayContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: clamp(2.25rem, 1.3316rem + 3.5494vw, 5.125rem);
`;

const WayTitle = styled.h2`
    font-size: clamp(1.25rem, 0.8507rem + 1.5432vw, 2.5rem);
    font-weight: 700;
    line-height: 1.17;
    opacity:0;
    transition: all 0.5s;

    &.active {
        opacity:1;
    }
`;

const WayAnimationBox = styled.div`
    display: flex;
    gap: 12px;
    position: relative;
`;

const WayLines = styled.div`
    position: absolute;
    width: 4px;
    background-color: #fff;
    height: calc(210px * 9);
    display: grid;
    grid-template-rows: repeat(9, 210px);
    transition: all 0.5s;
    top: 0px;
    left: 5px;
    transform: translateY(6px);

    @media (max-width: 900px) {
        display:none;
    }
`;

const WayLine = styled.div`
    position: relative;
    top: -5px;

    &:before {
        content: '';
        position: absolute;
        width: 24px;
        height: 24px;
        background-color: #fff;
        border-radius: 50%;
        bottom: -27px;
        left: -10.5px;
    }

    &:first-of-type {
        &:after {
            content: '';
            position: absolute;
            width: 24px;
            height: 24px;
            background-color: #fff;
            border-radius: 50%;
            top: 3px;
            left: -10.5px;
        }
    }
`;

const WayAnimationDecor = styled.div`
    position: absolute;
    width: 3px;
    height: 100%;
    opacity: 0;
    top: 0;

    @media (max-width: 900px) {
        img {
            display: none;
        }
    }
`;

const WayItems = styled.div`
    display: flex;
    flex-direction: column;
    height: 210px;
    overflow: hidden;
    position: relative;
    min-width: 100%;
    padding-left: 36px;

    @media (max-width: 900px) {
        height: auto;
        overflow: visible;
        padding-left: 18px;
    }
`;

const WayItem = styled.div`
    display: flex;
    min-height: 210px;
    position: absolute;
    width: fit-content;
    opacity: 0;
    // transform:tra
    transition: all 0.2s;

    &.active {
        opacity: 1;
        transition: all 0.5s;
    }

    @media (max-width: 900px) {
        min-height: auto !important;
        position: relative;
        top: 0 !important;
        opacity: 1 !important;

        &:not(:last-of-type) {
            padding-bottom: 40px;
        }

        &:last-of-type {
            padding-bottom: 20px;
        }

        &:first-of-type {
            padding-bottom: 80px;
        }

        &:before {
            position: absolute;
            content: '';
            width: 24px;
            height: 24px;
            background-color: #fff;
            border-radius: 50%;
            top: 2px;
            left: -28.8px;
            @media (max-width: 430px) {
                top: 0;
            }
        }

        &:after {
            position: absolute;
            content: '';
            width: 4px;
            height: 100%;
            background-color: #fff;
            top: 3px;
            left: -18.8px;
        }

        &:last-of-type:after {
            display:none;
        }
    }
`;

const WayItemContents = styled.div`
    display: flex;
    gap: 80px;

    @media (max-width: 900px) {
        flex-direction: column;
        gap: 24px;
    }
`;

const WayItemContent = styled.div`
    max-width: 370px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (max-width: 900px) {
        gap: 4px;
    }
`;

const WayItemTitle = styled.h3`
    font-size: 28px;
    font-weight: 700;
    line-height: 1.17;

    @media (max-width: 430px) {
        font-size: 20px;
    }
`;

const WayItemText = styled.p`
    font-weight: 600;

    @media (max-width: 900px) {
        color: #a9a6ff;
    }
`;

export default function Way() {
    const mediaQuery = window.matchMedia('(max-width: 900px)');
    let smoothScroll;
    let tl;
    let animationItems = undefined;
    let animationLinesBox = undefined;
    let animationTitle = undefined;
    let lengthArray = undefined;
    const [isSmoothScrollLoaded, setIsSmoothScrollLoaded] = useState(false);
    let currentIndex = 0;
    let currentTopLine = 0;
    let isAnimating = false;
    let isCountScrollY = false;
    let isAnimationTitle = false;
    let currentScrollY;
    let arrNumbers = [2];

    let isScrolling;

    const handleScriptLoad = () => {
        setIsSmoothScrollLoaded(true);
    };

    function initSmoothScroll() {
        smoothScroll = new (window as any).SmoothScroll({
            stepSize: 80,
            keyboardSupport: true,
            arrowScroll: 80,
        });
    }

    function initAnimation() {
        tl = gsap.timeline({ paused: true });

        const offsets = new Array(lengthArray).fill('example');

        // tl.to('.way__title', {
        //     opacity: 0,
        //     ease: 'power1.inOut',
        // });

        offsets.forEach((el, index) => {
            tl.to('.animaton-decor', {
                y: 210 * index,
                ease: 'power1.inOut',
            });
        });

        return tl;
    }

    function infoScroll() {
        if (isAnimating) return;

        arrNumbers.push(window.scrollY - currentScrollY);

        if (
            (arrNumbers[0] > 0 && arrNumbers[arrNumbers.length - 1] < 0) ||
            (arrNumbers[0] < 0 && arrNumbers[arrNumbers.length - 1] > 0)
        ) {
            arrNumbers = [];
            arrNumbers.push(window.scrollY - currentScrollY);
            const diff = window.scrollY - currentScrollY;
            handleScroll(diff);
        }

        if (!isCountScrollY) {
            currentScrollY = window.scrollY;
            isCountScrollY = true;
            return;
        }
        if (Math.abs(window.scrollY - currentScrollY) >= 80) {
            isScrolling = window.scrollY;
            isCountScrollY = false;
            const diff = window.scrollY - currentScrollY;
            handleScroll(diff);
        }
    }

    function handleScroll(diff) {
        if (isAnimating) return;

        if (diff > 0) {
            currentIndex += 1;

            if (currentIndex === 1 && !isAnimationTitle) {
                animationItems[0].classList.remove('active');
                isAnimationTitle = true;
                currentIndex = 0
                return 
            }

        } else if (diff < 0) {
            currentIndex -= 1;

            console.log(currentIndex)

            if (currentIndex === 0) {
                currentTopLine = 0;
                animationLinesBox.style.top = currentTopLine + 'px';
                return 
            } else if (currentIndex === -1 ) {
                animationItems[0].classList.add('active');
                animationItems[1].classList.add('active');
                currentIndex = 0;
                isAnimationTitle = false;
                return 
            }
        }

        // console.log(currentIndex)

        currentIndex = Math.max(0, Math.min(animationItems.length - 1, currentIndex));

        currentTopLine = -210 * currentIndex;

        animationItems.forEach((item) => {
            item.classList.remove('active');
        });


        animationItems[currentIndex].classList.add('active');
        animationLinesBox.style.top = currentTopLine + 'px';
    }

    function handleMediaChange(e) {
        if (e.matches) {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            isAnimating = false;
        } else {
            if (!tl) {
                initAnimation();
            }

            ScrollTrigger.create({
                animation: tl,
                trigger: '.way',
                start: 'bottom bottom',
                end: 'bottom top',
                scrub: 0,
                pin: true,
                // delay: 170,
                onEnter: () => {
                    if (!(window as any).scrollEventAdded) {
                        window.addEventListener('scroll', infoScroll);
                        (window as any).scrollEventAdded = true;
                    }
                    isAnimating = false;
                },
                onLeave: () => {
                    isAnimating = true;
                },
                onEnterBack: () => {
                    if (!(window as any).scrollEventAdded) {
                        if (currentIndex === 0) {
                            console.log('fsfsd')
                        }
                        window.addEventListener('scroll', infoScroll);
                        (window as any).scrollEventAdded = true;
                    }
                    isAnimating = false;
                },
                onLeaveBack: () => {
                    isAnimating = true;
                },
            });

            tl.eventCallback('onComplete', () => {
                isAnimating = false;
            });
        }
    }

    useEffect(() => {
        if (isSmoothScrollLoaded) {
            initSmoothScroll();
        }
    }, [isSmoothScrollLoaded]);

    useEffect(() => {
        animationItems = document.querySelectorAll('.animation-item');
        animationLinesBox = document.querySelector('.animation-lines') as HTMLElement;
        lengthArray = animationItems.length + 1;
        mediaQuery.addEventListener('change', handleMediaChange);

        handleMediaChange(mediaQuery);
    }, []);

    useEffect(() => {
        let currentAnimationBlockPosition;
        setTimeout(() => {
            currentAnimationBlockPosition = document.querySelector('.way').getBoundingClientRect().top;
            if (currentAnimationBlockPosition < 0) {
                currentIndex = animationItems.length
            }
        }, 1000)
    }, [])

    // useEffect(() => {
    //     const checkHeights = () => {
    //         const wayItems = document.querySelectorAll('.way__item');
    //         console.log(wayItems);

    //         wayItems.forEach((item) => {
    //             let maxHeight = -1;
    //             const wayItemContentBox = item.querySelector('.way__item-contents') as HTMLElement;
    //             const wayItemContent = wayItemContentBox.querySelectorAll('.way__item-content');

    //             if (window.innerWidth < 900) {
    //                 wayItemContentBox.style.height = 'auto';
    //             } else {
    //                 if (wayItemContent.length >= 2) {
    //                     wayItemContent.forEach((itemContent) => {
    //                         itemContent.setAttribute('style', 'align-self: start; margin-top: auto;');
    //                         maxHeight = Math.max(maxHeight, (itemContent as HTMLElement).clientHeight);
    //                     });
    //                     wayItemContentBox.style.height = maxHeight + 'px';
    //                 }
    //             }
    //         });
    //     };

    //     checkHeights()

    //     // window.addEventListener('resize', checkHeights);
    // })

    return (
        <>
            <WaySection className='way'>
                <Container>
                    <div className='way__inner'>
                        <WayContent>
                            <WayTitle className='way__title animation-item active'>Your way with us</WayTitle>

                            <WayAnimationBox className='way__box'>
                                <WayAnimationDecor className='animaton-decor'>
                                    <img
                                        src='./icons/animation-scroll.svg'
                                        alt=''
                                    />
                                </WayAnimationDecor>

                                <WayLines className='animation-lines'>
                                    <WayLine></WayLine>
                                    <WayLine></WayLine>
                                    <WayLine></WayLine>
                                    <WayLine></WayLine>
                                    <WayLine></WayLine>
                                    <WayLine></WayLine>
                                    <WayLine></WayLine>
                                    <WayLine></WayLine>
                                    <WayLine></WayLine>
                                </WayLines>

                                <WayItems>
                                    <WayItem className='animation-item active'>
                                        <WayItemContents className='way__item-contents'>
                                            <WayItemContent>
                                                <WayItemTitle>First met</WayItemTitle>
                                            </WayItemContent>
                                        </WayItemContents>
                                    </WayItem>

                                    <WayItem className='animation-item'>
                                        <WayItemContents className='way__item-contents'>
                                            <WayItemContent>
                                                <WayItemTitle>Estimate pricing</WayItemTitle>

                                                <WayItemText>
                                                    Should be some description here
                                                </WayItemText>
                                            </WayItemContent>
                                        </WayItemContents>
                                    </WayItem>

                                    <WayItem className='animation-item'>
                                        <WayItemContents className='way__item-contents'>
                                            <WayItemContent className='way__item-content'>
                                                <WayItemTitle>Details discussion</WayItemTitle>

                                                <WayItemText>
                                                    We begin by clarifying your requirements and
                                                    understanding your budget target. Our architect
                                                    will guide you through the cost estimation for
                                                    each feature right on call, ensuring
                                                    transparency and feasibility.
                                                </WayItemText>
                                            </WayItemContent>

                                            <WayItemContent className='way__item-content'>
                                                <WayItemTitle>Outcome:</WayItemTitle>

                                                <WayItemText>
                                                    A detailed feature list paired with your budget
                                                    preferences, giving us a clear direction for the
                                                    project.
                                                </WayItemText>
                                            </WayItemContent>
                                        </WayItemContents>
                                    </WayItem>

                                    <WayItem className='animation-item'>
                                        <WayItemContents>
                                            <WayItemContent>
                                                <WayItemTitle>
                                                    Proposal and Roadmap Development
                                                </WayItemTitle>

                                                <WayItemText>
                                                    We create a comprehensive commercial proposal
                                                    and a high-level project timeline. This roadmap
                                                    incorporates your preferences, desired features,
                                                    and estimated delivery timeframes, providing a
                                                    clear view of the project's structure.
                                                </WayItemText>
                                            </WayItemContent>

                                            <WayItemContent>
                                                <WayItemTitle>Outcome:</WayItemTitle>

                                                <WayItemText>
                                                    A detailed proposal outlining the total project
                                                    cost and a roadmap tailored to your goals and
                                                    deadlines.
                                                </WayItemText>
                                            </WayItemContent>
                                        </WayItemContents>
                                    </WayItem>

                                    <WayItem className='animation-item'>
                                        <WayItemContents>
                                            <WayItemContent>
                                                <WayItemTitle>Initial Payment</WayItemTitle>

                                                <WayItemText>
                                                    The project follows a monthly payment structure,
                                                    with the total cost divided into equal
                                                    installments based on the project duration. The
                                                    first payment, covering two months, is made
                                                    upfront. Starting from the third month, payments
                                                    continue on a monthly basis.
                                                </WayItemText>
                                            </WayItemContent>
                                        </WayItemContents>
                                    </WayItem>

                                    <WayItem className='animation-item'>
                                        <WayItemContents>
                                            <WayItemContent>
                                                <WayItemTitle>Development Kickoff</WayItemTitle>

                                                <WayItemText>
                                                    Our dedicated developers are assigned to your
                                                    project and begin by getting familiar with its
                                                    specifics. This stage includes conducting
                                                    customer interviews, gathering detailed
                                                    insights, and drafting the technical
                                                    requirements (specifications).
                                                </WayItemText>
                                            </WayItemContent>

                                            <WayItemContent>
                                                <WayItemTitle>Outcome: </WayItemTitle>

                                                <WayItemText>
                                                    A well-prepared team and a clear set of
                                                    technical specifications to ensure a smooth
                                                    development process.
                                                </WayItemText>
                                            </WayItemContent>
                                        </WayItemContents>
                                    </WayItem>

                                    <WayItem className='animation-item'>
                                        <WayItemContents>
                                            <WayItemContent>
                                                <WayItemTitle>
                                                    Detailed Technical Specification Preparation
                                                </WayItemTitle>

                                                <WayItemText>
                                                    We create a comprehensive and highly detailed
                                                    technical specification, outlining every aspect
                                                    of the project. This document serves as a
                                                    blueprint for development, ensuring clarity and
                                                    alignment on all technical and functional
                                                    requirements.
                                                </WayItemText>
                                            </WayItemContent>

                                            <WayItemContent>
                                                <WayItemTitle>Outcome:</WayItemTitle>

                                                <WayItemText>
                                                    A finalized, in-depth technical specification
                                                    that guides the development process and
                                                    minimizes misunderstandings.
                                                </WayItemText>
                                            </WayItemContent>
                                        </WayItemContents>
                                    </WayItem>

                                    <WayItem className='animation-item'>
                                        <WayItemContents>
                                            <WayItemContent>
                                                <WayItemTitle>MVP Launch</WayItemTitle>

                                                <WayItemText>
                                                    The first production release of your product is
                                                    delivered. This version is ready for promotion,
                                                    user metrics measurement, and business model
                                                    validation, serving as a solid foundation for
                                                    future iterations.
                                                </WayItemText>
                                            </WayItemContent>

                                            <WayItemContent>
                                                <WayItemTitle>Outcome:</WayItemTitle>

                                                <WayItemText>
                                                    A functional MVP that enables real-world testing
                                                    and provides actionable insights for scaling and
                                                    refinement.
                                                </WayItemText>
                                            </WayItemContent>
                                        </WayItemContents>
                                    </WayItem>

                                    <WayItem className='animation-item'>
                                        <WayItemContents>
                                            <WayItemContent>
                                                <WayItemTitle>
                                                    Technical Specification Revision (Pivot
                                                    Opportunity)
                                                </WayItemTitle>

                                                <WayItemText>
                                                    We offer a unique opportunity to revise the
                                                    technical specification and shift the project's
                                                    direction at no additional cost. As
                                                    result-focused partner, we understand the
                                                    importance of flexibility in adapting to new
                                                    insights and changing priorities.
                                                </WayItemText>
                                            </WayItemContent>

                                            <WayItemContent>
                                                <WayItemTitle>Outcome:</WayItemTitle>

                                                <WayItemText>
                                                    A refined technical specification aligned with
                                                    your updated goals, ensuring the project remains
                                                    on the right track for success.
                                                </WayItemText>
                                            </WayItemContent>
                                        </WayItemContents>
                                    </WayItem>
                                </WayItems>
                            </WayAnimationBox>
                        </WayContent>
                    </div>
                </Container>
            </WaySection>

            <Script
                src='./js/lib/smoothScroll.js'
                integrity='sha256-huW7yWl7tNfP7lGk46XE+Sp0nCotjzYodhVKlwaNeco='
                crossOrigin='anonymous'
                async
                onLoad={handleScriptLoad}
            />
        </>
    );
}
