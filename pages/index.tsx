import React from 'react';
import Image from 'next/image';

import classNames from 'classnames/bind';
import styles from '@/styles/import/index/index.module.scss';
const cx = classNames.bind(styles);

function Index() {
    return (
        <div className={cx('wrap')}>
            <header className={cx('logoWrap')}>
                <div className={cx('coupangPartners')}>
                    <span className={cx('cou')}>cou</span>
                    <span className={cx('p')}>p</span>
                    <span className={cx('a')}>a</span>
                    <span className={cx('n')}>n</span>
                    <span className={cx('g')}>g</span>
                    <span>&nbsp;</span>
                    <span className={cx('partners')}>partners</span>
                </div>
                <div className={cx('titleBox')}>
                    <span className={cx('title')}>온라인 리디렉션 생성기</span>
                </div>
            </header>
            <section className={cx('bodyWrap')}>
                <div className={cx('redirectionWrap')}>
                    <div className={cx('redirectionBox')}>
                        <input
                            type="url"
                            placeholder={'쿠팡 파트너스 링크를 입력해 주세요'}
                            className={cx('redirectionInput')}
                        />
                        <button className={cx('createRedirectionButton')}>
                            리디렉션 생성
                        </button>
                    </div>
                </div>
                <section className={cx('descriptionWrap')}>
                    <article className={cx('descriptionContainer')}>
                        <div className={cx('image')}>
                            <Image
                                src={'/images/share.svg'}
                                alt={
                                    '쿠팡 파트너스 리다이렉션 리다이렉션(Redirection)'
                                }
                                width={'100vw'}
                                height={'100vw'}
                            ></Image>
                        </div>
                        <p className={cx('title')}>리디렉션을 만드는 방법</p>
                        <span className={cx('contents')}>
                            리디렉션 링크를 만드는 방법은 간단합니다. 쿠팡
                            파트너스 링크를 복사하여 위의 입력박스에 링크를
                            붙여넣고 리디렉션 생성 버튼을 만들면 리디렉션 링크를
                            만들 수 있습니다. 이후, 원하는 부분에 리디렉션
                            소스를 붙여넣어 쿠팡 파트너스 리디렉션을 사용할 수
                            있습니다.
                        </span>
                    </article>
                    <article className={cx('descriptionContainer')}>
                        <div className={cx('image')}>
                            <Image
                                src={'/images/trend.svg'}
                                alt={'쿠팡 파트너스 블로그 저품질 문제 해결'}
                                width={'100vw'}
                                height={'100vw'}
                            ></Image>
                        </div>
                        <p className={cx('title')}>저품질 문제를 해결</p>
                        <span className={cx('contents')}>
                            기존 쿠팡파트너스 링크를 사용할 때 발생하는 블로그
                            저품질 문제를 해결하기 위해 일반 웹사이트 도메인을
                            사용하여 블로그 크롤링 봇이 링크를 크롤링 할 때
                            저품질 블로그라 판단하지 못하도록 합니다.
                        </span>
                    </article>
                    <article className={cx('descriptionContainer')}>
                        <div className={cx('image')}>
                            <Image
                                src={'/images/blog.svg'}
                                alt={
                                    '쿠팡 파트너스 리디렉션 모든 블로그에서 사용 가능'
                                }
                                width={'100vw'}
                                height={'100vw'}
                            ></Image>
                        </div>
                        <p className={cx('title')}>모든 블로그에서 사용가능</p>
                        <span className={cx('contents')}>
                            리디렉션 코드를 그대로 복사하여 사용하기 때문에
                            사용자가 어떠한 블로그를 사용하더라도 안전한 사용이
                            가능합니다.
                        </span>
                    </article>
                    <article className={cx('descriptionContainer')}>
                        <div className={cx('image')}>
                            <Image
                                src={'/images/cloud.svg'}
                                alt={'쿠팡 파트너스 클라우드 저장'}
                                width={'100vw'}
                                height={'100vw'}
                            ></Image>
                        </div>
                        <p className={cx('title')}>클라우드에 저장</p>
                        <span className={cx('contents')}>
                            사용자의 쿠팡 파트너스 링크는 클라우드에
                            저장되어지므로 사용자의 컴퓨터에서 임의에 작업을
                            시행해 성능의 무리가 없으므로 어디에서든지 사용이
                            가능합니다.
                        </span>
                    </article>
                    <article className={cx('descriptionContainer')}>
                        <div className={cx('image')}>
                            <Image
                                src={'/images/benefits.svg'}
                                alt={
                                    '쿠팡 파트너스 리다이렉션 생성기 수익을 위한 도구'
                                }
                                width={'100vw'}
                                height={'100vw'}
                            ></Image>
                        </div>
                        <p className={cx('title')}>수익을 위한 도구</p>
                        <span className={cx('contents')}>
                            온라인 리디렉션 생성기는 사용자의 수익 보장을 위해
                            제작 되어졌습니다. 사용자의 수익은 제작자의 큰 힘이
                            됩니다.
                        </span>
                    </article>
                </section>
            </section>
            <footer className={cx('footerWrap')}>
                <span>
                    © 2020 noogoonaalab — Made with for the people of the
                    coupang partners.
                </span>
            </footer>
        </div>
    );
}

export default Index;
