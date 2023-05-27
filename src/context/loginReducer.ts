import { IUser } from '@/interface/iUser';
import { LoginState } from '.';

type LoginActionType = 
  | {type: '[Login] - Login', payload: IUser}

export const LoginReducer = (state:LoginState, action:LoginActionType): LoginState => {
    switch (action.type) {
        case '[Login] - Login':

           return {
                ...state,
                infoUser: [...state.infoUser, action.payload],
                isLoggin: true
            }

        default:
            return state;
    }
}