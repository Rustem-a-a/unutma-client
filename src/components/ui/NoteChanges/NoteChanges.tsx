import React, {FC, useState} from 'react';
import styles from "./NoteChanges.module.scss";
import {useDispatch} from "react-redux";
import {createNoteAsync} from "../../../store/actions/noteActions";
import {v4 as uuidv4} from 'uuid';
import {IItem} from "../../../types/INote";
import Button from "../Button/Button";
import {Link} from "react-router-dom";

interface IProps {
    placeholder: string;
    title: string
    setIsModal?: React.Dispatch<React.SetStateAction<boolean>>
    setIsModalChange?: React.Dispatch<React.SetStateAction<boolean>>
    addNewItemLocal?: (newItem: IItem) => void
    saveChangesToDB?: () => void
    isChanging?: boolean
    setIsChanging?: React.Dispatch<React.SetStateAction<boolean>>
}

const NoteChanges: FC<IProps> = ({
                                     placeholder,
                                     title,
                                     addNewItemLocal,
                                     saveChangesToDB,
                                     setIsModal,
                                     setIsModalChange,
                                     isChanging,
                                     setIsChanging
                                 }) => {
    const [nodeTitle, setNodeTitle] = useState<string>('');
    const [item, setItem] = useState<IItem>({} as IItem);
    const dispatch = useDispatch();
    const addNote = () => {
        if (nodeTitle) {
            dispatch(createNoteAsync(nodeTitle))
            setNodeTitle('')
        }
    }
    const newItem = (e: React.ChangeEvent<HTMLInputElement>) => {
        const generatedId = uuidv4();
        const objectIdString = generatedId.replace(/-/g, '').slice(0, 24);
        setItem({
            itemTitle: e.target.value?.trimStart(),
            _id: objectIdString,
            checked: false
        })

    }
    const addNewItem = () => {
        if (addNewItemLocal && item.itemTitle?.trim()) {
            addNewItemLocal(item as IItem)
            setItem({
                itemTitle: '',
                checked: false,
                _id: ''
            })
            setIsChanging && setIsChanging(true)
        }

    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.change}>
                <div className={styles.title}>
                    <h1 title={title}>{title}</h1>
                    {placeholder === 'Add item' &&
                        <Link to='/'>
                            <img className={styles.back} src="/icons/toMain.svg" alt="toMain"
                                 title="Back to home page"/>
                        </Link>
                    }
                </div>

                <div className={styles.actions}>
                    {placeholder === 'Add note'
                        ? <div className={styles.add}>
                            <input type="text" placeholder={`${placeholder}...`}
                                   value={nodeTitle}
                                   onChange={e => setNodeTitle(e.target.value.trimStart())}
                                   onKeyDown={(e) => {
                                       if (e.key === 'Enter') {
                                           addNote()
                                       }
                                       if (e.key === 'Escape') {
                                           setNodeTitle('')
                                       }

                                   }}
                            />
                            <img src='/icons/noteAdd.svg' alt='Note Add' onClick={() => addNote()} title={placeholder}/>
                        </div>
                        : <div className={styles.add}>
                            <input type="text" placeholder={`${placeholder}...`}
                                   value={item.itemTitle}
                                   onChange={newItem}
                                   onKeyDown={(e) => {
                                       if (e.key === 'Enter') {
                                           if (addNewItemLocal) {
                                               addNewItem()
                                           }
                                       }
                                       if (e.key === 'Escape') {
                                           setItem({itemTitle: '', checked: false, _id: ''})
                                       }
                                   }}
                            /> <img
                            src='/icons/noteAdd.svg'
                            alt='Note Add'
                            onClick={() => {
                                addNewItem()
                            }}
                            title={placeholder}
                        />
                        </div>
                    }

                    {placeholder === 'Add item' &&
                        <div className={styles.saveDelete}>
                            <Button onClick={() => {
                                isChanging && setIsModalChange && setIsModalChange(true)
                            }} title={'Cancel Changes'} theme={isChanging ? 'red' : "gray"} icon='cancelChanges.svg'
                                    scaleImg={24}/>
                            <Button title='Save' onClick={() => {
                                saveChangesToDB && isChanging && saveChangesToDB()
                            }
                            } theme={isChanging ? 'green' : "gray"} icon='save.svg' scaleImg={24}/>
                            <Button title='Delete' onClick={() => {
                                setIsModal && setIsModal(true)
                            }} theme="red" icon='delete.svg' scaleImg={24}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default NoteChanges;
