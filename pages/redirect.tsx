import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { decrypt } from '../src/helpers/crypto';

import classNames from 'classnames/bind';
import styles from '@/styles/import/redirect/redirect.module.scss';
const cx = classNames.bind(styles);

function Rocket() {
    return (
        <Image
            src={'/images/rocket.gif'}
            alt={'온라인 쿠팡 리디렉션 생성기'}
            width={600}
            height={600}
            className={cx('image')}
        ></Image>
    );
}

function Redirect() {
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
        } else {
            setTimeout(() => {
                window.location.href = '/';
            }, 1000);
        }
    }, [url]);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />

                {/* 오픈 그래프 */}
                <meta
                    name="title"
                    property="og:title"
                    content="쿠팡 파트너스 | 리디렉션 생성기"
                />
                <meta
                    name="description"
                    property="og:description"
                    content="쿠팡 파트너스로 인한 개인 블로그의 저품질을 막기 위한 리디렉션 생성기 입니다. 기존의 다른 블로그를 통한 번거로운 리디렉션 단계를 최소화 하고 사용자의 수익 보장을 위해 제작되어졌으며, 어떠한 블로그라도 사용이 가능합니다."
                />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="ko_KR" />
                <meta
                    property="og:site_name"
                    content="Online Coupang Redirection Generator"
                />
                <meta
                    name="image"
                    property="og:image"
                    content="/images/opengraph.jpg"
                />
                <meta
                    name="url"
                    property="og:url"
                    content="https://cpredirection.com/"
                />

                {/* 트위터 */}
                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:title"
                    content="쿠팡 파트너스 | 리디렉션 생성기"
                />
                <meta
                    name="twitter:description"
                    content="쿠팡 파트너스로 인한 개인 블로그의 저품질을 막기 위한 리디렉션 생성기 입니다. 기존의 다른 블로그를 통한 번거로운 리디렉션 단계를 최소화 하고 사용자의 수익 보장을 위해 제작되어졌으며, 어떠한 블로그라도 사용이 가능합니다."
                />
                <meta name="twitter:image" content="/images/opengraph.jpg" />

                {/* 구글 서치 콘솔 */}
                <meta
                    name="google-site-verification"
                    content="d-xcWas9fG1pO930ekTYAPoo8WyhYAjSB1u0-vhUSqE"
                />

                {/* 애드센스 */}
                <script
                    data-ad-client="ca-pub-4278000043835062"
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                ></script>
                <title>쿠팡 파트너스 | 온라인 리디렉션 생성기</title>
            </Head>
            <div className={cx('wrap')}>
                <div className={cx('container')}>
                    <div className={cx('imageBox')}>
                        <Rocket></Rocket>
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

export default Redirect;
