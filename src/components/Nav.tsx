import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import classNames from 'classnames/bind';
import styles from '@/styles/components/Nav.module.scss';
const cx = classNames.bind(styles);

interface HeaderArgs {
    isBeta: boolean;
}

function Nav({ isBeta }: HeaderArgs) {
    return (
        <nav className={cx('wrap')}>
            <div className={cx('homeImage')}>
                <Link href={'/'}>
                    <Image
                        src={'/images/nav.png'}
                        width={180}
                        height={60}
                    ></Image>
                </Link>
            </div>

            <ul>
                <li>로그인</li>
                <li>
                    <Link href={'/posts'}>블로그</Link>
                </li>
            </ul>
        </nav>
    );
}

export default React.memo(Nav);
