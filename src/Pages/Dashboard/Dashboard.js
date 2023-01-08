import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FiPlus } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { FiArchive } from "react-icons/fi";
import { FiGlobe } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiList } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import { FiBook } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../hooks/useAdmin';
import useIndividualToken from '../../hooks/useIndividualToken';
import Loading from '../Shared/Loading';

const Dashboard = () => {

    const user = useAuthState(auth)
    const [admin] = useAdmin(user)
    const [token] = useIndividualToken(user)

    if (!(user[0]?.email) || token) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className="flex justify-start items-center">
                <label tabIndex="1" htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <h3 className='text-xl mt-1 font-semibold mb-1 ml-5'>Giving Tree Dashboard</h3>
            </div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-70 bg-base-100 text-base-content font-semibold text-md">
                        {(user) ? <>
                            <li><Link className='focus:text-blue-500 mb-1' to='/dashboard'><FiFileText className='text-md' /> Personal Reliefs</Link></li>
                            <li><Link className='focus:text-blue-500 mb-1' to='/dashboard/personalDonations'><FiBookOpen className='text-md' /> Personal Donations</Link></li>
                            <li><Link className='focus:text-blue-500 mb-1' to='/dashboard/addemergencyrelief'><FiPlus className='text-md' /> Request New Reliefs</Link></li>
                            <li><Link className='focus:text-blue-500 mb-1' to='/dashboard/volunteers'><FiUsers className='text-md' />Volunteers</Link></li>
                            <li><Link className='focus:text-blue-500 mb-1' to='/dashboard/organizations'><FiGlobe className='text-md' />Organizations</Link></li>
                            <li><Link className='focus:text-blue-500 mb-1' to='/dashboard/users'><FiList className='text-md' />All Users</Link></li>

                        </>
                            : ''
                        }
                        {(user) && admin ?
                            <>
                                <li><Link className='focus:text-blue-500 mb-1' to='/dashboard/allemergenciesreliefs'><FiArchive className='text-md' /> All Emergency Reliefs</Link></li>
                                <li><Link className='focus:text-blue-500 mb-1' to='/dashboard/alldonations'><FiBook className='text-md' /> All Donations</Link></li>
                                <li><Link className='focus:text-blue-500 mb-1' to='/dashboard/upazilladonations'><FiMapPin className='text-md' /> Upazilla Donations</Link></li>
                            </>
                            : ''
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;