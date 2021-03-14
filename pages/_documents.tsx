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

    render() {
        return (
            <Html>
                <Head>
                    <meta
                        name="google-site-verification"
                        content="d-xcWas9fG1pO930ekTYAPoo8WyhYAjSB1u0-vhUSqE"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
