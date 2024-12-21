'use client';
import React from 'react';
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer';
import Top from '@/components/modules/Home/Top';
import { Services, Stories, Header, Footer } from '@/components/widgets';
import Partners from '@/components/shared/Partners/Partners';
import Experience from '@/components/modules/Home/Experience';
import News from '@/components/modules/Home/News';
import Way from '@/components/modules/Home/Way';
// import dynamic from 'next/dynamic';

// export const metadata = {
//     title: 'OQTACORE – Web & Mobile Development',
//     decription:
//         'OQTACORE builds APPs that have basic functionality to better work on the idea, spot specific needs within a target audience, and test the Client’s market fit.',
// };

const WaySection = dynamic(
    () => import('@/components/modules/Home/Way'), {
    ssr: false,
});

export default function Home() {
    const { ref, inView } = useInView({
        rootMargin: '100px 0px 0px 0px',
        triggerOnce: false,
    });

    React.useEffect(() => {
        const header = document.querySelector('.header');
        if (inView) {
            (header as HTMLElement).style.backgroundColor = '#010101';
        } else {
            (header as HTMLElement).style.backgroundColor = 'transparent';
        }
    }, [inView]);


    return (
        <>
            <Header />

            <main className='main'>
                <Top />

                <Partners ref={ref} />

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
