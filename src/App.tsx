import React, {useEffect} from 'react';
import './App.css';
import AppRouter from "./routes/AppRouter";
import {useDispatch} from "react-redux";
import {checkAuthAsync, successAction} from "./store/actions/authActions";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(checkAuthAsync())
        } else {
            dispatch(successAction())
        }
    }, []);

    return (
        <div className="App">
            <AppRouter/>
        </div>
    );
}

export default App;
