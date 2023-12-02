import React from 'react';
import styles from './TodoItem.module.scss'

const TodoItem = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.checkTitle}>
                <input id='checkbox' type="checkbox"/>
                <label htmlFor='checkbox' className={styles.itemTitle}>Todo Item</label>
            </div>
            <div className={styles.deleteEdit}>
                <img src="/edit.svg" alt="Edit item"/>
                <img src="/delete.svg" alt="Delete item "/>
            </div>

        </div>
    );
};

export default TodoItem;
