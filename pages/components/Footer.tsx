import React from 'react';

import classNames from 'classnames/bind';
import styles from '@/styles/import/index/Footer.module.scss';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footerWrap')}>
            <span>
                © 2020 noogoonaalab — Made with for the people of the coupang
                partners.
            </span>
        </footer>
    );
}

export default Footer;
