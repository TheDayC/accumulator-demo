import { IAPIResponse, ServiceMethodTransform} from '../types/api';

export function safelyTransform<TIn, TOut>(res: IAPIResponse<TIn | void>, transform: ServiceMethodTransform<TIn | void, TOut>): TOut | never | undefined {
    try {
        return transform(res);
    } catch (error) {
        console.error(error);
    }
}