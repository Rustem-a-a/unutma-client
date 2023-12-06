import React from 'react';
import styles from './Letter.module.scss'

const Letter = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <p>Please check your email</p>
                <p>we send letter with activation link</p>
            </div>
            <img src="/icons/letter.svg" alt="Letter"/>
        </div>
    );
};

export default Letter;
