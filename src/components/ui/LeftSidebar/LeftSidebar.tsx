import React, {useState} from 'react';
import styles from './LeftSidebar.module.scss'
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {toast} from "react-toastify";
import isActive = toast.isActive;

const LeftSidebar = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const notes = useSelector((state: RootState) => state.notes);
    return (
        <div className={styles.wrapper}>
            <Link to='/'>
                <h2>Notes</h2>
            </Link>
            <div className={styles.notesActions}>
                <div className={styles.searchBox}>
                    <input type="text"
                           value={searchValue}
                           onChange={(e) => setSearchValue(e.target.value.trimStart())}
                           placeholder='Search...'/>
                    <img src="/icons/search.svg" alt="Логотип поиска" className={styles.searchLogo}/>
                </div>
            </div>
            <div className={styles.notesContainer}>
                {
                    notes?.filter(v => v.title?.toLowerCase().includes(searchValue.toLowerCase())).map(note =>
                        <div className={styles.note} key={note._id}>
                            <NavLink to={`/note/${note._id}`} title={note.title}
                                     className={({isActive}) => (isActive ? styles.activeLink : '')}>
                                <img src="/icons/notemini.svg" alt="note"/>
                                <p title={note.title}>{note.title}</p>
                            </NavLink>
                        </div>)
                }
            </div>
        </div>
    );
};

export default LeftSidebar;
