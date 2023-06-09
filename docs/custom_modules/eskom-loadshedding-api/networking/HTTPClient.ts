import axios, { AxiosResponse } from 'axios';

export default class HTTPClient {
    protected static BASE_URL = 'https://loadshedding.eskom.co.za/LoadShedding';

    protected static get(path: string, addTime: boolean = true): Promise<AxiosResponse<any>> {
        let uri = this.BASE_URL + path;

        if (addTime) {
            uri += (path.indexOf('?') > -1 ? '&' : '?') + '_=' + new Date().getTime();
        }

        return axios.get(uri);
    }
}
