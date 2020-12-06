import React from 'react';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

App;
