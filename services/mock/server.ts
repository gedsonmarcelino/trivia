import {createServer} from "miragejs";
import {CategoriesMock} from "./categories";
import {QuestionsMock} from "./questions";



console.log('Creating server :>>', )
createServer({
  routes() {
    this.urlPrefix = 'http://localhost:3000';
    this.namespace = "api"

    this.get("/categories", () => CategoriesMock)
    this.get("/questions", () => QuestionsMock)
  },
})