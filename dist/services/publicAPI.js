import { RestFulAPI } from './RestFulAPI';
class PublicAPI extends RestFulAPI {
    post = {
        fetch: async () => this.parseResponse('post', await this.ajax.get('post', undefined, true)),
    };
    traffic = {
        fetch: async () => this.parseResponse('traffic', await this.ajax.get('traffic2', undefined, true)),
    };
}
export const publicAPI = new PublicAPI();
