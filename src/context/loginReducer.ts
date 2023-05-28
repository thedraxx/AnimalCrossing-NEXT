import { IUser } from '@/interface/iUser';
import { LoginState } from '.';

type LoginActionType = 
  | {type: '[Auth] - Login', payload: IUser}
  | {type: '[Auth] - Register'}

export const LoginReducer = (state:LoginState, action:LoginActionType): LoginState => {
    switch (action.type) {
        case '[Auth] - Login':

           return {
                ...state,
                infoUser: [action.payload],
                isLoggin: true
            }


        case '[Auth] - Register':

            return {
                 ...state,
                 isRegister: true
             }

        default:
            return state;
    }


}