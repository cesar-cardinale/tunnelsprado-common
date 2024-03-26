import { RestFulAPI } from './RestFulAPI';
import { IPost } from '../types/IPost';
import { ITraffic } from '../types/ITraffic';

class PublicAPI extends RestFulAPI {
  public post = {
    fetch: async () => this.parseResponse<IPost[]>('post', await this.ajax.get('post', undefined, true)),
  };

  public traffic = {
    fetch: async () => this.parseResponse<ITraffic>('traffic', await this.ajax.get('traffic2', undefined, true)),
  };
}

export const publicAPI = new PublicAPI();
