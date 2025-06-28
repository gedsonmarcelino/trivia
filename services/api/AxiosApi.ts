import axios from "axios";
import {ApiInterface} from "./ApiInterface";
import {BASE_URL, TIMEOUT} from "./constants";

export class AxiosApi implements ApiInterface {
  static instance: any;

  private constructor() {
    throw new Error("Constructor not implemented.");
  }

  static getInstance(): AxiosApi {
    if (!this.instance) {
      this.instance = axios.create({
        baseURL: BASE_URL,
        timeout: TIMEOUT,
      });
    }
    return this.instance;
  }

  get<T>(path:string, config = {}): Promise<T> {
    return AxiosApi.instance.get(path, config);
  }
  post(path: string, data: any, config = {}): Promise<any> {
    return AxiosApi.instance.post(path, data, config);
  }
  put(path:string,data: any, config = {}): Promise<any> {
    return AxiosApi.instance.put(path, data, config);
  }
  delete(path: string, config = {}): Promise<any> {
    return AxiosApi.instance.delete(path, config);
  }
}