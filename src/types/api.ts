export interface IFetchOptions extends RequestInit {
    query?: any;
    timeout?: number;
    body?: any;
}

export type ServiceMethodTransform<TIn, TOut> = (response: IAPIResponse<TIn>) => TOut;

export interface IServiceMethodConfig<TIn, TOut> extends RequestInit {
    options?: IFetchOptions;
    transform: ServiceMethodTransform<TIn, TOut>;
    url: string;
}

export interface IAPIResponse<P> {
    responsePayload: P;
}
