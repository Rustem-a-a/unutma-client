import React, {useState} from 'react';
import styles from './LeftSidebar.module.scss'
import {Link} from "react-router-dom";
const LeftSidebar = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    return (
        <div className={styles.wrapper}>
            <Link to = '/'>
                 <h2>Notes</h2>
            </Link>
            <hr/>
            <div className={styles.projectsActions}>
                <div className={styles.searchBox}>
                    <input type="text"
                           value={searchValue}
                           onChange={(e)=>setSearchValue(e.target.value)}
                           placeholder='Search...'/>
                    <img src="/search.svg" alt="Логотип поиска" className={styles.searchLogo}/>

                </div>

            </div>

            <div className={styles.projectsContainer}>
            </div>
        </div>
    );
};

export default LeftSidebar;
