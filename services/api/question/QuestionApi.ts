import {shuffle} from "@/utils/array";
import {AxiosApi} from "../AxiosApi";
import {QuestionModel} from "./QuestionModel";

export class QuestionApi {
  static Api = AxiosApi.getInstance()

  static adapter = (data: QuestionModel[]) => {
    return data.map((item) => ({
      ...item,
      answers: shuffle([...item.incorrect_answers, item.correct_answer])
    }))
  }

  static getBy(category: string) : Promise<QuestionModel[]> {
    return this.Api.get('/api/questions?category='+category)
      .then(res => this.adapter(res.data))
      .catch(err => console.log(err))
  }
}