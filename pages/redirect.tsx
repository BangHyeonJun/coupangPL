import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { decrypt } from '../src/helpers/crypto';

import classNames from 'classnames/bind';
import styles from '@/styles/import/redirect/redirect.module.scss';
const cx = classNames.bind(styles);

function redirect() {
    const [dots, setDots] = useState('...');
    const router = useRouter();
    const { url } = router.query;

    useEffect(() => {
        setTimeout(() => {
            if (dots.length === 3) setDots('.');
            else if (dots.length === 2) setDots('...');
            else if (dots.length === 1) setDots('..');
        }, 400);
    }, [dots]);

    useEffect(() => {
        if (url) {
            const decURL = decrypt(
                url as string,
                process.env.NEXT_PUBLIC_SALT_KEY,
            );
            window.location.href = decURL as string;
        }
    }, [url]);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <script
                    data-ad-client="ca-pub-4278000043835062"
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                ></script>
            </Head>
            <div className={cx('wrap')}>
                <div className={cx('container')}>
                    <div className={cx('imageBox')}>
                        <Image
                            src={'/images/rocket.gif'}
                            alt={'온라인 쿠팡 리디렉션 생성기'}
                            width={600}
                            height={600}
                            className={cx('image')}
                        ></Image>
                    </div>
                    <div className={cx('textBox')}>
                        <span style={{ color: '#4da4e0' }}>상품</span>
                        <span>을&nbsp;가지러</span>
                        <span>&nbsp;가고</span>
                        <span>&nbsp;있는중이에요</span>
                        <span>{dots}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default redirect;
