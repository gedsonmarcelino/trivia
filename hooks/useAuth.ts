import {AuthAbstract} from "../services/auth/AuthAbstract"
import {AuthLocal} from "../services/auth/AuthLocal"

export const useAuth = ():AuthAbstract => {
  return new AuthLocal()
}