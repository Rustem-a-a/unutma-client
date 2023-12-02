import React from 'react';
import styles from './NotePreview.module.scss'
const NotePreview = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h2>Title</h2>
                <div className={styles.actions}>
                    <span>Edit</span>
                    <span>Delete</span>
                </div>
            </div>
            <ul className={styles.todos}>
                <li>first</li>
                <li>second</li>
                <span>.......</span>
            </ul>
        </div>
    );
};

export default NotePreview;
