import { AxiosResponse } from 'axios';
export default class HTTPClient {
    protected static BASE_URL: string;
    protected static get(path: string, addTime?: boolean): Promise<AxiosResponse<any>>;
}
