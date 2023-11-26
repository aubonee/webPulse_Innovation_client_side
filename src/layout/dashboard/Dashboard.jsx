
import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaPeopleArrows, FaSearch, FaShoppingCart, FaUtensils } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useHr from '../../hooks/UseHr';
import useAdmin from '../../hooks/UseAdmin';
// import useEmployee from '../../hooks/UseEmployee';


const Dashboard = () => {
    
    //ToDo:get isAdmin value from database
    const [isAdmin]=useAdmin();
     //const [isHr]=useHr();
    //const isHr=true;
    // const [isEmployee]=useEmployee();
    return (
        <div className='flex flex-col'>
              <div className='w-full flex justify-between'>
            <div className='w-64 min-h-screen bg-gray-400'>
                <ul className='p-4'>
                    {/* {
                        isAdmin? <>

<li> <NavLink to="/dashboard/verifiedemployee" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-xl flex bg-purple-600 text-white p-4" : "p-4 text-lg flex"}>  <FaList className='flex justify-center items-center mt-1 mx-2'></FaList> Hr & Verified employee</NavLink></li> 
<div className="divider"></div>
                            <li><NavLink className="flex text-xl  items-center mt-1 mx-2" to="/"><FaHome className='mx-2'></FaHome> Home</NavLink> </li>


                        </> : isHr?<>
<li> <NavLink to="/dashboard/allemployee" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-xl flex bg-purple-600 text-white p-4" : "p-4 text-xl flex"}>  <FaHome className='flex justify-center items-center mt-1 mx-2'></FaHome>  All Employee</NavLink></li> 
<li> <NavLink to="/dashboard/worksheet" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active flex text-xl bg-purple-600 text-white p-4" : "p-4 text-xl flex"}> <FaCalendar className='flex justify-center items-center mt-1 mx-2'></FaCalendar>Progress</NavLink></li> 
<div className="divider"></div>
                            <li><NavLink className="flex text-xl  items-center mt-1 mx-2" to="/"><FaHome className='mx-2'></FaHome> Home</NavLink> </li>

               
                            </>
                               
                       : <> blank  </>
                    } */}
                    {isAdmin? <> 
                        <li> <NavLink to="/dashboard/verifiedemployee" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-xl flex bg-purple-600 text-white p-4" : "p-4 text-lg flex"}>  <FaList className='flex justify-center items-center mt-1 mx-2'></FaList> Hr & Verified employee</NavLink></li> 
                    </>:<> blank</>

                    }
             
                           <li>home</li>
                   
                  
                </ul>
            </div>
           
           
            <div className='flex-1'> <Outlet></Outlet> </div>
        </div>
           
        </div>
      
    );
};

export default Dashboard;

//  :isEmployee? <>
// <li> <NavLink to="/dashboard/paymenthistory" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-xl flex bg-purple-600 text-white p-4" : "p-4 text-xl flex"}>  <FaHome className='flex justify-center items-center mt-1 mx-2'></FaHome>  Payment History</NavLink></li> 
// <li> <NavLink to="/dashboard/worksheet" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active flex text-xl bg-purple-600 text-white p-4" : "p-4 text-xl flex"}> <FaCalendar className='flex justify-center items-center mt-1 mx-2'></FaCalendar>WorkSheet</NavLink></li> 
// <div className="divider"></div>
//                             <li><NavLink className="flex text-xl  items-center mt-1 mx-2" to="/"><FaHome className='mx-2'></FaHome> Home</NavLink> </li>

//                         </> 