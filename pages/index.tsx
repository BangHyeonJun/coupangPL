import React, { useState, useRef } from 'react';
import Head from 'next/head';
import { encrypt } from '../src/helpers/crypto';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Description from '../src/components/Description';

import classNames from 'classnames/bind';
import styles from '@/styles/import/index/index.module.scss';
const cx = classNames.bind(styles);

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
        setCPUrl(value.replace(/\s/gi, ''));
    };

    const handleClicCopy = () => {
        if (resultUrlRef.current.value) {
            resultUrlRef.current.select();
            document.execCommand('copy');
        } else {
            alert('먼저 쿠팡 파트너스 단축 URL을 입력해주세요');
        }
    };

    return (
        <>
            <div className={cx('wrap')}>
                {/* 헤드 */}
                {/* <Head>

                </Head> */}

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
                                'show',
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
