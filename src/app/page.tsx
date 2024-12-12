// 'use client';
import Top from '@/components/modules/Home/Top';
import { Services, Stories } from '@/components/widgets';
import Partners from '@/components/shared/Partners/Partners';
import Experience from '@/components/modules/Home/Experience';
import News from '@/components/modules/Home/News';
import Way from '@/components/modules/Home/Way';

export const metadata = {
    title: 'OQTACORE – Web & Mobile Development',
    decription: 'OQTACORE builds APPs that have basic functionality to better work on the idea, spot specific needs within a target audience, and test the Client’s market fit.'
    
}

export default function Home() {
    return (
        <>
            <Top />

            <Partners />

            <Services />

            <Way />

            <Experience />

            <Stories />

            <News />
        </>
    );
}
