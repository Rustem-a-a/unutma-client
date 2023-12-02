import React from 'react';
import styles from './AppRouter.module.scss'
import {Navigate, Route, Routes} from "react-router-dom";
import Main from "../components/pages/Main/Main";
import Note from "../components/pages/Note/Note";
import Registration from "../components/pages/Auth/Auth";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import Header from "../components/ui/Header/Header";
import LeftSidebar from "../components/ui/LeftSidebar/LeftSidebar";
import Letter from "../components/ui/Letter/Letter";
import NeedAuthorization from "../components/ui/NeedAuthorization/NeedAuthorization";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                                <Route path='/' element={<NeedAuthorization/>}/>
                                <Route path='/login' element={<Registration/>}/>
                                <Route path='/registration' element={<Registration/>}/>
                                <Route path='*' element={<div>Page is not founded</div>}/>
                            </Routes>
                    }
                </>
            }
            <ToastContainer/>
        </div>
    );
};

export default AppRouter;
