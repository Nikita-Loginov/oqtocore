'use client';

import { useEffect, useState, forwardRef } from 'react';
import Script from 'next/script';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// import ScrollSmoother from 'gsap/ScrollSmoother'
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
`;

const WayAnimationBox = styled.div`
    display: flex;
    gap: 12px;
`;

const WayAnimationDecor = styled.div`
    transform: translateY(4px);

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

    &:first-of-type {
        top: 0;
    }

    &:not(:first-of-type) {
        opacity: 0;
        // transform: translateY(20px);
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
            top: 3px;
            left: -35.8px;
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
            left: -25.8px;
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
    const [isSmoothScrollLoaded, setIsSmoothScrollLoaded] = useState(false);
    let smoothScroll;

    const handleScriptLoad = () => {
        setIsSmoothScrollLoaded(true);
    };

    function initSmoothScroll(animationTime, animationStepSize) {
        // if (smoothScroll) {
        //     console.log(smoothScroll)
        //     smoothScroll.destroy();
        // }

        smoothScroll = new (window as any).SmoothScroll({
            animationTime: animationTime,
            stepSize: animationStepSize,
            accelerationDelta: 1,
            accelerationMax: 1,
            keyboardSupport: true,
            arrowScroll: animationStepSize,
            pulseAlgorithm: true,
            pulseScale: 4,
            pulseNormalize: 1,
            touchpadSupport: true,
        });
    }

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

    //     // checkHeights()

    //     // window.addEventListener('resize', checkHeights);
    // })

    // useEffect(() => {
    //     if (isSmoothScrollLoaded) {
    //         initSmoothScroll(1600, 100);
    //     }
    // }, [isSmoothScrollLoaded]);

    useEffect(() => {
        // checkHeights()
        const mediaQuery = window.matchMedia('(max-width: 900px)');

        let isPaused = false;
        let currentIndex = 0;
        let tl = undefined;
        let isAnimating = false;

        function initAnimation() {
            tl = gsap.timeline({ paused: true });

            tl.to('.way__title', { opacity: 0, ease: 'power1.inOut', duration: 20 }).to(
                '.way__box',
                { y: '-92', ease: 'power1.inOut', duration: 20 },
            );

            const elements = [
                '.one',
                '.two',
                '.three',
                '.four',
                '.five',
                '.six',
                '.seven',
                '.eight',
                '.night',
            ];
            const offsets = [-207, -417, -627, -837, -1047, -1257, -1467, -1677];

            elements.forEach((el, index) => {
                const delay = 70;

                if (index === elements.length - 1) {
                    tl.to('.animaton-decor', {
                        y: offsets[index],
                        ease: 'power1.inOut',
                        duration: 20,
                        delay: delay,
                    });
                } else {
                    tl.to('.animaton-decor', {
                        y: offsets[index],
                        ease: 'power1.inOut',
                        duration: 20,
                        delay: delay,
                    })
                        .to(el, { opacity: 0, ease: 'power1.inOut', duration: 20 }, '<')
                        .to(
                            elements[index + 1],
                            { opacity: 1, ease: 'power1.inOut', duration:  20},
                            '+=15 + ' + delay,
                        );
                }
            });

            return tl;
        }

        function handleMediaChange(e) {
            if (e.matches) {
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
                    onEnter: () => {
                        if (!isAnimating) {
                            isAnimating = true;
                            tl.play(); // Запускаем анимацию
                            tl.eventCallback('onComplete', () => {
                                isAnimating = false; // Завершаем анимацию
                            });
                        }
                    },
                    onLeaveBack: () => {
                        if (!isAnimating) {
                            isAnimating = true;
                            tl.reverse(); // Запускаем анимацию назад
                            tl.eventCallback('onComplete', () => {
                                isAnimating = false; // Завершаем анимацию
                            });
                        }
                    },
                });
            }
        }


        function handleScroll(e) {
            console.log('колесииик раз');
        }

        // window.addEventListener('resize', checkHeights);

        mediaQuery.addEventListener('change', handleMediaChange);

        handleMediaChange(mediaQuery);
        // document.querySelector('.pin-spacer').style.height = '500px';
        window.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
            mediaQuery.removeEventListener('change', handleMediaChange);
            tl.kill();
        };
    }, []);

    // initSmoothScroll(1600, 55)

    return (
        <>
            <WaySection className='way'>
                <Container>
                    <div className='way__inner'>
                        <WayContent>
                            <WayTitle className='way__title'>Your way with us</WayTitle>

                            <WayAnimationBox className='way__box'>
                                <WayAnimationDecor className='animaton-decor'>
                                    <img
                                        src='./icons/animation-scroll.svg'
                                        alt=''
                                    />
                                </WayAnimationDecor>

                                <WayItems>
                                    <WayItem className='one way__item'>
                                        <WayItemContents className='way__item-contents'>
                                            <WayItemContent>
                                                <WayItemTitle>First met</WayItemTitle>
                                            </WayItemContent>
                                        </WayItemContents>
                                    </WayItem>

                                    <WayItem className='two way__item'>
                                        <WayItemContents className='way__item-contents'>
                                            <WayItemContent>
                                                <WayItemTitle>Estimate pricing</WayItemTitle>

                                                <WayItemText>
                                                    Should be some description here
                                                </WayItemText>
                                            </WayItemContent>
                                        </WayItemContents>
                                    </WayItem>

                                    <WayItem className='three way__item'>
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

                                    <WayItem className='four way__item'>
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

                                    <WayItem className='five way__item'>
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

                                    <WayItem className='six way__item'>
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
                                                A well-prepared team and a clear set of technical specifications to ensure a smooth development process.
                                                </WayItemText>
                                            </WayItemContent>
                                        </WayItemContents>
                                    </WayItem>

                                    <WayItem className='seven way__item'>
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

                                    <WayItem className='eight way__item'>
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

                                    <WayItem className='night way__item'>
                                        <WayItemContents>
                                            <WayItemContent>
                                                <WayItemTitle>
                                                    Technical Specification Revision (Pivot
                                                    Opportunity)
                                                </WayItemTitle>

                                                <p className='way__item-text'>
                                                    We offer a unique opportunity to revise the
                                                    technical specification and shift the project's
                                                    direction at no additional cost. As
                                                    result-focused partner, we understand the
                                                    importance of flexibility in adapting to new
                                                    insights and changing priorities.
                                                </p>
                                            </WayItemContent>

                                            <WayItemContent>
                                                <WayItemTitle>Outcome:</WayItemTitle>

                                                <p className='way__item-text'>
                                                    A refined technical specification aligned with
                                                    your updated goals, ensuring the project remains
                                                    on the right track for success.
                                                </p>
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
