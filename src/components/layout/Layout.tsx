import React from 'react';
import {Outlet} from 'react-router-dom'
import Header from "../ui/Header/Header";
import LeftSidebar from "../ui/LeftSidebar/LeftSidebar";

const Layout = () => {
    return (
        <div>
            <Header/>
            <main>
                <LeftSidebar/>
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;
