'use client';
import styled from 'styled-components';
import LinkUniq from '@/components/controls/LinkUniq/LinkUniq';

const TopBox = styled.section`
    padding: 210px 0 250px;
`;

const TopInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;
    align-items: flex-start;
`;

const TopContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 1084px;
`;

const TopTitle = styled.h1`
    font-size: 90px;
    font-weight: 400;
    line-height: 1.1;
`;

const TopText = styled.p`
    font-size: 20px;
    font-weight: 600;
    line-height: 1.45;
`;

export default function Top() {
    return (
        <TopBox>
            <div className='container'>
                <TopInner>
                    <TopContent>
                        <TopTitle>Web3 Development Powerhouse & Marketing Solutionhub</TopTitle>

                        <TopText>Let’s build something beyond ordinary together</TopText>
                    </TopContent>

                    <LinkUniq iconName='arrow-down' linkText='discover more'></LinkUniq>
                </TopInner>
            </div>
        </TopBox>
    );
}
