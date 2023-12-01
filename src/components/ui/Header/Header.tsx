import React from 'react';
import styles from './Header.module.scss'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";

const Header = () => {
    const user = useSelector((state:RootState)=>state.user)
    return (
        <header className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
                <img src="/note.svg" alt=""/>
                <span>Note List</span>
            </Link>
            <div className={styles.auth}>
                {
                    user.isAuth
                        ? <span>Logout</span>
                        :
                        <>
                            <Link to = '/login'>login </Link> |
                            <Link to = '/registration'>Registration</Link>
                        </>
                }
            </div>
        </header>
    );
};

export default Header;
