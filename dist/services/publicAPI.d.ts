import { RestFulAPI } from './RestFulAPI';
import { IPost } from '../types/IPost';
import { ITraffic } from '../types/ITraffic';
declare class PublicAPI extends RestFulAPI {
    post: {
        fetch: () => Promise<{
            status: string;
            message?: string | undefined;
            data?: IPost[] | undefined;
        }>;
    };
    traffic: {
        fetch: () => Promise<{
            status: string;
            message?: string | undefined;
            data?: ITraffic | undefined;
        }>;
    };
}
export declare const publicAPI: PublicAPI;
export {};
