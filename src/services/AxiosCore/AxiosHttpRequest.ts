import axios from './Axios';
import mockMapping from '../../constants/MockMappingConstants';

export default class AxiosHttpRequest {
  private method?: any;
  private jsonBody?: any;
  private url?: any;
  private mock?: boolean;

  constructor(url: string, jsonBody: any, mock = false) {
    this.url = url;
    this.jsonBody = jsonBody;
    this.mock = mock;
  }

  static get(url: string, jsonBody: any, mock = false) {
    const request = new AxiosHttpRequest(url, jsonBody, mock);
    return request.getRequest();
  }

  static post(url: string, jsonBody: any, mock = false) {
    const request = new AxiosHttpRequest(url, jsonBody, mock);
    return request.postRequest();
  }

  getRequest = async () => {
    if (this.mock) {
      const res = { data: mockMapping[this.url] };
      return res;
    } else {
      try {
        const response: any = await axios.get(this.url);
        return response;
      } catch (error) {
        return error;
      }
    }
  };

  postRequest = async () => {
    if (this.mock) {
      const res = { data: mockMapping[this.url] };
      return res;
    } else {
      try {
        const response: any = await axios.post(this.url, this.jsonBody);
        return response;
      } catch (error) {
        return error;
      }
    }
  };
}
