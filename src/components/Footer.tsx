import React from 'react';

import classNames from 'classnames/bind';
import styles from '@/styles/components/Footer.module.scss';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footerWrap')}>
            <span>
                © 2021 자몽아이들 — Made with for the people of the coupang
                partners.
            </span>
        </footer>
    );
}

export default React.memo(Footer);
