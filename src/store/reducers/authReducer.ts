import {IUser} from "../../types/IUser";
import {CHECK_AUTH, ERR, LOGIN, LOGOUT, REGISTRATION, SEND_REQUEST, SUCCESS} from "../actions/authActions";
import {IErrorResponse} from "../../types/response/IErrorResponse";
import {toast} from "react-toastify";

interface IInitialState {
    user: IUser;
    isAuth: boolean;
    stateError: IErrorResponse;
    isReceiveResponse: boolean;
    isLoadingAuth: boolean;
}

export const initialState: IInitialState = {
    user: {
        id: '',
        username: '',
        email: '',
        isActivated: false
    },
    isAuth: false,
    isLoadingAuth: true,
    isReceiveResponse: true,
    stateError: {} as IErrorResponse,
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case REGISTRATION:
            localStorage.setItem('token', action.payload.accessToken)
            return (
                {
                    ...state,
                    isAuth: true,
                    user: action.payload.user,
                    isLoadingAuth: false,
                    isReceiveResponse: true,
                    stateError: {} as IErrorResponse
                });
        case LOGIN:
            localStorage.setItem('token', action.payload.accessToken)
            return (
                {
                    ...state,
                    isAuth: true,
                    user: action.payload.user,
                    isLoadingAuth: false,
                    isReceiveResponse: true,
                    stateError: {} as IErrorResponse
                });
        case LOGOUT:
            localStorage.removeItem('token')
            return (
                {...state, isAuth: false, isReceiveResponse: true, isLoadingAuth: false, user: {} as IUser});
        case ERR:
            toast.error(action.payload.message)
            return (
                {...state, isLoadingAuth: false, isReceiveResponse: true, stateError: action.payload});
        case CHECK_AUTH:
            localStorage.setItem('token', action.payload.accessToken)
            return (
                {
                    ...state,
                    isAuth: true,
                    user: action.payload.user,
                    isLoadingAuth: false,
                    isReceiveResponse: true,
                    stateError: {} as IErrorResponse
                }
            )
        case SEND_REQUEST:
            return {...state, isReceiveResponse: false};
        case SUCCESS:
            return {...state, isReceiveResponse: true, isLoadingAuth: false};
        default:
            return state;
    }
};

export default authReducer;