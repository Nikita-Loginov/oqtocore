// 'use client';
import Top from '@/components/modules/Home/Top';
import { Services, Stories, Header, Footer } from '@/components/widgets';
import Partners from '@/components/shared/Partners/Partners';
import Experience from '@/components/modules/Home/Experience';
import News from '@/components/modules/Home/News';
import Way from '@/components/modules/Home/Way';
import dynamic from 'next/dynamic';

export const metadata = {
    title: 'OQTACORE – Web & Mobile Development',
    decription:
        'OQTACORE builds APPs that have basic functionality to better work on the idea, spot specific needs within a target audience, and test the Client’s market fit.',
};

// const ServicesSection = dynamic(() => import('@/components/widgets'), {
//     loading: () => <div></div>,
//     ssr: false,
// });

export default function Home() {
    return (
        <>
            <Header />

            <main className='main'>
                <Top />

                <Partners />

                <Services />

                <Way />

                <Experience />

                <Stories />

                <News />
            </main>

            <Footer />
        </>
    );
}
