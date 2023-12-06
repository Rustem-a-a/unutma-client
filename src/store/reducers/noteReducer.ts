import {INoteResponse} from "../../types/response/IResponse";
import {CHANGE_ITEMS, CREATE_NOTE, DELETE_NOTE, GET_NOTES} from "../actions/noteActions";
import {toast} from "react-toastify";

const initialState: INoteResponse[] = [] as INoteResponse[]

const noteReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_NOTES:
            return action.payload
        case CREATE_NOTE:
            toast.success('Note created');
            return ([...state, action.payload])
        case CHANGE_ITEMS:
            toast.success('Changes saved');
            return ([...state.map(note => {
                if (note._id !== action.payload._id) return note
                else return action.payload
            })])
        case DELETE_NOTE:
            toast.success('Note deleted')
            return ([...state.filter(note => note._id !== action.payload)])
        default:
            return state
    }
}

export default noteReducer