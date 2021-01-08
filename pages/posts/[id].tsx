import React from 'react';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import Footer from '../../src/components/Footer';
import { getAllPostIds, getPost } from '../../src/utils/markdown';
import AdSense from "react-adsense"

import classNames from 'classnames/bind';
import styles from '@/styles/import/posts/post.module.scss';
const cx = classNames.bind(styles);

function Post(props) {
    const {
        id,
        content,
        title,
        date,
        status,
        thumnail
    }: {
        id: any;
        content: any;
        title: any;
        date: any;
        status: any;
    } = props;

    // 에러처리
    if (status !== 'success') return <div>알수없는 포스트 입니다.</div>;

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
                    content={`쿠팡 파트너스 리디렉션 생성기 | ${title}`}
                />
                <meta
                    name="description"
                    property="og:description"
                    content={`${content}`}
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
                    content={`${thumnail}`}
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
                    content={`쿠팡 파트너스 리디렉션 생성기 | ${title}`}
                />
                <meta
                    name="twitter:description"
                    content={`${content}`}
                />
                <meta name="twitter:image" content={`${thumnail}`} />

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
                <title>{`쿠팡 파트너스 리디렉션 생성기 | ${title}`}</title>
            </Head>

            <div className={cx('container')}>
                <header className={cx('titleContainer')}>
                    <span className={cx('title')}>{title}</span>
                    <span className={cx('date')}>{date}</span>
                </header>
                <div className={cx('contentContainer')}>
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
                <div>
                    <AdSense.Google
                        client='ca-pub-4278000043835062'
                        slot='7806394673'
                        style={{ display: 'block' }}
                        format='auto'
                        responsive='true'
                        layoutKey='-gw-1+2a-9x+5c'
                    />
                </div>
            </div>

            {/* 푸터 */}
            <Footer></Footer>
        </div>
    );
}

export async function getStaticProps({ params }) {
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    const { id } = params;
    const post = getPost(id);

    return {
        props: post,
    };
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    return {
        paths: getAllPostIds(),
        fallback: false,
    };
}

export default Post;
