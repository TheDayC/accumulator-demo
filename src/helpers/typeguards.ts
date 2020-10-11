import { ITypeGuard } from '../types/parsers';
import { IMatch, IMarket } from '../types/fixtures';

export function isString(candidate: unknown): candidate is string {
    return typeof candidate === 'string';
}

export function isNumber(candidate: unknown): candidate is number {
    return typeof candidate === 'number';
}

export function isBoolean(candidate: unknown): candidate is boolean {
    return typeof candidate === 'boolean';
}

export function isArray(candidate: unknown): candidate is unknown[] {
    return Array.isArray(candidate);
}

export function isNotUndefined<T>(candidate: T | undefined): candidate is T {
    return candidate !== undefined;
}

export function isNotNullOrUndefined<T>(candidate: unknown): candidate is T {
    return candidate !== undefined && candidate !== null;
}

export function isEnumMember<E>(enumToTest: E): ITypeGuard<E[keyof E]> {
    return (candidate: unknown): candidate is E[keyof E] => {
        const members = Object.values(enumToTest);

        return members.includes(candidate);
    };
}

export function isMatch(candidate: unknown): candidate is IMatch {
    // eslint-disable-next-line @typescript-eslint/ban-types
    if (isNotNullOrUndefined<object>(candidate) && typeof candidate === 'object'){
        return 'last5' in candidate;
    } else {
        return false;
    }
}

export function isMarket(candidate: unknown): candidate is IMarket[] {
    return Array.isArray(candidate) && typeof candidate[0] === 'object' && 'market' in candidate[0];
}
