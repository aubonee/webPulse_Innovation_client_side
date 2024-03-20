
import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaPeopleArrows, FaSearch, FaShoppingCart, FaUtensils } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useHr from '../../hooks/UseHr';
import useAdmin from '../../hooks/UseAdmin';
import useEmployee from '../../hooks/UseEmployee';
// import useEmployee from '../../hooks/UseEmployee';


const Dashboard = () => {
    
    
    const [isAdmin]=useAdmin();
     const [isHr]=useHr();
    const [isEmployee]=useEmployee();
    return (
        <div className='flex flex-col relative'>
              <div className='w-full flex flex-col lg:flex-row lg:justify-between'>
            <div className='w-full lg:w-64 static lg:min-h-screen text-white bg-[#5f9fff]'>
                <ul className='py-4 px-2'>
                   
                    {isAdmin? <> 
                        <li> <NavLink to="/dashboard/verifiedemployee" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-xl flex bg-[#fdc854] text-white py-4 px-2" : "py-4 px-2 text-lg flex"}>  <FaList className='flex justify-center items-center mt-1 mx-2'></FaList> All employee List</NavLink></li> 
                        <div className="divider"></div>
                        <li><NavLink className="flex text-xl  items-center mt-1 mx-2" to="/"><FaHome className='mx-2'></FaHome> Home</NavLink> </li>
                    </>: isHr? <> 
                    <li> <NavLink to="/dashboard/allemployee" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-xl flex bg-[#fdc854] text-white py-4 px-2" : "py-4 px-2 text-xl flex"}>  <FaHome className='flex justify-center items-center mt-1 mx-2'></FaHome>  Employee List</NavLink></li> 
                    <li> <NavLink to="/dashboard/manageEmployee" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-lg flex bg-[#fdc854] text-white py-4 px-2" : "py-4 px-2 text-xl flex"}>  <FaHome className='flex justify-center items-center mt-1 mx-2'></FaHome>Manage Employee</NavLink></li> 
<li> <NavLink to="/dashboard/progress" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active flex text-xl bg-[#fdc854] text-white py-4 px-2" : "py-4 px-2 text-xl flex"}> <FaCalendar className='flex justify-center items-center mt-1 mx-2'></FaCalendar>Progress</NavLink></li> 
<div className="divider h-[1px] bg-white "></div>
                            <li><NavLink className="flex text-xl  items-center mt-1 mx-2" to="/"><FaHome className='mx-2'></FaHome> Home</NavLink> </li>

                    </> : isEmployee? <> 
                    <li> <NavLink to="/dashboard/paymenthistory" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-xl flex bg-[#fdc854] text-white py-4 px-2" : "py-4 px-2 text-xl flex"}>  <FaHome className='flex justify-center items-center mt-1 mx-2'></FaHome> Payment History</NavLink></li> 
<li> <NavLink to="/dashboard/worksheet" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active flex text-xl bg-[#fdc854] text-white py-4 px-2" : "py-4 px-2 text-xl flex"}> <FaCalendar className='flex justify-center items-center mt-1 mx-2'></FaCalendar>WorkSheet</NavLink></li> 
<div className="divider"></div>
                            <li><NavLink className="flex text-xl  items-center mt-1 mx-2" to="/"><FaHome className='mx-2'></FaHome> Home</NavLink> </li>
                    </> : <> </>

                    }           
                  
                </ul>
            </div>
           
           
            <div className=' ml-5 flex-1'> <Outlet></Outlet> </div>
        </div>
           
        </div>
      
    );
};

export default Dashboard;



