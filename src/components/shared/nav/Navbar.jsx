import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    const navItems = <>
    <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Home</NavLink></li>
    <li><NavLink to="/menu" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Menu</NavLink></li>
    <li><NavLink to="/ourshop/salad" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Our Shop</NavLink></li>
    {/* <li><NavLink to="/login" className={({ isActive, isPending }) =>  isPending ? "pending" : isActive ? "active" : ""}> Login</NavLink></li> */}
   

  </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           
          {navItems}
           
          </ul>
        </div>
        <div className="navbar-end">
        <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div> 
        </div>
      </div>

//////////////////////////////

    );
};

export default Navbar;