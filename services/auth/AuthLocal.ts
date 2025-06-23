import {AuthAbstract} from "./AuthAbstract";

export class AuthLocal extends AuthAbstract{

  login(username: string, password: string): Promise<any> {
    if ( this.validateLogin(username, password) ) {
      return Promise.resolve(true)
    }
    return Promise.reject(new Error("Invalid username or password"))
  }

  logout(): Promise<any> {
    return Promise.resolve(true)
  }
  
  register(username: string, password: string): Promise<any> {
    if ( this.validateRegister(username, password) ) {
      return Promise.resolve(true)
    }
    return Promise.reject(new Error("Invalid Data"))
  }
}