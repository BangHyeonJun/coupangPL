import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Description from './components/Description';

import classNames from 'classnames/bind';
import styles from '@/styles/import/index/index.module.scss';
const cx = classNames.bind(styles);

function Index() {
    const [red, setRed] = useState('');
    return (
        <>
            <div className={cx('wrap')}>
                {/* 헤더 */}
                <Header isBeta={true}></Header>

                {/* 바디 */}
                <section className={cx('bodyWrap')}>
                    <div className={cx('redirectionWrap')}>
                        <div className={cx('redirectionBox')}>
                            <textarea
                                placeholder={
                                    '쿠팡 파트너스 단축URL 혹은 일반태그, 블로그용 태그를 입력해 주세요'
                                }
                                className={cx('redirectionInput')}
                            />
                            <button className={cx('createRedirectionButton')}>
                                리디렉션
                                <br />
                                생성
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
