import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../components/pages/Main/Main";
import Note from "../components/pages/Note/Note";
import Layout from "../components/layout/Layout";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    <Route path='/note/:noteId' element={<Note/>}/>
                 </Route>
            </Routes>
        </div>
    );
};

export default AppRouter;
