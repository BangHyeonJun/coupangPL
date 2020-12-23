import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

function Document() {
    return (
        <html>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                // 여기에 폰트 임포팅 // 여기에 공통 CSS
                e.g.reset-css/common.css
            </Head>
            <body>
                <div id="root">
                    <Main />
                    <NextScript />
                </div>
            </body>
        </html>
    );
}

export default Document;
