import React from 'react';
import styles from './Header.module.scss'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {logoutAsync} from "../../../store/actions/authActions";

const Header = () => {
    const user = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch()
    return (
        <header className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
                <img src="/note.svg" alt=""/>
                <span className={styles.logoTitle}>UNUTMA</span>
                <span>Note List</span>
            </Link>
            <div className={styles.auth}>
                {
                    user.isAuth
                        ? <span onClick={() => {
                            dispatch(logoutAsync())
                        }}>Logout</span>
                        :
                        <>
                            <Link to='/login'>login </Link> |
                            <Link to='/registration'>Registration</Link>
                        </>
                }
            </div>
        </header>
    );
};

export default Header;
