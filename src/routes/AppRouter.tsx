import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Main from "../components/pages/Main/Main";
import Note from "../components/pages/Note/Note";
import Login from "../components/pages/Auth/Login/Login";
import Registration from "../components/pages/Auth/Registration/Registration";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import Header from "../components/ui/Header/Header";
import LeftSidebar from "../components/ui/LeftSidebar/LeftSidebar";

const AppRouter = () => {
    const user = useSelector((state: RootState) => state.user)
    const location = useLocation();
    const currentPath = location.pathname;
    console.log(currentPath)
    return (
        <div>
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
                            : <div>Please check your email</div>}
                    </>
                    : <Routes>
                        <Route path='/' element={<div>Please login or logout</div>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/registration' element={<Registration/>}/>
                        <Route path='*' element={<div>Page is not founded</div>}/>
                    </Routes>
            }
        </div>
    );
};

export default AppRouter;
