import {IUserLogin, IUserRegistration} from "../types/IUser";
import {AuthResponse} from "../types/response/IResponse";
import $api, {API_URL} from "../http";
import axios, {AxiosResponse} from "axios";

class AuthService {
    static async registration(req: IUserRegistration): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/registration', req)
    }

    static async login(req: IUserLogin): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/login', req)
    }

    static async logout(): Promise<void> {
        return $api('/auth/logout')
    }

    static refresh(): Promise<AxiosResponse<AuthResponse>> {
        return axios.get<AuthResponse>(`${API_URL}/auth/refresh`, {withCredentials: true})
    }
}

export default AuthService