// development 환경일 땐 logging만 합니다.
import debug from 'debug';

const log = debug('analytics');

export function init(code: string): void {
    log(`Analytics init triggered for ${code}`);
}

export function pageview(): void {
    log(`Pageview triggered for ${window.location.pathname}`);
}

export function event(category = '', action = ''): void {
    log(`Event for category ${category} and action ${action} triggered`);
}

export function exception(description = '', fatal = false): void {
    log(
        `${
            fatal ? 'Fatal exception' : 'Exception'
        } with description ${description}`,
    );
}
