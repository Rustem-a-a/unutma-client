import {IUser} from "../../types/ITypes";

interface IInitialState {
    user: IUser;
    isAuth: boolean;
    isLoadingAuth: boolean;
    isActivated:boolean
}

export const initialState: IInitialState = {
    user: {
        id: '',
        username: '',
        email: '',
        isActivated: false
    },
    isAuth: true,
    isLoadingAuth: true,
    isActivated:true
}

const authReducer = (state = initialState, action:any)=>{
    switch (action.type){
        default:
            return state
    }
}

export default authReducer;