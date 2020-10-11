export interface IFetchOptions extends RequestInit {
    query?: any;
    timeout?: number;
    body?: any;
}

export interface IBaseResponse {
    success: boolean;
    message?: string;
    errorCode?: number;
}

export interface IAPIResponse<P> extends IBaseResponse {
    responsePayload: P;
}
