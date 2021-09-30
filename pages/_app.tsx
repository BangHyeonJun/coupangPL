import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import initGA from '../src/utils/ga/index';
import Router from 'next/router';

// 글로벌 스타일
import '@/styles/global.scss';

function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        initGA(process.env.NEXT_PUBLIC_GA_ID, Router);

        return () => {
            initGA(process.env.NEXT_PUBLIC_GA_ID, Router);
        };
    });

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems:"center", justifyContent: "center"}}>
                <h1>쿠팡 파트너스 리디렉션 생성기를 이용해 주셔서 감사합니다.</h1>
                <h2>더 좋은 서비스로 찾아뵙겠습니다.</h2>
            </div>

            {/* 서비스 종료로 인한 주석 */}
            {/*<Component {...pageProps} />*/}
        </>
    );
}

export default App;
