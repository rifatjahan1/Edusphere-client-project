import React from 'react';
import NavBar from '../Component/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            
            
        </div>
    );
};

export default MainLayout;