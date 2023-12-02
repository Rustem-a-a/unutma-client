import React from 'react';
import styles from './Main.module.scss'
import NotePreview from "../../ui/NotePreview/NotePreview";
import NoteChanges from "../../ui/NoteChanges/NoteChanges";

const Main = () => {
    return (
        <div className={styles.wrapper}>
            <NoteChanges title='Your notes' placeholder='Add note'/>
            <div className={styles.noteSection}>
                <NotePreview/>
                <NotePreview/>
                <NotePreview/>
                <NotePreview/>
                <NotePreview/>
                <NotePreview/>
                <NotePreview/>
                <NotePreview/>
                <NotePreview/>
            </div>
        </div>
    );
};

export default Main;
