import React, {useState} from 'react';
import styles from './Main.module.scss'
import NotePreview from "../../ui/NotePreview/NotePreview";
import NoteChanges from "../../ui/NoteChanges/NoteChanges";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import Modal from "../../ui/Modal/Modal";
import {deleteNoteAsync} from "../../../store/actions/noteActions";

const Main = () => {
    const [isModal, setIsModal] = useState<boolean>(false);
    const [noteId, setNoteId] = useState<string>('');
    const notes = useSelector((state: RootState) => state.notes);
    const dispatch = useDispatch();
    const deleteNote = () => {
        dispatch(deleteNoteAsync(noteId as string));
    }
    return (
        <div className={styles.wrapper}>
            <NoteChanges
                setIsModal={setIsModal}
                title='Your notes'
                placeholder='Add note'/>

            <div className={styles.noteSection}>
                {notes.map(note =>
                    <NotePreview
                        setNoteId={setNoteId}
                        setIsModal={setIsModal}
                        key={note._id}
                        noteId={note._id}
                        title={note.title}
                        items={note.items}/>)}
            </div>
            {isModal && <Modal
                action={deleteNote}
                title='Do you want delete note?'
                yes='Delete'
                no='Cancel'
                setIsModal={setIsModal}/>}
        </div>
    );
};

export default Main;
