export interface ApiInterface {
  get(path: string, config?: any): Promise<any>;
  post(path: string, data?: any, config?: any): Promise<any>;
  put(path: string, data?: any, config?: any): Promise<any>;
  delete(path: string, config?: any): Promise<any>;
}