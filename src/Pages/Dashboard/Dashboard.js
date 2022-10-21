import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FiPlus } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { FiArchive } from "react-icons/fi";

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content font-semibold">
                        <li><Link className='focus:text-red-500 mb-1' to='/dashboard'><FiArchive className='text-xl' /> All Emergency Reliefs</Link></li>
                        <li><Link className='focus:text-red-500 mb-1' to='/dashboard/personalreliefs'><FiFileText className='text-xl' /> Personal Reliefs</Link></li>
                        <li><Link className='focus:text-red-500 mb-1' to='/dashboard/addemergencyrelief'><FiPlus className='text-xl' /> Add Emergency Reliefs</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;