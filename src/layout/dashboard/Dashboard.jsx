
import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaPeopleArrows, FaSearch, FaShoppingCart, FaUtensils } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
// import useCart from '../hooks/useCart';
// import useAdmin from '../hooks/UseAdmin';

const Dashboard = () => {
    
    //ToDo:get isAdmin value from database
    const isAdmin=true;
    return (
        <div className='flex flex-col'>
              <div className='w-full flex justify-between'>
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className='p-4'>
                    {
                        isAdmin? <>

<li> <NavLink to="/dashboard/allemployee" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-xl flex bg-blue-600 text-white p-4" : "p-4 text-lg flex"}>  <FaHome className='flex justify-center items-center mt-1 mx-2'></FaHome> All employee</NavLink></li> 
<li> <NavLink to="/dashboard/addItems" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active flex text-lg bg-blue-600 text-white p-4" : "p-4 text-lg flex"}> <FaUtensils className='flex justify-center items-center mt-1 mx-2'></FaUtensils>Add items</NavLink></li> 
<li> <NavLink to="/dashboard/manageItems" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-lg flex bg-blue-600 text-white p-4" : "p-4 text-lg flex"}> <FaList className='flex justify-center items-center mt-1 mx-2'></FaList> Manage Items</NavLink></li> 
<li> <NavLink to="/dashboard/manageBookings"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-lg flex bg-blue-600 text-white p-4" : "p-4 text-lg flex"}> <FaBook className='flex justify-center items-center mt-1 mx-2'></FaBook> Manage Bookings</NavLink></li> 
<li> <NavLink to="/dashboard/allusers" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active flex bg-blue-600 text-lg text-white p-4" : "p-4 text-lg flex"}>  <FaPeopleArrows className='flex justify-center items-center mt-1 mx-2'></FaPeopleArrows>  All Users</NavLink></li> 
                        </> :<>
<li> <NavLink to="/dashboard/userHome" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-xl flex bg-blue-600 text-white p-4" : "p-4 text-xl flex"}>  <FaHome className='flex justify-center items-center mt-1 mx-2'></FaHome>  User Home</NavLink></li> 
<li> <NavLink to="/dashboard/reservation" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active flex text-xl bg-blue-600 text-white p-4" : "p-4 text-xl flex"}> <FaCalendar className='flex justify-center items-center mt-1 mx-2'></FaCalendar>Reservation</NavLink></li> 
<li> <NavLink to="/dashboard/cart" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-xl flex bg-blue-600 text-white p-4" : "p-4 text-xl flex"}> <FaShoppingCart className='flex justify-center items-center mt-1 mx-2'></FaShoppingCart>
                            My Cart </NavLink></li> 
<li className='py-2'> <NavLink to="/dashboard/review"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-xl flex bg-blue-600 text-white p-4" : "p-4 text-xl flex"}> <FaAd className='flex justify-center items-center mt-1 mx-2'></FaAd> Add a Review</NavLink></li> 
<li> <NavLink to="/dashboard/bookings" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active flex bg-blue-600 text-xl text-white p-4" : "p-4 text-xl flex"}>  <FaList className='flex justify-center items-center mt-1 mx-2'></FaList>
                            My Bookings</NavLink></li> 
               
                        </>
                    }
             
                            <div className="divider"></div>
                
               
                   

                  
                   


                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                </ul>
            </div>
           
           
            <div className='flex-1'> <Outlet></Outlet> </div>
        </div>
           
        </div>
      
    );
};

export default Dashboard;