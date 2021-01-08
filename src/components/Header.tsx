import React from 'react';
import Link from 'next/link';

import classNames from 'classnames/bind';
import styles from '@/styles/import/index/Header.module.scss';
const cx = classNames.bind(styles);

interface HeaderArgs {
    isBeta: boolean;
}

function Header({ isBeta }: HeaderArgs) {
    return (
        <header className={cx('logoWrap')}>
            <div className={cx('blogMenuBox')}>
                <Link href="/posts">
                    <span>블로그 가기</span>
                </Link>
            </div>

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
                {isBeta && <span className={cx('beta')}>.beta</span>}
            </div>
        </header>
    );
}

export default React.memo(Header);
