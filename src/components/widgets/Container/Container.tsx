'use client';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ContainerBox = styled.div`
    max-width: 1710px;
    padding: 0 clamp(0.9375rem, -10.4954rem + 20.3252vw, 2.5rem);
    margin: 0 auto;
    width:100%;

`;

interface ContainerProps {
    children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ( { children } ) => {
    return <ContainerBox className='container'>{children}</ContainerBox>;
};
