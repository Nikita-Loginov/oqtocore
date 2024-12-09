'use client';
import styled, { createGlobalStyle } from 'styled-components';

import { Header, Footer } from '@/components/widgets';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Eina';
        src: url('/fonts/EinaRegular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    * {
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
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
    }

    .container {
        max-width: 1710px;
        padding: 0 15px;
        margin: 0 auto;
    }
`;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <GlobalStyle />
            <html
                lang='en'
                suppressHydrationWarning
            >
                <body>
                    <Header />

                    <main>
                        {children}
                    </main>

                    <Footer />
                </body>
            </html>
        </>
    );
}
