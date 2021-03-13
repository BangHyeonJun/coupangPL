import { SingletonRouter } from 'next/router';
import * as prodLytics from './analytics/prod';
import * as devLytics from './analytics/dev';

const isLocal = (): boolean => {
    return location.hostname === 'localhost';
};

const isDev = (): boolean => {
    return process.env.NEXT_PUBLIC_NODE_ENV !== 'production';
};

interface CustomeSingletonRouter extends SingletonRouter {
    onRouteChangeComplete?(): void;
}

const initGA = (code: string, Router: CustomeSingletonRouter): void => {
    // local이거나 development 환경일 땐 ga를 실행하지 않습니다.
    const shouldNotTrack = isLocal() || isDev();
    console.log(`shouldNotTrack : ${shouldNotTrack}`);

    // production or dev analytics
    const analytics = shouldNotTrack ? devLytics : prodLytics;

    // init
    analytics.init(code);

    // log page
    analytics.pageview();

    // previouseCallback을 저장합니다.
    const previousCallback = Router.onRouteChangeComplete;

    // Router.onRouteChangeComplete는 라우팅 주소 변경시 트래킹을 하기 위해 필요합니다.
    Router.onRouteChangeComplete = () => {
        // previouseCallback function이 정의되어 있었으면 실행시켜 줍니다.
        if (typeof previousCallback === 'function') {
            previousCallback();
        }
        // log page
        analytics.pageview();
    };
};

export default initGA;
