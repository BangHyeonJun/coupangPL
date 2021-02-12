import ReactGA from 'react-ga';

// server / client 구분을 위한 변수
const IS_BROWSER = typeof window !== 'undefined';

interface CustomeWindow extends Window {
    GA_INITIALIZED?: boolean;
}

export function init(code: string): void {
    // client-side에서만, GA가 initialize되지 않았을 때만 init
    if (IS_BROWSER && !(window as CustomeWindow).GA_INITIALIZED && code) {
        ReactGA.initialize(code);
    }
}

export function pageview(): void {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

export function event(category = '', action = ''): void {
    if (category && action) {
        ReactGA.event({ category, action });
    }
}

export function exception(description = '', fatal = false): void {
    if (description) {
        ReactGA.exception({ description, fatal });
    }
}
