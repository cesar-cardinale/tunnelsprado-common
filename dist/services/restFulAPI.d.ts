export declare abstract class RestFulAPI {
    protected ajax: {
        fetch: (url: string, method: string, params?: object, noBearer?: boolean) => Promise<import("axios").AxiosResponse<any, any>>;
        get: (url: string, params?: object, noBearer?: boolean) => Promise<any>;
        delete: (url: string, noBearer?: boolean) => Promise<any>;
        post: (url: string, params?: object, noBearer?: boolean) => Promise<any>;
        put: (url: string, params?: object, noBearer?: boolean) => Promise<any>;
    };
    private padTo2Digits;
    private format;
    protected parseResponse: <T>(param: string, response: any) => {
        status: string;
        message?: string | undefined;
        data?: T | undefined;
    };
}
