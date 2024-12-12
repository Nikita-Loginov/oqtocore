'use client';
import StyledComponentsRegistry from './registry';
// import { Header, Footer } from '@/components/widgets';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <html>
                <body>
                    <StyledComponentsRegistry>{children}</StyledComponentsRegistry>

                </body>
            </html>
        </>
    );
}
