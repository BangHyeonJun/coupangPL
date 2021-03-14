import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { encrypt } from '../src/helpers/crypto';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Nav from '../src/components/Nav';
import Description from '../src/components/Description';

import classNames from 'classnames/bind';
import styles from '@/styles/import/index/index.module.scss';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

declare global {
    interface Window {
        gtag(config: string, id: string, attr): void;
    }
}

function Index() {
    const [CPUrl, setCPUrl] = useState('');
    const [redirectionURL, setRedirectionURL] = useState('');
    const resultUrlRef: React.LegacyRef<HTMLInputElement> = useRef(null);

    const handleClickRedirection = () => {
        const rule = /https:\/\/coupa.ng\/([A-Za-z0-9]+)/;

        if (rule.test(CPUrl)) {
            const url = encrypt(CPUrl, process.env.NEXT_PUBLIC_SALT_KEY);
            const encodeURL = encodeURIComponent(url);
            const resultURL = `${process.env.NEXT_PUBLIC_HOST}/redirect?url=${encodeURL}`;
            setRedirectionURL(resultURL);
        } else {
            alert('쿠팡 파트너스 단축 URL만 생성 가능합니다.');
        }
    };

    const handleKeyPressRedirection = (
        e: React.KeyboardEvent<HTMLInputElement>,
    ) => {
        if (e.key === 'Enter') {
            handleClickRedirection();
        }
    };

    const handleChangeRedirection = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const value: string = e.target.value || '';

        if (value !== CPUrl && redirectionURL.length !== 0) {
            setRedirectionURL('');
        }
        setCPUrl(value.replace(/\s/gi, ''));
    };

    const handleClicCopy = () => {
        if (resultUrlRef.current.value) {
            resultUrlRef.current.select();
            document.execCommand('copy');
            toast.info('🚀 링크가 복사되었습니다!!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            alert('먼저 쿠팡 파트너스 단축 URL을 입력해주세요');
        }
    };

    return (
        <>
            <div className={cx('wrap')}>
                {/* 헤드 */}
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
                    <meta
                        name="twitter:image"
                        content="/images/opengraph.jpg"
                    />

                    {/* 구글 서치 콘솔 */}
                    {/* <meta
                        name="google-site-verification"
                        content="d-xcWas9fG1pO930ekTYAPoo8WyhYAjSB1u0-vhUSqE"
                    /> */}

                    {/* 애드센스 */}
                    {/* <script
                        data-ad-client="ca-pub-4278000043835062"
                        async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                    ></script> */}
                    <title>쿠팡 파트너스 | 온라인 리디렉션 생성기</title>
                </Head>

                {/* 나브바 */}
                {/* <Nav></Nav> */}

                {/* 헤더 */}
                <Header isBeta={true}></Header>

                {/* 바디 */}
                <section className={cx('bodyWrap')}>
                    <div className={cx('redirectionWrap')}>
                        <div className={cx('redirectionBox')}>
                            <input
                                type={'url'}
                                name={'redirection'}
                                placeholder={
                                    '쿠팡 파트너스 단축URL을 입력해 주세요'
                                }
                                className={cx('redirectionInput')}
                                value={CPUrl}
                                onChange={handleChangeRedirection}
                                onKeyPress={handleKeyPressRedirection}
                            />
                            <button
                                className={cx('button', 'create')}
                                onClick={handleClickRedirection}
                            >
                                리디렉션 생성
                            </button>
                        </div>
                        <div
                            className={cx(
                                'redirectionBox',
                                'redirectionResultBox',
                                { show: redirectionURL.length !== 0 },
                            )}
                        >
                            <input
                                type={'url'}
                                ref={resultUrlRef}
                                name={'redirection'}
                                placeholder={''}
                                className={cx('redirectionInput')}
                                value={redirectionURL}
                                onChange={handleChangeRedirection}
                                onClick={handleClicCopy}
                                readOnly={true}
                            />
                            <button
                                className={cx('button', 'copy')}
                                onClick={handleClicCopy}
                            >
                                복사
                            </button>
                        </div>
                    </div>

                    {/* 디스크립션 */}
                    <section className={cx('descriptionWrap')}>
                        <Description></Description>
                    </section>
                </section>

                {/* 푸터 */}
                <Footer></Footer>
                <ToastContainer />
            </div>
            {/* 로그인 */}
            {/* <div className={cx('bg')}>
                <div className={cx('wrap')}>
                    <div className={cx('loginImg')}>
                        <Image
                            src={'/images/login.gif'}
                            alt={'쿠팡 파트너스 리다이렉션 생성기 로그인'}
                            width={'100px'}
                            height={'100px'}
                        ></Image>
                    </div>
                    <div className={cx('titleBox')}>
                        <p className={cx('title')}>로그인</p>
                        <span className={cx('subTitle')}>
                            더 많은 수익을 위해 로그인을 해주세요
                        </span>
                    </div>
                    <div className={cx('loginBox')}>
                        <button className={cx('loginBtn')}>로그인</button>
                    </div>
                    <div>
                        <span>아직 회원이 아니신가요?</span>{' '}
                        <a href={'#'}>회원가입</a>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default Index;
