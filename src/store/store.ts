import {applyMiddleware, createStore, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../saga";
import authReducer from "./reducers/authReducer";
import {IUser} from "../types/IUser";
import {IErrorResponse} from "../types/response/IErrorResponse";
import noteReducer from "./reducers/noteReducer";
import {INoteResponse} from "../types/response/IResponse";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    user: authReducer,
    notes: noteReducer
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootWatcher)

export interface RootState {
    user: {
        user: IUser;
        isAuth: boolean;
        stateError: IErrorResponse,
        isReceiveResponse: boolean;
        isLoadingAuth: boolean
    },
    notes: INoteResponse[]
}

export type Dispatch = typeof store.dispatch

export default store