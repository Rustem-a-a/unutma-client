import React, {FC, useEffect, useState} from 'react';
import styles from './NotePreview.module.scss'
import {IItem} from "../../../types/INote";
import {Link} from "react-router-dom";
import Button from "../Button/Button";

interface IProps {
    noteId: string;
    title: string;
    items: IItem[]
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
    setNoteId: React.Dispatch<React.SetStateAction<string>>

}

const NotePreview: FC<IProps> = ({title, items, noteId, setIsModal, setNoteId}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <p title={title}>{title}</p>
                <div className={styles.actions}>
                    <Link to={`/note/${noteId}`}>
                        <Button
                            title={'Edit'}
                            theme="green"
                            icon='edit.svg'
                            scaleImg={24}
                        />
                    </Link>
                        <Button
                            title='Delete'
                            theme="red"
                            icon='delete.svg'
                            scaleImg={24}
                            onClick={() => {
                                setNoteId(noteId)
                                setIsModal(true)
                            }}
                        />
                </div>
            </div>
            <ul className={styles.todos}>
                {items.slice(0, 2).map((item, ind) => <li key={item._id}>{`${ind + 1}. ${item.itemTitle}`}</li>)}
                {items.length > 2 && <li className={styles.lastLi}>.......</li>}
            </ul>
        </div>
    );
};

export default NotePreview;
