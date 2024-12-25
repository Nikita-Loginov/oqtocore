'use client';
import styled from 'styled-components';
import { Container } from '@/components/widgets';

const ExperienceBox = styled.section`
    // padding: clamp(5rem, 1.7954rem + 12.3552vw, 15rem) 0 clamp(7.5rem, 5.0965rem + 9.2664vw, 15rem);
    padding: 0 0 clamp(7.5rem, 5.0965rem + 9.2664vw, 15rem);

    @media (max-width: 900px) {
        padding: clamp(5rem, 1.7954rem + 12.3552vw, 15rem) 0 clamp(7.5rem, 5.0965rem + 9.2664vw, 15rem);
    }

    @media(min-width: 901px) and (min-height: 1000px) {
        margin-top: -100px;
    }
`;

const ExperienceInner = styled.div`
    display: flex;
    gap: clamp(2.5rem, 0.8977rem + 6.1776vw, 7.5rem);
    position:relative;
    z-index:10;

    @media(max-width:1223px) {
        flex-direction: column;
        gap:40px;
    }
`;

const ExperienceTitle = styled.h2`
    font-size: clamp(1.25rem, 0.8494rem + 1.5444vw, 2.5rem);
    font-weight: 700;
    line-height: 117%;
`;

const ExperienceItems = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap:  clamp(1.5rem, 1.1795rem + 1.2355vw, 2.5rem);
    justify-content: space-between;

    @media(max-width:800px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width:500px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const ExperienceItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 306px;

    @media(max-width:500px) {
        gap:8px;
        max-width: 100%;
    }
`;

const ExperienceItemTitle = styled.h3`
    font-size: clamp(1rem, 0.6194rem + 1.4672vw, 2.1875rem);;
    font-weight: 700;
    line-height: 1.37;
`;

const ExperienceItemText = styled.p`
    font-size: clamp(0.875rem, 0.7548rem + 0.4633vw, 1.25rem);
    line-height: 1.45;
`;

export default function Experience() {
    return (
        <ExperienceBox className='experience'>
            <Container>
                <ExperienceInner>
                    <ExperienceTitle>Experience</ExperienceTitle>

                    <ExperienceItems>
                        <ExperienceItem>
                            <ExperienceItemTitle>Since 2013</ExperienceItemTitle>

                            <ExperienceItemText>
                                Crafting end-to-end solutions for digital companies
                            </ExperienceItemText>
                        </ExperienceItem>

                        <ExperienceItem>
                            <ExperienceItemTitle>$20M+</ExperienceItemTitle>

                            <ExperienceItemText>Projects total budget</ExperienceItemText>
                        </ExperienceItem>

                        <ExperienceItem>
                            <ExperienceItemTitle>50+</ExperienceItemTitle>

                            <ExperienceItemText>
                                Full-scale apps developed by our team
                            </ExperienceItemText>
                        </ExperienceItem>

                        <ExperienceItem>
                            <ExperienceItemTitle>$820M</ExperienceItemTitle>

                            <ExperienceItemText>Projects approximate value</ExperienceItemText>
                        </ExperienceItem>
                    </ExperienceItems>
                </ExperienceInner>
            </Container>
        </ExperienceBox>
    );
}
