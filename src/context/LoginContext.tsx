import { IUser } from '@/interface/iUser';
import { createContext } from 'react';

export interface UIContextProps {
    isLoggin: boolean;
    infoUser: IUser[]

    // Methods
    onLoginUser: (email: string, passwordHash: string) => Promise<any>;
    onRegisterUser: (email: string, passwordHash: string, name: string) => Promise<any>;
}

export const LoginContext = createContext({} as UIContextProps);