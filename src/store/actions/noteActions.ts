import {INoteResponse} from "../../types/response/IResponse";
import {IItem} from "../../types/INote";

export const GET_NOTES = 'GET_NOTES'
export const GET_NOTES_ASYNC = 'GET_NOTES_ASYNC'
export const CREATE_NOTE = 'CREATE_NOTE'
export const CREATE_NOTE_ASYNC = 'CREATE_NOTE_ASYNC'
export const CHANGE_ITEMS = 'CHANGE_ITEMS'
export const CHANGE_ITEMS_ASYNC = 'CHANGE_ITEMS_ASYNC'
export const DELETE_NOTE = 'DELETE_NOTE'
export const DELETE_NOTE_ASYNC = 'DELETE_NOTE_ASYNC'

export const getNotes = (notes:INoteResponse[]) => ({
    type: GET_NOTES,
    payload:notes
})
export const getNotesAsync = () => ({
    type: GET_NOTES_ASYNC
})

export const createNote = (note:INoteResponse) => ({
    type: CREATE_NOTE,
    payload:note
})
export const createNoteAsync = (noteTitle:string) => ({
    type: CREATE_NOTE_ASYNC,
    payload: noteTitle
})

export const changeItems = (note:INoteResponse) => ({
    type: CHANGE_ITEMS,
    payload:note
})
export const changeItemsAsync = (dataForChange:{noteId:string,newItems:IItem[]}) => ({
    type: CHANGE_ITEMS_ASYNC,
    payload: dataForChange
})


export const deleteNote = (noteId:string) => ({
    type: DELETE_NOTE,
    payload:noteId
})
export const deleteNoteAsync = (noteId:string) => ({
    type: DELETE_NOTE_ASYNC,
    payload:noteId
})