import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleSignOut =() =>{
    logOut()
    .then()
    .catch()
  }
    const navItems = <>
    <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Home</NavLink></li>
    <li><NavLink to="/contactus" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Contact us</NavLink></li>
    <li>    {   user ?
   " "
  :
  <Link className=" " to="/login">Login</Link>
  }</li>
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
          <a className="py-2 text-white bg-[#db23c0] px-2 text-xl">webPulse Innovation</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           
          {navItems}
           
          </ul>
        </div>
        <div className="navbar-end">
      <div>
        <div>
     
        </div>
        <div> {
        user && <div className="flex  items-center"> <div><img className=" w-[30px]  h-[30px] rounded-full" src={user.photoURL} alt="" /></div> <h2 className='text-red-500'>{user.displayName}</h2> </div> 
      }</div>
      </div>
      <div>
      <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <div className="flex ">
      
    </div>
    {
      user && 
      <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
    }
          
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
     
      {
    user && 
    <button onClick={handleSignOut} className="text-sm  my-2 mx-2 btn rounded-none bg-[#FF6969]  border-2 border-spacing-y-3 border-spacing-x-7 text-[#FFFFFA] border-[#FF6969]">Sign Out</button>
  
  }
      </ul>
    </div> 
      </div>
        </div>
      </div>

//////////////////////////////

    );
};

export default Navbar;