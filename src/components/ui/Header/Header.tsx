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
                <img src="/icons/note.svg" alt=""/>
                <span className={styles.logoTitle}>UNUTMA</span>
                <span className={styles.logoSubTitle}>Note List</span>
            </Link>
            <div className={styles.auth}>
                {
                    user.isAuth
                        ?
                        <><span className={styles.loginText} onClick={() => {
                            dispatch(logoutAsync())
                        }}>Logout</span>
                            <img className={styles.logout} src="/icons/logout.svg" alt="Logout" title='Logout'
                                 onClick={() => {
                                     dispatch(logoutAsync())
                                 }}/>

                        </>
                        :
                        <>
                            <Link className={styles.loginText} to='/login'>login </Link>
                            <Link className={styles.authImg} to='/login'>
                                <img
                                    className={styles.log}
                                    src="/icons/login.svg"
                                    alt="Login"
                                    title='Login'/>
                            </Link>

                            <Link className={styles.loginText} to='/registration'>Registration</Link>
                            <Link className={styles.authImg} to='/registration'>
                                <img className={styles.reg}
                                     src="/icons/registration.svg"
                                     alt="Registration"
                                     title='Registration'/>
                            </Link>
                        </>
                }
            </div>
        </header>
    );
};

export default Header;
