import {getStoreInstance} from '../helpers/store';
import {apiFetch} from '../helpers/fetch';
import {IServiceMethodConfig} from '../types/api';
import { IFixtures } from '../types/fixtures';
import { storeFixture } from '../store/actions/fixtures';
import { parseFixtureResponse } from './parsers/fixtures';
import { safelyTransform } from '../helpers/transform';

// Fetch configs
const GET_FIXTURES_CONFIG: IServiceMethodConfig<unknown, IFixtures | null> = {
    transform: parseFixtureResponse,
    url: 'https://odds-api.checkd-dev.com/dev/smartacca/fixtures/88f0tj3y6neqz20nsrameokyc/preview'
};

export function getFixtures(): Promise<void> {
    const store = getStoreInstance();
    const { url, transform } = GET_FIXTURES_CONFIG;
    const options = {
        body: {},
        method: 'GET'
    };

    return apiFetch<IFixtures>(url, options).then(
        res => {
            if (res) {
                const fixtures = safelyTransform(res, transform);

                if (fixtures) {
                    store.dispatch(storeFixture(fixtures));
                }
            }
        },
        error => console.warn(error.message)
    );
}