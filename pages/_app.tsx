import React from 'react';
import { AppProps } from 'next/app';

// 글로벌 스타일
import '@/styles/global.scss';

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default App;
