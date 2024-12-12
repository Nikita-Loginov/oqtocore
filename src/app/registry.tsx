'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import {createGlobalStyle} from 'styled-components';
import { Header, Footer } from '@/components/widgets';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Eina';
        src: url('/fonts/EinaRegular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Eina';
        src: url('/fonts/EinaBold.woff2') format('woff2');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Eina';
        src: url('/fonts/EinaSemiBold.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
    }

    * {
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        overflow-x: hidden;
    }

    *,
    *:before,
    *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    :focus,
    :active {
        outline: none;
    }
    a:focus,
    a:active {
        outline: none;
    }

    nav,
    footer,
    header,
    aside {
        display: block;
    }

    input,
    button,
    textarea {
        font-family: inherit;
    }

    input::-ms-clear {
        display: none;
    }
    button {
        cursor: pointer;
    }
    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }
    a,
    a:visited {
        text-decoration: none;
    }
    a:hover {
        text-decoration: none;
    }
    ul li {
        list-style: none;
    }
    img {
        vertical-align: top;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: inherit;
        font-weight: 400;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type='number'] {
        -moz-appearance: textfield;
    }

    body {
        font-family: 'Eina', sans-serif;
        overflow-x: hidden;
        background-color: #010101;
        color: #fff;
        font-size: 14px;
        line-height: 1.35;
        font-weight: 400;
    }
`;

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
    // Only create stylesheet once with lazy initial state
    // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();
        return <>{styles}</>;
    });

    if (typeof window !== 'undefined') return <>{children}</>;

    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            <GlobalStyle />

            <Header />
            {children}
            <Footer />
        </StyleSheetManager>
    );
}
