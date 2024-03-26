import axios from 'axios';
export class RestFulAPI {
    ajax = {
        fetch: async (url, method, params, noBearer) => {
            if (!noBearer) {
                axios.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
            }
            return axios(`/api/v2/${url}`, { method, params });
        },
        get: async (url, params, noBearer) => {
            const response = await this.ajax.fetch(url, 'GET', params, noBearer);
            return response.data;
        },
        delete: async (url, noBearer) => {
            const response = await this.ajax.fetch(url, 'DELETE', undefined, noBearer);
            return response.data;
        },
        post: async (url, params, noBearer) => {
            if (!noBearer) {
                axios.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
            }
            const response = await axios.post(`/api/v2/${url}`, { ...params });
            return response.data;
        },
        put: async (url, params, noBearer) => {
            const response = await this.ajax.fetch(url, 'PUT', params, noBearer);
            return response.data;
        }
    };
    padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }
    format(date) {
        return ([date.getFullYear(), this.padTo2Digits(date.getMonth() + 1), this.padTo2Digits(date.getDate())].join('-') +
            ' ' +
            [
                this.padTo2Digits(date.getHours()),
                this.padTo2Digits(date.getMinutes()),
                this.padTo2Digits(date.getSeconds()),
            ].join(':'));
    }
    parseResponse = (param, response) => {
        let parsed = {
            status: response.status,
            message: response.message,
        };
        if (response && response[param]) {
            parsed.data = response[param];
        }
        return parsed;
    };
}
