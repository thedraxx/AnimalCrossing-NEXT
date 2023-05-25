export interface IUser {
    name: string;
    passwordHash: string;
    role: IValidRoles;
    email: string;
}

export type IValidRoles = "admin" | "client";
