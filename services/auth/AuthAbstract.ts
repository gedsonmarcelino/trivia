export abstract class AuthAbstract {

  protected validateLogin(username:string, password:string):boolean {
    return username.toLocaleLowerCase() === 'admin' && password.toLocaleLowerCase() === 'admin';
  }

  protected validateRegister(username:string, password:string):boolean {
    return (username !== '' && password !== '')
  }

  abstract login(username:string, password:string):Promise<any>;
  abstract logout(): Promise<any>;
  abstract register(username:string, password:string):Promise<any>;
}