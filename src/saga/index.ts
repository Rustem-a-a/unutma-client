import {all} from "redux-saga/effects";
import {userWatcher} from "./userSaga";
import {noteWatcher} from "./noteSaga";

export function* rootWatcher() {
    yield all([
        userWatcher(),
        noteWatcher()
    ])
}