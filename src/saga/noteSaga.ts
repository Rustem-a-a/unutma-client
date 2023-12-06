import {put, takeEvery, call} from 'redux-saga/effects'
import NoteService from "../services/NoteService";
import {
    CHANGE_ITEMS_ASYNC,
    changeItems,
    CREATE_NOTE_ASYNC,
    createNote, DELETE_NOTE_ASYNC, deleteNote,
    GET_NOTES_ASYNC,
    getNotes, getNotesAsync
} from "../store/actions/noteActions";


function* getNoteWorker() {
    try {
        const {data} = yield call(NoteService.getNotes)
        yield put(getNotes(data))
    } catch (e: any) {
        console.log(e.response.data)
    }
}

function* createNoteWorker(action: any) {
    try {
        const {data} = yield call(NoteService.createNote, action.payload)
        yield put(createNote(data))
    } catch (e: any) {
        console.log(e.response.data)
    }
}

function* changeItemsWorker(action: any) {
    try {
        const {data} = yield call(NoteService.changeItems, action.payload)
        yield put(changeItems(data))
    } catch (e: any) {
        console.log(e.response.data)
    }
}

function* deleteNoteWorker(action: any) {
    try {
        yield call(NoteService.deleteNote, action.payload)
        yield put(deleteNote(action.payload))
    } catch (e: any) {
        console.log(e.response.data)
    }
}

export function* noteWatcher() {
    yield takeEvery(GET_NOTES_ASYNC, getNoteWorker)
    yield takeEvery(CREATE_NOTE_ASYNC, createNoteWorker)
    yield takeEvery(CHANGE_ITEMS_ASYNC, changeItemsWorker)
    yield takeEvery(DELETE_NOTE_ASYNC, deleteNoteWorker)
}
