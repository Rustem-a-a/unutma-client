import React from 'react';
import styles from './AppRouter.module.scss'
import {Navigate, Route, Routes} from "react-router-dom";
import Main from "../components/pages/Main/Main";
import Note from "../components/pages/Note/Note";
import Login from "../components/pages/Auth/Login";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import Header from "../components/ui/Header/Header";
import LeftSidebar from "../components/ui/LeftSidebar/LeftSidebar";
import Letter from "../components/ui/Letter/Letter";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Registration from "../components/pages/Auth/Registration";

const AppRouter = () => {
    const user = useSelector((state: RootState) => state.user);
    return (
        <div className={styles.wrapper}>
            {!user.isLoadingAuth &&
                <>
                    <Header/>
                    {
                        user.isAuth
                            ? <>
                                {user.user.isActivated
                                    ?
                                    <main>
                                        <LeftSidebar/>
                                        <Routes>
                                            < Route path='/' element={<Main/>}/>
                                            <Route path='/note/:noteId' element={<Note/>}/>
                                            <Route path='*' element={<Navigate to='/'/>}/>
                                        </Routes>
                                    </main>
                                    : <Letter/>}
                            </>
                            : <Routes>
                                <Route path='/login' element={<Login/>}/>
                                <Route path='/registration' element={<Registration/>}/>
                                <Route path='*' element={<Navigate to='/login'/>}/>
                            </Routes>
                    }
                </>
            }
            <ToastContainer/>
        </div>
    );
};

export default AppRouter;
