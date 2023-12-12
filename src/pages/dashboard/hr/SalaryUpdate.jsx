import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';
import Swal from 'sweetalert2';

const SalaryUpdate = () => {
    const {name,image,email, salary,role,_id} = useLoaderData();
    const { register, handleSubmit } = useForm();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        const updatedSalary = {
           salary: data.salary
        };

        try {
            const salaryRes = await axiosSecure.patch(`/salaryUpdate/${_id}`, updatedSalary);
            console.log(salaryRes.data);

            if (salaryRes.data.modifiedCount > 0) {
                // show success popup
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `salary updated for theis user.`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            console.error("Error updating salary:", error);
        }
    };
    
    return (
        <div className='w-full flex  flex-col pt-5 jusify-center items-center'>
            <div className="card w-[400px] bg-base-100 shadow-xl">
  <figure className="px-10 pt-10 rounded-full">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{email}</p>
    <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className=" flex r">
                 

                        
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Salary</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={salary}
                                
                                {...register('salary', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* recipe details */}
                   

                    <button className="btn">
                        Update Salary
                    </button>
                </form>
  </div>
</div>
          
        </div>
    );
};

export default SalaryUpdate;