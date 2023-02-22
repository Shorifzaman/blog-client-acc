import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const DashBoard = () => {
    return (
        <div className="flex flex-row min-h-screen bg-emerald-100 text-emerald-800 cursor-context-menu">
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default DashBoard;