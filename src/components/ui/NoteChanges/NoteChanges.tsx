import React, {FC} from 'react';
import styles from "./NoteChanges.module.scss";

interface IProps {
    placeholder: string;
    title: string
}

const NoteChanges: FC<IProps> = ({placeholder, title}) => {
    return (
        <div className={styles.change}>
            <h1>{title}</h1>
            <div className={styles.actions}>
                <div className={styles.add}>
                    <input type="text" placeholder={`${placeholder}...`}/>
                    <img src='/noteAdd.svg' alt='Note Add'/>
                </div>
                {placeholder === 'Add item' &&
                    <div className={styles.saveDelete}>
                        <span>Cancel Changes</span>
                        <span>Save</span>
                        <span>Delete</span>
                    </div>
                }

            </div>


        </div>
    );
};

export default NoteChanges;
