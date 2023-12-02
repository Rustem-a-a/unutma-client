import React from 'react';
import {useParams} from "react-router-dom";
import styles from "./Note.module.scss";
import NotePreview from "../../ui/NotePreview/NotePreview";
import NoteChanges from "../../ui/NoteChanges/NoteChanges";
import TodoItem from "../../ui/TodoItem/TodoItem";

const Note = () => {
    const {noteId} = useParams()
    return (
        <div className={styles.wrapper}>
            <NoteChanges title='Note' placeholder='Add item'/>
            <div className={styles.noteSection}>
                <TodoItem/>
            </div>
        </div>
    );
};

export default Note;
