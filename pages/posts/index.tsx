import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Footer from '../../src/components/Footer';
import { getSortedPostsData } from '../../src/utils/markdown';

import classNames from 'classnames/bind';
import styles from '@/styles/import/posts/posts.module.scss';
import Image from 'next/image';
const cx = classNames.bind(styles);

function Posts({ allPostsData }: { allPostsData: any }) {
    return (
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

            <div className={cx('titleBox')}>
                <h2>Blog</h2>
            </div>

            <section className={cx('container')}>
                {allPostsData.map(({ id, date, title, thumnail }) => (
                    <Link key={id} href={`posts/${id}`}>
                        <article className={cx('box')} key={id}>
                            <div className={cx('thumnailBox')}>
                                <Image
                                    src={thumnail}
                                    width={200}
                                    height={160}
                                    alt={title}
                                ></Image>
                            </div>
                            <div className={cx('titleBox2')}>
                                <div>{date}</div>
                                <div>{title}</div>
                            </div>
                        </article>
                    </Link>
                ))}
            </section>

            {/* 푸터 */}
            <Footer></Footer>
        </div>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default Posts;
