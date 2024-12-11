'use client';
import styled from 'styled-components';

const ExperienceBox = styled.section`
    padding: 240px 0;
`;

const ExperienceInner = styled.div`
    display: flex;
    gap: 120px;
`;

const ExperienceTitle = styled.h2`
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 700;
    line-height: 117%;
`;

const ExperienceItems = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    justify-content: space-between;
`;

const ExperienceItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 306px;
`;

const ExperienceItemTitle = styled.h3`
    font-size: 35px;
    font-weight: 700;
    line-height: 1.37;
    text-transform: uppercase;
`;

const ExperienceItemText = styled.p`
    font-size: 20px;
    line-height: 1.45;
`;

export default function Experience() {
    return (
        <ExperienceBox>
            <div className='container'>
                <ExperienceInner>
                    <ExperienceTitle>Experience</ExperienceTitle>

                    <ExperienceItems>
                        <ExperienceItem className='experience__item'>
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
            </div>
        </ExperienceBox>
    );
}
