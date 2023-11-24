
import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaPeopleArrows, FaSearch, FaShoppingCart, FaUtensils } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
// import useCart from '../hooks/useCart';
// import useAdmin from '../hooks/UseAdmin';

const Dashboard = () => {
    
    //ToDo:get isAdmin value from database
  //  const isAdmin=true;
    const isHr=true;
    return (
        <div className='flex flex-col'>
              <div className='w-full flex justify-between'>
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className='p-4'>
                    {
                        isHr? <>

<li> <NavLink to="/dashboard/allemployee" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-xl flex bg-blue-600 text-white p-4" : "p-4 text-lg flex"}>  <FaList className='flex justify-center items-center mt-1 mx-2'></FaList> All employee</NavLink></li> 
<li> <NavLink to="/dashboard/progress" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active flex text-lg bg-blue-600 text-white p-4" : "p-4 text-lg flex"}> <FaBook className='flex justify-center items-center mt-1 mx-2'></FaBook>Add items</NavLink></li> 

                        </> :<>
<li> <NavLink to="/dashboard/paymenthistory" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-xl flex bg-blue-600 text-white p-4" : "p-4 text-xl flex"}>  <FaHome className='flex justify-center items-center mt-1 mx-2'></FaHome>  User Home</NavLink></li> 
<li> <NavLink to="/dashboard/worksheet" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active flex text-xl bg-blue-600 text-white p-4" : "p-4 text-xl flex"}> <FaCalendar className='flex justify-center items-center mt-1 mx-2'></FaCalendar>Reservation</NavLink></li> 

               
                        </>
                    }
             
                            <div className="divider"></div>
                
               
                   

                  
                   


                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                  
                </ul>
            </div>
           
           
            <div className='flex-1'> <Outlet></Outlet> </div>
        </div>
           
        </div>
      
    );
};

export default Dashboard;