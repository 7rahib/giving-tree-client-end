import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FiPlus } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { FiArchive } from "react-icons/fi";
import { FiGlobe } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";

const Dashboard = () => {
    return (
        <div>
            <div className="flex justify-start items-center">
                <label tabIndex="1" htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <h3 className='text-2xl mt-1 text-primary font-semibold mb-1 ml-5'>Giving Tree Dashboard</h3>
            </div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-70 bg-base-100 text-base-content font-semibold">
                        <li><Link className='focus:text-blue-500 mb-1' to='/dashboard'><FiArchive className='text-lg' /> All Emergency Reliefs</Link></li>
                        <li><Link className='focus:text-blue-500 mb-1' to='/dashboard/personalreliefs'><FiFileText className='text-lg' /> Personal Reliefs</Link></li>
                        <li><Link className='focus:text-blue-500 mb-1' to='/dashboard/addemergencyrelief'><FiPlus className='text-lg' /> Add Emergency Reliefs</Link></li>
                        <li><Link className='focus:text-blue-500 mb-1' to='/dashboard/volunteers'><FiUsers className='text-lg' />Volunteers</Link></li>
                        <li><Link className='focus:text-blue-500 mb-1' to='/dashboard/organizations'><FiGlobe className='text-lf' />Organizations</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;