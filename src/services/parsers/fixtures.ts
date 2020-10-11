import {IFixtures} from '../../types/fixtures';
import {parseAsArray, parseAsMarket, parseAsMatch, parseAsString, safelyParse} from '../../helpers/parsing';

export function parseFixtureResponse(res: unknown): IFixtures | null {
    return {
        responseCode: safelyParse(res, 'responseCode', parseAsString, ''),
        match: safelyParse(res, 'match', parseAsMatch, null),
        betBuilderURL: safelyParse(res, 'betBuilderURL', parseAsString, ''),
        givemeodds: safelyParse(res, 'givemeodds', parseAsArray, []),
        boosts: safelyParse(res, 'boosts', parseAsArray, []),
        markets: safelyParse(res, 'markets', parseAsMarket, null)
    };
}