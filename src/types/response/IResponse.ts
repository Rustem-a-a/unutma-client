import {IUser} from "../IUser";
import {IItem} from "../INote";

export interface AuthResponse {
    refreshToken: string;
    accessToken: string;
    user: IUser;
}
export interface INoteResponse{
    _id:string;
    title:string;
    items:IItem[];
    author:string;
}