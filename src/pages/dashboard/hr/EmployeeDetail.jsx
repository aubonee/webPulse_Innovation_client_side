import React from 'react';

import { useLoaderData } from 'react-router-dom';

const EmployeeDetail = () => {
   // const axiosSecure =useAxiosSecure();
    const {name,image, designation,_id} = useLoaderData();
    
    return (

        <div>
            {/* Employee Detail
           <h2>{name}</h2> 
           <img src={image} alt="" />
           <p></p> */}
           <div>
           <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{designation}</p>
   
  </div>
</div>
           </div>
        </div>
    );
};

export default EmployeeDetail;