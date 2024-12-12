'use client';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ContainerBox = styled.div`
    max-width: 1710px;
    padding: 0 40px;
    margin: 0 auto;
    width:100%;

    @media(max-width:1023px) {
        padding: 0 15px;
    }
`;

interface ContainerProps {
    children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ( { children } ) => {
    return <ContainerBox>{children}</ContainerBox>;
};
