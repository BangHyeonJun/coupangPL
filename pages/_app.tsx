import React from 'react';
import { AppProps } from 'next/app';
// import initGA from '../src/utils/ga/index';
// import Router from 'next/router';

// 글로벌 스타일
import '@/styles/global.scss';

function App({ Component, pageProps }: AppProps) {
    // useEffect(() => {
    //     initGA(process.env.NEXT_PUBLIC_GA_ID, Router);
    //
    //     return () => {
    //         initGA(process.env.NEXT_PUBLIC_GA_ID, Router);
    //     };
    // });

    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default App;
