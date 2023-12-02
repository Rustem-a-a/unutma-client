import {IUser, IUserLogin, IUserRegistration} from "../../types/IUser";
import {AuthResponse} from "../../types/response/IResponse";
import {IErrorResponse} from "../../types/response/IErrorResponse";

export const REGISTRATION = 'REGISTRATION';
export const REGISTRATION_ASYNC = 'REGISTRATION_ASYNC';
export const LOGIN = 'LOGIN';
export const LOGIN_ASYNC = 'LOGIN_ASYNC';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_ASYNC = 'LOGOUT_ASYNC';
export const ERR = 'ERR';
export const CHECK_AUTH = 'CHECK_AUTH';
export const CHECK_AUTH_ASYNC = 'CHECK_AUTH_ASYNC';
export const REQUEST = 'REQUEST';
export const SEND_REQUEST = 'SEND_REQUEST'
export const SUCCESS = 'SUCCESS';


export const registration = (userData: AuthResponse) => ({
    type: REGISTRATION,
    payload: userData,
});
export const registrationAsync = (userData: IUserRegistration) => ({
    type: REGISTRATION_ASYNC,
    payload: userData,
});

export const login = (userData: AuthResponse) => ({
    type: LOGIN,
    payload: userData,
});

export const loginAsync = (userData: IUserLogin) => ({
    type: LOGIN_ASYNC,
    payload: userData,
});
export const logout = () => ({
    type: LOGOUT,
});
export const logoutAsync = () => ({
    type: LOGOUT_ASYNC,
});
export const errorAction = (data: IErrorResponse) => ({
    type: ERR,
    payload: data
});

export const checkAuth = (userData: AuthResponse) => ({
    type: CHECK_AUTH,
    payload: userData
})
export const checkAuthAsync = () => ({
    type: CHECK_AUTH_ASYNC,
})
export const sendRequest = () => ({type: SEND_REQUEST});
export const successAction = () => ({type: SUCCESS});
