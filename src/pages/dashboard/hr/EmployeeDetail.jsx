import React from 'react';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';

const EmployeeDetail = () => {
    const axiosSecure =useAxiosSecure();
    const {name, _id} = useLoaderData();
    
    return (

        <div>
            Employee Detail
           <h2>{name}</h2> 
        </div>
    );
};

export default EmployeeDetail;