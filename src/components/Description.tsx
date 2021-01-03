import React from 'react';
import Image from 'next/image';

import classNames from 'classnames/bind';
import styles from '@/styles/import/index/Description.module.scss';
const cx = classNames.bind(styles);

function Description() {
    const descriptions = [
        {
            id: 1,
            image: {
                src: '/images/share.svg',
                alt: '쿠팡 파트너스 리다이렉션 리다이렉션(Redirection)',
            },
            title: '리디렉션을 만드는 방법',
            contents: `리디렉션 링크를 만드는 방법은 간단합니다. 쿠팡 파트너스 단축 URL 링크를 복사하여 상단 입력창에 링크를 붙여넣고 리디렉션 생성 버튼을 클릭하면 리디렉션 링크를 만들 수 있습니다. 이후, 원하는 부분에 리디렉션 소스를 붙여넣어 쿠팡 파트너스 리디렉션을 사용할 수 있습니다.`,
        },
        {
            id: 2,
            image: {
                src: '/images/trend.svg',
                alt: '쿠팡 파트너스 블로그 저품질 문제 해결',
            },
            title: '저품질 문제 해결',
            contents: `기존 쿠팡파트너스 링크를 사용할 때 발생하는 블로그 저품질 문제를 해결하기 위해 일반 웹사이트 도메인을 사용하여 블로그 크롤링 봇이 링크를 크롤링 할 때 저품질 블로그라 판단하지 못하도록 합니다.`,
        },
        {
            id: 3,
            image: {
                src: '/images/blog.svg',
                alt: '모든 블로그 사용가능',
            },
            title: '저품질 문제 해결',
            contents: `리디렉션 코드를 그대로 복사하여 사용하기 때문에 사용자가 어떠한 블로그를 사용하더라도 안전한 사용이 가능합니다.`,
        },
        {
            id: 4,
            image: {
                src: '/images/cloud.svg',
                alt: '쿠팡 파트너스 클라우드 저장',
            },
            title: '클라우드 저장(예정)',
            contents: `사용자의 쿠팡 파트너스 링크는 클라우드에 저장되어지므로 링크의 유실을 방지할 수 있으며 사용자의 컴퓨터에서 임의에 작업을 시행해 성능의 무리가 없이 사용이 가능합니다.`,
        },
        {
            id: 5,
            image: {
                src: '/images/benefits.svg',
                alt: '쿠팡 파트너스 리다이렉션 생성기 수익을 위한 도구',
            },
            title: '수익을 위한 도구',
            contents: `온라인 리디렉션 생성기는 사용자의 수익 보장을 위해 제작되어졌습니다. 사용자의 수익이 곧 개발자의 수익입니다.`,
        },
    ];

    return (
        <>
            {descriptions.map(description => (
                <article
                    key={description.id}
                    className={cx('descriptionContainer')}
                >
                    <div className={cx('image')}>
                        <Image
                            src={description.image.src}
                            alt={description.image.alt}
                            width={'100vw'}
                            height={'100vw'}
                        ></Image>
                    </div>
                    <p className={cx('title')}>{description.title}</p>
                    <span className={cx('contents')}>
                        {description.contents}
                    </span>
                </article>
            ))}
        </>
    );
}

export default React.memo(Description);
