import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

declare global {
    interface Window {
        dataLayer: any[];
    }
}

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    componentDidMount() {
        if (process.env.NEXT_PUBLIC_NODE_ENV === 'production') {
            window.dataLayer = window.dataLayer || [];

            // @ts-ignore
            function gtag() {
                // eslint-disable-next-line prefer-rest-params
                // @ts-ignore
                // eslint-disable-next-line prefer-rest-params
                window.dataLayer.push(arguments);
            }

            // @ts-ignore
            gtag('js', new Date());

            // @ts-ignore
            gtag('config', `${process.env.NEXT_PUBLIC_GA_ID}`, {
                page_location: window.location.href,
                page_path: window.location.pathname,
                page_title: window.document.title,
            });
        }
    }

    render() {
        return (
            <Html>
                <Head></Head>
                <body>
                    <Main />
                    <NextScript />
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                    />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
