import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';

const AllEmployee = () => {
    const axiosSecure =useAxiosSecure();
    const { data:users=[] ,}=useQuery({
        //refetch
        queryKey:['users'],
        queryFn:async ()=>{
            const res =await axiosSecure.get('/users');
            return res.data

        }
    })
    return (
        <div>
             <div className='flex justify-evenly my-4 text-center'>
            <h2 className='text-3xl'>All Users</h2>
                <h2 className='text-3xl'>Total Users : {users.length}</h2>
            </div>
        </div>
    );
};

export default AllEmployee;