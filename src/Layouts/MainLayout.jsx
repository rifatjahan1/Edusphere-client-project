import React from 'react';
import NavBar from '../Component/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';

const MainLayout = () => {
    return (
        // <div className="">
        //     <NavBar></NavBar>
        //     <Outlet></Outlet>
        //     <Footer></Footer>


        // </div>

        <div className="flex flex-col min-h-screen">
            {/* Navbar full width */}
            <NavBar />

            {/* Main content */}
            <main className="flex-1 w-full">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <Outlet />
                </div>
            </main>

            {/* Footer full width */}
            <Footer />
        </div>
    );
};

export default MainLayout;