import React from 'react';

import { useLoaderData } from 'react-router-dom';

const EmployeeDetail = () => {
   // const axiosSecure =useAxiosSecure();
    const {name,image, designation,role,_id} = useLoaderData();
    
    return (

        <div className='p-5 mx-auto mt-5'>
          
           <div>
           <div className="p-5 mx-auto text-white card lg:card-side bg-[#b057a3] max-w-[800px] shadow-xl">
  <figure><img className='h-[200px]' src={image} alt="Album"/></figure>
  <div className="card-body text-xl">
    <p><span className='text-xl font-bold mr-1'>Name:</span>{name}</p>
    <p><span className='text-xl font-bold mr-1'>Role:</span>{role}</p>
    <p> <span className='text-xl font-bold mr-1'>Designation:</span>{designation}</p>
   
  </div>
</div>
           </div>
        </div>
    );
};

export default EmployeeDetail;