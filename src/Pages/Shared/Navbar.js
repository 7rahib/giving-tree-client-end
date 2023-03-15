import React from 'react';
import { signOut } from 'firebase/auth';
import logoTree from '../../Assets/logoTree.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const user = useAuthState(auth);
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const logout = () => {
        signOut(auth);
        navigate(from, { replace: true })
    };

    const menuItems = <>

        <li>{(user[0]) ?
            <>
                <Link to='/emergency'>Emergency Relief</Link>
                <Link to='/tribalMerch'>Tribal Merch</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <button onClick={logout} className="menu menu-horizontal">Sign Out</button>
            </>
            :
            <>
                <Link to="/login">Log In</Link>
                <Link to="/register">Sign Up</Link>
            </>}</li>
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-white">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='mr-2' src={logoTree} alt="" width="40px" /> The Giving Tree</Link>
            </div>
            <div className="navbar-end hidden lg:flex mt-[-15px] font-semibold">
                <ul className="menu menu-horizontal p-0 btn-xs">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;