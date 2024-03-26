import axios from 'axios';

export abstract class RestFulAPI {
  protected ajax = {
    fetch: async (url: string, method: string, params?: object, noBearer?: boolean) => {
      if (!noBearer) {
        axios.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
      }
      return axios(`/api/v2/${url}`, { method, params });
    },
    get: async (url: string, params?: object, noBearer?: boolean) => {
      const response = await this.ajax.fetch(url, 'GET', params, noBearer);
      return response.data;
    },
    delete: async (url: string, noBearer?: boolean) => {
      const response = await this.ajax.fetch(url, 'DELETE', undefined, noBearer);
      return response.data;
    },
    post: async (url: string, params?: object, noBearer?: boolean) => {
      if (!noBearer) {
        axios.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
      }
      const response = await axios.post(`/api/v2/${url}`, { ...params });
      return response.data;
    },
    put: async (url: string, params?: object, noBearer?: boolean) => {
      const response = await this.ajax.fetch(url, 'PUT', params, noBearer);
      return response.data;
    }
  }

  private padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  private format(date: Date) {
    return (
      [date.getFullYear(), this.padTo2Digits(date.getMonth() + 1), this.padTo2Digits(date.getDate())].join('-') +
      ' ' +
      [
        this.padTo2Digits(date.getHours()),
        this.padTo2Digits(date.getMinutes()),
        this.padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }

  protected parseResponse = <T>(param: string, response: any) => {
    let parsed: {
      status: string;
      message?: string;
      data?: T;
    } = {
      status: response.status,
      message: response.message,
    };
    if (response && response[param]) {
      parsed.data = response[param] as T;
    }
    return parsed;
  };
}
