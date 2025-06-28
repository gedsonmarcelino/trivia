import {AxiosApi} from "../AxiosApi";
import {CategoryModel} from "./CategoryModel";

export class CategoryApi {
  static Api = AxiosApi.getInstance()

  static getAll() : Promise<CategoryModel[]> {
    return this.Api.get('/api/categories')
      .then(res => res.data)
      .catch(err => console.log(err))
  }
}