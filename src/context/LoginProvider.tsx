import { useReducer } from 'react';
import { LoginContext, LoginReducer } from './';
import { IUser } from '@/interface/iUser';
import AnimalCrossingAPI from '@/api/axiosApi';
import Cookies from 'js-cookie';
import axios from 'axios';

export interface LoginState {
    isLoggin: boolean;
    infoUser: IUser[]

}

const Login_INITIAL_STATE: LoginState = {
    isLoggin: false,
    infoUser: []
};

interface Props {
    children: React.ReactNode;
}

export const LoginProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(LoginReducer, Login_INITIAL_STATE)


    const onRegisterUser = async (email: string, passwordHash: string, name: string) => {
        try {

            const { data } = await AnimalCrossingAPI.post('/register', { email, passwordHash, name });

            const { user, token } = data;

            Cookies.set('token', token);

            dispatch({
                type: '[Login] - Login',
                payload: user
            });

            return {
                hasError: false,
                message: 'Usuario creado correctamente'
            }

        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }
            return {
                hasError: true,
                message: 'Error desconocido, no se pudo crear el usuario'
            }
        }
    }



    const onLoginUser = async (email: string, passwordHash: string) => {
        try {

            const { data } = await AnimalCrossingAPI.post('/login', { email, passwordHash });

            const { user, token } = data;

            Cookies.set('token', token);

            dispatch({
                type: '[Login] - Login',
                payload: user
            });

            return {
                hasError: false,
                message: 'Usuario creado correctamente'
            }

        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }
            return {
                hasError: true,
                message: 'Error desconocido, no se pudo crear el usuario'
            }
        }
    }

    return (
        <LoginContext.Provider value={{
            ...state,
            onLoginUser,
            onRegisterUser
        }}>
            {children}
        </LoginContext.Provider>
    )
}