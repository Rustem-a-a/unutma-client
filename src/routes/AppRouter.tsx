import React from 'react';
import styles from './AppRouter.module.scss'
import {Route, Routes, useLocation} from "react-router-dom";
import Main from "../components/pages/Main/Main";
import Note from "../components/pages/Note/Note";
import Login from "../components/pages/Auth/Login/Login";
import Registration from "../components/pages/Auth/Auth";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import Header from "../components/ui/Header/Header";
import LeftSidebar from "../components/ui/LeftSidebar/LeftSidebar";
import Letter from "../components/ui/Letter/Letter";

const AppRouter = () => {
    const user = useSelector((state: RootState) => state.user)
    const location = useLocation();
    const currentPath = location.pathname;
    console.log(currentPath)
    return (
        <div className={styles.wrapper}>
            <Header/>
            {
                user.isAuth
                    ? <>
                        {user.isActivated
                            ?
                            <main>
                                <LeftSidebar/>
                                <Routes>
                                    < Route path='/' element={<Main/>}/>
                                    <Route path='/note/:noteId' element={<Note/>}/>
                                </Routes>
                            </main>
                            : <Letter/>}
                    </>
                    : <Routes>
                        <Route path='/' element={<div>Please login or logout</div>}/>
                        <Route path='/login' element={<Registration/>}/>
                        <Route path='/registration' element={<Registration/>}/>
                        <Route path='*' element={<div>Page is not founded</div>}/>
                    </Routes>
            }
        </div>
    );
};

export default AppRouter;
