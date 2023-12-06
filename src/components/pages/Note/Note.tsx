import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import styles from "./Note.module.scss";
import NoteChanges from "../../ui/NoteChanges/NoteChanges";
import NoteItem from "../../ui/NoteItem/NoteItem";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {INoteResponse} from "../../../types/response/IResponse";
import {IItem} from "../../../types/INote";
import {changeItemsAsync, deleteNoteAsync} from "../../../store/actions/noteActions";
import Modal from "../../ui/Modal/Modal";

const Note = () => {
    const {noteId} = useParams()
    const notes = useSelector((state: RootState) => state.notes);
    const [note, setNote] = useState<INoteResponse>({} as INoteResponse);
    const [isModal, setIsModal] = useState<boolean>(false);
    const [isModalChange, setIsModalChange] = useState<boolean>(false);
    const [isChanging, setIsChanging] = useState<boolean>(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const setCurrentNoteToState = () => {
        const noteS = notes.find(note => note._id === noteId)
        setNote(noteS as INoteResponse)
        setIsChanging(false)
    }
    useEffect(() => {
        if (notes.length && !notes.find(v => v._id === noteId)) {
            navigate('/')
        }
        setCurrentNoteToState()
    }, [notes.length, noteId])

    const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
        setNote(prev => ({
            ...prev, items: prev.items.map(item => {
                    if (item._id === id) {
                        return ({...item, checked: !item.checked})
                    } else return item
                }
            )
        }))
        setIsChanging(true)
    }

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
        setNote(prev => ({
            ...prev, items: prev.items.map(item => {
                    if (item._id === id) {
                        return ({...item, itemTitle: e.target.value})
                    } else return item
                }
            )
        }))
        setIsChanging(true)
    }

    const handleChangeDelete = (itemId: string) => {
        setNote(prev => ({
            ...prev, items: prev.items.filter(item => item._id !== itemId)
        }))
        setIsChanging(true)

    }

    const addNewItemLocal = (newItem: IItem) => {
        setNote(prev => ({...prev, items: [...prev.items, newItem]}))
    }

    const saveChangesToDB = () => {
        dispatch(changeItemsAsync({noteId: noteId as string, newItems: note.items}))
        setIsChanging(false)
    }

    const deleteNote = () => {
        dispatch(deleteNoteAsync(noteId as string))
        navigate('/')
    }
    return (
        <div className={styles.wrapper}>
            <NoteChanges title={note?.title || ''}
                         placeholder='Add item'
                         addNewItemLocal={addNewItemLocal}
                         saveChangesToDB={saveChangesToDB}
                         setIsModalChange={setIsModalChange}
                         setIsModal={setIsModal}
                         isChanging={isChanging}
                         setIsChanging={setIsChanging}

            />
            <div className={styles.noteSection}>
                {note?.items?.map(item =>
                    <NoteItem handleChangeInput={handleChangeInput}
                              handleChangeCheckbox={handleChangeCheckbox}
                              handleChangeDelete={handleChangeDelete}
                              key={item._id}
                              checked={item.checked}
                              itemId={item._id}
                              itemTitle={item.itemTitle}
                    />)}
            </div>
            {isModal &&
                <Modal action={deleteNote}
                       title='Do you want delete note?'
                       yes='Delete'
                       no='Cancel'
                       setIsModal={setIsModal}/>}
            {isModalChange &&
                <Modal action={setCurrentNoteToState}
                       title='Do you want to cancel changes?'
                       yes='Yes'
                       no='No'
                       setIsModal={setIsModalChange}/>}
        </div>
    );
};

export default Note;
