import React from 'react';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const VerifiedEmployee = () => {
    const axiosSecure =useAxiosSecure();
  
    const { data:users=[] , refetch}=useQuery({
        //refetch
        queryKey:['users'],
        queryFn:async ()=>{
            const res =await axiosSecure.get('/users');
            return res.data

        }
    })

    const employees= users.filter(user=> user.role==='employee' && user.isVerified==='verified' );
    const handleMakeHr=employee=>{
        axiosSecure.patch(`/users/hr/${employee._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${employee.name} is HR Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleDeleteUser= employee =>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           
            axiosSecure.delete(`/users/${employee._id}`)
            .then(res=>{
                console.log(res.data);
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });

                }
            })
            }
          });
    }


    
    return (
        <div>
            
            <div>
            <table className="table  w-full mt-5">
    {/* head */}
    <thead>
      <tr>
        <th> # </th>
        <th> Name</th>
        <th>Designation</th>
        <th>Role</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        employees.map((employee,index)=>
        <tr key={employee._id}>
            <td> {index+1} </td>
            <td> {employee.name}</td>
            <td> {employee.designation}</td>
            <td> <button onClick={() => handleMakeHr(employee)} className='btn text-white bg-purple-500'>Make HR</button></td>
            <td><button  onClick={() => handleDeleteUser(employee)} className='btn text-white bg-purple-500'>Fire</button></td>
        </tr>
        )
     } 
    </tbody>
    {/* foot */}
   
    
  </table>
            </div>
        </div>
    );
};

export default VerifiedEmployee;