import React from 'react';
import styles from './NeedAuthorization.module.scss'

const NeedAuthorization = () => {
    return (
        <div className={styles.wrapper}>
            <p>To use the application you must be authorized</p>
        </div>
    );
};

export default NeedAuthorization;
