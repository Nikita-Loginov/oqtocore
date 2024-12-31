"use client";
import StyledComponentsRegistry from "./registry";
// import { Header, Footer } from '@/components/widgets';

// export const metadata = {
//     title: 'OQTACORE – Web & Mobile Development',
//     decription:
//         'OQTACORE builds APPs that have basic functionality to better work on the idea, spot specific needs within a target audience, and test the Client’s market fit.',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <title>Oqtacore</title>
          <meta
            name="description"
            content="OQTACORE builds APPs that have basic functionality to better work on the idea, spot specific needs within a target audience, and test the Client’s market fit."
          />

          <link
            rel="preload"
            href="/fonts/Eina04-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Eina04-SemiBold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Eina04-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <style>
            {`
            @font-face {
                font-family: 'Eina';
                src: url('/fonts/Eina04-Regular.woff2') format('woff2');
                font-weight: 400;
                font-style: normal;
            }

            @font-face {
                font-family: 'Eina';
                src: url('/fonts/Eina04-SemiBold.woff2') format('woff2');
                font-weight: 600;
                font-style: normal;
            }

            @font-face {
                font-family: 'Eina';
                src: url('/fonts/Eina04-Bold.woff2') format('woff2');
                font-weight: 700;
                font-style: normal;
            }`}
          </style>
        </head>
        <body>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    </>
  );
}
