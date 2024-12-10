'use client';
import Top from '@/components/modules/Home/Top';
import { Services, Stories } from '@/components/widgets';
import Partners from '@/components/shared/Partners/Partners';
import Experience from '@/components/modules/Home/Experience';
import News from '@/components/modules/Home/News';

export default function Home() {
    return (
        <>
            <Top />

            <Partners />

            <Services />

            <Experience />

            <Stories />

            <News />
        </>
    );
}
