'use client';
import StyledComponentsRegistry from './registry';
// import { Header, Footer } from '@/components/widgets';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <html>
            <head lang='en'>
                <title>Oqtacore</title>
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
                <link
                    rel="preload"
                    href="/images/top/preloaderChar.png"
                    as="image"
                    type="image/webp"
                    crossOrigin="anonymous"
                />
                
                </head>
                <body>
                    <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
                </body>
            </html>
        </>
    );
}
